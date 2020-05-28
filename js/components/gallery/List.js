import Item from './Item.js';

class List {
    constructor( parentDOM, data, path ) {
        this.parentDOM = parentDOM;
        this.DOM = null;
        this.data = data;
        this.path = path;

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        this.parentDOM.insertAdjacentHTML('beforeend', '<div class="list"></div>');
        this.DOM = this.parentDOM.querySelector('.list');

        // console.log(this);

        for ( let i=0; i<this.data.length; i++ ) {
            new Item( this.DOM, this.data[i], this.path );
        }
    }
}

export default List;