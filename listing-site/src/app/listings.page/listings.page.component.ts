import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';


@Component({
  selector: 'app-listings.page',
  imports: [],
  templateUrl: './listings.page.component.html',
  styleUrl: './listings.page.component.css'
})
export class ListingsPageComponent {
  listings: Listing[] = []

  constructor() { }

  ngOnInit(): void {
    this.listings = fakeListings;
  }



}
