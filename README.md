# Coupon Digger

## live URL
https://coupon-digger-c3ccf.web.app/

## Key Features
- Single Page Layout: Navigation between different sections without page reload

- Header:
  - Logo on the left.
  - Navigation links (Home, Brands, My Profile for logged-in users, About Dev).
  - Authentication buttons (Login & Register for non-logged-in users, User Picture, Email & Logout for logged-in users).

- Main Section:
  - Banner with a static slider.
  - Top Brands with React Fast Marquee.
  - Brands on Sale displayed in a card format.
  - Two extra custom sections.

- Brands Page:
  - Displays all brand details with search functionality.
  - Each brand card includes Logo, Name, Rating, Description, and Sale Status.
  - “View Coupons” button redirects to brand details (login required).

- Authentication System:
  - User login with Email/Password & Google authentication.
  - Registration with Name, Email, Photo URL, and Password (validation included).
  - Password validation (Uppercase, Lowercase, Min Length 6).
  - Password toggling feature.
  - Forgot Password functionality with redirection to Gmail.
  - Profile update feature.

- Coupon Page (Private Route):
  - Displays brand details and coupons.
  - “Copy Code” feature using react-copy-to-clipboard.
  - “Use Now” button redirects to the brand’s website.

- My Profile Page (Private Route):
  - Shows user details with an update feature.

- Error Page:
  - Custom 404 page with a redirect to Home.

## NPM Packages Used

- react-router-dom - For routing
- daisyui - For UI components
- react-fast-marquee - For brand scrolling effect
- react-toastify - For notifications
- firebase - For authentication
- react-copy-to-clipboard - For copying coupon codes
- aos or animate.css - For animations
- react-icons- for icons
