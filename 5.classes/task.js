class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.pagesCount = pagesCount;
		this.name = name;
		this.releaseDate = releaseDate;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	// findBookBy(type, value) {
	// 	for (let book of this.books) {
	// 		if (book.hasOwnProperty(type) && book[type] === value) {
	// 			return book;
	// 		}
	// 	}
	// 	return null;
	// }

    findBookBy(type, value) {
        const findBook = this.books.find(book => book.hasOwnProperty(type) && book[type] === value);
        return findBook !== undefined ? findBook : null;
    }

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let giveBook = this.books[i];
				this.books.splice(i, 1)
				return giveBook;
			}
		}
		return null;
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);

library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

myBook = new Book('А. Сапковский', 'Меч Предназначения', 1992, 384);
myBook.state = 30;
library.addBook(myBook);
console.log("Количество книг: " + library.books.length);


class Student {
	constructor(name) {
		this.name = name;
        this.marks = {};
		let arr
	}

    addMark(mark, subject) { 
        if (mark > 1 && mark < 6) {
        	if (!this.marks.hasOwnProperty(subject)) { 
				this.marks[subject] = [];
				this.marks[subject].push(mark);
			} else this.marks[subject].push(mark);

        }  
    }

	getAverageBySubject(subject) {
		if (this.marks.hasOwnProperty(subject)) {
			let sum = this.marks[subject].reduce((accum, current) => accum + current, 0);
			return parseFloat((sum / this.marks[subject].length).toFixed(2));
		} else return 0;
	}

	getAverage () {
		if (Object.keys(this.marks).length != 0) {
			// let sum = 0;
			// for (let subject of Object.keys(this.marks)) {
			// sum += this.getAverageBySubject(subject);
			// }
			let sum = Object.keys(this.marks).reduce((accum, subject) => accum + this.getAverageBySubject(subject), 0);
			return parseFloat((sum / Object.keys(this.marks).length).toFixed(2));
		} else return 0;
	}
}

