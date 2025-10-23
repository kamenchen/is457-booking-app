import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/tab1/place-service';
import { Place } from 'src/app/tab1/place.model';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.page.html',
  styleUrls: ['./createbooking.page.scss'],
  standalone: false,
})
export class CreatebookingPage implements OnInit {
  id: string;
  place: Place;
  constructor(private route: ActivatedRoute,
    private placeService: PlaceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('placeId');
    this.place = this.placeService.getPlace(this.id);
    console.log(this.id);
    console.log(this.place);
  }

}
