import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrapService } from '../services/scrap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-scrap',
  templateUrl: './sell-scrap.component.html',
  styleUrls: ['./sell-scrap.component.css']
})
export class SellScrapComponent implements OnInit {
  sellScrapForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private scrapService: ScrapService,
    private router: Router
  ) {
    // Initialize the form with type control as well
    this.sellScrapForm = this.fb.group({
      name: ['', Validators.required],
      type: ['metal', Validators.required],
      location: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\$?(\d+(\.\d{1,2})?|\d+\s*negotiable|\w+)$/i)]], // Accepts numbers or words like Negotiable
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.sellScrapForm.valid) {
      const formVal = this.sellScrapForm.value;
      
      // Call service to add listing to in-memory state
      this.scrapService.addItem({
        name: formVal.name,
        type: formVal.type,
        location: formVal.location,
        price: formVal.price.startsWith('$') || isNaN(Number(formVal.price)) ? formVal.price : `$${formVal.price}`,
        description: formVal.description
      });

      alert('Scrap listing created successfully!');
      
      // Navigate to browse listings
      this.router.navigate(['/browse']);
    } else {
      console.log('Form is not valid');
    }
  }
}
