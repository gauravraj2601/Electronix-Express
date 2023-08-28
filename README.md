# gusty-adjustment-6018
- Deployed Link : elctronix-express-k74afyg3e-ganeshgourav.vercel.app
# Electronix Online Shop Web Application

Welcome to Express Electronix! This application is built using React and Redux to provide users with a seamless shopping experience for electronic items. With a user-friendly interface, user and admin authentication, and various features, this app aims to revolutionize online electronic shopping. Read on to learn more about its components, features, and how to get started.

## Table of Contents

- [Features](#features)
- [Components](#components)
- [Authentication](#authentication)
- [Admin Panel](#admin-panel)
- [API](#api)
- [Contributors](#contributors)
- [Deployment](#deployment)

## Features

- User and admin authentication system.
- Browse and purchase a wide range of electronic items.
- Efficient admin panel for product management.
- Interactive product pages with detailed information.
- Shopping cart and wishlist functionality for users.

## Components

1. **Homepage**
   - A captivating landing page that welcomes users and introduces the app's offerings.

2. **Product Listing Page**
   - Displays a grid of electronic items available for purchase.
   - Users can filter products by category, company, and price range.
   - Integrated sidebar for refining search criteria.

3. **Product Details Page**
   - Presents comprehensive information about a selected product.
   - Allows users to add the product to their cart or wishlist.

4. **Cart Page**
   - Shows a summary of items added to the shopping cart.
   - Users can adjust quantities, proceed to checkout, or continue shopping.

5. **Wishlist Page**
   - Displays items that users have added to their wishlist.
   - Users can move items to the cart or remove them from the wishlist.

6. **Admin Panel**
   - A secure section for administrators to manage products.
   - Admins can add new products, edit existing ones and also delete existing products

7. **Login Page**
   - Handles user and admin authentication.
   - Existing users can log in.
   - New users can register for an account.

## Authentication
User Authentication: Users can create accounts and log in to access personalized features like shopping carts and wishlists.

Admin Authentication: Administrators have access to an exclusive admin panel. They can add new products and manage existing ones.

## Admin Panel
Access the admin panel by visiting https://electronix-express-api.onrender.com/admin. Admins can:

Add new products via POST requests.
Edit existing products via dedicated product pages.

## API
The application interacts with the following API endpoints:

Products Endpoint: https://electronix-express-api.onrender.com/products

- GET: Retrieve a list of all products.
- POST: Add a new product to the store.
- PATCH: Update information for a specific product.

Product Detail Endpoint: /singleproduct/:id


# Contributors
- Gaurav Raj,
- Ganesh Kumar,
- Akshay Ramoliya

## Deployment
The app is deployed on Vercel. You can access it using the following link:

Deployed Link : elctronix-express-k74afyg3e-ganeshgourav.vercel.app
