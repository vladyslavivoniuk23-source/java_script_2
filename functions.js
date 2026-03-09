// 1.2.25 - 1.2.26 Функція Triangular
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

console.log(Triangular()); // За замовчуванням
console.log(Triangular(6, 8, 10));
const { a, b, c } = Triangular(10, 10, 12);
console.log(a, b, c);

// 1.2.27 - 1.2.28 PiMultiplier (Замикання)
function PiMultiplier(num) {
    return function() {
        return Math.PI * num;
    };
}

const pi2 = PiMultiplier(2);
const pi1_5 = PiMultiplier(1.5); // 3/2
const piDiv2 = PiMultiplier(0.5); // 1/2

console.log("Pi * 2 =", pi2());
console.log("Pi * 1.5 =", pi1_5());
console.log("Pi / 2 =", piDiv2());

// 1.2.29 - 1.2.31 Painter
function Painter(color) {
    return function(obj) {
        if (obj.type) {
            console.log(`Color: ${color}, Type: ${obj.type}`);
        } else {
            console.log("No ‘type’ property occurred!");
        }
    };
}

const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

const obj1 = { maxSpeed: 280, type: "Sportcar", color: "purple" };
const obj2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
const obj3 = { maxSpeed: 180, color: "magenta", isCar: true };

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);