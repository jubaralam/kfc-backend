# User Routes Documentation

This module handles user-related operations such as registration, login, updating user information, and deleting user accounts.

## Register a New User

**Route**: `POST /register`

Registers a new user in the system.

### Parameters
- `name` (string): The name of the user.
- `email` (string): The email address of the user.
- `password` (string): The password for the user account.

### Response
- **Success**: 
  - **Message**: `"You have registered successfully"`
- **Error**: 
  - **Message**: `"Something went wrong while hashing password"`
  - **Error**: `{error.message}`

---

## Log In a User

**Route**: `POST /login`

Logs in an existing user and returns a token.

### Parameters
- `email` (string): The email address of the user.
- `password` (string): The password for the user account.

### Response
- **Success**: 
  - **Message**: `"You have logged in successfully"`
  - **Token**: `{token}`
  - **User**: `{user}`
- **Error**: 
  - **Message**: `"Wrong credentials"`
  - **Error**: `{error.message}`

---

## Update User Information

**Route**: `PATCH /update/:user_id`

Updates the information of an existing user.

### Parameters
- `user_id` (string): The ID of the user to update.
- `name` (string) [optional]: The new name of the user.
- `email` (string) [optional]: The new email address of the user.
- `password` (string) [optional]: The new password for the user account.

### Response
- **Success**: 
  - **Message**: `"User information updated successfully"`
  - **Data**: `{updatedUser}`
- **Error**: 
  - **Message**: `"User not found"` or `{error.message}`

---

## Delete User Account

**Route**: `DELETE /delete/:user_id`

Deletes the user account from the system.

### Parameters
- `user_id` (string): The ID of the user to delete.

### Response
- **Success**: 
  - **Message**: `"User account deleted successfully"`
- **Error**: 
  - **Message**: `"User not found"` or `{error.message}`

---

# Cart Routes Documentation

This module handles operations related to managing the shopping cart.

## Get All Cart Items

**Route**: `GET /get/:user_id`

Fetch all cart items for a specific user.

### Parameters
- `user_id` (string): The ID of the user whose cart items you want to retrieve.

### Response
- **Success**: 
  - **Message**: `"Cart items retrieved successfully"`
  - **Data**: `[cartItems]`
- **Error**: 
  - **Message**: `"Failed to retrieve cart items"`
  - **Error**: `{error.message}`

---

## Add Cart Item

**Route**: `POST /add/:product_id`

Add a new item to the user's cart.

### Parameters
- `product_id` (string): The ID of the product to be added to the cart.
- **Body**:
  - `user_id` (string): The ID of the user.
  - `title` (string): The title of the product.
  - `quantity` (number): The quantity of the product.

### Response
- **Success**: 
  - **Message**: `"New item added to your cart"`
- **Error**: 
  - **Message**: `"Failed to add item to cart"`
  - **Error**: `{error.message}`

---

## Update Cart Item

**Route**: `PATCH /update/:product_id`

Update the quantity of a specific item in the cart.

### Parameters
- `product_id` (string): The ID of the product to be updated.
- **Body**:
  - `quantity` (number): The new quantity of the product.

### Response
- **Success**: 
  - **Message**: `"Cart updated successfully"`
  - **Data**: `{updatedCart}`
- **Error**: 
  - **Message**: `"Failed to update cart"`
  - **Error**: `{error.message}`

---

## Delete Cart Item

**Route**: `DELETE /remove/:product_id`

Remove a specific item from the user's cart.

### Parameters
- `product_id` (string): The ID of the product to be removed.

### Response
- **Success**: 
  - **Message**: `"Item removed from cart"`
- **Error**: 
  - **Message**: `"Failed to remove item"`
  - **Error**: `{error.message}`

---

# Product Routes Documentation

This module handles operations related to product management.

## Get All Products

**Route**: `GET /products`

Fetch all available products.

### Response
- **Success**: 
  - **Message**: `"Products retrieved successfully"`
  - **Data**: `[products]`
- **Error**: 
  - **Message**: `"Failed to retrieve products"`
  - **Error**: `{error.message}`

---

## Add a New Product

**Route**: `POST /products`

Add a new product to the system.

### Parameters
- **Body**:
  - `title` (string): The title of the product.
  - `price` (number): The price of the product.
  - `category` (string): The category of the product.

### Response
- **Success**: 
  - **Message**: `"Product added successfully"`
  - **Data**: `{newProduct}`
- **Error**: 
  - **Message**: `"Failed to add product"`
  - **Error**: `{error.message}`

---

## Update Product Information

**Route**: `PATCH /products/:product_id`

Update the details of an existing product.

