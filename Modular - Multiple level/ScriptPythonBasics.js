const basicsSteps = [
    {
        id: 0,
        title: "Variable Assignment",
        concept: "Assign values to variables using the <code>=</code> operator. Python is dynamically typed.",
        codeTemplate: `# Assign a string to a variable\nplayer_name <span class="drop-zone" data-index="0"></span> "Alice"\n\n# Assign an integer\nscore <span class="drop-zone" data-index="1"></span> 100`,
        options: ["=", "==", ":", "->"],
        answers: ["=", "="],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 1,
        title: "Conditionals (If/Else)",
        concept: "Control the flow of your program using <code>if</code>, <code>elif</code>, and <code>else</code>.",
        codeTemplate: `health = 40\n\n<span class="drop-zone" data-index="0"></span> health < 50:\n    print("Warning: Low Health")\n<span class="drop-zone" data-index="1"></span>:\n    print("Health is stable")`,
        options: ["if", "else", "elif", "then"],
        answers: ["if", "else"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 2,
        title: "Basic For Loops",
        concept: "Use a <code>for</code> loop to iterate over a sequence of numbers using <code>range()</code>.",
        codeTemplate: `# Print numbers 0 through 4\n<span class="drop-zone" data-index="0"></span> i <span class="drop-zone" data-index="1"></span> range(5):\n    print(i)`,
        options: ["for", "in", "while", "of"],
        answers: ["for", "in"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 3,
        title: "Working with Lists",
        concept: "Lists are ordered, mutable collections. Use <code>.append()</code> to add items to the end.",
        codeTemplate: `inventory = ["Sword", "Shield"]\n\n# Add a new item\ninventory.<span class="drop-zone" data-index="0"></span>("Potion")\n\n# Get the first item\nfirst_item = inventory[<span class="drop-zone" data-index="1"></span>]`,
        options: ["append", "0", "add", "1"],
        answers: ["append", "0"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 4,
        title: "Defining Functions",
        concept: "Encapsulate reusable code into functions using the <code>def</code> keyword.",
        codeTemplate: `<span class="drop-zone" data-index="0"></span> greet(name):\n    <span class="drop-zone" data-index="1"></span> f"Hello, {name}!"\n\nmessage = greet("Bob")`,
        options: ["def", "return", "function", "yield"],
        answers: ["def", "return"],
        passed: false, userInputs: ["", ""]
    }
];