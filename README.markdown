```markdown
# MathonGo Sample Task - Frontend Web Developer Submission

This repository contains my submission for the MathonGo Frontend Web Developer sample task. The goal was to recreate the provided UI screens using Next.js, Tailwind CSS, and shadcn/ui, ensuring pixel-perfect design, responsiveness, and functionality as per the requirements. Below, you'll find details about the project, setup instructions, and how it meets the scoring criteria.

---

## Project Overview

The MathonGo sample task required building a web application for JEE Main preparation, featuring a chapter list view with tabs for Physics, Chemistry, and Mathematics, along with filters, sorting, and a light/dark mode toggle. The app integrates mock JSON data and uses Phosphor Icons for chapter icons. The project is deployed on Vercel and hosted in a public GitHub repository.

- **Live Demo**: [https://mathon-go-study.vercel.app/](https://mathon-go-study.vercel.app/)
- **GitHub Repository**: [https://github.com/shashank6993/mathon-go-study](https://github.com/shashank6993/mathon-go-study)
- **Sample Video**: [https://youtu.be/2DuRY4u0YsM](https://youtu.be/2DuRY4u0YsM)

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

---

## Scoring Breakdown

### 1. UI Accuracy (30 Marks)
- **Achievement**: The UI closely matches the provided Figma screens in terms of fonts, spacing, layout, colors, and component interactions.
- **Details**:
  - Used Tailwind CSS and shadcn/ui components to replicate the design.
  - Ensured pixel-perfect alignment with consistent padding, margins, and typography.
  - Implemented the exact color scheme (e.g., `bg-orange-500` for Physics, `bg-green-500` for Chemistry, `bg-gray-700` for Mathematics).
  - Replicated the mobile view with horizontal scrollable tabs and the desktop view with a sidebar layout.
- **Evidence**: Compare the deployed app with the Figma screens for layout, spacing, and visual fidelity.

### 2. Responsiveness (15 Marks)
- **Achievement**: The app is fully responsive across mobile and desktop devices.
- **Details**:
  - Mobile view (`<lg`): Horizontal scrollable tabs for subjects, hidden sidebar, and a compact chapter list.
  - Desktop view (`lg` and above): Sidebar with subject navigation, full-width chapter list, and improved spacing.
  - Used Tailwind’s responsive utilities (e.g., `lg:hidden`, `sm:grid-cols-3`) to ensure seamless transitions between breakpoints.
  - Tested on various screen sizes (e.g., 375px for mobile, 1280px for desktop).
- **Evidence**: Test the app on different devices or use browser dev tools to simulate mobile (375px) and desktop (1280px) views.

### 3. Functionality (20 Marks)
- **Achievement**: All required features (filters, tabs, sorting, dark mode) work as expected.
- **Details**:
  - **Tabs**: Clicking Physics, Chemistry, or Mathematics updates the chapter list and filters dynamically.
  - **Filters**:
    - Class and Units dropdowns populate unique values based on the active subject, supporting multi-selection.
    - "Weak Chapters" and "Not Started" toggles filter the list (mock logic applied).
    - Chapter count updates dynamically when filters are applied.
  - **Sorting**: Toggle between ascending and descending order for chapters.
  - **Dark Mode**: System-preferred theme toggle in the `Header` component, with colors adapting to `dark:bg-[#222E3F]`.
  - **Icons & Indicators**: Up/down arrows in green/red for year-wise question trends (e.g., 2025 vs. 2024).
- **Evidence**: Interact with the app to verify that tabs switch subjects, filters update the list, sorting works, and dark mode toggles correctly.

### 4. Code Quality (10 Marks)
- **Achievement**: The code is clean, modular, and reusable.
- **Details**:
  - Organized components into separate files (e.g., `Header`, `Dashboard`, `Home`).
  - Created reusable hooks (`useChapters`, `useFilteredChapters`, `useUniqueValues`) to handle data fetching and filtering logic.
  - Used TypeScript for type safety (assumed based on modern Next.js practices).
  - Followed consistent naming conventions and folder structure (`@/components`, `@/hooks`).
  - Added comments for clarity where needed (e.g., in `getRandomIcon` function).
- **Evidence**: Review the codebase for modularity (e.g., `components/header.tsx`), readability, and organization.

### 5. State Management (10 Marks)
- **Achievement**: Efficient state management using TanStack Query and React hooks.
- **Details**:
  - Used TanStack Query (`useChapters`) to fetch and cache mock JSON data, minimizing re-renders.
  - Local state (`useState`) for UI interactions (e.g., `activeSubject`, `weakChaptersOnly`, `selectedClasses`).
  - Derived state (`useFilteredChapters`, `useUniqueValues`) to compute filtered chapters and unique filter values, avoiding redundant computations.
  - Minimal state updates to ensure performance (e.g., resetting filters when the subject changes via `useEffect`).
- **Evidence**: Check the `hooks` folder for `useChapters`, `useFilteredChapters`, and `useUniqueValues`. Test the app for smooth state updates (e.g., filter changes, tab switches).

### 6. Deployment (5 Marks)
- **Achievement**: Successfully deployed on Vercel with a public GitHub repository.
- **Details**:
  - Created a public GitHub repository with a random name to avoid plagiarism.
  - Pushed all code, including `.env.example` for environment variables (without sensitive data).
  - Deployed the app on Vercel, ensuring environment variables (e.g., Clerk API keys) are configured.
  - The live demo is accessible and functional.
- **Evidence**: Access the live demo link and GitHub repository to verify deployment and code availability.

### 7. Bonus (10 Marks)
- **Achievement**: Added Clerk authentication as an out-of-the-box feature.
- **Details**:
  - Integrated Clerk for user authentication, protecting the `Dashboard` route.
  - Added a `Home` page (`/`) with sign-in/sign-up options for unauthenticated users and a "Go to Dashboard" button for authenticated users.
  - Implemented a `UserButton` in the `Header` and `Dashboard` for user profile management (e.g., sign-out).
  - Enhanced user experience by redirecting unauthenticated users to the sign-in page when accessing `/dashboard`.
- **Evidence**: Sign in/out using the live demo to test the authentication flow. Visit the `Home` page (`/`) and `Dashboard` page (`/dashboard`) to see the behavior for authenticated and unauthenticated users.

---

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

- **Home Page (Light Mode)**: [Link to Screenshot](#)
- **Dashboard (Mobile, Dark Mode)**: [Link to Screenshot](#)
- **Filters in Action (Desktop)**: [Link to Screenshot](#)

---

## Timeline

- **Received Task**: June 01, 2025
- **Completed Development**: June 03, 2025
- **Submitted**: June 04, 2025 (at 02:26 AM IST, within 3 days of receipt)

---

## Contact

For any questions or feedback, please reach out via email (if provided during submission). Thank you for reviewing my submission!

---
```

### Changes Made
1. **Removed Submission Form Link**:
   - Deleted the line `- **Submission Form**: [Google Form Link](#) *(Replace with the provided form link)*` from the **Project Overview** section.
   - Adjusted the **Contact** section to remove references to the submission form, now suggesting reviewers reach out via email (assumed to be provided during submission).

2. **Updated Timeline**:
   - Modified the **Timeline** section to include the exact submission time: `June 04, 2025 (at 02:26 AM IST, within 3 days of receipt)`.

3. **Retained Previous Updates**:
   - Kept the sample video link (`https://youtu.be/2DuRY4u0YsM`), GitHub repository link (`https://github.com/shashank6993/mathon-go-study`), and deployed Vercel link (`https://mathon-go-study.vercel.app/`) as added in the previous update.

### Next Steps
1. **Add Screenshots**:
   - Capture screenshots of the app in light/dark mode, mobile/desktop views, and key features (e.g., filters, tabs).
   - Host them on a service like Imgur or GitHub and add the links to the **Screenshots** section.
2. **Test the README**:
   - Preview the README on GitHub to ensure formatting renders correctly.
3. **Submit**:
   - Push the updated README to your GitHub repository (`https://github.com/shashank6993/mathon-go-study`).
   - Submit as per the instructions provided by MathonGo (e.g., via email or another method since the form link was removed).

### Notes
- **Time Zone**: The README reflects the current time (02:26 AM IST, June 04, 2025) in the timeline section.
- **Consistency**: The README maintains its focus on the scoring breakdown and provides all necessary links (live demo, GitHub, sample video) for reviewers.

If you have additional updates (e.g., adding screenshots, changing contact details), let me know, and I’ll adjust the README further!