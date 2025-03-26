function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks')) {
        for (let mark of marks) {
            this.marks.push(mark);
        }
    }
    
}

Student.prototype.getAverage = function () {
    if (!this.marks || !this.marks.length) {
		return 0;
    }
    let sum = this.marks.reduce((accum, current) => accum + current, 0);
	return parseFloat((sum / this.marks.length).toFixed(2));
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}
