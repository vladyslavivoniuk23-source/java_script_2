// 1.2.12 - 1.2.15 Клас Square
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат — це правильний чотирикутник, у якого всі сторони і кути рівні.");
    }

    length() {
        console.log(`Периметр квадрата: ${4 * this.a}`);
    }

    square() {
        console.log(`Площа квадрата: ${this.a ** 2}`);
    }

    info() {
        console.log("--- Характеристика Квадрата ---");
        console.log(`Сторони: a=b=c=d=${this.a}`);
        console.log("Кути: 90°, 90°, 90°, 90°");
        this.length();
        this.square();
    }
}

// 1.2.16 - 1.2.17 Клас Rectangle
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник — чотирикутник, у якого всі кути прямі.");
    }

    length() {
        console.log(`Периметр прямокутника: ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`Площа прямокутника: ${this.a * this.b}`);
    }

    info() {
        console.log("--- Характеристика Прямокутника ---");
        console.log(`Сторони: a=${this.a}, b=${this.b}`);
        console.log("Кути: 90°, 90°, 90°, 90°");
        this.length();
        this.square();
    }
}

// 1.2.18 - 1.2.19 Клас Rhombus
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    // 1.2.22 Геттери та Сеттери (для Rhombus, бо Parallelogram успадковано від Rectangle)
    get sideA() { return this.a; }
    set sideA(val) { this.a = val; }

    static help() {
        console.log("Ромб — це паралелограм, у якого всі сторони рівні.");
    }

    length() {
        console.log(`Периметр ромба: ${4 * this.a}`);
    }

    square() {
        let rad = (this.beta * Math.PI) / 180;
        console.log(`Площа ромба: ${(this.a ** 2 * Math.sin(rad)).toFixed(2)}`);
    }

    info() {
        console.log("--- Характеристика Ромба ---");
        console.log(`Сторони: всі по ${this.a}`);
        console.log(`Кути: alpha=${this.alpha}°, beta=${this.beta}°`);
        this.length();
        this.square();
    }
}

// 1.2.20 - 1.2.21 Клас Parallelogram
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм — чотирикутник, у якого протилежні сторони попарно паралельні.");
    }

    square() {
        let rad = (this.beta * Math.PI) / 180;
        console.log(`Площа паралелограма: ${(this.a * this.b * Math.sin(rad)).toFixed(2)}`);
    }

    info() {
        console.log("--- Характеристика Паралелограма ---");
        console.log(`Сторони: a=${this.a}, b=${this.b}`);
        console.log(`Кути: alpha=${this.alpha}°, beta=${this.beta}°`);
        this.length();
        this.square();
    }
}

// 1.2.23 Виклики help()
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24 Створення об'єктів та info()
const sq = new Square(5);
const rect = new Rectangle(4, 10);
const rho = new Rhombus(6, 120, 60);
const para = new Parallelogram(5, 8, 110, 70);

sq.info();
rect.info();
rho.info();
para.info();