import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, stagger
  } from '@angular/animations';

  export const fadeAnimation = animation([
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0
          })
        ]),
        query(':enter', [
          style({ top: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('.5s ease-out', style({ top: '100%', opacity: 1}))
          ]),
          query(':enter', [
            animate('.5s ease-out', style({ top: '0%', opacity: 1 }))
          ])
        ]),
        query(':enter', animateChild()),
      ])

// query(
//     ':enter, :leave', 
//     [style({ opacity: 0, position: 'fixed', width: '100%' })], 
//     { optional: true }),
//   query(
//       '#block',
//       style({ opacity: 0 })
//   ),
//   group([
//       query(
//           ':enter', 
//           [
//           style({ transform: 'translateX(100%)' }),
//           animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
//           ],
//           { optional: true }
//       ),
//       query(
//           ':leave',
//           [
//           style({ transform: 'translateX(0%)' }),
//           animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)'}))
//           ],
//           { optional: true }
//       )
//   ]),

//   query(
//       ':enter .block',
//       stagger(400, [
//           style({ transform: 'translateY(100px)' }),
//           animate('1s ease-in-out', style({ transform: 'translateY(0px)', opacity: 1 }))
//       ])
//   )
  
// export const fadeAnimation = animation([

//       query(
//           ':enter', 
//           style({ opacity: 0 })),

//       query(
//           ':enter',
//           stagger('100ms', 
//           [
//               animate('1s', style({ opacity: 1 }))
//           ])
//       )
   
//   ]);