# Programming Curriculum for rfSE Club (First-Principles Approach)

## Overview

The rfSE Club programming curriculum, designed by MountainKid AI, equips 10th-12th grade students to become genius engineers by mastering programming fundamentals, modern tools, and problem-solving through first-principles thinking. We break down each concept to its core purpose, question traditional teaching methods, and rebuild a lean curriculum focused on practical, real-world applications. This curriculum emphasizes coding, version control, web development, and low-level programming, ensuring students can build scalable solutions, lead teams, and drive a tech-driven future by 2030.

---

## Curriculum Schedule (30 Sessions)

### Session 1: Introduction to Programming for Engineers

- **Topic**: Why Programming Matters
  - **Why?**: Programming solves problems and automates systems. Core purpose? To instruct machines to execute tasks efficiently.
  - **Subtopics**:
    - What is Programming?: Writing instructions for computers.
    - Algorithms: Step-by-step problem-solving processes.
    - Applications: Traffic systems, health apps, trading algorithms.
    - Tools: IDEs (VS Code), terminals, browsers.
    - Interaction: Share a problem to solve with code (e.g., landslide alerts).
    - Syllabus: Hardware, Git, JavaScript, C, web development, React.
  - **Application**: Write pseudocode to automate solar panel energy tracking.
    ```plaintext
    Input: solar_output (watts)
    Process:
      If solar_output > 0:
        Store output in daily_log
        Calculate total_energy = sum(daily_log)
      Else:
        Log "No energy generated"
    Output: total_energy
    ```

### Session 2: How Computers Work – Fundamentals

- **Topic**: Understanding Computers
  - **Why?**: To know the machine you program. Core truth? Computers process inputs into outputs via memory and logic.
  - **Subtopics**:
    - Input/Output: Keyboard, display.
    - Memory: RAM (volatile), HDD/SSD (non-volatile).
    - CPU: Clock speed, cores.
    - Binary: 0s and 1s, machine code.
  - **Application**: Diagram a computer’s flow for a traffic app.
    ```plaintext
    Input: Traffic sensor data
    Memory: Store in RAM
    Processing: CPU analyzes
    Output: Display prediction
    ```

### Session 3: How Computers Work – Software and Languages

- **Topic**: Software and Code Translation
  - **Why?**: To understand how code runs. Core purpose? Software bridges human instructions to hardware.
  - **Subtopics**:
    - Software: OS (Linux), apps (browsers).
    - Languages: Assembly, high-level (C, Python).
    - Translators: Compiler, interpreter, JIT.
  - **Application**: Explain how Python code becomes machine code.

### Session 4: Version Control – Git Basics

- **Topic**: Tracking Code with Git
  - **Why?**: To manage changes and collaborate. Core purpose? Ensure code integrity.
  - **Subtopics**:
    - Git: Repository, commit, branch.
    - Setup: Install Git, git config.
    - Operations: git init, git add, git commit.
  - **Application**: Initialize a repo and commit a file.
    ```bash
    git init
    git add README.md
    git commit -m "Initial commit"
    ```

### Session 5: Version Control – Branching and Remote

- **Topic**: Collaboration with Git
  - **Why?**: To work in teams. Core purpose? Enable parallel development and sharing.
  - **Subtopics**:
    - Branching: git branch, git switch, git merge.
    - Remote: git clone, git push, git pull.
  - **Application**: Create a branch and push to GitHub.
    ```bash
    git branch feature
    git switch feature
    git push origin feature
    ```

### Session 6: JavaScript – Variables and Types

- **Topic**: JavaScript Foundations
  - **Why?**: To build dynamic systems. Core truth? Variables store data for processing.
  - **Subtopics**:
    - Variables: let, const, var.
    - Types: Number, String, Boolean, null.
  - **Application**: Store solar panel data.
    ```javascript
    let panels = 5;
    const watts = 200;
    console.log(panels * watts); // 1000
    ```

### Session 7: JavaScript – Operators and Control

- **Topic**: Controlling Program Flow
  - **Why?**: To make decisions in code. Core purpose? Direct logic based on conditions.
  - **Subtopics**:
    - Operators: +, -, \*, /, &&, ||.
    - Control: if, else, switch.
  - **Application**: Check if solar output is sufficient.
    ```javascript
    let output = 1000;
    if (output > 800) {
      console.log("Sufficient power");
    } else {
      console.log("Low power");
    }
    ```

### Session 8: JavaScript – Loops and Arrays

