import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './animations';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('routeAnimations', [
    // The '* => *' will trigger the animation to change between any two states
    transition('* => *', [useAnimation(fadeAnimation)])])
  ]
  })

export class AppComponent {
  title = 'portfolio';

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
