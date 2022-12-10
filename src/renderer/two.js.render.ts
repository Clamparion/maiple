import { Renderer } from './renderer';
import Two from 'two.js';

export class TwoJsRenderer implements Renderer {
  constructor() {}
  appendTo(
    container: HTMLElement,
    options?: { fitToContainer?: boolean; responsive?: boolean },
  ): void {
    var two = new Two({
      type: Two.Types.webgl,
      fitted: options?.fitToContainer,
    }).appendTo(container);


    console.log(container);

    container.addEventListener('resize', (event) => {
      console.log('was"n  das');
    });

    var radius = 50;
    var x = two.width * 0.5;
    var y = two.height * 0.5 - radius * 1.25;
    var circle = two.makeCircle(x, y, radius);

    y = two.height * 0.5 + radius * 1.25;
    var width = 100;
    var height = 100;
    var rect = two.makeRectangle(x, y, width, height);

    // The object returned has many stylable properties:
    circle.fill = '#FF8000';
    // And accepts all valid CSS color:
    circle.stroke = 'orangered';
    circle.linewidth = 5;

    rect.fill = 'rgb(0, 200, 255)';
    rect.opacity = 0.75;
    rect.noStroke();

    // Don’t forget to tell two to draw everything to the screen
    two.update();
  }
}
