import Filter from './Filter.js';
import List from './List.js';

class Gallery {
    constructor( selector, data, path ) {
        this.selector = selector;
        this.DOM = null;
        this.data = data;
        this.path = path;

        this.init();
    }

    init() {
        const DOM = document.querySelector(this.selector);
        if ( !DOM ) {
            throw 'ERROR: turim beda del vietos (a.k.a. ploto) 🤔🤔';
        }
        this.DOM = DOM;

        this.render();
    }

    filterUniqueTags() {
        let uniqueTags = [];

        // logika
        uniqueTags.push('html');
        uniqueTags.push('css');

        return uniqueTags;
    }

    render() {
        this.DOM.innerHTML = '';
        new Filter( this.DOM, this.filterUniqueTags() );
        new List( this.DOM, this.data, this.path );
    }
}

export default Gallery;