# Unexpected Navigation Behavior in Next.js 15

This repository demonstrates an unexpected navigation behavior encountered in a Next.js 15 application.  The application consists of two pages: a home page and an about page. Navigation between these pages is handled using `next/link` and `next/router`.

## Issue Description

When navigating from the home page to the about page and back, unexpected behavior is observed.  The specific issue is described in detail within the `bugContent.js` file.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## How to reproduce

1. Navigate to `/` (the Home page).
2. Click on "Go to About" link.
3. You are now in the About page.
4. Click on "Go to Home" button.
5. Observe the unexpected behavior.

The solution can be reviewed at solutionContent.js