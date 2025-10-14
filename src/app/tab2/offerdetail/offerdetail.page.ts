import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/tab1/place-service';
import { Place } from 'src/app/tab1/place.model';

@Component({
  selector: 'app-offerdetail',
  templateUrl: './offerdetail.page.html',
  styleUrls: ['./offerdetail.page.scss'],
  standalone: false,
})
export class OfferdetailPage implements OnInit {
  place: Place;
  id: string;
  constructor(private route: ActivatedRoute,
    private placeService: PlaceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('placeId');
    this.place = this.placeService.getPlace(this.id);
  }

}
