export interface Renderer {
  appendTo(
    container: HTMLElement,
    options?: { fitToContainer?: boolean; responsive?: boolean },
  ): void;
}
