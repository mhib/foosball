
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { TournamentModel } from '../../models/tournament-model';
import { ENV } from '@app/env'
import { TokenProvider } from '../token/token';

@Injectable()
export class TournamentsProvider {

  data: Array<any>=[];
  endpoint: string;

  constructor(public http: Http, public tokenProvider: TokenProvider) {
    this.endpoint = `${ENV.API_URL}/tournaments.json`
  }

  load(params={}) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.endpoint}`, this.tokenProvider.requestOptions())
        .map(res => res.json())
        .subscribe(data => {
          this.data = [];
          for (let row of data) {
            this.data.push(
              new TournamentModel(row.id, row.name)
            )
          }
          resolve(this.data);
        }, err => reject(err));
    });
  }

}
