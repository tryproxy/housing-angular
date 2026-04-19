import { Component, DestroyRef, inject, signal } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { HousingService } from "../services/housing.service";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housinglocation";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "tryproxy-details",
  imports: [RouterLink],
  template: `
    @if (housingLocation; as location) {
      <article>
        <img
          class="listing-photo"
          [src]="location.photo"
          [alt]="'Exterior photo of ' + location.name"
          crossorigin
        />

        <section class="listing-description">
          <h2 class="listing-heading">{{ location.name }}</h2>
          <p class="listing-location">
            {{ location.city }}, {{ location.state }}
          </p>
        </section>

        <section class="listing-features">
          <h2 class="section-heading">About this housing location</h2>
          <ul>
            <li>Units available: {{ location.availableUnits }}</li>
            <li>Does this location have wifi: {{ location.wifi }}</li>
            <li>Does this location have laundry: {{ location.laundry }}</li>
          </ul>
        </section>

        @if (nextId !== null) {
          <a [routerLink]="['/details', nextId]">Next</a>
        }
      </article>
    }
  `,
  styleUrl: `details.component.css`,
})
export class DetailsComponent {
  private route = inject(ActivatedRoute);
  private housingService = inject(HousingService);
  private destroyRef = inject(DestroyRef);
  nextId: number | null = null;
  public housingLocation: HousingLocationInfo | undefined;
  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const id = Number(params.get("id"));
        const list = this.housingService.houseList();
        const index = list.findIndex((item) => item.id === id);

        this.housingLocation = index >= 0 ? list[index] : undefined;
        this.nextId =
          index >= 0 && index < list.length - 1 ? list[index + 1].id : null;
      });
  }
}
