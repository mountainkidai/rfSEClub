# Programming Curriculum for rfSE Club (First-Principles Approach)

## Overview

The rfSE Club programming curriculum, designed by MountainKid AI, equips 10th-12th grade students to become genius engineers by mastering programming fundamentals, modern tools, and problem-solving through first-principles thinking. We break down each concept to its core purpose, question traditional teaching methods, and rebuild a lean curriculum focused on practical, real-world applications. This curriculum emphasizes coding, version control, web development, and low-level programming with Rust, ensuring students can build scalable solutions, lead teams, and drive a tech-driven future by 2030.

## Curriculum Schedule (30 Sessions)

### Session 1: Introduction to Programming for Engineers

**Topic**: Why Programming Matters  
**Why?**: Programming solves problems and automates systems. Core purpose? To instruct machines to execute tasks efficiently.  
**Subtopics**:
  # Tools
- **Laptop Setup Guide**

##  Preferred Laptop
- **MacBook Air M4** *(Preferred)*
- If not MacBook, choose any laptop with:
  - **16GB RAM**
  - **250GB SSD**
  - **OS:** Linux Ubuntu
    - For better speed, replace **GNOME** with **XFCE**

---

##  Accounts to Create / Have
- **Gmail account**
  - Preferred username: `trinadhsuroju`
  - Avoid usernames like: `trinadhindia`
- [Canva](https://www.canva.com/)
- [GitHub](https://github.com/)
- [Typing Bolt](https://typingbolt.com/)
- [Netlify](https://www.netlify.com/) *(For hosting)*
- [Vercel](https://vercel.com/) *(For hosting)*

---

##  Browsers
- Chrome *(Recommended)*
- Arc *(Optional)*
- Brave *(Optional)*

---

## Must-Have Apps (Mobile & Desktop)
- [Slack](https://slack.com/intl/en-in/help/articles/212681477-Sign-in-to-Slack) *(Mobile app + Browser version)*
- [Google Calendar](https://calendar.google.com/)
- [BeeKeeper Studio](https://www.beekeeperstudio.io/)
- [AWS Account](https://aws.amazon.com/)
- [Jira](https://www.atlassian.com/software/jira)
- [Confluence](https://www.atlassian.com/software/confluence)
- [PostHog](https://posthog.com/)

---

##  Software to Install
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)
- [Vim Editor](https://www.vim.org/)

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

**Topic**: Understanding Computers  
**Why?**: To know the machine you program. Core truth? Computers process inputs into outputs via memory and logic.  
**Subtopics**:

- **Input/Output**: Keyboard, display.
- **Memory**: RAM (volatile), HDD/SSD (non-volatile).
- **CPU**: Clock speed, cores.
- **Binary**: 0s and 1s, machine code.  
  **Application**: Diagram a computer’s flow for a traffic app.

```plaintext
Input: Traffic sensor data
Memory: Store in RAM
Processing: CPU analyzes
Output: Display prediction
```

### Session 3: How Computers Work – Software and Languages

**Topic**: Software and Code Translation  
**Why?**: To understand how code runs. Core purpose? Software bridges human instructions to hardware.  
**Subtopics**:

- **Software**: OS (Linux), apps (browsers).
- **Languages**: Assembly, high-level (Rust, Python).
- **Translators**: Compiler, interpreter, JIT.  
  **Application**: Explain how Rust code becomes machine code.

### Session 4: Version Control – Git Basics

**Topic**: Tracking Code with Git  
**Why?**: To manage changes and collaborate. Core purpose? Ensure code integrity.  
**Subtopics**:

- **Git**: Repository, commit, branch.
- **Setup**: Install Git, git config.
- **Operations**: git init, git add, git commit.  
  **Application**: Initialize a repo and commit a file.

```bash
git init
git add README.md
git commit -m "Initial commit"
```

### Session 5: Version Control – Branching and Remote

**Topic**: Collaboration with Git  
**Why?**: To work in teams. Core purpose? Enable parallel development and sharing.  
**Subtopics**:

- **Branching**: git branch, git switch, git merge.
- **Remote**: git clone, git push, git pull.  
  **Application**: Create a branch and push to GitHub.

```bash
git branch feature
git switch feature
git push origin feature
```

### Session 6: JavaScript – Variables and Types

**Topic**: JavaScript Foundations  
**Why?**: To build dynamic systems. Core truth? Variables store data for processing.  
**Subtopics**:

- **Variables**: let, const, var.
- **Types**: Number, String, Boolean, null.  
  **Application**: Store solar panel data.

```javascript
let panels = 5;
const watts = 200;
console.log(panels * watts); // 1000
```

### Session 7: JavaScript – Operators and Control

**Topic**: Controlling Program Flow  
**Why?**: To make decisions in code. Core purpose? Direct logic based on conditions.  
**Subtopics**:

- **Operators**: +, -, \*, /, &&, ||.
- **Control**: if, else, switch.  
  **Application**: Check if solar output is sufficient.

```javascript
let output = 1000;
if (output > 800) {
  console.log("Sufficient power");
} else {
  console.log("Low power");
}
```

### Session 8: JavaScript – Loops and Arrays

**Topic**: Handling Repetition and Lists  
**Why?**: To process multiple data points. Core purpose? Automate repetitive tasks.  
**Subtopics**:

- **Loops**: for, while.
- **Arrays**: [1, 2, 3], push(), pop().  
  **Application**: Sum traffic sensor data.

```javascript
let sensors = [10, 20, 30];
let sum = 0;
for (let i = 0; i < sensors.length; i++) {
  sum += sensors[i];
}
console.log(sum); // 60
```

### Session 9: JavaScript – Functions

**Topic**: Modular Code  
**Why?**: To reuse logic. Core purpose? Break tasks into manageable units.  
**Subtopics**:

- **Functions**: function(), arrow (=>).
- **Parameters**: Input values.  
  **Application**: Calculate solar energy.

```javascript
const calculateEnergy = (panels, watts) => panels * watts;
console.log(calculateEnergy(5, 200)); // 1000
```

### Session 10: Asynchronous JavaScript – Callbacks and Promises

**Topic**: Handling Async Operations  
**Why?**: To manage time-dependent tasks. Core purpose? Prevent blocking execution.  
**Subtopics**:

- **Callbacks**: Functions as arguments.
- **Promises**: .then(), .catch().  
  **Application**: Simulate fetching weather data.

```javascript
const getWeather = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("25°C"), 1000);
  });
};
getWeather().then((temp) => console.log(temp));
```

### Session 11: Asynchronous JavaScript – Async/Await

**Topic**: Simplifying Async Code  
**Why?**: To write cleaner async logic. Core purpose? Make async code readable.  
**Subtopics**:

- **Async/Await**: async function, await keyword.
- **Error Handling**: try/catch.  
  **Application**: Fetch tourism app data.

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

**Topic**: Modern JavaScript Features  
**Why?**: To write efficient code. Core truth? ES6+ simplifies complex tasks.  
**Subtopics**:

- **Destructuring**: [a, b] = [1, 2].
- **Block Scope**: let/const vs. var.  
  **Application**: Extract sensor data.

```javascript
let [s1, s2] = [100, 200];
console.log(s1 + s2); // 300
```

### Session 13: ES6+ JavaScript – Arrays and Classes

**Topic**: Advanced Data Handling  
**Why?**: To manage complex data. Core purpose? Enable scalable code.  
**Subtopics**:

- **Array Methods**: .map(), .filter().
- **Classes**: class SolarPanel {}.  
  **Application**: Model a solar panel.

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

### Session 14: Rust Programming – Basics

**Topic**: Low-Level Programming with Rust  
**Why?**: To control hardware with safety. Core purpose? Direct system interaction with memory safety.  
**Subtopics**:

- **Syntax**: fn main(), println!().
- **Data Types**: i32, f32, String.
- **I/O**: println!(), std::io for input.  
  **Application**: Check sensor threshold.

```rust
use std::io::{self, Write};

fn main() {
    print!("Enter sensor value: ");
    io::stdout().flush().unwrap();
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let sensor: f32 = input.trim().parse().unwrap_or(0.0);
    if sensor > 50.0 {
        println!("Risk");
    } else {
        println!("Safe");
    }
}
```

### Session 15: Rust Programming – Control Structures

**Topic**: Program Flow in Rust  
**Why?**: To make decisions. Core purpose? Direct logic efficiently.  
**Subtopics**:

- **Control**: if, for, while.
- **Operators**: ==, >, &&.  
  **Application**: Loop through sensor data.

```rust
fn main() {
    let sensors = [10, 20, 30];
    for sensor in sensors.iter() {
        println!("{}", sensor);
    }
}
```

### Session 16: Rust Programming – Functions

**Topic**: Modular Rust Code  
**Why?**: To reuse logic. Core purpose? Organize tasks.  
**Subtopics**:

- **Functions**: fn keyword, return values.
- **Parameters**: Type annotations.  
  **Application**: Calculate sensor average.

```rust
fn average(arr: &[i32]) -> f32 {
    let sum: i32 = arr.iter().sum();
    sum as f32 / arr.len() as f32
}

fn main() {
    let sensors = [10, 20, 30];
    println!("{:.1}", average(&sensors)); // 20.0
}
```

### Session 17: Rust Programming – Arrays and Strings

**Topic**: Data Structures in Rust  
**Why?**: To manage multiple data points. Core purpose? Efficient storage.  
**Subtopics**:

- **Arrays**: [i32; 5].
- **Strings**: String vs. &str.  
  **Application**: Store traffic data.

```rust
fn main() {
    let sensors = [10, 20, 30];
    println!("First: {}", sensors[0]);
    let message = String::from("Traffic data");
    println!("{}", message);
}
```

### Session 18: Rust Programming – Ownership and Borrowing

**Topic**: Memory Management in Rust  
**Why?**: To ensure safety without a garbage collector. Core purpose? Prevent memory errors.  
**Subtopics**:

- **Ownership**: Rules of ownership.
- **Borrowing**: &x, &mut x.  
  **Application**: Process sensor data safely.

```rust
fn process(data: &i32) {
    println!("Data: {}", data);
}

fn main() {
    let sensors = [100, 200];
    process(&sensors[0]);
}
```

### Session 19: Rust Programming – Structs and Enums

**Topic**: Custom Data Types in Rust  
**Why?**: To model complex data. Core purpose? Organize data safely.  
**Subtopics**:

- **Structs**: struct Sensor {}.
- **Enums**: enum Status {}.  
  **Application**: Model a sensor with status.

```rust
enum Status {
    Active,
    Inactive,
}

struct Sensor {
    value: i32,
    status: Status,
}

fn main() {
    let sensor = Sensor {
        value: 100,
        status: Status::Active,
    };
    println!("Sensor value: {}", sensor.value);
}
```

### Session 20: HTML – Structuring Web Content

**Topic**: Building Webpages  
**Why?**: To create interfaces. Core purpose? Organize data for display.  
**Subtopics**:

- **Tags**: <div>, <p>, <h1>.
- **Structure**: <html>, <body>.  
  **Application**: Create a tourism app page.

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

**Topic**: Visual Design  
**Why?**: To enhance usability. Core purpose? Control presentation.  
**Subtopics**:

- **Syntax**: selector { property: value; }.
- **Box Model**: Margin, padding.  
  **Application**: Style the tourism page.

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

**Topic**: Dynamic Webpages  
**Why?**: To update content live. Core purpose? Enable interactivity.  
**Subtopics**:

- **Selectors**: getElementById().
- **Events**: onclick.  
  **Application**: Toggle tourism content.

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

**Topic**: Building Web Apps  
**Why?**: To create scalable UIs. Core purpose? Components simplify interfaces.  
**Subtopics**:

- **Components**: Functional, JSX.
- **State**: useState().  
  **Application**: Build a tourism component.

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

**Topic**: Managing React Apps  
**Why?**: To handle dynamic data. Core purpose? Drive interactivity.  
**Subtopics**:

- **Hooks**: useState, useEffect.
- **Routing**: React Router.  
  **Application**: Create a multi-page tourism app.

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

### Session 25: Rust Project – Calculator

**Topic**: Building a Rust Program  
**Why?**: To apply Rust concepts. Core purpose? Solve practical problems.  
**Subtopics**:

- **Combine**: Functions, I/O.
- **Logic**: Match for operations.  
  **Application**: Build a calculator.

```rust
use std::io::{self, Write};

fn calculate(a: f32, b: f32, op: char) -> f32 {
    match op {
        '+' => a + b,
        '-' => a - b,
        _ => 0.0,
    }
}

fn main() {
    print!("Enter two numbers and an operator (e.g., 5 3 +): ");
    io::stdout().flush().unwrap();
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let parts: Vec<&str> = input.trim().split_whitespace().collect();
    let a: f32 = parts[0].parse().unwrap_or(0.0);
    let b: f32 = parts[1].parse().unwrap_or(0.0);
    let op: char = parts[2].chars().next().unwrap_or('+');
    println!("Result: {:.2}", calculate(a, b, op));
}
```

### Session 26: Web Project – Student Dashboard

**Topic**: Full Web Development  
**Why?**: To integrate front-end skills. Core purpose? Deliver functional UIs.  
**Subtopics**:

- **HTML**: Structure.
- **CSS**: Style.
- **JS**: Interactivity.  
  **Application**: Build a dashboard.

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

**Topic**: Optimized React App  
**Why?**: To build efficient apps. Core purpose? Ensure performance.  
**Subtopics**:

- **Hooks**: useMemo.
- **Optimization**: Prevent re-renders.  
  **Application**: Build a tracker.

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

### Session 28: Revision – Rust and JavaScript

**Topic**: Consolidating Core Skills  
**Why?**: To reinforce programming. Core purpose? Build confidence.  
**Subtopics**:

- **Rust**: Functions, ownership.
- **JS**: Async, arrays.  
  **Application**: Refactor a sensor program in Rust and JS.

### Session 29: Project Showcase – Full Application

**Topic**: Building a Complete Solution  
**Why?**: To apply all skills. Core purpose? Solve real problems.  
**Subtopics**:

- **Combine**: Rust, JS, React.
- **Present**: Traffic or tourism app.  
  **Application**: Teams present a project (e.g., “Smart Traffic System”).

### Session 30: Farewell and Future Vision

**Topic**: Reflect and Inspire  
**Why?**: To celebrate growth. Core purpose? Motivate future engineering.  
**Subtopics**:

- **Share**: “How rfSE Club Made Me an Engineer.”
- **Vision**: Building a tech-driven future by 2030.

## Expected Outcomes

- **Coding**: Students will write efficient Rust and JavaScript programs.
- **Version Control**: Students will manage code with Git and collaborate on GitHub.
- **Web Development**: Students will build responsive webpages with HTML, CSS, and JS.
- **React**: Students will create scalable web apps with optimized performance.
- **Low-Level Programming**: Students will control hardware and manage memory safely in Rust.
- **Problem-Solving**: Students will design algorithms for real-world challenges.
- **Leadership**: Students will lead and present tech projects confidently.

## Why This Curriculum?

- **First-Principles Approach**: Each concept is broken down to its core purpose (e.g., why code? To solve problems efficiently).
- **Engineering Focus**: Tailored for 10th-12th graders to become genius engineers, with practical applications (e.g., traffic systems).
- **Lean and Efficient**: 30 sessions, removing redundancy (e.g., merged computer fundamentals).
- **Real-World Applications**: Focuses on relevant challenges (e.g., tourism, traffic).
- **Holistic Development**: Balances coding (Rust, JS) with modern tools (React, Git), preparing students for global tech roles.
