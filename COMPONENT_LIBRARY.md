# Component Library - Angular Material Dashboard

## 📦 Project Overview

This is a modern Angular 21 application featuring a comprehensive component library (similar to Storybook) built with Angular Material and standalone components.

## 🎨 Components Available

### 1. **Stats Card Component**
- Display key metrics with visual indicators
- 4 variants: Primary, Success, Warning, Danger
- Shows trending direction (up/down)
- Interactive hover effects
- Location: `src/app/components/stats-card/`

### 2. **Chart Card Component**
- Display data visualizations
- Mock bar chart implementation
- Legend support
- Interactive bars with hover effects
- Location: `src/app/components/chart-card/`

### 3. **User Card Component**
- Display user profiles
- Avatar with initials
- User statistics (followers, following, posts)
- Follow/connect buttons
- Location: `src/app/components/user-card/`

### 4. **Alert Banner Component**
- Display notifications
- 4 severity levels: Success, Warning, Danger, Info
- Dismissible alerts
- Location: `src/app/components/alert-banner/`

### 5. **Badge Component**
- Compact status labels
- 5 variants: Primary, Success, Warning, Danger, Secondary
- 3 sizes: Small, Medium, Large
- Optional icons
- Location: `src/app/components/badge/`

### 6. **Feature Card Component**
- Highlight key features
- Vertical and horizontal layouts
- Icon with custom colors
- Meta information support
- Location: `src/app/components/feature-card/`

## 🚀 Getting Started

### Installation

```bash
cd /Users/usuario/angular-test
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Component Library Page

The main page is a comprehensive **Component Library** (similar to Storybook) that displays:
- All component variants
- Interactive tabs to filter by component type
- Responsive grid layouts
- Live preview of each component

**Access**: Navigate to `http://localhost:4200/` (root path)

### Dashboard Page

A quick dashboard example using the modern components:
- Stats cards showing key metrics
- Chart cards with mock data
- Alert banners

**Access**: Navigate to `http://localhost:4200/dashboard`

## 📁 Project Structure

```
src/app/
├── components/
│   ├── stats-card/
│   ├── chart-card/
│   ├── user-card/
│   ├── alert-banner/
│   ├── badge/
│   ├── feature-card/
│   └── component-library/
├── dashboard/
├── app.ts
├── app.routes.ts
├── app.html
├── app.config.ts
├── app.scss
└── material.module.ts
```

## 🎯 Material Module

All Material components are imported through the centralized `material.module.ts`:
- Toolbar
- Sidenav
- Icon
- List
- Button
- Card
- Grid List

## 🎨 Styling

- Global styles: `src/styles.scss`
- Material theme: Indigo-Pink prebuilt theme
- Component-specific styles: Inline SCSS in components
- Responsive design with CSS Grid and Flexbox

## 📱 Responsive Design

All components are fully responsive:
- Mobile-first approach
- Breakpoints for different screen sizes
- Touch-friendly interactions

## 🔧 Available Scripts

```bash
npm start             # Start development server
npm build             # Build for production
npm test              # Run tests
npm watch             # Watch mode for development
```

## 📦 Dependencies

- **@angular/core**: ^21.1.0
- **@angular/material**: ^21.1.0
- **@angular/cdk**: ^21.1.0
- **@angular/animations**: ^21.1.0
- **rxjs**: ~7.8.0

## 💡 Component Usage Example

```typescript
import { StatsCardComponent } from './components/stats-card/stats-card.component';

// In your component
<app-stats-card
  title="Total Sales"
  value="$45,321"
  changePercent="12"
  [isPositive]="true"
  icon="shopping_cart"
  variant="primary">
</app-stats-card>
```

## 🎨 Customization

### Add New Theme

Replace the Material theme import in `src/styles.scss`:
```scss
@import '@angular/material/prebuilt-themes/indigo-pink.css';
// Change to: deeppurple-amber, purple-green, etc.
```

### Create New Component

1. Create component folder in `src/app/components/`
2. Create `.ts` file with `@Component` decorator
3. Make it standalone: `standalone: true`
4. Import necessary modules (CommonModule, MaterialModule)
5. Add to component-library for showcase

## 📝 Notes

- All components are standalone (no NgModule required)
- Responsive design optimized for desktop and mobile
- Color gradients and modern styling throughout
- Accessibility considerations with ARIA labels

## 🚀 Future Enhancements

- Add more advanced charts (using ngx-charts)
- implement pagination in component library
- Add animation transitions
- Dark mode support
- Component search functionality

---

**Created**: February 17, 2026
**Framework**: Angular 21
**UI Library**: Angular Material