### Parameters
- `product_id` (string): The ID of the product to be updated.
- **Body**:
  - `title` (string) [optional]: The new title of the product.
  - `price` (number) [optional]: The new price of the product.
  - `category` (string) [optional]: The new category of the product.

### Response
- **Success**: 
  - **Message**: `"Product updated successfully"`
  - **Data**: `{updatedProduct}`
- **Error**: 
  - **Message**: `"Failed to update product"`
  - **Error**: `{error.message}`

---

## Delete Product

**Route**: `DELETE /products/:product_id`

Delete a product from the system.

### Parameters
- `product_id` (string): The ID of the product to delete.

### Response
- **Success**: 
  - **Message**: `"Product deleted successfully"`
- **Error**: 
  - **Message**: `"Failed to delete product"`
  - **Error**: `{error.message}`


# Category Routes Documentation

This module handles operations related to managing product categories.

## Get All Categories

**Route**: `GET /categories`

Fetch all product categories.

### Response
- **Success**: 
  - **Message**: `"Categories retrieved successfully"`
  - **Data**: `[categories]`
- **Error**: 
  - **Message**: `"Failed to retrieve categories"`
  - **Error**: `{error.message}`

---

## Add a New Category

**Route**: `POST /categories`

Add a new category to the system.

### Parameters
- **Body**:
  - `name` (string): The name of the category.

### Response
- **Success**: 
  - **Message**: `"Category added successfully"`
  - **Data**: `{newCategory}`
- **Error**: 
  - **Message**: `"Failed to add category"`
  - **Error**: `{error.message}`

---

## Update Category Information

**Route**: `PATCH /categories/:category_id`

Update the details of an existing category.

### Parameters
- `category_id` (string): The ID of the category to update.
- **Body**:
  - `name` (string) [optional]: The new name of the category.

### Response
- **Success**: 
  - **Message**: `"Category updated successfully"`
  - **Data**: `{updatedCategory}`
- **Error**: 
  - **Message**: `"Failed to update category"`
  - **Error**: `{error.message}`

---

## Delete Category

**Route**: `DELETE /categories/:category_id`

Delete a category from the system.

### Parameters
- `category_id` (string): The ID of the category to delete.

### Response
- **Success**: 
  - **Message**: `"Category deleted successfully"`
- **Error**: 
  - **Message**: `"Failed to delete category"`
  - **Error**: `{error.message}`

---

# Order Routes Documentation

This module handles operations related to managing customer orders.

## Place a New Order

**Route**: `POST /orders`

Place a new order for a user.

### Parameters
- **Body**:
  - `user_id` (string): The ID of the user placing the order.
  - `items` (array): The list of items in the order (product IDs and quantities).
  - `total_price` (number): The total price of the order.
  - `status` (string) [optional]: The status of the order (e.g., "pending", "completed").

### Response
- **Success**: 
  - **Message**: `"Order placed successfully"`
  - **Data**: `{newOrder}`
- **Error**: 
  - **Message**: `"Failed to place order"`
  - **Error**: `{error.message}`

---

## Get User Orders

**Route**: `GET /orders/:user_id`

Fetch all orders for a specific user.

### Parameters
- `user_id` (string): The ID of the user whose orders you want to retrieve.

### Response
- **Success**: 
  - **Message**: `"Orders retrieved successfully"`
  - **Data**: `[orders]`
- **Error**: 
  - **Message**: `"Failed to retrieve orders"`
  - **Error**: `{error.message}`

---

## Update Order Status

**Route**: `PATCH /orders/:order_id`

Update the status of an existing order.

### Parameters
- `order_id` (string): The ID of the order to update.
- **Body**:
  - `status` (string): The new status of the order (e.g., "pending", "completed").

### Response
- **Success**: 
  - **Message**: `"Order status updated successfully"`
  - **Data**: `{updatedOrder}`
- **Error**: 
  - **Message**: `"Failed to update order"`
  - **Error**: `{error.message}`

---

## Cancel Order

**Route**: `DELETE /orders/:order_id`

Cancel an order by deleting it.

### Parameters
- `order_id` (string): The ID of the order to cancel.

### Response
- **Success**: 
  - **Message**: `"Order canceled successfully"`
- **Error**: 
  - **Message**: `"Failed to cancel order"`
  - **Error**: `{error.message}`

---

# Admin Routes Documentation

This module handles administrative operations such as managing users, products, categories, and orders.

## Get All Users

**Route**: `GET /admin/users`

Fetch all registered users.

### Response
- **Success**: 
  - **Message**: `"Users retrieved successfully"`
  - **Data**: `[users]`
