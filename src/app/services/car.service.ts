import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  // Update the apiUrl to use the relative path for proxy
  apiUrl: string = '/api/CarRentalApp/';

  constructor(private http: HttpClient) { }

  getAllCars() {
    return this.http.get(`${this.apiUrl}GetCars`);
  }

  createCar(obj: any) {
    return this.http.post(`${this.apiUrl}CreateNewCar`, obj);
  }

  updateCar(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateCar`, obj);
  }

  deleteCar(carId: any) {
    return this.http.delete(`${this.apiUrl}DeleteCarbyCarId?carid=${carId}`);
  }

  getAllBooking() {
    return this.http.get(`${this.apiUrl}geAllBookings`);
  }

  createBooking(obj: any) {
    return this.http.post(`${this.apiUrl}CreateNewBooking`, obj);
  }
}
