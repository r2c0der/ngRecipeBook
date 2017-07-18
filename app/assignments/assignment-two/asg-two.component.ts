/**
 * Created by Rayvn on 7/2/2017.
 */
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl:"./asg-two.component.html" ,
  styles:[`
    .container{
      padding-top:7em;
    }   
    button{
      margin-top:1em;
    }
    h4{
      color:#333333;
      font-family:'Roboto Mono', sans-serif;
      margin-top: 3em;
    }
    label{
      color:darkgreen;
      font-size:1.15;
      font-family:'Roboto Mono', sans-serif;
    }
  `]

})

export class AsgTwoComponent implements OnInit{
      userName:string = '';
      oldUserName:string = '';
      userNameMsg:string = "";
      isUserNameEmpty:boolean = false;


      constructor(){
      }
      ngOnInit(){
        this.setUserName("Clara Belle");
        this.oldUserName = this.getUserName();
        // this.userNameMsg = "Current User Name: " + this.getUserName();

      }

  onUpdateUserName(){

        this.setUserName(this.userName);
        this.userNameMsg = "The old user name was: "+ this.oldUserName+". The new user name: "+ this.getUserName();
   this.oldUserName = this.getUserName();
   this.isUserNameEmpty = false;
  }

  onReset(){
    this.userName = "";
    this.userNameMsg = "";
    this.isUserNameEmpty = true;

  }

  getUserName(){
    return this.userName;
  }

  setUserName(value:string){
    this.userName = value;
  }

}
