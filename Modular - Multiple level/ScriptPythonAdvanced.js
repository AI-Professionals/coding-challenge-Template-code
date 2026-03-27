const advancedSteps = [
    {
        id: 0,
        title: "List Comprehensions",
        concept: "Transform and filter lists efficiently using <code>[expression for item in iterable if condition]</code>.",
        codeTemplate: `numbers = [1, 2, 3, 4, 5, 6]\n\n# Squares of even numbers only\neven_squares = [x**2 <span class="drop-zone" data-index="0"></span> numbers <span class="drop-zone" data-index="1"></span> x % 2 == 0]`,
        options: ["while", "for x in", "if", "yield"],
        answers: ["for x in", "if"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 1,
        title: "Decorator Registries",
        concept: "Decorators can register functions into a dictionary—a key pattern for <strong>Agentic AI tool registries</strong>.",
        codeTemplate: `registry = {}\n\ndef tool(name):\n    def wrapper(f):\n        registry[name] = f\n        return f\n    return wrapper\n\n<span class="drop-zone" data-index="0"></span>("search_docs")\ndef rag_tool(query):\n    return f"Searching for {query}..."`,
        options: ["@tool", "wrapper", "register()", "@wrapper"],
        answers: ["@tool"],
        passed: false, userInputs: [""]
    },
    {
        id: 2,
        title: "Context Managers",
        concept: "The <code>with</code> statement ensures resources (like DB connections or files) are cleaned up properly.",
        codeTemplate: `<span class="drop-zone" data-index="0"></span> open("data.txt", "r") <span class="drop-zone" data-index="1"></span> file:\n    content = file.read()\n    print(content)`,
        options: ["with", "as", "using", "open"],
        answers: ["with", "as"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 3,
        title: "Asynchronous Await",
        concept: "Crucial for non-blocking I/O in AI workflows. Use <code>async</code> to define and <code>await</code> to call coroutines.",
        codeTemplate: `<span class="drop-zone" data-index="0"></span> def fetch_ai_response():\n    response = <span class="drop-zone" data-index="1"></span> call_llm_api()\n    return response`,
        options: ["async", "await", "yield", "defer"],
        answers: ["async", "await"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 4,
        title: "Dict Lookups & Defaulting",
        concept: "Avoid <code>KeyError</code> by using <code>.get()</code> with a fallback value.",
        codeTemplate: `meta = {"status": "active", "version": 1.2}\n\n# Fallback to 'None' if 'author' is missing\nauthor = meta.<span class="drop-zone" data-index="0"></span>("author", <span class="drop-zone" data-index="1"></span>)`,
        options: ["get", "fetch", "None", "False"],
        answers: ["get", "None"],
        passed: false, userInputs: ["", ""]
    },
	{
        id: 5,
        title: "Generators & Yield",
        concept: "Generators allow you to iterate over large datasets without loading them all into memory at once.",
        codeTemplate: `def stream_logs(files):\n    for file in files:\n        with open(file) as f:\n            <span class="drop-zone" data-index="0"></span> f.read()\n\n# Usage\nlog_gen = stream_logs(["api.log", "db.log"])\nline = next(<span class="drop-zone" data-index="1"></span>)`,
        options: ["yield", "return", "log_gen", "files"],
        answers: ["yield", "log_gen"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 6,
        title: "Structural Pattern Matching",
        concept: "Introduced in Python 3.10, <code>match-case</code> provides a powerful way to handle complex data structures.",
        codeTemplate: `def handle_status(response):\n    match response:\n        <span class="drop-zone" data-index="0"></span> {"status": 200, "data": content}:\n            return content\n        <span class="drop-zone" data-index="1"></span> {"status": 404}:\n            return "Not Found"`,
        options: ["case", "when", "if", "match"],
        answers: ["case", "case"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 7,
        title: "Type Hinting & Pydantic",
        concept: "Type hints improve maintainability and are essential for tools like FastAPI and Pydantic.",
        codeTemplate: `from typing import List\n\ndef process_scores(scores: <span class="drop-zone" data-index="0"></span>[int]) -> <span class="drop-zone" data-index="1"></span>:\n    return sum(scores) / len(scores)`,
        options: ["List", "float", "int", "Array"],
        answers: ["List", "float"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 8,
        title: "Dunder Methods (__call__)",
        concept: "Magic methods allow objects to behave like functions, which is useful for stateful AI agents.",
        codeTemplate: `class Agent:\n    def <span class="drop-zone" data-index="0"></span>(self, prompt):\n        return f"Processing {prompt}..."\n\n# Make the instance callable\nsiri = Agent()\nresponse = <span class="drop-zone" data-index="1"></span>("Hello")`,
        options: ["__call__", "siri", "__init__", "Agent"],
        answers: ["__call__", "siri"],
        passed: false, userInputs: ["", ""]
    },
	{
        id: 9,
        title: "Lambdas & Mapping",
        concept: "Anonymous functions (lambdas) are perfect for quick, one-line transformations within <code>map()</code> or <code>filter()</code>.",
        codeTemplate: `items = [{"p": 10}, {"p": 20}]\n\n# Extract prices using a lambda\nprices = list(map(<span class="drop-zone" data-index="0"></span> x: x["p"], <span class="drop-zone" data-index="1"></span>))`,
        options: ["lambda", "def", "items", "list"],
        answers: ["lambda", "items"],
        passed: false, userInputs: ["", ""]
	},
	{
        id: 10,
        title: "Dataclasses",
        concept: "Use <code>@dataclass</code> to write cleaner, more readable classes for data storage without boilerplate.",
        codeTemplate: `from dataclasses import dataclass\n\n<span class="drop-zone" data-index="0"></span>\nclass User:\n    id: int\n    name: <span class="drop-zone" data-index="1"></span>\n\nuser = User(1, "Alice")`,
        options: ["@dataclass", "str", "@class", "String"],
        answers: ["@dataclass", "str"],
        passed: false, userInputs: ["", ""]
	},
	{
        id: 11,
        title: "Dictionary Unpacking",
        concept: "The <code>**</code> operator allows you to merge dictionaries or pass them as keyword arguments easily.",
        codeTemplate: `base_config = {"temp": 0.7}\nuser_config = {"model": "gpt-4"}\n\n# Combine dictionaries\nfull_config = {<span class="drop-zone" data-index="0"></span>base_config, <span class="drop-zone" data-index="1"></span>user_config}`,
        options: ["**", "*", "...", "merge"],
        answers: ["**", "**"],
        passed: false, userInputs: ["", ""]
	},
	{
        id: 12,
        title: "Itertools: Count",
        concept: "The <code>itertools</code> module provides memory-efficient tools for creating complex iterators.",
        codeTemplate: `import itertools\n\n# Generate an infinite counter\ncounter = itertools.<span class="drop-zone" data-index="0"></span>(start=1)\n\n# Get next ID\nnext_id = <span class="drop-zone" data-index="1"></span>(counter)`,
        options: ["count", "next", "repeat", "get"],
        answers: ["count", "next"],
        passed: false, userInputs: ["", ""]
	},
	{
        id: 13,
        title: "Logical Reductions",
        concept: "<code>any()</code> returns True if one element matches; <code>all()</code> returns True only if all elements match.",
        codeTemplate: `scores = [90, 85, 40, 95]\n\n# Check if anyone failed (below 50)\nfailed = <span class="drop-zone" data-index="0"></span>(s < 50 for s in scores)\n\n# Check if everyone passed\npassed = <span class="drop-zone" data-index="1"></span>(s >= 50 for s in scores)`,
        options: ["any", "all", "some", "every"],
        answers: ["any", "all"],
        passed: false, userInputs: ["", ""]
	},
	{
        id: 14,
        title: "Walrus Operator",
        concept: "The <code>:=</code> operator assigns a value to a variable as part of an expression, reducing redundant calls.",
        codeTemplate: `import random\n\ndef get_conf(): return random.random()\n\n# Assign and check in one line\nif (conf <span class="drop-zone" data-index="0"></span> get_conf()) > 0.8:\n    print(f"High confidence: {<span class="drop-zone" data-index="1"></span>}")`,
        options: [":=", "=", "conf", "val"],
        answers: [":=", "conf"],
        passed: false, userInputs: ["", ""]
	},
    {
        id: 15,
        title: "Decorators with Arguments",
        concept: "To pass arguments to a decorator, you must wrap it in a third layer of functions.",
        codeTemplate: `def repeat(num_times):\n    def decorator_repeat(func):\n        <span class="drop-zone" data-index="0"></span> wrapper(*args, **kwargs):\n            for _ in range(num_times):\n                result = func(*args, **kwargs)\n            return <span class="drop-zone" data-index="1"></span>\n        return wrapper\n    return decorator_repeat`,
        options: ["def", "result", "class", "yield"],
        answers: ["def", "result"],
        passed: false, userInputs: ["", ""]
    },
    {
        id: 16,
        title: "Metaclasses",
        concept: "Metaclasses determine how a class behaves. By default, Python uses <code>type</code>.",
        codeTemplate: `class SingletonMeta(type):\n    _instances = {}\n    def __call__(cls, *args, **kwargs):\n        if cls not <span class="drop-zone" data-index="0"></span> cls._instances:\n            cls._instances[cls] = super().__call__(*args, **kwargs)\n        return cls._instances[<span class="drop-zone" data-index="1"></span>]`,
        options: ["in", "cls", "is", "self"],
        answers: ["in", "cls"],
        passed: false, userInputs: ["", ""]
    }
];