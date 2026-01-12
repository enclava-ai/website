interface PlausibleFunction {
  (eventName: string, props?: { [key: string]: any }): void;
  q: any[];
}

declare global {
  interface Window {
    plausible?: PlausibleFunction;
  }
}

export {};
