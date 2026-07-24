export type CalendlyInlineWidgetOptions = {
  url: string;
  parentElement: HTMLElement;
};

export type CalendlyWidget = {
  initInlineWidget: (options: CalendlyInlineWidgetOptions) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}

export {};
