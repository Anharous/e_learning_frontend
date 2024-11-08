import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  logoPath: string = 'public/images/connect.webp';
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getHomeData()
      .then((data) => {
        console.log('Fetched home data:', data); // Logs the fetched data
      })
      .catch((error) => {
        console.error('Error fetching home data:', error);
      });
  }
  
}
