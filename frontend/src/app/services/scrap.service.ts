import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ScrapItem {
  id: number;
  name: string;
  location: string;
  price: string;
  description: string;
  image: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScrapService {
  private apiUrl = 'http://localhost:3000/api/scrap';
  private itemsSubject = new BehaviorSubject<ScrapItem[]>([]);

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  /**
   * Fetch initial list of items from backend API.
   */
  private loadInitialData(): void {
    this.http.get<ScrapItem[]>(this.apiUrl).subscribe({
      next: (items) => {
        this.itemsSubject.next(items);
      },
      error: (err) => {
        console.error('Failed to load listings from backend:', err);
      }
    });
  }

  /**
   * Get an Observable of the scrap items.
   */
  getItems(): Observable<ScrapItem[]> {
    return this.itemsSubject.asObservable();
  }

  /**
   * Add a new scrap item to the backend.
   */
  addItem(item: Omit<ScrapItem, 'id' | 'image'>): void {
    this.http.post<ScrapItem>(this.apiUrl, item).subscribe({
      next: (newItem) => {
        const currentItems = this.itemsSubject.getValue();
        this.itemsSubject.next([newItem, ...currentItems]);
      },
      error: (err) => {
        console.error('Failed to add listing to backend:', err);
        alert('Error publishing listing. Please check backend status.');
      }
    });
  }
}
