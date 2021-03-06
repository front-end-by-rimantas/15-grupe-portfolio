import JobBlock from './JobBlock.js';

class JobHistory {
    constructor( selector, data ) {
        this.DOM = null;
        this.selector = selector;
        this.data = data;
        this.jobList = [];
        
        this.init();
    }

    init() {
        if ( !this.isValidSelector() ) {
            throw 'ERROR: double check if wanted location exists...';
        }
        
        this.render();
    }

    isValidSelector() {
        const DOM = document.querySelector( this.selector );

        if ( DOM ) {
            this.DOM = DOM;
            return true;
        }
        
        return false;
    }

    render() {
        for ( let i=0; i<this.data.length; i++ ) {
            new JobBlock( this.DOM, this.data[i] );
        }
    }
}

export default JobHistory;