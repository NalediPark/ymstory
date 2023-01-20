class Choice {
    #text;
    #pageNum;
    #element;

    #html = /*html*/`
        <div class="c-choice">
            <span class="js-text"></span>
            <i class="far fa-hand-point-right"></i>
        </div>
    `;

    constructor(text, pageNum) {
        this.#text = text;
        this.#pageNum = pageNum;

        const template = document.createElement('template');
        template.innerHTML = this.#html;
        this.#element = template.content.cloneNode(true).firstElementChild;

        this.#element.querySelector('.js-text').textContent = text;

        this.#element.addEventListener('click', () => {
            window.book.showPage(this.#pageNum);
        });
    }

    get text() {
        return this.#text;
    }

    get pageNum() {
        return this.#pageNum;
    }

    get element() {
        return this.#element;
    }
}

class Page {
    #text;
    #element;
    #choiceList = [];

    #html = /*html*/`
        <div class="c-page">
            <img class="c-page__img js-img" src="" />
            <div class="c-page__text js-text"></div>
            <div class="c-page__choice-list js-choice-list"></div>
        </div>
    `;

    constructor() {
        const template = document.createElement('template');
        template.innerHTML = this.#html;
        this.#element = template.content.cloneNode(true).firstElementChild;
    }

    get text() {
        return this.#text;
    }

    set text(value) {
        this.#text = value;
        this.#element.querySelector('.js-text').textContent = value;
    }

    set image(value) {
        this.#element.querySelector('.js-img').src = `./images/${value}`;
    }

    get element() {
        return this.#element;
    }

    addChoice(choice) {
        this.#choiceList.push(choice);
        this.#element.querySelector('.js-choice-list').appendChild(choice.element);
    }
}

class Book {
    #pages = [];
    #element;

    #html = /*html*/`
        <div class="c-book js-book">
            <div class="js-page-list"></div>
        </div>
    `;

    constructor() {
        const template = document.createElement('template');
        template.innerHTML = this.#html;
        this.#element = template.content.cloneNode(true).firstElementChild;
    }

    addPage(index, page) {
        this.#pages[index] = page;

        const num = index.toString().padStart(2, '0');
        page.image = `page${num}.jpg`;

        page.element.style.display = 'none';
        this.#element.querySelector('.js-page-list').appendChild(page.element);
    };

    pageAt(index) {
        return this.#pages[index];
    }

    get element() {
        return this.#element;
    }

    showPage(index) {
        this.#pages.forEach(page => {
            page.element.style.display = 'none';
        });

        this.#pages[index].element.style.display = '';
    }
}
