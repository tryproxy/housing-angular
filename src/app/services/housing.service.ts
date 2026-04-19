import { Injectable, signal, WritableSignal } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { db } from 'src/assets/db';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private _houseList: WritableSignal<HousingLocationInfo[]> = signal<HousingLocationInfo[]>(db);
  public houseList = this._houseList.asReadonly()

  public getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.houseList().find((location) => location.id === id);
  }

}
