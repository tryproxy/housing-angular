import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tryproxy-housing-location',
  imports: [RouterLink],
  template: `
  @let houseInfo = housingLocation();
  <section class='listing'>
      <!-- <img [src]='houseInfo.photo'/> -->
      <img  class='listing-photo'
        crossorigin
        [attr.role]='houseInfo.name' src='{{houseInfo.photo}}'/>
      <!-- <p>{{houseInfo.name}}</p> -->
      <h2 class='listing-heading'>{{houseInfo.name}}</h2>
      <p class='listing-location'>{{houseInfo.city}}, {{houseInfo.state}}</p>
      <a [routerLink]='["/details", houseInfo.id]'>More</a>
  </section>
  `,
  styleUrl: 'housing-location.css',
  // styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
