# FigmaPages

A website that displays Figma designs as cards with copy-to-clipboard functionality on hover. This project is based on a Figma design and allows users to easily copy SVG code from the displayed designs.

## Features

- Display Figma designs as cards
- Copy SVG code to clipboard with a single click
- Filter designs by categories (Web, Mobile, AI, etc.)
- Search functionality to find specific designs
- Responsive design

## Technologies Used

- React
- Styled Components
- Vite
- react-copy-to-clipboard
- react-feather (for icons)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`

## Usage

- Browse the collection of Figma designs
- Use the filter tags at the top to narrow down designs by category
- Use the search box to find specific designs
- Hover over any design card to reveal the Copy button
- Click on "Copy" to copy the SVG code to your clipboard, which you can then use in your projects

## Project Structure

```
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DesignCard.jsx
│   │   └── Header.jsx
│   ├── data/
│   │   └── designs.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

This project is for demonstration purposes only. 