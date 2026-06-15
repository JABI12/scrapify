import { Component } from '@angular/core';

@Component({
  selector: 'app-pickup-request',
  templateUrl: './pickup-request.component.html',
  styleUrl: './pickup-request.component.css'
})
export class PickupRequestComponent {

  submitPickupRequest() {
    alert('Your pickup request has been submitted successfully!');
    console.log('Pickup request submitted.');
    // Here you can add more logic to save the form data to a backend server
}
}
