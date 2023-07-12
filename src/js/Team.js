export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(parse) {
        if (this.members.has(parse)) {
            throw new Error('Такой персонаж уже выбран!');
        }
        this.members.add(parse);
    }

    addAll(...parse) {
        parse.forEach(elem => {
            this.members.add(elem);
        });
    }

    toArray() {
        return [...this.members];
    }

    *[Symbol.iterator]() {
        const arr = [...this.members];

        for (let elem of arr) {
            yield elem;
        }
    }
}