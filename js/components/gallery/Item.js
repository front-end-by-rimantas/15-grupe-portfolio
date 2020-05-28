class Item {
    constructor( parentDOM, data ) {
        this.parentDOM = parentDOM;
        this.data = data;

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        console.log(this);
    }
}

export default Item;