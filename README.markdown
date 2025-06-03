
# MathonGo Sample Task - Frontend Web Developer Submission

This repository contains my submission for the MathonGo Frontend Web Developer sample task. The goal was to recreate the provided UI screens using Next.js, Tailwind CSS, and shadcn/ui, ensuring pixel-perfect design, responsiveness, and functionality as per the requirements. Below, you'll find details about the project, setup instructions, and how it meets the scoring criteria.

---

## Project Overview

The MathonGo sample task required building a web application for JEE Main preparation, featuring a chapter list view with tabs for Physics, Chemistry, and Mathematics, along with filters, sorting, and a light/dark mode toggle. The app integrates mock JSON data and uses Phosphor Icons for chapter icons. The project is deployed on Vercel and hosted in a public GitHub repository.

- **Live Demo**: [https://mathon-go-study.vercel.app/](https://mathon-go-study.vercel.app/)
- **GitHub Repository**: [https://github.com/shashank6993/mathon-go-study](https://github.com/shashank6993/mathon-go-study)
- **Demostrating Video**: [https://youtu.be/2DuRY4u0YsM](https://youtu.be/2DuRY4u0YsM)

---

## Tech Stack

- **Next.js (App Router)**: Framework for server-side rendering and routing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **shadcn/ui**: Component library for reusable UI elements (Tabs, Buttons, Dropdowns, etc.).
- **TanStack Query**: State management for fetching and caching mock JSON data.
- **Clerk**: Authentication provider for user sign-in/sign-up flows.
- **Phosphor Icons**: Icon library for chapter icons (https://phosphoricons.com/).
- **Vercel**: Deployment platform.

---

## Features Implemented

The project implements all required features, ensuring a seamless user experience across mobile and desktop devices, with light/dark mode support.

- **Chapter List View**:
  - Displays chapters with stats (e.g., 2025: X Qs, 2024: Y Qs, Solved/Total Qs).
  - Randomly assigns icons to chapters using Phosphor Icons.
- **Tabs**: Physics, Chemistry, Mathematics tabs with responsive design (grid on mobile, sidebar on desktop).
- **Filters**:
  - Class and Units dropdowns (multi-selectable) with unique values derived from the mock JSON data for the active subject.
  - "Weak Chapters" and "Not Started" toggles with mock filtering logic.
  - Count updates dynamically based on applied filters.
- **Sorting Toggle**: Ascending/descending sort for chapters.
- **Responsiveness**: Mobile-first design with horizontal scrollable tabs on mobile and a sidebar layout on desktop.
- **Light/Dark Mode**: System-preferred theme toggle (implemented in the `Header` component).
- **Authentication**: Integrated Clerk for user authentication, protecting the `Dashboard` route.
- **Mock JSON Integration**: Fetches and displays chapter data using TanStack Query.



## Project Structure

```
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard page with chapter list view
│   ├── layout.tsx            # Root layout with ClerkProvider
│   ├── page.tsx              # Home page (/)
│   └── sign-in/              # Custom sign-in page (optional)
│       └── [[...sign-in]]/
│           └── page.tsx
├── components/
│   ├── header.tsx            # Header component with theme toggle and auth UI
│   └── ui/                   # shadcn/ui components (Tabs, Button, etc.)
├── hooks/
│   ├── useChapters.ts        # Fetch mock JSON data
│   ├── useFilteredChapters.ts # Filter chapters based on user selections
│   └── useUniqueValues.ts    # Derive unique Classes and Units for filters
├── public/
│   └── nta.png               # JEE Main logo
├── .env.local                # Environment variables (e.g., Clerk keys)
├── middleware.ts             # Clerk middleware for route protection
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
└── README.md                 # Project documentation
```

---

## Setup Instructions

### Prerequisites
- Node.js (v18 or later)
- Git
- A Clerk account (for authentication)

### Local Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shashank6993/mathon-go-study
   cd mathon-go-study
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env.local` file in the root directory.
   - Add the following variables (replace with your Clerk API keys):
     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
     CLERK_SECRET_KEY=your_secret_key
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
     NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
     ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

### Deployment
1. **Push to GitHub**:
   - Ensure all changes are committed and pushed to your public GitHub repository.
2. **Deploy on Vercel**:
   - Import the repository into Vercel.
   - Add the environment variables (from `.env.local`) in Vercel’s dashboard.
   - Deploy the app and access the live URL.

---

## Development Process

### Approach
- **UI Development**: Started by analyzing the Figma screens to identify components, layouts, and color schemes. Used shadcn/ui for pre-built components (Tabs, Buttons, Dropdowns) and Tailwind CSS for custom styling.
- **Responsiveness**: Adopted a mobile-first approach, using Tailwind’s responsive utilities to handle mobile and desktop layouts.
- **Data Integration**: Created custom hooks (`useChapters`, `useFilteredChapters`) to fetch and filter mock JSON data efficiently with TanStack Query.
- **State Management**: Combined TanStack Query for data fetching with React’s `useState` for UI state (e.g., active subject, filters).
- **Authentication**: Added Clerk as a bonus feature to enhance the app’s functionality and user experience.
- **Testing**: Tested the app on multiple devices and screen sizes, ensuring functionality (filters, tabs, sorting) and visual accuracy.

### Challenges & Solutions
- **Pixel-Perfect Design**: Iteratively compared the app with Figma screens, adjusting spacing and colors (e.g., ensuring `bg-orange-500` matched Physics theme).
- **Responsive Tabs**: Initially used a grid layout for mobile tabs, but updated to a horizontal scrollable layout to match the Figma design more closely.
- **Dynamic Filters**: Derived unique Classes and Units from the mock data using `useUniqueValues` hook, ensuring multi-select functionality with `useState`.

### Bonus Feature
- Integrated Clerk authentication, adding a `Home` page and protecting the `Dashboard` route. This provides a real-world user flow (sign-in → dashboard access → sign-out).

---

## Reflections

This project was a great opportunity to showcase my skills in Next.js, Tailwind CSS, and modern frontend development practices. I focused on delivering a pixel-perfect UI while ensuring functionality and responsiveness. Adding Clerk authentication as a bonus feature enhanced the app’s practicality, and using TanStack Query streamlined data handling. If I had more time, I’d add unit tests and improve accessibility (e.g., ARIA labels for filters).

---

## Screenshots

*(Add screenshots of the app in light/dark mode, mobile/desktop views, and key features like filters and tabs. You can use a tool like ShareX or browser dev tools to capture these.)*

- **Home Page (Light Mode)**: ![image](https://github.com/user-attachments/assets/8945691d-19db-4085-8bee-c068cc65c9e8)
(#)
- **Dashboard (Mobile, Dark Mode)**:![image](https://github.com/user-attachments/assets/3f559e47-7faa-4d90-b4ee-7222bbf7f2f8)
(#)
- **Filters in Action (Desktop)**: ![image](https://github.com/user-attachments/assets/0912d791-9e76-4125-bc78-939b408e8eec)
(#)

---


---

## Contact

For any questions or feedback, please reach out via email(Shashank272004@gmail.com). Thank you for reviewing my submission!

---
```
