import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor() {}

  async getHomeData(): Promise<string> {
    try {
      const response = await fetch('http://localhost:8081/api/home');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
}
