import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        SwiperModule,
        CommonModule,
        FormsModule
    ]
})
export class HomeModule {

}