- **Error**: 
  - **Message**: `"Failed to retrieve users"`
  - **Error**: `{error.message}`

---

## Delete User by Admin

**Route**: `DELETE /admin/users/:user_id`

Delete a user from the system by an admin.

### Parameters
- `user_id` (string): The ID of the user to delete.

### Response
- **Success**: 
  - **Message**: `"User deleted successfully"`
- **Error**: 
  - **Message**: `"Failed to delete user"`
  - **Error**: `{error.message}`

---

## Get All Orders

**Route**: `GET /admin/orders`

Fetch all orders placed by users.

### Response
- **Success**: 
  - **Message**: `"Orders retrieved successfully"`
  - **Data**: `[orders]`
- **Error**: 
  - **Message**: `"Failed to retrieve orders"`
  - **Error**: `{error.message}`

---

## Manage Products as Admin

**Route**: `POST /admin/products`

Admin can add a new product.

### Parameters
- **Body**:
  - `title` (string): The title of the product.
  - `price` (number): The price of the product.
  - `category` (string): The category of the product.

### Response
- **Success**: 
  - **Message**: `"Product added successfully by admin"`
  - **Data**: `{newProduct}`
- **Error**: 
  - **Message**: `"Failed to add product"`
  - **Error**: `{error.message}`

---

## Update Product as Admin

**Route**: `PATCH /admin/products/:product_id`

Admin can update a product.

### Parameters
- `product_id` (string): The ID of the product to update.
- **Body**:
  - `title` (string) [optional]: The new title of the product.
  - `price` (number) [optional]: The new price of the product.
  - `category` (string) [optional]: The new category of the product.

### Response
- **Success**: 
  - **Message**: `"Product updated successfully by admin"`
  - **Data**: `{updatedProduct}`
- **Error**: 
  - **Message**: `"Failed to update product"`
  - **Error**: `{error.message}`

---

## Delete Product as Admin

**Route**: `DELETE /admin/products/:product_id`

Admin can delete a product from the system.

### Parameters
- `product_id` (string): The ID of the product to delete.

### Response
- **Success**: 
  - **Message**: `"Product deleted successfully by admin"`
- **Error**: 
  - **Message**: `"Failed to delete product"`
  - **Error**: `{error.message}`


# Admin Category Management Routes Documentation

This module handles administrative operations related to managing product categories.

## Admin Add New Category

**Route**: `POST /admin/categories`

Admin can add a new product category.

### Parameters
- **Body**:
  - `name` (string): The name of the category.

### Response
- **Success**: 
  - **Message**: `"Category added successfully by admin"`
  - **Data**: `{newCategory}`
- **Error**: 
  - **Message**: `"Failed to add category"`
  - **Error**: `{error.message}`

---

## Admin Update Category

**Route**: `PATCH /admin/categories/:category_id`

Admin can update an existing product category.

### Parameters
- `category_id` (string): The ID of the category to update.
- **Body**:
  - `name` (string) [optional]: The new name of the category.

### Response
- **Success**: 
  - **Message**: `"Category updated successfully by admin"`
  - **Data**: `{updatedCategory}`
- **Error**: 
  - **Message**: `"Failed to update category"`
  - **Error**: `{error.message}`

---

## Admin Delete Category

**Route**: `DELETE /admin/categories/:category_id`

Admin can delete a product category.

### Parameters
- `category_id` (string): The ID of the category to delete.

### Response
- **Success**: 
  - **Message**: `"Category deleted successfully by admin"`
- **Error**: 
  - **Message**: `"Failed to delete category"`
  - **Error**: `{error.message}`

---

# Product Routes Documentation

This module handles operations related to products available for sale on the platform.

## Get All Products

**Route**: `GET /products`

Fetch all products from the system.

### Response
- **Success**: 
  - **Message**: `"Products retrieved successfully"`
  - **Data**: `[products]`
- **Error**: 
  - **Message**: `"Failed to retrieve products"`
  - **Error**: `{error.message}`

---

## Get Product by ID

**Route**: `GET /products/:product_id`

Fetch details of a specific product by its ID.

### Parameters
- `product_id` (string): The ID of the product to retrieve.

### Response
- **Success**: 
  - **Message**: `"Product retrieved successfully"`
  - **Data**: `{product}`
- **Error**: 
  - **Message**: `"Failed to retrieve product"`
  - **Error**: `{error.message}`

---

## Add a New Product

**Route**: `POST /products`

Add a new product to the system.

### Parameters
- **Body**:
  - `title` (string): The title of the product.
  - `price` (number): The price of the product.
  - `category` (string): The category to which the product belongs.

