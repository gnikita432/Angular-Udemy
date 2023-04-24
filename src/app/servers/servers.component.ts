import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [' h3{color:red;}'],
})
export class ServersComponent {
  serverId: number = 10;
  serverStatus: string = 'online';

  getServerStatus(){
    return this.serverStatus;
  }


  allowNewServer = false;

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 3000);
  }

  serverAddedStatus : string = 'No Server Added';

  onClickAdd(){
    this.serverAddedStatus = 'New Server Added Successfully'
  }
}
