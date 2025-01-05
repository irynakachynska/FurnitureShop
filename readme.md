# Furniture Frontend Shop

This is a responsive frontend shop for furniture built using ReactJS, HTML, and CSS. The project showcases various furniture items and allows users to browse and search for products.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

To get a local copy up and running, follow these simple steps.

1. Clone the repo

```bash
git clone git@github.com:irynakachynska/FurnitureShop.git
cd FurnitureShop
```
2. Install dependencies:

```bash
npm install
```
3. Start the development server:

```bash
npm run dev
```
Once started, the project will be available at:
http://localhost:3000/

## Usage
To use this project, follow these steps:

1. Run the application:
```bash
npm run dev
```
2. Open the app in your browser at:
http://localhost:3000/

3. Explore the features:

- Use the navigation bar to select categories.
- Add items to your shopping cart.
- View product details by clicking on the item image.
- Check the total cost of items in the cart in real-time.

4. Modify the product catalog:

Update the items array in App.js to add new products or adjust the existing ones.

## Features
 Here are the key features of this project:

- Category Selection: Quickly browse furniture by categories like "Sofas," "Mirrors," "Tables," and more.
- Interactive Shopping Cart: Add, view, and remove products, with real-time total price updates.
- Responsive Design: The app adapts seamlessly to different screen sizes, ensuring usability on both desktops and mobile devices.
- Product Details Modal: View an expanded view of product details in an elegant modal window.
- Customizable Catalog: Update the product list directly in the code.

## Contributing
We welcome contributions to make this project even better!
## How to Contribute:
1. Fork the repository:
```bash
git fork https:github.com/irynakachynska/FurnitureShop
```
1. Clone your fork:
```bash
git clone git@github.com:your-username/FurnitureShop.git
cd FurnitureShop
```
3. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```
4. Make your changes and commit them:
```bash
git commit -m "Add description of your feature"
```
5. Push your changes to GitHub:
```bash
git push origin feature/your-feature-name
```
6. Open a Pull Request (PR) with a detailed description of your changes.

## Technical Stack:
 This project was built using the following technologies:
- ReactJS: Used for building the interactive user interface and managing the application state with hooks like useState.
- HTML: Created the basic structure and layout of the page using HTML5.
- CSS: Applied custom styles to ensure a visually appealing and responsive design.
- npm: Managed project dependencies and ran scripts like npm install and npm run dev.
## Challenges and Solutions:
Here are some challenges I faced during development and how I solved them:

1. Managing Shopping Cart State:

- Challenge: Initially, I struggled with managing the shopping cart state and ensuring that the correct items were added and removed.
- Solution: I used React's useState hook to track cart items and update the state in real time as users interact with the cart.
2. Responsive Design:

- Challenge: Ensuring the application was responsive across all screen sizes was difficult, especially optimizing the layout for mobile devices.
- Solution: I used CSS media queries to create a fluid layout that adapts to different screen widths, ensuring the app remains user-friendly on both desktops and mobile devices.
3. Dynamic Product Catalog:

- Challenge: Initially, the product catalog was hardcoded, making it difficult to add or update products without modifying the code.
- Solution: I organized the product data into an array in App.js, allowing for easy updates by simply changing the array values.




## Contact
If you have any questions or suggestions, feel free to reach out:

- Email: iruna.kachunska@gmail.com
 
