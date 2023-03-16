import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RankingPage } from './ranking.page';

import { RankingPageRoutingModule } from './ranking-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, RankingPageRoutingModule],
  declarations: [RankingPage],
})
export class RankingPageModule {}
