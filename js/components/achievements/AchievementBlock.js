class AchievementBlock {
    constructor( parentDOM, data ) {
        this.parentDOM = parentDOM;
        this.data = data;

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        let numberHTML = '';
        if ( this.data.number ) {
            numberHTML = `<div class="number">${this.data.number}</div>`;
        }

        let descriptionHTML = '';
        if ( this.data.description ) {
            descriptionHTML = `<div class="description">${this.data.description}</div>`;
        }
        
        const HTML = `
            <div class="achievements col-3 col-md-6 col-xs-12">
                <i class="fa fa-${this.data.icon}"></i>
                ${numberHTML}
                <h4>${this.data.title}</h4>
                ${descriptionHTML}
            </div>`;

        this.parentDOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export default AchievementBlock;