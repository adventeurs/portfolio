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
    let lines = document.querySelectorAll('#rect4')
    let topLines = document.querySelectorAll('#rect5')
    let menuOpen = false;
    
    hamburger.addEventListener("mouseenter", function(){
      if(!menuOpen){
        (<any>anime).default({
          targets: [rect1, rect2, rect3],
          translateX: function() {
            return (<any>anime).default.random(0, 10);
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
      }
      else{
        (<any>anime).default({
          targets: [rect1, rect2, rect3],
          width: 60
      });
      (<any>anime).default({
        targets: menu,
        translateX: -100
      });
        (<any>anime).default({
          targets: slideMenu,
          width: 0,
          easing: 'easeOutQuad',
          duration: 300
      });
      };
    });

    document.addEventListener("click", function(){
      (<any>anime).default({
        targets: lines,
        translateY: function(){
          return (<any>anime).default.random(220, 220)
        },
        direction: "alternate",
        easing: 'easeInBack',
        loop: 1,
        duration: 1800,
        delay: (<any>anime).default.stagger(100)
      });
      (<any>anime).default({
        targets: topLines,
        translateY: function(){
          return (<any>anime).default.random(-180, -220)
        },
        direction: "alternate",
        easing: 'easeInBack',
        loop: 1,
        duration: 1800,
        delay: (<any>anime).default.stagger(100, {direction: "reverse"})
      });
    });

  }

}
