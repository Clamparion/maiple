import { Renderer } from './renderer/renderer';
import { TwoJsRenderer } from './renderer/two.js.render';

export class Stage {
  private renderer: Renderer;
  constructor(options: {
    container: HTMLElement;
    fitToContainer?: boolean;
    responsive?: boolean;
    renderer?: Renderer;
  }) {
    if (options.renderer !== undefined) {
      this.renderer = options.renderer;
    } else {
      this.renderer = new TwoJsRenderer();
    }
    this.renderer.appendTo(options.container, {
      fitToContainer: options.fitToContainer,
    });
  }
}
