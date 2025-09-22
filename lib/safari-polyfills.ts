/**
 * Safari Compatibility Polyfills
 * Ensures compatibility with older Safari versions and Safari's strict policies
 */

// Polyfill for Element.closest() for older Safari versions
if (typeof window !== 'undefined' && !Element.prototype.closest) {
  Element.prototype.closest = function(s: string) {
    let el: Element | null = this;
    
    do {
      if (el.matches && el.matches(s)) return el;
      el = el.parentElement || el.parentNode as Element;
    } while (el !== null && el.nodeType === 1);
    
    return null;
  };
}

// Polyfill for Element.matches() for older Safari versions  
if (typeof window !== 'undefined' && !Element.prototype.matches) {
  Element.prototype.matches = function(s: string) {
    const matches = (this.document || this.ownerDocument).querySelectorAll(s);
    let i = matches.length;
    while (--i >= 0 && matches.item(i) !== this) {}
    return i > -1;
  };
}

// Enhanced localStorage with Safari private mode handling
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn('localStorage.getItem failed (Safari private mode?):', e);
      return null;
    }
  },
  
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn('localStorage.setItem failed (Safari private mode?):', e);
      // Fallback to memory storage or sessionStorage
      try {
        sessionStorage.setItem(key, value);
      } catch (e2) {
        console.warn('sessionStorage.setItem also failed:', e2);
      }
    }
  },
  
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('localStorage.removeItem failed (Safari private mode?):', e);
      try {
        sessionStorage.removeItem(key);
      } catch (e2) {
        console.warn('sessionStorage.removeItem also failed:', e2);
      }
    }
  }
};

// Safe event listener attachment with passive event support detection
export const addSafeEventListener = (
  element: Element | Window | Document,
  event: string,
  handler: EventListener,
  options?: boolean | AddEventListenerOptions
): void => {
  try {
    // Test for passive event support
    let passiveSupported = false;
    try {
      const testOptions = Object.defineProperty({}, 'passive', {
        get: function() {
          passiveSupported = true;
          return false;
        }
      });
      
      const testHandler = () => {};
      element.addEventListener('test', testHandler, testOptions);
      element.removeEventListener('test', testHandler);
    } catch (err) {
      passiveSupported = false;
    }
    
    // Apply options based on support
    if (passiveSupported && typeof options === 'object') {
      element.addEventListener(event, handler, options);
    } else {
      element.addEventListener(event, handler, typeof options === 'boolean' ? options : false);
    }
  } catch (e) {
    console.warn('addEventListener failed:', e);
    // Fallback for very old browsers
    if ('attachEvent' in element) {
      (element as any).attachEvent(`on${event}`, handler);
    }
  }
};

// Safe CSS property detection
export const supportsCSSProperty = (property: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const testElement = document.createElement('div');
    return property in testElement.style;
  } catch (e) {
    return false;
  }
};

// Enhanced media query matching with Safari compatibility
export const safeMatchMedia = (query: string): MediaQueryList | null => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return null;
  }
  
  try {
    return window.matchMedia(query);
  } catch (e) {
    console.warn('matchMedia failed:', e);
    return null;
  }
};

// Safari-safe focus management
export const safeFocus = (element: HTMLElement): void => {
  try {
    // Safari requires a slight delay for focus to work properly in some cases
    setTimeout(() => {
      if (element && typeof element.focus === 'function') {
        element.focus();
      }
    }, 0);
  } catch (e) {
    console.warn('Focus failed:', e);
  }
};

// Initialize polyfills when imported
if (typeof window !== 'undefined') {
  // Force a repaint to ensure polyfills are applied
  setTimeout(() => {
    if (document.body) {
      document.body.style.display = 'none';
      document.body.offsetHeight; // Trigger reflow
      document.body.style.display = '';
    }
  }, 0);
}
