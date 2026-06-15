import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pickup-request',
  templateUrl: './pickup-request.component.html',
  styleUrls: ['./pickup-request.component.css']
})
export class PickupRequestComponent {

  constructor(private http: HttpClient) {}

  submitPickupRequest(form: any) {
    if (form.valid) {
      const pickupData = form.value;
      
      this.http.post('http://localhost:3000/api/pickups', pickupData).subscribe({
        next: (response) => {
          console.log('Pickup request saved:', response);
          alert('Your pickup request has been submitted successfully and recorded!');
          form.resetForm();
        },
        error: (err) => {
          console.error('Failed to submit pickup request:', err);
          alert('Failed to submit pickup request. Please check if the backend is running.');
        }
      });
    }
  }
}