- **Topic**: Handling Repetition and Lists
  - **Why?**: To process multiple data points. Core purpose? Automate repetitive tasks.
  - **Subtopics**:
    - Loops: for, while.
    - Arrays: [1, 2, 3], push(), pop().
  - **Application**: Sum traffic sensor data.
    ```javascript
    let sensors = [10, 20, 30];
    let sum = 0;
    for (let i = 0; i < sensors.length; i++) {
      sum += sensors[i];
    }
    console.log(sum); // 60
    ```

### Session 9: JavaScript – Functions

- **Topic**: Modular Code
  - **Why?**: To reuse logic. Core purpose? Break tasks into manageable units.
  - **Subtopics**:
    - Functions: function(), arrow (=>).
    - Parameters: Input values.
  - **Application**: Calculate solar energy.
    ```javascript
    const calculateEnergy = (panels, watts) => panels * watts;
    console.log(calculateEnergy(5, 200)); // 1000
    ```

### Session 10: Asynchronous JavaScript – Callbacks and Promises

- **Topic**: Handling Async Operations
  - **Why?**: To manage time-dependent tasks. Core purpose? Prevent blocking execution.
  - **Subtopics**:
    - Callbacks: Functions as arguments.
    - Promises: .then(), .catch().
  - **Application**: Simulate fetching weather data.
    ```javascript
    const getWeather = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("25°C"), 1000);
      });
    };
    getWeather().then((temp) => console.log(temp));
    ```

### Session 11: Asynchronous JavaScript – Async/Await

- **Topic**: Simplifying Async Code
  - **Why?**: To write cleaner async logic. Core purpose? Make async code readable.
  - **Subtopics**:
    - Async/Await: async function, await keyword.
    - Error Handling: try/catch.
  - **Application**: Fetch tourism app data.
    ```javascript
    async function getData() {
      try {
        let data = await new Promise((r) =>
          setTimeout(() => r("Tourism data"), 1000)
        );
        console.log(data);
      } catch (e) {
        console.log("Error");
      }
    }
    getData();
    ```

### Session 12: ES6+ JavaScript – Destructuring and Scope

- **Topic**: Modern JavaScript Features
  - **Why?**: To write efficient code. Core truth? ES6+ simplifies complex tasks.
  - **Subtopics**:
    - Destructuring: [a, b] = [1, 2].
    - Block Scope: let/const vs. var.
  - **Application**: Extract sensor data.
    ```javascript
    let [s1, s2] = [100, 200];
    console.log(s1 + s2); // 300
    ```

### Session 13: ES6+ JavaScript – Arrays and Classes

- **Topic**: Advanced Data Handling
  - **Why?**: To manage complex data. Core purpose? Enable scalable code.
  - **Subtopics**:
    - Array Methods: .map(), .filter().
    - Classes: class SolarPanel {}.
  - **Application**: Model a solar panel.
    ```javascript
    class SolarPanel {
      constructor(watts) {
        this.watts = watts;
      }
      calculate(panels) {
        return panels * this.watts;
      }
    }
    let panel = new SolarPanel(200);
    console.log(panel.calculate(5)); // 1000
    ```

### Session 14: C Programming – Basics

- **Topic**: Low-Level Programming
  - **Why?**: To control hardware. Core purpose? Direct system interaction.
  - **Subtopics**:
    - Syntax: #include, main().
    - Data Types: int, float, char.
    - I/O: printf(), scanf().
  - **Application**: Check sensor threshold.
    ```c
    #include <stdio.h>
    int main() {
      float sensor;
      printf("Enter sensor value: ");
      scanf("%f", &sensor);
      printf(sensor > 50 ? "Risk\n" : "Safe\n");
      return 0;
    }
    ```

### Session 15: C Programming – Control Structures

- **Topic**: Program Flow in C
  - **Why?**: To make decisions. Core purpose? Direct logic efficiently.
  - **Subtopics**:
    - Control: if, for, while.
    - Operators: ==, >, &&.
  - **Application**: Loop through sensor data.
    ```c
    #include <stdio.h>
    int main() {
      int sensors[] = {10, 20, 30};
      for (int i = 0; i < 3; i++) {
        printf("%d\n", sensors[i]);
      }
      return 0;
    }
    ```

### Session 16: C Programming – Functions

