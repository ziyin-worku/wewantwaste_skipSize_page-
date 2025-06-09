# WeWantWaste – Skip Size Booking Page

This is a modern and fully responsive React-based web page for selecting and booking waste skip sizes. The design is crafted to reflect the eco-conscious values of WeWantWaste, while delivering an intuitive, visually appealing, and mobile-friendly user experience.

---

## 🌟 Highlights of This Project

## Features

- Fetch skips based on location (mocked endpoint)
- Show `BookingDialog` only if:
  - `allowed_on_road === true`
  - `allows_heavy_waste === true`
- Show `RestrictionCard` otherwise
- Only the most recently selected valid skip shows the **"Book Now"** button
- Skeleton loading UI and optimized state handling

### 🔧 Tech Stack
- **React (JSX)**: Component-based UI architecture.
- **CSS Modules**: Scoped and maintainable styles for each component.
- **Vite**: Lightning-fast dev environment and build tool.
- **Tailored Components**: Custom-built UI components for modularity and reusability.
- **Axios**
- **Dialog API**
- **Lazy Loading**

---

## 🎨 Design & UX Improvements

### ✅ Modern UI & Layout
- **Card-Based Skip Sizes**: Replaced old table structure with responsive cards showing skip name, dimensions, price, and action buttons.
- **Why Choose Us Section**: Added to highlight value propositions such as reliability, eco-friendliness, and affordability.
- **Header & Footer Components**:
  - **Header**: Includes navigation and company branding.
  - **Footer**: Contains navigation links, contact information, and company tagline.

### ✅ Color & Branding
- **Green & Orange Color Scheme**: Represents environmental responsibility and energetic service.
- **Consistent Typography**: Clear headings and body text enhance readability.

### ✅ Booking Experience
- **Streamlined Form**: Clean and simplified form to book selected skips with validation and smooth user flow.
- **Interactive Behavior**:
  - Hover animations on cards and buttons.
  - Conditional “Book Now” button displayed only for valid skips.
  - Feedback for selections and confirmations.

### ✅ Responsive Design
- **Mobile-First Layout**: Flex and grid-based structure adapts to any screen size.
- **Touch-Friendly UI**: All buttons and inputs are sized appropriately for mobile interaction.

---

## 🔗 Live Demo

>   
https://skipsizepage.ziyintech.com/
---



