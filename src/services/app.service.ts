import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Player } from 'src/models/player.model';
import { Result } from 'src/models/result.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http
      .get<ApiResponse<Player[]>>('assets/data/players.json')
      .pipe(
        map((response) => response.data.map((player) => new Player(player)))
      );
  }
}

interface ApiResponse<T> {
  data: T;
}
