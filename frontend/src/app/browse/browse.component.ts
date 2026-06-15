import { Component } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  scrapItems = [
    {
      id: 1,
      name: '20 lbs of Metal Sheets',
      location: 'New York',
      price: '$50',
      image: 'assets/metalsheets.jpeg'
    },
    {
      id: 2,
      name: 'Used Electronics for Parts',
      location: 'San Francisco',
      price: 'Negotiable',
      // image: 'assets/used.jpeg'
      image: 'https://via.placeholder.com/250'
    },
    {
      id: 3,
      name: 'Recycled Plastic Bottles',
      location: 'Chicago',
      price: '$30',
      // image: 'assets/used.jpeg'
      image: 'https://via.placeholder.com/250'
    },
    {
      id: 4,
      name: 'Scrap Paper Bundles',
      location: 'Miami',
      price: '$15',
      image: 'https://via.placeholder.com/250'
    }
    // Add more items as needed
  ];
}


