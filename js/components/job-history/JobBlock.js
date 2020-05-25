class JobBlock {
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
        let location = '';
        const { city, country } = this.data.location;
        
        if ( city ) {
            location += city;
        }
        if ( country ) {
            if ( city ) {
                location += ', ';
            }
            location += country;
        }

        const HTML = `
            <div class="col-6">
                <div class="header">
                    <div class="texts">
                        <h3>${this.data.jobTitle}</h3>
                        <p>${location}</p>
                    </div>
                    <div class="btn"></div>
                </div>
                <p>${this.data.description}</p>
            </div>`;

        this.parentDOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export default JobBlock;