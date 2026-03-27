const intermediateSteps = [
    {
        id: 0,
        title: "Dictionaries",
        concept: "Dictionaries store data in key-value pairs. Access and assign values using bracket notation.",
        codeTemplate: `user = {"name": "Alice", "role": "Admin"}\n\n# Add a new key-value pair\nuser[<span class="drop-zone" data-index="0"></span>] = 25\n\n# Access a value\nprint(user[<span class="drop-zone" data-index="1"></span>])`,
        options: ['"age"', '"role"', "age", "role"],
        answers: ['"age"', '"role"'],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 1,
        title: "List Slicing",
        concept: "Extract parts of a list using the syntax <code>[start:stop:step]</code>.",
        codeTemplate: `letters = ['a', 'b', 'c', 'd', 'e']\n\n# Get the first three letters: ['a', 'b', 'c']\ntop_three = letters[<span class="drop-zone" data-index="0"></span>:<span class="drop-zone" data-index="1"></span>]`,
        options: ["0", "3", "1", "4"],
        answers: ["0", "3"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 2,
        title: "Error Handling (Try/Except)",
        concept: "Prevent your program from crashing by catching exceptions with <code>try</code> and <code>except</code>.",
        codeTemplate: `<span class="drop-zone" data-index="0"></span>:\n    result = 10 / 0\n<span class="drop-zone" data-index="1"></span> ZeroDivisionError:\n    print("You cannot divide by zero!")`,
        options: ["try", "except", "catch", "finally"],
        answers: ["try", "except"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 3,
        title: "*args and **kwargs",
        concept: "Pass a variable number of positional arguments (<code>*args</code>) and keyword arguments (<code>**kwargs</code>).",
        codeTemplate: `def make_pizza(size, <span class="drop-zone" data-index="0"></span>):\n    print(f"Making a {size} inch pizza with toppings:")\n    for topping in <span class="drop-zone" data-index="1"></span>:\n        print(f"- {topping}")\n\nmake_pizza(12, "pepperoni", "mushrooms")`,
        options: ["*args", "args", "**kwargs", "kwargs"],
        answers: ["*args", "args"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 4,
        title: "Classes & Objects",
        concept: "Create objects and define their initialization state using the <code>__init__</code> constructor.",
        codeTemplate: `<span class="drop-zone" data-index="0"></span> Car:\n    def <span class="drop-zone" data-index="1"></span>(self, make, model):\n        self.make = make\n        self.model = model\n\nmy_car = Car("Toyota", "Corolla")`,
        options: ["class", "__init__", "def", "constructor"],
        answers: ["class", "__init__"],
        passed: false, userInputs: ["", ""]
    }
];