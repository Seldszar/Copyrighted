import HTML from 'html.js';

import './app.styl';

HTML._.fn.show = function () {
  return this.each('style.display', null);
};

HTML._.fn.hide = function () {
  return this.each('style.display', 'none');
};

class Copyrighted {

  static options = {
    tag: 'copyright',
    showOnce: true,
    rightClick: true,
    message: 'This post is copyrighted, you must credit the author if you want to repost ' +
      'somewhere.<br> Don\'t be an asshole, thanks!',
  }

  /**
   * Initialize the plugin.
   */
  static initialize() {
    HTML.query('.post')
      .only((el) => el.query('.tag-link').textContent === Copyrighted.options.tag)
      .each((el) => new Copyrighted(el));
  }

  /**
   * Constructor.
   */
  constructor(el) {
    this.approved = false;
    this.root = el;
    this.wrapper = this.root.query('.photo-wrapper');
    this.backdrop = this.wrapper.add('div.copyrighted__mask');
    this.modal = this.backdrop.add('div.copyrighted__inner');
    this.message = this.modal.add('div.copyrighted__message');
    this.button = this.modal.add('button.copyrighted__button');

    if (!Copyrighted.options.rightClick) {
      this.overlay = this.wrapper.add('div.copyrighted__overlay');
    }

    this.message.innerHTML = Copyrighted.options.message;
    this.button.textContent = 'I get it!';

    this.root.oncontextmenu = this.onContextMenu.bind(this);
    this.button.onclick = this.onClick.bind(this);

    this.backdrop.hide();
  }

  onContextMenu(e) {
    if (!this.approved) {
      e.preventDefault();
      this.backdrop.show();
    }
  }

  onClick() {
    this.backdrop.hide();

    if (Copyrighted.options.showOnce) {
      this.approved = true;
    }
  }
}

Copyrighted.initialize();
