class Item {
    constructor( parentDOM, data, path ) {
        this.parentDOM = parentDOM;
        this.data = data;
        this.path = path;

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const HTML = `
            <div class="item">
                <img src="./img/${this.path}/${this.data.img}">
                <div class="content">
                    <h4 class="title">${this.data.title}</h4>
                    <div class="tags">
                        ${this.renderTags()}
                    </div>
                    <div class="authors">
                        ${this.renderAuthors()}
                    </div>
                    <a href="#" class="visit">Visit project <i class="fa fa-angle-right"></i></a>
                </div>
            </div>`;
        this.parentDOM.insertAdjacentHTML('beforeend', HTML);

        console.log(this);
    }

    renderTags() {
        return 'TAGS LIST';
    }

    renderAuthors() {
        return 'AUTHORS LIST';
    }
}

export default Item;