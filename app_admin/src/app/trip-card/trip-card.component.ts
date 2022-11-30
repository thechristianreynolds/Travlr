import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  @Input('trip') trip: any;

  private displayTripDeletePopup = false;

  constructor(
    private router: Router,
    private dataService: TripDataService
  ) { }

  private editTrip(trip: Trip): void {
    console.log('Inside TripCardComponent#editTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  private deleteTrip(trip: Trip): void {
    console.log('Inside TripCardComponent#deleteTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    console.log(trip.code);
    this.dataService.deleteTrip(localStorage.getItem("tripCode"))
      .then(trip => {
        console.log(trip);
        window.location.reload();
      });
  }

  private showDeleteTripPopup(options: boolean): void {
    if (options === true) {
      this.displayTripDeletePopup = true;
    } else {
      this.displayTripDeletePopup = false;
    }
  }
}

