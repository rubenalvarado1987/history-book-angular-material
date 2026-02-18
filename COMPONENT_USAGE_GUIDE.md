# Component Usage Guide

Quick reference for using all 15 components in your Angular application.

## Display Components

### 1. StatsCard
Display key metrics with trending indicators.

```html
<app-stats-card
  title="Total Sales"
  value="12,456"
  [changePercent]="15"
  [isPositive]="true"
  icon="shopping_cart"
  variant="primary">
</app-stats-card>
```

**Props**:
- `title`: string - Card title
- `value`: string - Main value display
- `changePercent`: number - Percentage change
- `isPositive`: boolean - Green (true) or red (false) trend
- `icon`: string - Material icon name
- `variant`: 'primary' | 'success' | 'warning' | 'danger'

---

### 2. ChartCard
Display data visualizations with mock bar charts.

```html
<app-chart-card [title]="'Monthly Revenue'"></app-chart-card>
```

**Props**:
- `title`: string - Card title

---

### 3. UserCard
Display user profiles with social statistics.

```html
<app-user-card
  name="Sarah Anderson"
  role="UX/UI Designer"
  bio="Creating beautiful interfaces"
  [followers]="2345"
  [following]="678"
  [posts]="125"
  avatarColor="#667eea">
</app-user-card>
```

**Props**:
- `name`: string
- `role`: string
- `bio`: string
- `followers`: number
- `following`: number
- `posts`: number
- `avatarColor`: string

---

### 4. AlertBanner
Display notifications with severity levels.

```html
<app-alert-banner
  title="Success!"
  message="Your changes have been saved."
  severity="success">
</app-alert-banner>
```

**Props**:
- `title`: string
- `message`: string
- `severity`: 'success' | 'warning' | 'danger' | 'info'

---

### 5. Badge
Compact status labels.

```html
<app-badge
  label="Active"
  variant="success"
  size="medium"
  icon="check_circle">
</app-badge>
```

**Props**:
- `label`: string
- `variant`: 'success' | 'warning' | 'danger' | 'primary' | 'secondary'
- `size`: 'small' | 'medium' | 'large'
- `icon`: string (optional)

---

### 6. FeatureCard
Highlight features in layouts.

```html
<app-feature-card
  icon="lightning_bolt"
  iconColor="#f093fb"
  title="Lightning Fast"
  description="Built for performance"
  layout="vertical"
  [meta]="[{ icon: 'speed', label: '< 100ms' }]">
</app-feature-card>
```

**Props**:
- `icon`: string - Material icon
- `iconColor`: string - Hex color
- `title`: string
- `description`: string
- `layout`: 'vertical' | 'horizontal'
- `meta`: Array<{icon: string, label: string}>

---

## Form Components

### 7. Button
Interactive action buttons.

```html
<app-button
  label="Click Me"
  variant="primary"
  size="medium"
  icon="save"
  (clicked)="onButtonClick()">
</app-button>
```

**Props**:
- `label`: string
- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost'
- `size`: 'small' | 'medium' | 'large'
- `icon`: string (optional)
- `(clicked)`: EventEmitter - Emits on click

---

### 8. InputField
Form text inputs with variants.

```html
<app-input-field
  label="Email"
  placeholder="Enter email"
  variant="primary"
  icon="mail"
  iconPosition="left"
  helperText="We'll never share your email">
</app-input-field>
```

**Props**:
- `label`: string
- `placeholder`: string
- `variant`: 'primary' | 'success' | 'warning' | 'danger'
- `icon`: string (optional)
- `iconPosition`: 'left' | 'right'
- `helperText`: string (optional)
- `disabled`: boolean (optional)

---

## Data Components

### 9. DataTable
Display tabular data with sorting capabilities.

```typescript
// Component
columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true }
];

data = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' }
];
```

```html
<app-data-table
  [columns]="columns"
  [data]="data">
</app-data-table>
```

**Props**:
- `columns`: Array<{key: string, label: string, sortable?: boolean}>
- `data`: Array<any> - Row data objects

---

### 10. Pagination
Navigation controls for paginated content.

```html
<app-pagination
  [currentPage]="currentPage"
  [totalPages]="10"
  (pageChanged)="onPageChange($event)">
</app-pagination>
```

