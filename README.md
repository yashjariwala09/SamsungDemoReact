# Samsung Product Showcase Website

This project is a React-based product showcase website, featuring Samsung products with an interactive UI. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Overview

This application is a product catalog and showcase website with the following features:
- Interactive product sliders and carousels
- Featured product displays with category navigation
- Explore section with animations
- Event widget display
- Search functionality
- Responsive header and footer

## Technology Stack

- React 16.8.6
- Styled Components
- React Slick for carousels
- React Owl Carousel
- Bootstrap 4 for grid layout
- Ant Design UI components

## Project Structure

The project follows a component-based architecture:
- `/src/Components` - Contains reusable UI components
  - `/Header` - Navigation components
  - `/FeturedProduct` - Product showcase with sliders
  - `/Image-slider` - Main image carousel
  - `/Explore` - Interactive product discovery
  - `/Events` - Event listings and promotions
  - `/Search` - Search functionality
  - `/Footer` - Footer components
  - `/Cards` - Product card components
- `/src/Containers` - Container components
  - `/Home` - Main page container
  - `/FeaturePage` - Product feature page
- `/src/assets` - Static assets and images

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs ESLint to check for code style and formatting issues. The project uses Airbnb's ESLint configuration.

## Code Features

- Component composition for UI elements
- Data configuration files for components (DataConfig.js, SliderDataConfig.js, etc.)
- Styled Components for component-specific styling
- Animation effects using keyframes and CSS transitions
- Responsive design for various device sizes

## Learn More

You can learn more about the core technologies used:

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [React Slick](https://react-slick.neostack.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Ant Design](https://ant.design/)
