import { Component } from '@angular/core';

@Component({
  selector: 'app-join-community',
  templateUrl: './join-community.component.html',
  styleUrl: './join-community.component.css'
})
export class JoinCommunityComponent {

  submitJoinRequest() {
    alert('Thank you for joining the Scrapify community!');
    // Additional logic to save data to a backend server can be added here
}

}
