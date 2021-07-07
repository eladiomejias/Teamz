import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class DataService {

   // id leagues
   idPremier = 237;
   idChampions = 3;
   //idLiga = 538;
   //idEuropa = 7;

   url = "https://app.sportdataapi.com/api/v1/soccer";
   apiKey = "?apikey=a2ce7c70-1b8b-11eb-a7f1-3342bd4e95a4"

  constructor(public http: HttpClient) { }

  getSeasonsById(id){
    //const query = "/seasons/" + id + this.apiKey;
    const query = "/seasons" + this.apiKey + "&league_id=" + id;
    return this.http.get(this.url + query);
  }

  // getting matches by season 
  getMatchesBySeason(season){
    //season = 352
    const selection = "&season_id=" + season;
    const query = "/matches" + this.apiKey + selection;
    return this.http.get(this.url + query);
  }

  // getting standings
  getLeagueStanding(season){
    const selection = "&season_id=" + season;
    const query = "/standings" + this.apiKey + selection;
    return this.http.get(this.url + query);
  }

  // getting teams
  getTeams(country){
    const selection = "&country_id=" + country;
    const query = "/teams" + this.apiKey + selection;
    return this.http.get(this.url + query);
  }

  // getMatchesbyId
  getMatchID(match){
    //const selection = "&match_id=" + match;
    const query = "/matches/" + match + this.apiKey;
    return this.http.get(this.url + query);
  }

  // get scorers
  getScorers(scorerID){
    const selection = "&season_id=" + scorerID;
    const query = "/topscorers" + this.apiKey + selection;
    return this.http.get(this.url + query);
  }

}
