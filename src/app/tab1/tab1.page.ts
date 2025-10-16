import { Component, OnInit } from '@angular/core';
import { Place } from './place.model';
import { PlaceService } from './place-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  loadedPlaces: Place[];
  constructor(private placeService: PlaceService) {}
  //updates on refresh
  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
    console.log(this.loadedPlaces);
  };
  //dynamically updates
  ionViewWillEnter() {
    this.loadedPlaces = this.placeService.places;
    console.log(this.loadedPlaces);
  }
}
