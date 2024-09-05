// checkRole.js

const ProductMiddleware = (req, res, next) => {
    // Assuming the user role is attached to req.user after authentication
    const userRole = req.user?.role; // Get user role from the request object
  
    if (!userRole) {
      return res.status(401).json({
        message: 'Unauthorized: No user role found',
      });
    }
  
    // Check if the user is either an admin or seller
    if (userRole === 'admin' || userRole === 'seller') {
      next(); // Proceed to the next middleware or route handler
    } else {
      return res.status(403).json({
        message: 'Forbidden: You do not have permission to create a product',
      });
    }
  };
  

  module.exports = ProductMiddleware