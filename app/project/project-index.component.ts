/**
 * Created by Rayvn on 7/3/2017.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector:'project-index',
  templateUrl:"./project-index.component.html",
    styles:[`
      div.container{
        padding-top: 5em;
      }
      .recipeCover{
        margin-left: 13em;
        width:65%;
      }
    `]

})

export class ProjectIndexComponent{

 @Input() itemSelected;

 item:string = '';


  showItemSelected(selectedItem:string){
       console.log("Link Selected: "+ selectedItem);
      this.item = selectedItem;

  }


}
