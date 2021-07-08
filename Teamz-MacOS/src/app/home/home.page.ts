import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // id leagues
  idPremier = 237;
  england = 42;
  //////////////
  idChampions = 3;
  /////////////
  idLiga = 538;
  spain = 113;
  ////////////
  idEuropa = 7;

  // Query for the toggle that is used to change between themes
  toggle;
  prefersDark;

  constructor(public router: Router, public toastController: ToastController) {}

  ionViewDidEnter(){
    // Query for the toggle that is used to change between themes
    
    // this.toggle = document.querySelector('#themeToggle');

    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
      
    /*
    this.toggle.addEventListener('ionChange', (ev) => {
        console.log("Ion change!");
        document.body.classList.toggle('dark', ev.detail.checked);
      });
      */

      //this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      // Listen for changes to the prefers-color-scheme media query
      // this.prefersDark.addListener((e) => this.checkToggle(e.matches));
  }

  // Called when the app loads
  loadApp() {
    this.checkToggle(this.prefersDark.matches);
  }

  // Called by the media query to check/uncheck the toggle
  checkToggle(shouldCheck) {
    this.toggle.checked = shouldCheck;
  }

  individual(){
    
  }

  goToPage(id, country){
   // this.router.navigate(['/individual-league'], {queryParams: { league: id, countryid: country } })
   this.router.navigate(['/individual-league/' + id], {queryParams: { league: id, countryid: country } })
  }

  async notAvalaible(){
      const toast = await this.toastController.create({
        message: 'Esta liga no esta disponible.',
        duration: 2000
      });
      toast.present();
  }


}
