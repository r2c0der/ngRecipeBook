/**
 * Created by Rayvn on 7/3/2017.
 */
import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector:'project-header',
  templateUrl:"./project-header.component.html",
  styles:[` 

    .navbar{
      margin-top:5em;
      padding:0;
    }
    
    .rkmNavLeft li a{
      color:green;
      font-size:1.25em;
    }
    .rkmNavLeft li a:hover{
      color:#cc0066;
      text-decoration:underline;
      text-decoration-style: solid;
    }
    
   .rkmNavRight li a{
     color:#222222;
     font-size:1.50em;
   }
   
   .rkmNavRight li a:hover{
     color:green;
     text-decoration:underline;
   }
    .brandTitle{
      font-family:'Delius', cursive;
      font-weight:bolder;
      font-size:1.75em;
      color:#cc0066;
    }
    
    .recipeCover{
      margin-bottom: 2em;
    }
  
    .fakeLink{
     cursor: pointer;
    }

   
    .rkmapp_manageapp_dropdown:hover{
      text-decoration:none !important;
      color:hotpink !important;
    }
  `]

})

export class ProjectHeaderComponent{

  item:string = "";
  @Output() itemSelected = new EventEmitter<string>();

  onSelect(selectedItem: string){
    this.itemSelected.emit(selectedItem);
  }


}

