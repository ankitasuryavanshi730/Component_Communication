import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component-Communication';

  name = "Ankita";


  ankita:any = "";


  putmsg = " ";

  receivedmsg(msg:string){

  this.putmsg = msg;

  }
}





