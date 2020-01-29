import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit() {
    let rect1 = document.querySelector("#rect1");
    let rect2 = document.querySelector("#rect2");
    let rect3 = document.querySelector("#rect3");
    let hamburger = document.querySelector("#hamburger");
    let slideMenu = document.querySelector("#slide-menu");
    let menu = document.querySelector("#menu");
    let menuOpen = false;
    
    hamburger.addEventListener("mouseenter", function(){
      if(!menuOpen){
        (<any>anime).default({
          targets: [rect1, rect2, rect3],
          translateX: function() {
            return (<any>anime).default.random(-15, -8);
          },
          easing: 'easeOutElastic'
      });
      };
    });
    
    hamburger.addEventListener("click", function(){
      menuOpen= !menuOpen;
      if(menuOpen){
        (<any>anime).default({
          targets: [rect1, rect2, rect3],
          width: 100
      }) ; 
      (<any>anime).default({
          targets: slideMenu,
          width: 200,
          easing: 'easeOutElastic'
        });
        (<any>anime).default({
          targets: menu,
          translateX: 25
        });
        hamburger.classList.add('ham-active');
      }
      else{
        (<any>anime).default({
          targets: [rect1, rect2, rect3],
          width: 60
      });
      (<any>anime).default({
        targets: menu,
        translateX: -160
      });
        (<any>anime).default({
          targets: slideMenu,
          width: 0,
          easing: 'easeOutQuad',
          duration: 300
      });
      setTimeout(() => hamburger.classList.remove('ham-active'), 100);
      };
    });

  }

}