import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Player } from 'src/models/player.model';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-ranking',
  templateUrl: 'ranking.page.html',
  styleUrls: ['ranking.page.scss'],
})
export class RankingPage implements OnInit {
  players: Player[] = [];
  podiumIndex = [1, 0, 2];
  podiumColors = ['gold', 'silver', 'saddlebrown'];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService
      .getPlayers()
      .pipe(
        map((players: Player[]) =>
          players.sort((a, b) =>
            a.points === undefined || b.points === undefined
              ? 1
              : b.points - a.points
          )
        ),
        tap((players: Player[]) => (this.players = players))
      )
      .subscribe();
  }
}
