import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  @Input('trip') trip: any;

  constructor(
    private router: Router
  ) { }

  private editTrip(trip: Trip): void {
    console.log('Inside TripCardComponent#editTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }
}

