import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-matches-league',
  templateUrl: './matches-league.page.html',
  styleUrls: ['./matches-league.page.scss'],
})
export class MatchesLeaguePage implements OnInit {

  @ViewChild('iconsTemplate') iconsTemplate: TemplateRef<any>;

  // Assign variables
  id;
  countryId;
  matches = [];
  season;
  loading;
  dateValue;

  // matches variable
  prox_matches = [];
  live_matches = [];
  ended_matches = [];
  upcoming_matches = [];

  // data table variables
  columns = []; // column for the latest matches (finished matches)
  columns2 = []; // column for the upcomings matches
  live = false;


  constructor(private route: Router, private activatedRoute: ActivatedRoute, private dataService: DataService, private changeRef: ChangeDetectorRef, public loadingController: LoadingController) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.presentLoading();
      this.id = parseInt(params['league']);
      this.countryId = parseInt(params['countryid']);
      console.log(this.id);
      this.dataService.getSeasonsById(this.id).subscribe(response => {
        this.season = response["data"][0].season_id;
        //console.log(this.season);
        this.getMatches();
      })
    });

  }

  ngOnInit() {
    this.live_matches = [];
    this.columns = [
      {
        prop: "round", name: "R"
      },
      {
        prop: "home", name: "Local"
      },
      {
        prop: "away_team", name: "Visitante", cellTemplate: this.iconsTemplate
      },
      {
        prop: "date_time", name: "Fecha"
      },
      {
        prop: "result", name: "Marcador"
      }
    ]
  }

  ngAfterViewInit(){
    // Finished
    this.columns = [
      {
        prop: "round", name: "F", width: 27
      },
      {
        prop: "home_team", name: "Local", width: 250
      },
      {
        prop: "away_team", name: "Visitante", width: 250
      },
      {
        prop: "result", name: "Resultado", width: 150
      },
      {
        prop: "date_time", name: "Fecha", width: 300
      }
    ];

    // Upcoming
    this.columns2 = [
      {
        prop: "round", name: "F", width: 27
      },
      {
        prop: "home", name: "Local", width: 250
      },
      {
        prop: "away_team", name: "Visitante", cellTemplate: this.iconsTemplate, width: 250
      },
     /* {
        prop: "result", name: "Marcador"
      }, */
      {
        prop: "date_time", name: "Fecha", width: 300
      }
    ]
  }

  getMatches(){
    this.dataService.getMatchesBySeason(this.season).subscribe(response => {
      this.matches = response["data"];
      console.log(this.matches);
      this.proxMatches();
      //currentMatches();
      //matchHistoryBefore();
      //matchHistoryAfter();
    });
  }

  proxMatches(){
    this.dateValue = this.dateSevenDays();
    let strings = [];

    this.matches.sort(function(a, b){
      return a.status_code - b.status_code;
    });  
    for (let index = 0; index < this.matches.length; index++) {
      //this.matches[index]["real_time"] = new Date(Date.parse(this.matches[index].match_start + ' GMT'));
      //console.log(this.matches[index]["real_time"]);
      if(this.matches[index].status_code == 0 || this.matches[index].status == "notstarted"){
        console.log(this.matches.length);
        // here got 
        // this.prox_matches.push(this.matches[index]);
        // console.log("  " + this.matches[index].match_start.split(" ")[0] + " ");
       if(this.matches[index].match_start.split(" ")[0] <= this.dateValue){
         // console.log("  " + this.matches[index].match_start.split(" ")[0] + " ");
         this.prox_matches.push(this.matches[index]);
       }
      }

      if(this.matches[index].status_code == 1 || this.matches[index].status_code == 11 || this.matches[index].status == "halftime"){
        this.live = true;
        this.live_matches.push(this.matches[index]);
        /*this.live_matches.push({
          home_team: this.matches[index].home_team.name,
          away_team: this.matches[index].away_team.name,
          date_time: this.matches[index].match_start,
          round: this.matches[index].round.name,
          result: this.matches[index].stats.home_score + " - " + this.matches[index].stats.away_score,
          match_id: this.matches[index].match_id,
          away_logo: this.matches[index].away_team.logo,
          home_logo: this.matches[index].home_team.logo
        });*/
      }
      if(this.matches[index].status_code == 3){
        //this.ended_matches.push(this.matches[index]);
        this.ended_matches.push({
          home_team: this.matches[index].home_team.name,
          away_team: this.matches[index].away_team.name,
          date_time: this.matches[index].match_start,
          round: this.matches[index].round.name,
          result: this.matches[index].stats.home_score + " - " + this.matches[index].stats.away_score,
          match_id: this.matches[index].match_id,
          away_logo: this.matches[index].away_team.logo,
          home_logo: this.matches[index].home_team.logo
        });
      }
      if(this.matches[index].status_code == 17){
        //this.upcoming_matches.push(this.matches[index]);
        this.upcoming_matches.push({
          home: this.matches[index].home_team.name,
          away_team: this.matches[index].away_team.name,
          date_time: this.matches[index].match_start,
          round: this.matches[index].round.name,
          result: this.matches[index].stats.home_score + " - " + this.matches[index].stats.away_score,
          match_id: this.matches[index].match_id
        });
      }
    }
    console.log(this.prox_matches);
    console.log(this.ended_matches);
    console.log(this.live_matches);
    this.changeRef.detectChanges();
    this.loading.dismiss();
  }

  changeGMT(date_string){
    return new Date(Date.parse(date_string + ' GMT'))
  }

  goToStats(e){
    //console.log(e.row);
    if(e.type == 'click') {
      this.getMatchID(e);
    }
    //this.route.navigateByUrl(["/match-stats"]);
  }

  getMatchID(e){
    console.log(e.row);
    this.live_matches = [];
    this.prox_matches = [];
    this.upcoming_matches = [];
    this.ended_matches = [];
    this.route.navigate(["/match-stats"], { queryParams: { id: e.row.match_id } });
  }

  goToMatch(matchID){
    this.live_matches = [];
    this.prox_matches = [];
    this.upcoming_matches = [];
    this.ended_matches = []
    this.route.navigate(["/match-stats"], { queryParams: { id: matchID } });
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'loader-class',
      message: 'Cargando datos',
    });
    await this.loading.present();
  }

  dateSevenDays(){
    var myDate = new Date(new Date().setDate(new Date().getDate() + 8))
    var responsed = myDate.toISOString().split("T")[0];
    return responsed;
  }

}
