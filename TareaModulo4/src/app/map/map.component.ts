import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

interface TrackingState {
  tags: { [key: string]: number };
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  mapboxAccessToken = environment.mapboxAccessToken;
  marker = { lng: -74.5, lat: 40 }; // Coordenadas del marcador
  trackingTags$: Observable<{ [key: string]: number }>;

  constructor(private store: Store<{ tracking: TrackingState }>) {
    this.trackingTags$ = this.store.select('tracking');
  }

  onMarkerClick() {
    alert('¡Marcador clicado!');
  }
}