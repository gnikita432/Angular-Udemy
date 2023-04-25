import { Component } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  // styleUrls: ['./userdetails.component.css']

  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class UserdetailsComponent {
  userName= '';
  isUserNameAdded: boolean = false;
  message='';
  users =['user1',' user2'];

  status: string = '';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onAdd(){
    this.users.push(this.userName);
    this.message = 'User Created Name' + this.userName + 'their status is' + this.status;
  }

  getColor() {
    return this.status == 'online' ? 'green' : 'red';
  }

  onReset() {
    this.userName = '';
  }
}
