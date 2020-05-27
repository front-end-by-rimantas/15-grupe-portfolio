import AchievementBlock from './AchievementBlock.js';

class Achievements {
    constructor( selector, data ) {
        this.selector = selector;
        this.DOM = null;
        this.data = data;

        this.init();
    }

    init() {
        // patikrinti ar pagal duota selectoriu yra DOM vieta
        const DOM = document.querySelector(this.selector);
        if ( !DOM ) {
            throw 'ERROR: achievements vieta neegzistuoja... :(';
        }
        this.DOM = DOM;

        // issivalome turini, jei netycia kazkas yra like index.html
        this.DOM.innerHTML = '';
        
        // render
        this.render();
    }

    render() {
        if ( !Array.isArray(this.data) ) {
            console.error('ERROR: duomenys turi buti array tipo!');
        }

        for ( let i=0; i<this.data.length; i++ ) {
            new AchievementBlock(this.DOM, this.data[i]);
        }
    }
}

export default Achievements;