- **Topic**: Modular C Code
  - **Why?**: To reuse logic. Core purpose? Organize tasks.
  - **Subtopics**:
    - Functions: Declaration, definition.
    - Parameters: Pass by value.
  - **Application**: Calculate sensor average.
    ```c
    #include <stdio.h>
    float average(int arr[], int size) {
      float sum = 0;
      for (int i = 0; i < size; i++) sum += arr[i];
      return sum / size;
    }
    int main() {
      int sensors[] = {10, 20, 30};
      printf("%.1f\n", average(sensors, 3));
      return 0;
    }
    ```

### Session 17: C Programming – Arrays and Strings

- **Topic**: Data Structures in C
  - **Why?**: To manage multiple data points. Core purpose? Efficient storage.
  - **Subtopics**:
    - Arrays: int arr[5].
    - Strings: char str[] = "Hello".
  - **Application**: Store traffic data.
    ```c
    #include <stdio.h>
    int main() {
      int sensors[] = {10, 20, 30};
      printf("First: %d\n", sensors[0]);
      return 0;
    }
    ```

### Session 18: C Programming – Pointers

- **Topic**: Memory Management
  - **Why?**: To manipulate memory. Core purpose? Optimize resources.
  - **Subtopics**:
    - Pointers: int \*p, &x.
    - Arithmetic: p++.
  - **Application**: Process sensor data.
    ```c
    #include <stdio.h>
    int main() {
      int sensors[] = {100, 200};
      int *p = sensors;
      printf("%d\n", *p);
      return 0;
    }
    ```

### Session 19: C Programming – Dynamic Memory

- **Topic**: Flexible Memory Allocation
  - **Why?**: To allocate as needed. Core purpose? Prevent waste.
  - **Subtopics**:
    - malloc(), free().
    - Stack vs. Heap.
  - **Application**: Dynamic sensor storage.
    ```c
    #include <stdio.h>
    #include <stdlib.h>
    int main() {
      int *sensors = malloc(2 * sizeof(int));
      sensors[0] = 100;
      printf("%d\n", sensors[0]);
      free(sensors);
      return 0;
    }
    ```

### Session 20: HTML – Structuring Web Content

