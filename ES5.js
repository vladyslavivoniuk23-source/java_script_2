// 1.2.3 - Створення car1 через new Object()
var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 220;
car1.driver = {
    name: "Олександр Іванов", // Вкажіть ваше ім'я
    category: "C",
    "personal limitations": "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;

// 1.2.4 - Створення car2 через літерал
var car2 = {
    color: "blue",
    maxSpeed: 180,
    driver: {
        name: "Олександр Іванов",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2
};

// 1.2.5 - Метод drive для car1
car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive();

// 1.2.6 - Метод drive для car2
car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive();

// 1.2.7 - Конструктор Truck
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    
    // 1.2.9 - Метод trip всередині конструктора
    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            var nightMsg = this.driver.nightDriving ? "drives at night" : "does not drive at night";
            console.log("Driver " + this.driver.name + " " + nightMsg + " and has " + this.driver.experience + " years of experience");
        }
    };
}

// 1.2.8 - "Статичний" метод через prototype
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// 1.2.10 - Демонстрація Truck
var truck1 = new Truck("white", 5000, 80, "Volvo", "FH16");
var truck2 = new Truck("black", 4500, 85, "Scania", "R500");

truck1.AssignDriver("Олександр Іванов", true, 5);
truck2.AssignDriver("Олександр Іванов", false, 10);

truck1.trip();
truck2.trip();