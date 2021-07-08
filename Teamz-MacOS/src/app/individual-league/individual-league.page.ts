import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-individual-league',
  templateUrl: './individual-league.page.html',
  styleUrls: ['./individual-league.page.scss'],
})
export class IndividualLeaguePage implements OnInit {
  @ViewChild('templateName') templateName: TemplateRef<any>;
  responseData;
  leagueId; season;
  id;
  league: any;
  countryId;
  standings;
  allTeams;
  standingsInfoTeam = [];

  standingsInfo = [];
  columns2 = [];
  loading;

  

  constructor(private dataService: DataService, private activatedRouter: ActivatedRoute, private router: Router, private loadingController: LoadingController) { 

    // Get the ID reference of the season
    //this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.activatedRouter.queryParams.subscribe( params => {
      this.presentLoading();
      this.id = parseInt(params['league']);
      this.countryId = parseInt(params['countryid']);
      /*
      console.log(this.id);
      console.log(this.countryId);
      */
      // Getting the data on the service
      this.dataService.getSeasonsById(this.id).subscribe(response => {
        //console.log(response);
        this.responseData = response["data"][0];
        this.league = this.responseData.league;
        this.season = this.responseData.season_id;

        this.getTeams();
        this.addItemsTable();
        
        //this.getMatches();
      });
      }
    )
  }

  ngOnInit() {}

  ngAfterViewInit(){
    this.columns2 = [
      {
        prop: "position", //name: 'Pos'//, width: 100
        name: "N",
        width: 15
      },
      {
        cellTemplate: this.templateName, name: 'Nombre', width: 270      },
      {
        //name: 'Points'
        prop: "points", name: 'PTS', width: 75
      },
      {
        prop: "pj", name: 'PJ', width: 30
      },
      {
        prop: "g", name: "G", width: 30
      },
      {
        prop: "e", name: "E", width: 30
      },
      {
        prop: "p", name: "P", width: 30
      },
      {
        prop: "dg", name: "DG", width: 50
      }
    ]
  }

  ionViewDidEnter(){

  }

  // getting matches list
  getMatches(){
    this.dataService.getMatchesBySeason(this.season).subscribe(response => {
      const myData = response["data"];
      //console.log(myData);
    });
  }

  // getting standings
  getStandings(){
    this.dataService.getLeagueStanding(this.season).subscribe(response => {
      const myData = response;
      this.standings = response["data"]["standings"];
      //console.log("Standings: ");
      //console.log(this.standings);
      this.standings.sort(function(a, b) {
        return a.points - b.points || a["overall"].goals_diff - b["overall"].goals_diff;
      });
      this.standings = this.standings.reverse();
      this.getTeamsOnStandings();
    })
  }

  // getting all teams on array
  getTeams(){
    this.dataService.getTeams(this.countryId).subscribe(response =>{
      const myData = response["data"];
      this.allTeams = myData;
      //console.log("Teams")
      //console.log(myData);
      this.getStandings();
    })

  }

  // getting teams on standings - correctly array
  getTeamsOnStandings(){
    //console.log("The standings that are getting by");
    //console.log(this.standings);
    for (let index = 0; index < this.standings.length; index++) {
      //console.log(this.standings[index]);
      this.searchTeam(this.standings[index].team_id);
    }
    this.addItemsTable();
  }

  // search individual teams if they match store in a new array
  searchTeam(idTeam){
    //console.log("Searching terms");
    for (let index = 0; index < this.allTeams.length; index++) {
      //console.log(this.allTeams[index].team_id);
      //console.log(idTeam);
      if(idTeam == this.allTeams[index].team_id){
        //console.log(this.allTeams[index]);
       this.standingsInfo.push(this.allTeams[index]);
       this.standingsInfoTeam.push(this.allTeams[index]);
      }
    }
    //this.standingsInfoTeam = standingsInfo;
    //console.log("Push final array")
    //console.log(this.standingsInfoTeam);
  }

  // Visually add all the items to 
  addItemsTable(){
    for (let index = 0; index < this.standings.length; index++) {
       this.standings[index]["team_info"] = this.standingsInfoTeam[index];
       this.standings[index]["position"] = index + 1;
       //this.standings[index]["nombre"] = "Ea";
       //this.standings[index][""]
       this.standings[index]["nombre"] = this.standings[index]["team_info"].name;
       this.standings[index]["pj"] = this.standings[index].overall.games_played;
       this.standings[index]["g"] = this.standings[index].overall.won;
       this.standings[index]["e"] = this.standings[index].overall.draw;
       this.standings[index]["p"] = this.standings[index].overall.lost;
       this.standings[index]["dg"] = this.standings[index].overall.goals_diff;
    
   }

   this.loading.dismiss();

  }

  goToAnotherPage(e){
    if(e.type == 'click') {}
  }

  matches(){
    //console.log(this.id);
    this.router.navigate(['/matches-league'], {queryParams: { league: this.id } });
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'loader-class',
      message: 'Cargando datos de la liga',
    });
    await this.loading.present();
  }

  scorers(){
    this.router.navigate(['/top-scorers'], {queryParams: { season: this.season } });
  }

  
}
