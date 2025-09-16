import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { trackingReducer } from './store/reducer';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AnimatedComponent } from './animated/animated.component';
import { TrackClickDirective } from './track-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AnimatedComponent,
    TrackClickDirective
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ tracking: trackingReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }