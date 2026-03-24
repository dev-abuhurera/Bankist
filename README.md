# 🏦 Bankist — Advanced DOM Manipulation Project

<img width="1788" height="931" alt="image" src="https://github.com/user-attachments/assets/f9521cbe-d110-42dd-ac63-1df579a1304a" />

A modern, interactive banking landing page built to explore and apply advanced JavaScript DOM concepts. This project is a hands-on deep dive into how JavaScript can bring a webpage fully to life — from smooth scrolling and lazy loading to intersection observers and dynamic UI components.

---

## 🚀 Live Features

- **Modal Window** — Open/close an account signup modal via buttons, overlay click, or the `Escape` key
- **Smooth Scrolling** — The "Learn More" button scrolls to Section 1 using the modern `scrollIntoView` API
- **Tabbed Component** — An operations section with three tabs, each revealing different content using event delegation
- **Navigation Fade Effect** — Hovering over a nav link fades out all sibling links and the logo using `bind()` to pass arguments into event handlers
- **Sticky Navigation** — The navbar sticks to the top once the header scrolls out of view, powered by the Intersection Observer API
- **Section Reveal on Scroll** — Sections animate into view as the user scrolls down, using the Intersection Observer API
- **Lazy Loading Images** — Low-res placeholder images swap to full-res only when they enter the viewport, improving initial page load performance
- **Image Slider** — A fully functional image/testimonial slider with left/right buttons, dot navigation, and keyboard arrow key support

---

## 🧠 Core JavaScript Concepts Covered

<img width="1812" height="944" alt="image" src="https://github.com/user-attachments/assets/5e20c0fe-cd33-4b31-bdcd-33332ad20a4f" />

### 📌 DOM Selection & Manipulation
Selecting elements using `querySelector`, `querySelectorAll`, and traversing the DOM tree with `.closest()`, `.children`, `.childNodes`, and `.firstElementChild`.

### 🎯 Event Handling & Delegation
Instead of attaching individual event listeners to every element, event delegation is used throughout — attaching a single listener to a parent and identifying the target using `.classList.contains()` and `.closest()`. This is used for nav links, tabs, and the slider dots.

### 🫧 Event Bubbling & Propagation
Explored how events bubble up through the DOM. Commented-out examples demonstrate random background color propagation through `.nav__link` → `.nav__links` → `.nav` to visualize the concept.

### 🔁 The Intersection Observer API
Used in three key places:
- **Sticky nav** — Observes the `header` and toggles the `sticky` class on the navbar
- **Section reveal** — Adds/removes a `section--hidden` class as sections enter the viewport
- **Lazy image loading** — Swaps `data-src` into `src` when an image is about to enter the viewport, with a `rootMargin` buffer for early loading

### 🎨 CSS Class Toggling
All visual state changes (active tabs, hidden modals, sticky nav, revealed sections) are managed by adding/removing CSS classes from JavaScript — keeping styling in CSS and logic in JS.

### 🔗 Passing Arguments to Event Handlers via `bind()`
The nav hover fade effect uses `Function.prototype.bind()` to pass the opacity value (`0.5` or `1`) as `this` into the handler, avoiding wrapper functions.

### 📐 getBoundingClientRect & Scroll Coordinates
The scroll button section demonstrates manual scroll coordinate calculation using `getBoundingClientRect()`, `window.scrollX/Y`, and viewport dimensions — alongside the modern `scrollIntoView({ behavior: 'smooth' })` approach.

---

## 🗂️ Project Structure

```
bankist/
├── index.html        # Main HTML structure
├── style.css         # All styling and animations
└── script.js         # All JavaScript logic
```

---

## 🛠️ How to Run

No build tools or dependencies required. Just open `index.html` in any modern browser.

```bash
# Clone the repo
git clone https://github.com/your-username/bankist.git

# Open in browser
open index.html
```

---

## 💡 Key Takeaways

- The Intersection Observer API is far more performant than scroll event listeners for detecting element visibility.
- Event delegation reduces memory usage and handles dynamically created elements automatically.
- Keeping DOM manipulation purely through CSS class toggling makes code cleaner and easier to debug.
- `bind()` is a clean way to pass data into event handlers without closures or wrapper functions.

---

## 📚 Built While Learning

This project was built as part of learning **Advanced DOM & Events** in JavaScript. It covers real-world patterns used in production websites and serves as a reference for common UI interactions implemented from scratch — no libraries, no frameworks, just vanilla JS.

---
