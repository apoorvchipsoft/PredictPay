# ReceivablesFlow Design System

## Overview
ReceivablesFlow is an AI-powered finance dashboard with a clean, minimal design using an indigo/blue primary color scheme with teal accents and lots of white space. The design follows modern finance application aesthetics with flat design principles and rounded cards.

## Design Principles
- **Minimal & Clean**: Emphasis on white space and clean layouts
- **Data-Driven**: Clear hierarchy for financial information
- **Professional**: Enterprise-grade finance application aesthetic
- **Accessible**: High contrast and readable typography
- **Consistent**: Systematic approach to spacing, colors, and components

---

## Color System

### Primary Colors
- **Primary**: `#4f46e5` (Indigo-600) - Main brand color, primary actions
- **Primary Foreground**: `#ffffff` - Text on primary backgrounds
- **Secondary**: `#14b8a6` (Teal-500) - Accent color, positive indicators
- **Secondary Foreground**: `#ffffff` - Text on secondary backgrounds

### Neutral Colors
- **Background**: `#ffffff` - Main background
- **Foreground**: `oklch(0.145 0 0)` - Primary text
- **Muted**: `#f8fafc` - Subtle backgrounds
- **Muted Foreground**: `#64748b` - Secondary text
- **Border**: `#e2e8f0` - Borders and dividers

### Semantic Colors
- **Destructive**: `#dc2626` - Errors, overdue indicators
- **Destructive Foreground**: `#ffffff` - Text on destructive backgrounds
- **Warning**: `#eab308` - Warnings, medium risk indicators
- **Success**: `#14b8a6` - Success states, positive metrics

### Chart Colors
- **Chart 1**: `#4f46e5` (Indigo)
- **Chart 2**: `#14b8a6` (Teal)
- **Chart 3**: `#06b6d4` (Cyan)
- **Chart 4**: `#10b981` (Emerald)
- **Chart 5**: `#8b5cf6` (Violet)

---

## Typography

### Font System
- **Base Font Size**: 14px
- **Font Weight Medium**: 500
- **Font Weight Normal**: 400
- **Line Height**: 1.5

### Type Scale
- **H1**: 24px, Medium (500) - Page titles
- **H2**: 20px, Medium (500) - Section titles
- **H3**: 18px, Medium (500) - Subsection titles
- **H4**: 16px, Medium (500) - Card titles
- **Body**: 14px, Normal (400) - Body text
- **Small**: 12px, Normal (400) - Captions, metadata
- **Button**: 14px, Medium (500) - Button labels
- **Label**: 14px, Medium (500) - Form labels

---

## Spacing System

### Base Unit: 4px

### Spacing Scale
- **1**: 4px
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **5**: 20px
- **6**: 24px
- **8**: 32px
- **10**: 40px
- **12**: 48px
- **16**: 64px
- **20**: 80px

### Layout Spacing
- **Page Padding**: 32px (p-8)
- **Card Padding**: 24px (p-6)
- **Component Gap**: 24px (gap-6)
- **Section Spacing**: 32px (space-y-8)

---

## Border Radius

### Border Radius Scale
- **SM**: 8px (calc(12px - 4px))
- **MD**: 10px (calc(12px - 2px))
- **LG**: 12px (default radius)
- **XL**: 16px (calc(12px + 4px))

### Usage
- **Cards**: 12px (rounded-lg)
- **Buttons**: 8px (rounded-sm)
- **Inputs**: 8px (rounded-sm)
- **Badges**: 16px (rounded-xl)
- **Avatars**: Full radius (rounded-full)

---

## Component Specifications

### Cards
- **Background**: `#ffffff`
- **Border**: 1px solid `#e2e8f0`
- **Border Radius**: 12px
- **Padding**: 24px
- **Shadow**: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`

### Buttons
#### Primary Button
- **Background**: `#4f46e5`
- **Text**: `#ffffff`
- **Padding**: 12px 16px
- **Border Radius**: 8px
- **Font Weight**: 500

#### Secondary Button (Outline)
- **Background**: Transparent
- **Border**: 1px solid `#e2e8f0`
- **Text**: `#1e293b`
- **Padding**: 12px 16px
- **Border Radius**: 8px

#### Ghost Button
- **Background**: Transparent
- **Text**: `#64748b`
- **Padding**: 12px 16px
- **Border Radius**: 8px
- **Hover**: `#f8fafc` background

### KPI Cards
- **Layout**: Flexbox with icon and content
- **Icon Container**: 40px × 40px, rounded 12px
- **Icon Size**: 20px × 20px
- **Primary Metric**: 24px, font-weight 700
- **Label**: 14px, `#64748b`
- **Secondary Info**: 12px, colored by status

