function parseCount(count) {
    if (Number.isNaN(Number.parseFloat(count))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(count);
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}

class Triangle {
	constructor(a, b, c) {
        if (a>b+c || b>a+c || c>b+a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
		this.a = a;
		this.b = b;
		this.c = c;   
    }

    get perimeter() {
		return this.a + this.b + this.c;
	}

    get area() {
        const half = this.perimeter/2;
        return parseFloat(Math.sqrt(half * (half - this.a) * (half - this.b) * (half - this.c)).toFixed(3)); 
	}
}


function getTriangle(a, b, c) {
    const getters = {
        get area() {
            return "Ошибка! Треугольник не существует";
        },
        get perimeter() {
            return "Ошибка! Треугольник не существует";
        }
    };
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return getters;
	}
}
