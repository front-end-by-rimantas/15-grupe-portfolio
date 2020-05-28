import Option from './Option.js';

class Filter {
    constructor( parentDOM, data ) {
        this.parentDOM = parentDOM;
        this.DOM = null;
        this.data = data;

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        this.parentDOM.insertAdjacentHTML('beforeend', '<div class="filter">FILTER</div>');
        this.DOM = this.parentDOM.querySelector('.filter');

        // console.log(this);

        for ( let i=0; i<this.data.length; i++ ) {
            new Option( this.DOM, this.data[i] );
        }
    }
}

export default Filter;