### Tables
- **Header Background**: `#f8fafc`
- **Header Text**: 12px, uppercase, tracking-wide
- **Row Padding**: 16px
- **Border**: 1px solid `#e2e8f0`
- **Hover**: `#f8fafc` background

### Forms
#### Input Fields
- **Background**: `#f8fafc`
- **Border**: 1px solid `#e2e8f0`
- **Border Radius**: 8px
- **Padding**: 12px
- **Focus Border**: `#4f46e5`

#### Select Dropdowns
- **Background**: `#f8fafc`
- **Border**: 1px solid `#e2e8f0`
- **Border Radius**: 8px
- **Arrow Icon**: Chevron down, `#64748b`

### Badges
#### Status Badges
- **Active**: `#14b8a6` background, white text
- **High Risk**: `#dc2626` background, white text
- **Medium Risk**: `#eab308` background, dark text
- **Low Risk**: `#14b8a6` background, white text
- **Draft**: `#f3f4f6` background, `#6b7280` text

### Navigation
#### Sidebar
- **Width**: 256px (w-64)
- **Background**: `#f8fafc`
- **Border**: 1px solid `#e2e8f0`
- **Item Padding**: 12px
- **Active State**: `#4f46e5` background, white text
- **Hover State**: `#f1f5f9` background

---

## Layout Grid

### Breakpoints
- **SM**: 640px
- **MD**: 768px
- **LG**: 1024px
- **XL**: 1280px
- **2XL**: 1536px

### Grid System
- **Dashboard**: 1-4 columns responsive
- **Main Content**: 2/3 columns with sidebar
- **Forms**: Single column, max-width 600px
- **Tables**: Full width with horizontal scroll

---

## Icons

### Icon System
- **Library**: Lucide React
- **Default Size**: 16px (w-4 h-4)
- **Large Icons**: 20px (w-5 h-5)
- **Button Icons**: 16px with 8px margin
- **Color**: Inherits from parent or `#64748b`

### Common Icons
- **Dashboard**: LayoutDashboard
- **Invoices**: FileText
- **Payments**: CreditCard
- **Analytics**: BarChart3
- **Risk**: AlertTriangle
- **Settings**: Settings
- **Upload**: Upload
- **Success**: CheckCircle
- **Warning**: AlertTriangle
- **Info**: Info

---

## Data Visualization

### Charts
- **Library**: Recharts
- **Colors**: Use chart color palette
- **Grid**: `#e2e8f0`
- **Text**: 12px, `#64748b`
- **Tooltips**: White background, shadow
- **Responsive**: ResponsiveContainer

### Progress Bars
- **Background**: `#e2e8f0`
- **Fill**: Based on status (primary, secondary, destructive)
- **Height**: 8px (h-2)
- **Border Radius**: 4px

---

## States & Interactions

### Hover States
- **Buttons**: Slight opacity change (0.9)
- **Cards**: Subtle shadow increase
- **Table Rows**: `#f8fafc` background
- **Links**: Color change to primary

### Focus States
- **Form Elements**: `#4f46e5` border, ring shadow
- **Buttons**: Ring shadow with primary color
- **Links**: Underline

### Loading States
- **Skeleton**: `#f1f5f9` background with shimmer
- **Spinners**: Primary color
- **Progress**: Animated progress bar

### Empty States
- **Background**: Light gray illustration
- **Text**: Centered, muted foreground
- **Action**: Primary button below text

---

## Responsive Behavior

### Mobile (< 768px)
- **Sidebar**: Hidden, replaced with mobile menu
- **Grid**: Single column
- **Tables**: Horizontal scroll
- **Padding**: Reduced to 16px

### Tablet (768px - 1024px)
- **Sidebar**: Collapsible
- **Grid**: 1-2 columns
- **Charts**: Smaller height

### Desktop (> 1024px)
- **Sidebar**: Always visible
- **Grid**: Full layout (1-4 columns)
- **Charts**: Full size

---

## Accessibility

### Color Contrast
- **Primary Text**: 4.5:1 minimum
- **Secondary Text**: 3:1 minimum
- **Interactive Elements**: 3:1 minimum

### Focus Management
- **Visible Focus**: Ring outline
- **Keyboard Navigation**: Tab order
- **Screen Readers**: Proper ARIA labels

### Motion
- **Reduced Motion**: Respect user preferences
- **Transitions**: Subtle, 200ms duration
- **Loading**: Clear progress indicators