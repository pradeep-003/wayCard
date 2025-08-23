# wayCard

wayCard is a modern React application built with Vite, GSAP, and Tailwind CSS. It showcases animated card backgrounds, swinging pendulum effects, and dynamic star animations. The project is designed for learning, prototyping, and as a foundation for interactive UI experiences.

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Animated Card Backgrounds:** Infinite left-to-right scrolling backgrounds using GSAP.
- **Pendulum Card Animation:** Realistic swinging card effect.
- **Star Sequence Animation:** Stars appear and disappear in a choreographed sequence.
- **Responsive Design:** Mobile-first layout with Tailwind CSS.
- **Customizable Assets:** Easily swap images for backgrounds, strips, and stars.
- **Clean Component Structure:** Modular React components for easy maintenance.

---

## Screenshots

> _Add screenshots of your app here!_
>
> ![Demo Screenshot](./public/assets/demo-screenshot.png)

---

## Tech Stack

- **React** – UI library
- **Vite** – Fast development server and build tool
- **GSAP** – Animation library
- **Tailwind CSS** – Utility-first CSS framework

---

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/wayCard.git
   cd wayCard
   ```

2. **Install dependencies**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Visit [http://localhost:5173](http://localhost:5173)

---

## Usage

- The main UI is in `src/Components/Card.jsx`.
- Edit images in `public/assets/` to change visuals.
- Modify GSAP code in `Card.jsx` for custom animations.

---

## Project Structure

```
wayCard/
├── public/
│   └── assets/
│       ├── card.png
│       ├── sam.png
│       ├── id.png
│       ├── short-strip.png
│       ├── large-strip.png
│       ├── star.png
│       └── ...other images
├── src/
│   └── Components/
│       ├── Card.jsx
│       ├── Base.jsx
│       └── ...other components
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## Customization

- **Change Images:** Replace files in `public/assets/`.
- **Edit Animations:** Update GSAP logic in `Card.jsx`.
- **Styling:** Use Tailwind utility classes for rapid design changes.

---

## Troubleshooting

- **Images not loading:** Check file paths and ensure images are in `public/assets/`.
- **GSAP animation issues:** Make sure elements have correct class names and refs.
- **Tailwind classes not working:** Restart dev server after changing config.

---

## Contributing

Pull requests and suggestions are welcome!  
Please open an issue to discuss changes before submitting PRs.

---

## License

This project is licensed under the MIT License.

---

## Author

Made by [Pradeep](https://github.com/pradeeep-003)
