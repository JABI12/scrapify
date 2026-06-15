import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrapService, ScrapItem } from '../services/scrap.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnDestroy {
  allScrapItems: ScrapItem[] = [];
  scrapItems: ScrapItem[] = []; // holds the filtered items shown in UI

  selectedType: string = 'all';
  searchLocation: string = '';

  private scrapSubscription?: Subscription;

  // Selected item for details modal
  selectedItemForDetails: ScrapItem | null = null;

  constructor(private scrapService: ScrapService) {}

  ngOnInit(): void {
    // Subscribe to in-memory scrap items list
    this.scrapSubscription = this.scrapService.getItems().subscribe(items => {
      this.allScrapItems = items;
      this.applyFilters();
    });
  }

  ngOnDestroy(): void {
    if (this.scrapSubscription) {
      this.scrapSubscription.unsubscribe();
    }
  }

  /**
   * Filter items based on selected material type and location text search.
   */
  applyFilters(): void {
    this.scrapItems = this.allScrapItems.filter(item => {
      const matchesType = this.selectedType === 'all' || item.type === this.selectedType;
      
      const itemLocation = item.location.toLowerCase();
      const searchVal = this.searchLocation.trim().toLowerCase();
      const matchesLocation = !searchVal || itemLocation.includes(searchVal);

      return matchesType && matchesLocation;
    });
  }

  /**
   * Open details modal/card overlay
   */
  viewDetails(item: ScrapItem, event: Event): void {
    event.preventDefault();
    this.selectedItemForDetails = item;
  }

  /**
   * Close details modal
   */
  closeDetails(): void {
    this.selectedItemForDetails = null;
  }
}
