import Util from './Util';

class Wow {
  constructor(options) {
    this.scrollCallback = this.scrollCallback.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.start = this.start.bind(this);
    this.scrolled = true;
    this.config = this.util.extend(options, this.defaults);
  }

  defaults = {
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true
  };

  init() {
    this.element = window.document.documentElement;
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      this.start();
    } else {
      document.addEventListener('DOMContentLoaded', this.start);
    }
  }

  start() {
    this.boxes = this.element.getElementsByClassName(this.config.boxClass);
    if (this.boxes.length) {
      if (this.disabled()) {
        this.resetStyle();
      } else {
        Array.from(this.boxes).forEach((box) => {
          this.applyStyle(box, true);
        });
        window.addEventListener('scroll', this.scrollHandler, false);
        window.addEventListener('resize', this.scrollHandler, false);
        this.interval = setInterval(this.scrollCallback, 50);
      }
    }
  }

  stop() {
    window.removeEventListener('scroll', this.scrollHandler, false);
    window.removeEventListener('resize', this.scrollHandler, false);
    if (this.interval != null) {
      clearInterval(this.interval);
    }
  }

  show(box) {
    this.applyStyle(box);
    box.className = `${box.className} ${this.config.animateClass}`;
  }

  applyStyle(box, hidden) {
    const duration = box.getAttribute('data-wow-duration');
    const delay = box.getAttribute('data-wow-delay');
    const iteration = box.getAttribute('data-wow-iteration');
    box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
  }

  resetStyle() {
    Array.from(this.boxes).forEach((box) => {
      box.setAttribute('style', 'visibility: visible;');
    });
  }

  customStyle(hidden, duration, delay, iteration) {
    let style = hidden ? 'visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;' : 'visibility: visible;';
    if (duration) {
      style += `-webkit-animation-duration: ${duration}; -moz-animation-duration: ${duration}; animation-duration: ${duration};`;
    }
    if (delay) {
      style += `-webkit-animation-delay: ${delay}; -moz-animation-delay: ${delay}; animation-delay: ${delay};`;
    }
    if (iteration) {
      style += `-webkit-animation-iteration-count: ${iteration}; -moz-animation-iteration-count: ${iteration}; animation-iteration-count: ${iteration};`;
    }
    return style;
  }

  scrollHandler() {
    this.scrolled = true;
  }

  scrollCallback() {
    if (this.scrolled) {
      this.scrolled = false;
      this.boxes = Array.from(this.boxes).filter((box) => {
        if (!box) {
          return false;
        }
        if (this.isVisible(box)) {
          this.show(box);
          return false;
        }
        return true;
      });
      if (!this.boxes.length) {
        this.stop();
      }
    }
  }

  offsetTop(element) {
    let top = element.offsetTop;
    while ((element = element.offsetParent)) {
      top += element.offsetTop;
    }
    return top;
  }

  isVisible(box) {
    const offset = box.getAttribute('data-wow-offset') || this.config.offset;
    const viewTop = window.pageYOffset;
    const viewBottom = viewTop + this.element.clientHeight - offset;
    const top = this.offsetTop(box);
    const bottom = top + box.clientHeight;
    return top <= viewBottom && bottom >= viewTop;
  }

  util = new Util();

  disabled() {
    return !this.config.mobile && this.util.isMobile(navigator.userAgent);
  }
}

export default Wow;
