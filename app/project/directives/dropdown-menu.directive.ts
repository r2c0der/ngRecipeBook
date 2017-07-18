/**
 * Created by Rayvn on 7/11/2017.
 */
import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[rkmDropdown]'

})


export class DropdownMenuDirective implements OnInit{


  constructor(private _elemRef:ElementRef, private _renderer: Renderer2){}

  //class.open <- the 'real' class that causes the desired behavior
 @HostBinding('class.open') isOpen:boolean = false;
  ngOnInit(){}

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }




}
