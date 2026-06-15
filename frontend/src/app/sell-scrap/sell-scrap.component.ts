import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell-scrap',
  templateUrl: './sell-scrap.component.html',
  styleUrls: ['./sell-scrap.component.css']
})
export class SellScrapComponent implements OnInit {
  sellScrapForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.sellScrapForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]], // Example: $50.00
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.sellScrapForm.valid) {
      // Here you can handle the form submission
      console.log('Form Data:', this.sellScrapForm.value);
      // You can send this data to your backend or store it as needed

    } else {
      // Handle form errors
      console.log('Form is not valid');
    }
  }
}
