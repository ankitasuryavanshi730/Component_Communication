import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-components',
  templateUrl: './child-components.component.html',
  styleUrls: ['./child-components.component.css']
})
export class ChildComponentsComponent {

  @Input() username:any;

putmsg:any = "";


@Output() messagechanged = new EventEmitter<string>();

textchange(){
  this.messagechanged.emit(this.putmsg)
}



}