### Response
- **Success**: 
  - **Message**: `"Product added successfully"`
  - **Data**: `{newProduct}`
- **Error**: 
  - **Message**: `"Failed to add product"`
  - **Error**: `{error.message}`

---

## Update Product Information

**Route**: `PATCH /products/:product_id`

Update the details of an existing product.

### Parameters
- `product_id` (string): The ID of the product to update.
- **Body**:
  - `title` (string) [optional]: The new title of the product.
  - `price` (number) [optional]: The new price of the product.
  - `category` (string) [optional]: The new category of the product.

### Response
- **Success**: 
  - **Message**: `"Product updated successfully"`
  - **Data**: `{updatedProduct}`
- **Error**: 
  - **Message**: `"Failed to update product"`
  - **Error**: `{error.message}`

---

## Delete Product

**Route**: `DELETE /products/:product_id`

Delete a product from the system.

### Parameters
- `product_id` (string): The ID of the product to delete.

### Response
- **Success**: 
  - **Message**: `"Product deleted successfully"`
- **Error**: 
  - **Message**: `"Failed to delete product"`
  - **Error**: `{error.message}`

---

# Payment Routes Documentation

This module handles operations related to payment processing and order payments.

## Create Payment

**Route**: `POST /payments`

Create a new payment for an order.

### Parameters
- **Body**:
  - `order_id` (string): The ID of the order for which the payment is made.
  - `amount` (number): The total amount of the payment.
  - `payment_method` (string): The method of payment (e.g., credit card, PayPal).

### Response
- **Success**: 
  - **Message**: `"Payment processed successfully"`
  - **Data**: `{paymentDetails}`
- **Error**: 
  - **Message**: `"Failed to process payment"`
  - **Error**: `{error.message}`

---

## Get Payment Details

**Route**: `GET /payments/:payment_id`

Fetch the details of a specific payment.

### Parameters
- `payment_id` (string): The ID of the payment to retrieve.

### Response
- **Success**: 
  - **Message**: `"Payment details retrieved successfully"`
  - **Data**: `{payment}`
- **Error**: 
  - **Message**: `"Failed to retrieve payment details"`
  - **Error**: `{error.message}`

---

## Refund Payment

**Route**: `POST /payments/refund/:payment_id`

Process a refund for a specific payment.

### Parameters
- `payment_id` (string): The ID of the payment to refund.
- **Body**:
  - `reason` (string): The reason for the refund request.

### Response
- **Success**: 
  - **Message**: `"Payment refunded successfully"`
  - **Data**: `{refundDetails}`
- **Error**: 
  - **Message**: `"Failed to process refund"`
  - **Error**: `{error.message}`

---

# Review Routes Documentation

This module handles operations related to product reviews by users.

## Add a Review

**Route**: `POST /reviews/:product_id`

Add a new review for a product.

### Parameters
- `product_id` (string): The ID of the product to review.
- **Body**:
  - `user_id` (string): The ID of the user writing the review.
  - `rating` (number): The rating for the product (1-5).
  - `comment` (string) [optional]: Additional comments about the product.

### Response
- **Success**: 
  - **Message**: `"Review added successfully"`
  - **Data**: `{newReview}`
- **Error**: 
  - **Message**: `"Failed to add review"`
  - **Error**: `{error.message}`

---

## Get Reviews for Product

**Route**: `GET /reviews/:product_id`

Fetch all reviews for a specific product.

### Parameters
- `product_id` (string): The ID of the product to retrieve reviews for.

### Response
- **Success**: 
  - **Message**: `"Reviews retrieved successfully"`
  - **Data**: `[reviews]`
- **Error**: 
  - **Message**: `"Failed to retrieve reviews"`
  - **Error**: `{error.message}`

---

## Update a Review

**Route**: `PATCH /reviews/:review_id`

Update a review for a product.

### Parameters
- `review_id` (string): The ID of the review to update.
- **Body**:
  - `rating` (number) [optional]: The new rating for the product (1-5).
  - `comment` (string) [optional]: Updated comments about the product.

### Response
- **Success**: 
  - **Message**: `"Review updated successfully"`
  - **Data**: `{updatedReview}`
- **Error**: 
  - **Message**: `"Failed to update review"`
  - **Error**: `{error.message}`

---

## Delete a Review

**Route**: `DELETE /reviews/:review_id`

Delete a review from the system.

### Parameters
- `review_id` (string): The ID of the review to delete.

### Response
- **Success**: 
  - **Message**: `"Review deleted successfully"`
- **Error**: 
  - **Message**: `"Failed to delete review"`
  - **Error**: `{error.message}`
