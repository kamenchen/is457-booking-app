import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingService } from './booking-service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: false,
})
export class BookingPage {
  loadedBookings: Booking[];
  constructor(private bookingService: BookingService) { }

  //update page with new data input 
  ionViewWillEnter() {
    this.loadedBookings = this.bookingService.booking;
    console.log(this.loadedBookings);
  }
  //delete booked item
  onRemoveBooking(bookingId: string) {
    this.bookingService.removeBooking(bookingId);
    this.loadedBookings = this.bookingService.booking;
  }
}
