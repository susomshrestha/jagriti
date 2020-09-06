import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from './main.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    RouterModule
  ]
})
export class MainModule { }
