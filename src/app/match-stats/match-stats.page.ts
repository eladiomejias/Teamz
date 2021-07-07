import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-match-stats',
  templateUrl: './match-stats.page.html',
  styleUrls: ['./match-stats.page.scss'],
})
export class MatchStatsPage implements OnInit {

  // variables init
  match_id = 157791;
  away_id = 0;
  home_id = 0;
  data: any;
  dataReceived = false;
  loading: any;

  constructor(public dataService: DataService, private route: Router, private activatedRoute: ActivatedRoute, private zone: NgZone, private changeRef: ChangeDetectorRef, private loadingController: LoadingController) { 

    this.presentLoading();
    
    this.activatedRoute.queryParams.subscribe(params => {
      this.match_id = params['id'];
      this.dataService.getMatchID(this.match_id).subscribe(response => {
          this.data = response["data"];
          console.log(this.data);
          this.away_id = this.data["away_team"].team_id;
          this.home_id = this.data["home_team"].team_id;
          this.order();
          this.dataReceived = true;
          this.changeRef.detectChanges();
          this.loading.dismiss();
      });
    });

    /*this.activatedRoute.queryParams.subscribe(params => {
        this.data = JSON.parse(params['data']);
        //console.log(JSON.parse(this.data));
        //console.log(JSON.stringify(this.data));
        this.away_id = this.data.away_team.team_id;
        this.home_id = this.data.home_team.team_id;
        this.order();
    });*/

  }

  ngOnInit() {}

  ionViewWillEnter(){
    this.dataService.getMatchID(this.match_id).subscribe(response => {
      this.data = response["data"];
      console.log(this.data);
      if(this.data.length > 0){
      this.away_id = this.data["away_team"].team_id;
      this.home_id = this.data["home_team"].team_id;
      this.order();
      }
    });
  }	

  order(){
    for (let index = 0; index < this.data.lineups.length; index++) {
        if(this.data.lineups[index].team_id == this.home_id){
            this.data.lineups[index]["team_info"] = this.data.home_team;
        }else if(this.data.lineups[index].team_id == this.away_id){
            this.data.lineups[index]["team_info"] = this.data.away_team;
        }
    }
    console.log(this.data);
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'loader-class',
      message: 'Cargando datos',
    });
    await this.loading.present();
  }

  update(){
    if(this.data.status != "finished"){
    console.log("updating!");
    this.activatedRoute.queryParams.subscribe(params => {
      this.match_id = params['id'];
      this.dataService.getMatchID(this.match_id).subscribe(response => {
          this.data = response["data"];
          console.log(this.data);
          this.away_id = this.data["away_team"].team_id;
          this.home_id = this.data["home_team"].team_id;
          this.order();
          this.dataReceived = true;
          this.changeRef.detectChanges();
          this.loading.dismiss();
      });
    });
    }else{
      console.log("can't update, the match is finished.")
    }
  }


}
