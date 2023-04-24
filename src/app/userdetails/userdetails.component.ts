import { Component } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  userName : String = "";
  isUserNameAdded : boolean = false;

  onReset(){
    this.userName = '';
  }

}
