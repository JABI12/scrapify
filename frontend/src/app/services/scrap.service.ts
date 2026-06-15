import { Injectable } from '@angular/core';
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
  private initialItems: ScrapItem[] = [
    {
      id: 1,
      name: '20 lbs of Metal Sheets',
      location: 'New York',
      price: '$50',
      description: 'Durable and clean metal sheets suitable for construction, manufacturing or upcycling DIY projects.',
      image: 'assets/metalsheets.jpeg',
      type: 'metal'
    },
    {
      id: 2,
      name: 'Used Electronics for Parts',
      location: 'San Francisco',
      price: 'Negotiable',
      description: 'Various electronics boards, capacitors, and hardware items. Perfect for electronic hobbyists or scrap salvage.',
      image: 'assets/used.jpeg',
      type: 'electronic'
    },
    {
      id: 3,
      name: 'Recycled Plastic Bottles',
      location: 'Chicago',
      price: '$30',
      description: 'A batch of sorted, clean, compressed PET plastic bottles ready for direct material processing or recycling factories.',
      image: 'assets/used.jpeg',
      type: 'plastic'
    },
    {
      id: 4,
      name: 'Scrap Paper Bundles',
      location: 'Miami',
      price: '$15',
      description: 'Bundles of compressed cardboard and dry clean newsprint. Extremely easy to recycle or repurpose.',
      image: 'assets/metalsheets.jpeg',
      type: 'paper'
    }
  ];

  private itemsSubject: BehaviorSubject<ScrapItem[]> = new BehaviorSubject<ScrapItem[]>(this.initialItems);

  constructor() {}

  /**
   * Get an Observable of all scrap items.
   */
  getItems(): Observable<ScrapItem[]> {
    return this.itemsSubject.asObservable();
  }

  /**
   * Add a new scrap item dynamically.
   */
  addItem(item: Omit<ScrapItem, 'id' | 'image'>): void {
    const currentItems = this.itemsSubject.getValue();
    const nextId = currentItems.length > 0 ? Math.max(...currentItems.map(i => i.id)) + 1 : 1;
    
    // Choose appropriate image based on type or use fallback
    let imagePath = 'assets/used.jpeg';
    if (item.type === 'metal') {
      imagePath = 'assets/metalsheets.jpeg';
    } else if (item.type === 'electronic') {
      imagePath = 'assets/used.jpeg';
    } else if (item.type === 'plastic') {
      imagePath = 'assets/used.jpeg';
    } else if (item.type === 'paper') {
      imagePath = 'assets/metalsheets.jpeg';
    }

    const newItem: ScrapItem = {
      ...item,
      id: nextId,
      image: imagePath
    };

    this.itemsSubject.next([newItem, ...currentItems]);
  }
}
