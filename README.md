# Pet Adoption Website

## Overview
The Pet Adoption website is a comprehensive platform designed to facilitate the adoption of pets by connecting potential adopters with available animals. The website includes features for browsing and searching for pets, detailed pet profiles, user account management, and administrative tools for managing pet listings and user accounts. The goal is to create an efficient, user-friendly, and secure system that promotes responsible pet adoption and helps pets find loving homes.

## Live Link
Check out the live version of the project [Live Pet Adoption care website](https://pet-adoption-care.vercel.app)

## Features

### 1. Home Page/Landing Page
- **Header**: 
  - Logo: Prominently displayed website logo.
  - Navigation Bar: Links to Home, About Us, Login/Register (if not logged in), My Profile (if logged in).
- **Searching Options**:
  - Search Bar: Allows users to search for pets by pet type, breed, age, and location.
  - Sidebar: Additional filtering options such as size, gender, and special needs.
- **Pet Lists (Based on search)**:
  - Pet Cards: Display a list of pets available for adoption in card format. Each card includes the pet's name, photo, brief description, age, breed, location, and a link to the full pet details page.
- **Review Sections**:
  - Success Stories: Testimonials from people who have adopted pets through the website.
  - Adoption Tips: Advice and guidelines for adopting a pet.
- **Footer**:
  - Contact Information: Email address, phone number, social media links.
  - Copyright Information: Standard copyright details.

### 2. Login & Registration
- **Login Form**:
  - Fields: email address, Password.
- **Registration Form**:
  - Fields: Username, Email address, Password, phone number

### 3. Pet Details Page (Private)
- **Features**:
  - Pet Information: Detailed information about the pet, including multiple photos, detailed description (temperament, special needs, etc.), age, breed, gender, health status (vaccinated, spayed/neutered), and current location.
  - Adoption Request Button: Button to initiate an adoption request (redirects to the adoption request page). Accessible only to logged-in users.

### 4. Pet Adoption Request Page
- **Features**:
  - Form Fields: User's contact information (prefilled from profile if possible), additional information, agreement to terms and conditions.
  - Submit Button: Submit the adoption request.

### 5. User Dashboard

**My Profile**
- **User Account Information**:
  - Edit Profile: Options to edit username and email, mobile number.
  - Change Password Section: Fields for current password and new password (with confirmation).
- **MY Adoptions**:
  - My Adopted Pets: List of pets the user has adopted. Details for each pet include the pet's name, photo, adoption date, and a link to the pet details page (if available).


### 6. Admin Dashboard
- **User Management**:
  - View and manage user accounts: Activate/deactivate accounts, edit roles.
- **Pet Management**:
  - Add New Pets: Only admins can add pets to the system.
  - Form Fields: Pet's name, photos, detailed description, age, breed, gender, health status, current location.
  - Edit/Remove Pets: Admins can edit or remove pet listings.
- **Adoption Management**:
  - Edit/update/approved adoptions: Admin can update the adoption request

## Technologies are being used
- **Frontend**: Typescript, Next.js, Redux, Zod, tailwind, material UI, etc.
- **Backend**: Node.js, Express, Prisma, 
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Deployment**: vercel

- 
## How to run my code 
1. **Clone this client repository**:
   ```bash
     git clone https://github.com/fl9mdasif/pet-adoption-client-nextjs.git
   ```
    **run this code**:
   ```bash
     npm run dev
   ```

2. **Clone the Server repository**:
   ```bash
     git clone https://github.com/fl9mdasif/pet-adoption-prisma-express.git
   ```
   **run the server side code**:
     ```bash
       npm run start-dev
     ```
   

