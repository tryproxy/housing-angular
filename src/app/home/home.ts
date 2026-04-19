import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housinglocation";
import { HousingService } from "../services/housing.service";

@Component({
  selector: "tryproxy-home",
  imports: [HousingLocation],
  template: `
    <div>
      home works!
      <ng-content />

      <section>
        <form>
          <input type="text" [placeholder]="placeholder_1" />
          <button class="primary" type="button">Search</button>
        </form>
      </section>
      <section class="results">
        <!-- <tryproxy-housing-location [housingLocation]='housingLocation' /> -->
        @for (house of houseList; track house.id) {
          <tryproxy-housing-location [housingLocation]="house" />
        }
      </section>
    </div>
  `,
  styleUrl: "home.scss",
})
export class Home {
  readonly placeholder_1 = "Filter by City";
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  // housingLocation: HousingLocationInfo = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.baseUrl}/example-house.jpg`,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };
  private housingService = inject(HousingService);

  houseList = this.housingService.houseList();
}
