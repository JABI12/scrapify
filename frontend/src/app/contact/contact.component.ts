import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.http.post('http://localhost:3000/api/contacts', this.contactData).subscribe({
        next: (response) => {
          console.log('Contact message saved:', response);
          alert(`Thank you, ${this.contactData.name}! Your message has been sent and recorded.`);
          form.resetForm();
          this.contactData = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
        },
        error: (err) => {
          console.error('Failed to send contact message:', err);
          alert('Failed to send contact message. Please check if the backend is running.');
        }
      });
    }
  }
}
