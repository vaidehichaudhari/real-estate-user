# RealEstateShopvista - User Documentation

## Overview  
RealEstateShopvista is a modern real estate platform that allows users to search, view, and inquire about properties for sale or rent with a clean and user-friendly interface.

## Objectives  
- Provide seamless property search by location, price range, and purpose (Rent/Sale)  
- Display detailed property information with inquiry functionality  
- Allow user registration and login  
- Enable admin access to manage inquiries  

## Features  

### Frontend  
- Responsive Navbar with intuitive navigation  
- Hero section with filters for property search  
- Property listing and detail pages  
- User registration and login forms  
- Inquiry submission form on property detail page  

### Backend APIs  

| Method | Endpoint                        | Description                     | Authentication   |
|--------|---------------------------------|---------------------------------|------------------|
| POST   | `/api/user/register`             | Register a new user             | No               |
| POST   | `/api/user/login`                | Login user                     | No               |
| GET    | `/api/property/getAllProperties`| Fetch all properties            | No               |
| GET    | `/api/property/getPropertyById/:id` | Fetch a single property by ID | No               |
| POST   | `/api/property/search`           | Search properties with filters | No               |
| POST   | `/api/inquiry/createInquiry`    | Submit an inquiry              | No               |
| GET    | `/api/inquiry/getAllInquiries`  | Get all inquiries (Admin only) | Yes (Admin)      |
| GET    | `/api/inquiry/getInquiryById/:id`| Get inquiry by ID (Admin only)| Yes (Admin)      |

## Installation  

### Backend  
```bash
cd backend
npm install
npm start
Runs on port 9000 by default.

Frontend
bash
Copy code
cd frontend
npm install
npm start
Runs on port 5173 by default.

Notes
Search filters include location, priceRange, and purpose (Rent or Sale).

Inquiries require user contact details and propertyId.

Admin routes require valid authentication and admin role.

