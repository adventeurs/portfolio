import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let bottomLines = document.querySelectorAll("#bottomLines")
    let topLines = document.querySelectorAll('#topLines')

    document.addEventListener("click", function(){
      (<any>anime).default({
        targets: bottomLines,
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
