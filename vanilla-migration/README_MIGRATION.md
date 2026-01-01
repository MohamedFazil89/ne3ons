# Project Migration to HTML/CSS/JS

This directory contains the successfully converted project from React/Vite to vanilla HTML, CSS, and JavaScript.

## Directory Structure
- `index.html` - The main Home page.
- `projects.html` - The All Projects page.
- `style.css` - Consolidated styles from all React components and global styles.
- `script.js` - Handles all logic including animations, mobile menu, and loading screen.
- `assets/` - Contains project images and logos.

## How to Run
Simply open `index.html` in your web browser. No server or build process is required.

## Notes
- **Icons**: Replaced `react-icons` with [Feather Icons](https://feathericons.com/) via CDN to maintain a lightweight, no-build setup.
- **Animations**: The specific "typing" animation and "loading screen" sequence have been faithfully recreated in `script.js`.
- **Data**: Project data that was previously in a valid JS object is now embedded directly in the HTML for `projects.html`.
