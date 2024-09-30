
# My Quotes App

A Next.js application that allows users to log in, view quotes, and create new quotes with media uploads. The app is built using Material UI for styling and Next.js for routing. It also integrates with various APIs for login, media upload, and quote management.

## Features
- **Home:** Home Page of the app with Welcome text and a link to go to login.
- **Login:** Authenticate users using a username and OTP.
- **Quotes Display:** Paginated list of quotes showing images, overlaid text, and additional metadata like the username and creation date.
- **Add New Quote:** Upload a new image, provide text, and submit it as a new quote.
- **Logout:** Securely log out and redirect to the login page.

## Technologies Used

- **Next.js**: Framework for building the React application with server-side rendering.
- **Material UI**: For beautiful and responsive UI components.
- **Axios**: For handling API requests.
- **CSS**: Custom styles for making the UI aesthetically pleasing.

## Pages Overview

1. **Home Page**:
   - Click on the Go to Login link.

2. **Login Page**: 
   - Username and OTP inputs for authentication.
   - Button to submit login credentials.

3. **Quotes List Page**:
   - Displays a paginated list of quotes with images and text.
   - Each quote displays the associated username and creation time.
   - Floating Action Button (FAB) to add new quotes.
   - Stops pagination when no more data is available.

4. **Quote Creation Page**:
   - Upload an image file and input text for the new quote.
   - On submission, the quote is created.

5. **Logout Functionality**:
   - Logout button on the top right corner of the Quotes List and Create Quote pages.
   - Redirects to the login page on logout.

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/sakshi27700/quotes-app-assignment.git
cd my-quotes-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```plaintext
NEXT_PUBLIC_LOGIN_API_URL=https://assignment.stage.crafto.app/login
NEXT_PUBLIC_UPLOAD_API_URL=https://crafto.app/crafto/v1.0/media/assignment/upload
NEXT_PUBLIC_POST_QUOTE_API_URL=https://assignment.stage.crafto.app/postQuote
NEXT_PUBLIC_GET_QUOTES_API_URL=https://assignment.stage.crafto.app/getQuotes
```

Make sure to replace the API URLs with the appropriate endpoints if needed.

### 4. Run the development server

Start the development server:

```bash
npm run dev
```

Open "http://localhost:3000" in your browser to view the app.


## Folder Structure

```
.
├── components
│   ├── AnimatedQuotes.js              # Added an animated quotes component on home page
│   ├── AnimatedQuotes.module.css      # CSS file of the animated quotes component
│   ├── QuoteCreationForm.js           # quote creation component
|   ├── QuoteDisplay.js                # Quote Display component
|   └── UserAuthForm.js                # User Authentication component
├── pages
│   ├── index.js              # Home/Index page
│   ├── login.js              # Login Page
|   ├── addQuote.js           # Create quote page
│   └── quote.js              # Quotes Display page
|                  
├── styles
│   ├── globals.css          # Global CSS styles
│   └── Home.module.css      # Home page specific styles
├── .env.local               # Environment variables
├── README.md                # Project description and setup
└── package.json             # Project dependencies and scripts
```

## Usage

### Login
1. On the login page, input a username and use OTP `1234`.
2. Submit the form to authenticate and be redirected to the quotes list page.

### Quotes List
- Browse through the quotes in a paginated view.
- Click the "Add Quote" button (floating action button) to create a new quote.

### Create New Quote
- Upload an image and provide a quote text.
- Submit the form to create the quote and be redirected to the quotes list page.

### Logout
- Click the logout button on the top-right corner to log out and return to the login page.

## Contributing

Feel free to submit issues or pull requests to improve the application.
