# 📝 Blog Preview Card

A modern, responsive blog preview card component built with React. This project showcases clean component architecture, semantic HTML, and beautiful CSS styling with smooth hover effects

[🔗 **LIVE URL**](https://bhavikthakur.github.io/blog-preview-card/)

## 🌟 Features

- 🎨 Modern Design - Clean, minimalist card layout with subtle shadows and rounded corners

- 📱 Fully Responsive - Adapts beautifully from mobile to desktop screens

- ⚡ Smooth Interactions - Elegant hover and focus states with CSS transitions

- 🧩 Component Architecture - Modular React components with proper prop validation

- 🎯 Performance Optimized - Lazy loading images and optimized font loading

## 📸 Screenshots

![Desktop View](design/desktop-design.jpg)

![Mobile view](design/mobile-design.jpg)

## 🛠️ Built With

- React 18 - Modern React with functional components and hooks

- CSS3 - Custom properties, Flexbox, and responsive design

- PropTypes - Runtime type checking for React props

- Create React App - Zero-configuration React setup

## 🏗️ Project Structure

```src/
├── components/
│ └── Card/
│ ├── index.js # Barrel exports
│ ├── Card.js # Main card container
│ ├── Header.js # Card header with image and tag
│ ├── Main.js # Card content area
│ └── Footer.js # Card footer with author
├── assets/
│ ├── fonts/
│ │ └── static/
│ │ ├── Figtree-Medium.ttf
│ │ └── Figtree-ExtraBold.ttf
│ └── images/
│ ├── illustration-article.svg
│ └── image-avatar.webp
├── App.js
├── index.js
└── index.css
```

## ⚙️ Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/your-username/blog-preview-card.git
cd blog-preview-card
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm start
```

4. Build for production

```bash
npm run build
```

## 🎨 Design Decisions

### Color Palette

```--clr-yellow-500: hsl(47, 88%, 63%)   /* Primary accent */
--clr-white-200: hsl(0, 0%, 100%)       /* Card background */
--clr-grey-500: hsl(0, 0%, 42%)       /* Secondary text */
--clr-grey-900: hsl(0, 0%, 7%)        /* Primary text */
```

### Typography

- **Font Family:** Figtree (Google Fonts)

- **Weights:** 500 (Medium), 900 (Extra Bold)

- **Responsive scaling:** 0.85rem mobile → 1rem desktop

### Component Architecture

- **Separation of Concerns:** Each component handles a specific part of the card

- **Prop Validation:** All components use PropTypes for type safety

- **Reusability:** Components are designed to be easily reusable

- **Accessibility:** Semantic HTML and proper ARIA attributes

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Frontend Mentor for the design challenge

- Google Fonts for the Figtree font family

- React community for excellent documentation and resources

## 👨‍💻 Author

#### Bhavik Thakur

[Github](https://github.com/bhavikthakur) | [LinkedIn](https://www.linkedin.com/in/bhavik-thakur/)

⭐ If you found this project helpful, please give it a star! ⭐