- **Topic**: Building Webpages
  - **Why?**: To create interfaces. Core purpose? Organize data for display.
  - **Subtopics**:
    - Tags: <div>, <p>, <h1>.
    - Structure: <html>, <body>.
  - **Application**: Create a tourism app page.
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Tourism App</h1>
        <p>Explore destinations!</p>
      </body>
    </html>
    ```

### Session 21: CSS – Styling Web Content

- **Topic**: Visual Design
  - **Why?**: To enhance usability. Core purpose? Control presentation.
  - **Subtopics**:
    - Syntax: selector { property: value; }.
    - Box Model: Margin, padding.
  - **Application**: Style the tourism page.
    ```css
    h1 {
      color: #2c3e50;
      text-align: center;
    }
    p {
      font-size: 18px;
    }
    ```

### Session 22: JavaScript – DOM Manipulation

- **Topic**: Dynamic Webpages
  - **Why?**: To update content live. Core purpose? Enable interactivity.
  - **Subtopics**:
    - Selectors: getElementById().
    - Events: onclick.
  - **Application**: Toggle tourism content.
    ```html
    <h1>Tourism</h1>
    <button onclick="toggle()">Toggle</button>
    <p id="info" style="display:none">Explore!</p>
    <script>
      function toggle() {
        let info = document.getElementById("info");
        info.style.display = info.style.display === "none" ? "block" : "none";
      }
    </script>
    ```

### Session 23: React – Components and State

- **Topic**: Building Web Apps
  - **Why?**: To create scalable UIs. Core purpose? Components simplify interfaces.
  - **Subtopics**:
    - Components: Functional, JSX.
    - State: useState().
  - **Application**: Build a tourism component.
    ```html
    <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/babel-standalone@7/babel.min.js"></script>
    <div id="root"></div>
    <script type="text/babel">
      const Spot = () => {
        const [show, setShow] = React.useState(false);
        return (
          <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <p>Explore!</p>}
          </div>
        );
      };
      ReactDOM.render(<Spot />, document.getElementById("root"));
    </script>
    ```

### Session 24: React – Hooks and Routing

- **Topic**: Managing React Apps
  - **Why?**: To handle dynamic data. Core purpose? Drive interactivity.
  - **Subtopics**:
    - Hooks: useState, useEffect.
    - Routing: React Router.
  - **Application**: Create a multi-page tourism app.
    ```html
    <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/umd/react-router-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/babel-standalone@7/babel.min.js"></script>
    <div id="root"></div>
    <script type="text/babel">
      const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;
      const Home = () => <h1>Home</h1>;
      const Spot = () => <h1>Explore</h1>;
      const App = () => (
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> | <Link to="/spot">Spot</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spot" element={<Spot />} />
          </Routes>
        </BrowserRouter>
      );
      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
    ```

### Session 25: C Project – Calculator

- **Topic**: Building a C Program
  - **Why?**: To apply C concepts. Core purpose? Solve practical problems.
  - **Subtopics**:
    - Combine: Functions, arrays, I/O.
    - Logic: Switch for operations.
  - **Application**: Build a calculator.
    ```c
    #include <stdio.h>
    float calculate(float a, float b, char op) {
      switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        default: return 0;
      }
    }
    int main() {
      float a, b;
      char op;
      scanf("%f %f %c", &a, &b, &op);
      printf("%.2f\n", calculate(a, b, op));
      return 0;
    }
    ```

### Session 26: Web Project – Student Dashboard

- **Topic**: Full Web Development
  - **Why?**: To integrate front-end skills. Core purpose? Deliver functional UIs.
  - **Subtopics**:
    - HTML: Structure.
    - CSS: Style.
    - JS: Interactivity.
  - **Application**: Build a dashboard.
    ```html
    <style>
      h1 {
        text-align: center;
      }
      button {
        margin: 10px;
      }
    </style>
    <h1>Dashboard</h1>
    <button onclick="update()">Update</button>
    <p id="data">Scores: 90</p>
    <script>
      function update() {
        document.getElementById("data").innerText = "Scores: 95";
      }
    </script>
    ```

### Session 27: React Project – Progress Tracker

- **Topic**: Optimized React App
  - **Why?**: To build efficient apps. Core purpose? Ensure performance.
  - **Subtopics**:
    - Hooks: useMemo.
    - Optimization: Prevent re-renders.
  - **Application**: Build a tracker.
    ```html
    <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/babel-standalone@7/babel.min.js"></script>
    <div id="root"></div>
    <script type="text/babel">
      const Tracker = () => {
        const [scores, setScores] = React.useState([90]);
        const avg = React.useMemo(
          () => scores.reduce((s, v) => s + v, 0) / scores.length,
          [scores]
        );
        return (
          <div>
            <h1>Avg: {avg}</h1>
            <button onClick={() => setScores([...scores, 95])}>Add</button>
          </div>
        );
      };
      ReactDOM.render(<Tracker />, document.getElementById("root"));
    </script>
    ```

### Session 28: Revision – C and JavaScript

- **Topic**: Consolidating Core Skills
  - **Why?**: To reinforce programming. Core purpose? Build confidence.
  - **Subtopics**:
    - C: Functions, pointers.
    - JS: Async, arrays.
  - **Application**: Refactor a sensor program in C and JS.

### Session 29: Project Showcase – Full Application

- **Topic**: Building a Complete Solution
  - **Why?**: To apply all skills. Core purpose? Solve real problems.
  - **Subtopics**:
    - Combine: C, JS, React.
    - Present: Traffic or tourism app.
  - **Application**: Teams present a project (e.g., “Smart Traffic System”).

### Session 30: Farewell and Future Vision

- **Topic**: Reflect and Inspire
  - **Why?**: To celebrate growth. Core purpose? Motivate future engineering.
  - **Subtopics**:
    - Share: “How rfSE Club Made Me an Engineer.”
    - Vision: Building a tech-driven future by 2030.

---

## Expected Outcomes

- **Coding**: Students will write efficient C and JavaScript programs.
- **Version Control**: Students will manage code with Git and collaborate on GitHub.
- **Web Development**: Students will build responsive webpages with HTML, CSS, and JS.
- **React**: Students will create scalable web apps with optimized performance.
- **Low-Level Programming**: Students will control hardware and manage memory in C.
- **Problem-Solving**: Students will design algorithms for real-world challenges.
- **Leadership**: Students will lead and present tech projects confidently.

---

## Why This Curriculum?

- **First-Principles Approach**: Each concept is broken down to its core purpose (e.g., why code? To solve problems efficiently).
- **Engineering Focus**: Tailored for 10th-12th graders to become genius engineers, with practical applications (e.g., traffic systems).
- **Lean and Efficient**: 30 sessions, removing redundancy (e.g., merged computer fundamentals).
- **Real-World Applications**: Focuses on relevant challenges (e.g., tourism, traffic).
- **Holistic Development**: Balances coding (C, JS) with modern tools (React, Git), preparing students for global tech roles.
