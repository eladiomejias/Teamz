import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.page.html',
  styleUrls: ['./top-scorers.page.scss'],
})
export class TopScorersPage implements OnInit {

  presentLoading;
  id;
  responseData;
  league;
  season;
  columns2;
  scorers;

  constructor(private dataService: DataService, private activatedRouter: ActivatedRoute, private router: Router, private loadingController: LoadingController) {

    this.activatedRouter.queryParams.subscribe( params => {
      //this.presentLoading();
      this.id = parseInt(params['season']);
      /*
      console.log(this.id);
      console.log(this.countryId);
      */

      // Getting the data on the service
      this.dataService.getScorers(this.id).subscribe(response => {
        //this.responseData = response["data"][0];
        this.responseData = response["data"];
        this.scorers = response["data"];
        console.log(this.responseData);       
      });


    });

  }


  ngOnInit() {
  }


  ngAfterViewInit(){
    this.columns2 = [
      {
        //prop: "position", //name: 'Pos'//, width: 100
        prop: "pos",
        name: "Pos",
        width: 15
      },
      {
        prop: "player.player_name",
        name: "Nombre",
        width: 300
      },
      {
        prop: "goals.overall",
        name: "N. Goles",
        width: 100
      },
      {
        prop: "team.team_name",
        name: "Equipo"
      },
      {
        prop: "goals.away",
        name: "Goles Vis.",
        width: 80
      },
      {
        prop: "goals.home",
        name: "Goles Local",
        width: 80
      },
      {
        prop: "matches_played",
        name: "Cant. Partidos",
        width: 80
      }
      /*{
     /* {
        cellTemplate: this.templateName, name: 'Nombre', width: 270      },
      { */
        //name: 'Points'
        /*prop: "points", 
        name: 'PTS', 
        width: 75*/
      /*},
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
        prop: "dg", name: "DG", width: 30
      }*/

    ]
  }

}
