import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LocationService } from 'src/app/services/location.service';
import { MapboxService } from 'src/app/services/mapbox.service';
import { config } from 'src/app/utlt/config';

@Component({
  selector: 'app-load-location',
  templateUrl: './load-location.component.html',
  styleUrls: ['./load-location.component.scss'],
})
export class LoadLocationComponent implements AfterViewInit {
  map: mapboxgl.Map | undefined;
  currentMarker: mapboxgl.Marker | null = null;

  @ViewChild('location') loadLocation: any;

  constructor(
    private locationService: LocationService,
    private mapboxService: MapboxService
  ) {
    (mapboxgl as any).accessToken = config.mapbox.accessToken;
  }

  ngAfterViewInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.map = new mapboxgl.Map({
      container: 'start',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [90.42488, 23.76495],
      zoom: 10,
    });

    this.locationService.getStartLocation().subscribe((data: any) => {
      this.addMarker(data.coordinates);
      (this.map as any).setCenter(data.coordinates);
    });

    this.map.on('click', (e) => {
      const coordinates = e.lngLat;
      this.addMarker(coordinates);
      this.setLocation(coordinates);
    });
  }

  addMarker(coordinates: mapboxgl.LngLat) {
    if (this.map) {
      if (this.currentMarker) {
        this.currentMarker.remove();
      }
      this.currentMarker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(this.map);
    }
  }

  setLocation(cordinates: mapboxgl.LngLat) {
    const { lng, lat } = cordinates;
    this.mapboxService.getLocationData(lng, lat).subscribe((data: any) => {
      const placeName = data.features[0].place_name;
      this.locationService.setStartLocation({
        coordinates: [lng, lat],
        placeName: placeName,
      });
    });
  }
}