**Props**:
- `currentPage`: number
- `totalPages`: number
- `(pageChanged)`: EventEmitter<number> - Emits page number

---

## UI Element Components

### 11. Avatar
User profile pictures.

```html
<!-- Initials -->
<app-avatar
  size="large"
  initials="SA"
  backgroundColor="#667eea">
</app-avatar>

<!-- Icon -->
<app-avatar
  size="medium"
  icon="account_circle"
  backgroundColor="#4facfe">
</app-avatar>

<!-- Image -->
<app-avatar
  size="small"
  image="https://example.com/avatar.jpg">
</app-avatar>
```

**Props**:
- `size`: 'small' | 'medium' | 'large' | 'xlarge'
- `initials`: string (optional) - 2 character initials
- `icon`: string (optional) - Material icon
- `image`: string (optional) - Image URL
- `backgroundColor`: string (optional) - Hex color

---

### 12. Progress
Visual progress indicators.

```html
<app-progress
  [percentage]="65"
  variant="success"
  showLabel="true">
</app-progress>
```

**Props**:
- `percentage`: number (0-100)
- `variant`: 'primary' | 'success' | 'warning' | 'danger' | 'info'
- `showLabel`: boolean (optional)

---

### 13. Rating
Star rating display.

```html
<app-rating
  [rating]="4.5"
  [reviewCount]="234">
</app-rating>
```

**Props**:
- `rating`: number (0-5)
- `reviewCount`: number (optional)

---

### 14. StatBadge
Compact statistics with icons.

```html
<app-stat-badge
  label="Revenue"
  number="$45.2K"
  subtitle="Last 30 days"
  icon="trending_up"
  variant="success">
</app-stat-badge>
```

**Props**:
- `label`: string
- `number`: string
- `subtitle`: string (optional)
- `icon`: string - Material icon
- `variant`: 'primary' | 'success' | 'warning' | 'danger'

---

## Common Patterns

### Using Multiple Components

```typescript
// dashboard.component.ts
export class DashboardComponent {
  stats = [
    { title: 'Sales', value: '12,456', changePercent: 15, isPositive: true },
    { title: 'Revenue', value: '$45,321', changePercent: 8, isPositive: true }
  ];

  alerts = [
    { title: 'Success', message: 'Changes saved', severity: 'success' }
  ];

  onButtonClick() {
    console.log('Button clicked');
  }
}
```

```html
<!-- dashboard.component.html -->
<div class="dashboard">
  <div class="stats-grid">
    <app-stats-card
      *ngFor="let stat of stats"
      [title]="stat.title"
      [value]="stat.value"
      [changePercent]="stat.changePercent"
      [isPositive]="stat.isPositive">
    </app-stats-card>
  </div>

  <div class="alerts">
    <app-alert-banner
      *ngFor="let alert of alerts"
      [title]="alert.title"
      [message]="alert.message"
      [severity]="alert.severity">
    </app-alert-banner>
  </div>

  <app-button
    label="Submit"
    variant="primary"
    (clicked)="onButtonClick()">
  </app-button>
</div>
```

---

## Import Pattern

All components must be imported and added to your component's imports:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from './components/stats-card/stats-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatsCardComponent,
    // ... other component imports
  ],
  template: `...`
})
export class DashboardComponent {}
```

---

## Styling Customization

### Component Styling
Each component has scoped SCSS. To customize globally, edit `/src/styles.scss`:

```scss
// Override button colors
$button-primary: #your-color;
$button-success: #your-color;
// etc.
```

---

## Best Practices

1. **Use Standalone Components**: All components are standalone-ready
2. **Import CommonModule**: Required for *ngIf, *ngFor, etc.
3. **Use Track Functions**: optimize *ngFor with trackBy
4. **Event Binding**: Use (clicked) or (pageChanged) for event handling
5. **Type Safety**: Use TypeScript for all props
6. **Responsive Design**: Components auto-adapt to container size

---

## Component Library Documentation

Visit `/` (component-library route) to see all 15 components with live examples and variants.

---

## Support & Questions

Refer to individual component files in `/src/app/components/[component-name]/` for additional implementation details and inline documentation.
