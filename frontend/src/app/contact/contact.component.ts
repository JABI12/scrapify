import { Component } from '@angular/core';

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

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Contact form submitted:', this.contactData);
      alert(`Thank you, ${this.contactData.name}! Your message has been sent successfully.`);
      form.resetForm();
      this.contactData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
