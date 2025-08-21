# ReceivablesFlow Component Library

## Page Components

### 1. LoginPage
**Layout**: Centered card on full-screen background
- **Container**: Full viewport height, centered flexbox
- **Card**: 400px max width, 32px padding, shadow-lg
- **Logo**: Company icon + "ReceivablesFlow" text
- **Form**: Single column, 24px gap between elements
- **Button**: Full width primary button

### 2. Dashboard
**Layout**: Grid layout with sidebar + main content
- **KPI Cards**: 4-column responsive grid (1-2-4 columns)
- **Charts Section**: 2-column grid (2:1 ratio for charts:summary)
- **Tables**: Full width below charts
- **Spacing**: 32px between major sections

### 3. Sidebar Navigation
**Layout**: Fixed left sidebar, 256px width
- **Header**: Logo + company name, 24px padding
- **Navigation**: Grouped menu items with separators
- **Active State**: Primary background with white text
- **Logout**: Bottom section with border-top

---

## Data Display Components

### KPI Card
```
┌─────────────────────────┐
│ [Icon] Label            │
│        $123,456         │
│        +8.5% vs last    │
└─────────────────────────┘
```
**Specifications**:
- **Padding**: 24px all sides
- **Icon Container**: 40×40px, rounded-lg, background color based on type
- **Icon**: 20×20px, colored to match container theme
- **Label**: 14px, muted-foreground
- **Value**: 24px, font-weight bold
- **Change Indicator**: 12px, colored by positive/negative

### Data Table
**Header**:
- **Background**: muted (#f8fafc)
- **Text**: 12px, uppercase, tracking-wide
- **Padding**: 12px vertical, 16px horizontal

**Rows**:
- **Padding**: 16px vertical, 16px horizontal
- **Border**: 1px solid border color
- **Hover**: muted/50 background
- **Alternating**: None (clean white background)

**Cells**:
- **Text**: 14px regular
- **Alignment**: Left for text, right for numbers
- **Badge**: Status indicators where applicable

### Chart Container
**Wrapper**:
- **Height**: 300-400px standard
- **ResponsiveContainer**: 100% width
- **Padding**: 16px
- **Background**: White card

**Chart Styling**:
- **Grid**: stroke-dasharray="3 3", stroke="#e2e8f0"
- **Axes**: stroke="#64748b", fontSize={12}
- **Tooltips**: White background, border, shadow
- **Colors**: Use chart palette (chart-1 through chart-5)

---

## Form Components

### Input Field
```
┌─────────────────────────┐
│ Placeholder text        │
└─────────────────────────┘
```
**Specifications**:
- **Background**: input-background (#f8fafc)
- **Border**: 1px solid border color
- **Border Radius**: 8px (rounded-sm)
- **Padding**: 12px
- **Font Size**: 14px
- **Focus**: Primary border color + ring

### Select Dropdown
```
┌─────────────────────────┐
│ Selected option       ▼ │
└─────────────────────────┘
```
**Specifications**:
- **Same as Input** plus:
- **Arrow**: Chevron down icon, right-aligned
- **Dropdown**: White background, border, shadow
- **Options**: 14px text, 12px padding, hover state

### Button Variants

#### Primary Button
```
┌─────────────────┐
│   Button Text   │
└─────────────────┘
```
- **Background**: Primary color (#4f46e5)
- **Text**: White
- **Padding**: 12px 16px
- **Border Radius**: 8px
- **Font Weight**: 500

#### Secondary Button (Outline)
```
┌─────────────────┐
│   Button Text   │
└─────────────────┘
```
- **Background**: Transparent
- **Border**: 1px solid border color
- **Text**: Foreground color
- **Same padding/radius as primary**

#### Ghost Button
```
  Button Text
```
- **Background**: Transparent
- **Text**: Muted foreground
- **Padding**: 12px 16px
- **Hover**: Muted background

### Switch Toggle
```
◯────  or  ────●
```
- **Track**: 44px width, 24px height
- **Thumb**: 20px diameter
- **Colors**: Muted when off, primary when on
- **Animation**: 200ms transition

---

## Status & Feedback Components

### Badge Variants

#### Status Badge
```
┌─────────┐
│ Active  │
└─────────┘
```
- **Padding**: 4px 12px
- **Border Radius**: 16px (rounded-xl)
- **Font Size**: 12px
- **Font Weight**: 500

**Color Variants**:
- **Active/Success**: Secondary background + white text
- **High Risk**: Destructive background + white text
- **Medium Risk**: Yellow background + dark text
- **Low Risk**: Secondary background + white text
- **Draft**: Muted background + muted text

#### Risk Level Badge
```
┌──────────────┐
│ ⚠ High Risk  │
└──────────────┘
```
- **Icon**: 12px warning/shield icon
- **Text**: 12px, includes risk level
- **Colors**: Match risk level semantics

### Progress Bar
```
████████░░░░ 67%
```
- **Height**: 8px (h-2)
- **Background**: Border color (#e2e8f0)
- **Fill**: Based on context (primary/secondary/destructive)
- **Border Radius**: 4px
- **Width**: Responsive to container

### Loading States

#### Skeleton Loader
```
▓▓▓▓▓▓▓▓░░░░
▓▓▓▓░░░░░░░░
▓▓▓▓▓▓░░░░░░
```
- **Background**: #f1f5f9
- **Animation**: Shimmer effect, 2s duration
- **Border Radius**: Match target component

#### Spinner
```
◐
```
- **Size**: 16px default, 20px large
- **Color**: Primary color
- **Animation**: Rotate 360deg, 1s linear infinite

---

## Navigation Components

### Tab Navigation
```
┌─────────┬─────────┬─────────┐
│ Active  │   Tab   │   Tab   │
├─────────┴─────────┴─────────┤
│                             │
│        Tab Content          │
│                             │
└─────────────────────────────┘
```
**Tab Button**:
- **Padding**: 12px 16px
- **Border**: None
- **Active**: Primary text + bottom border
- **Inactive**: Muted text

**Content Area**:
- **Padding**: 24px
- **Border**: Top border when tabs present

### Breadcrumb
```
Home > Invoices > Invoice Details
```
- **Separator**: "/" or ">" 
- **Links**: Primary color, hover underline
- **Current**: Muted foreground, no link
- **Font Size**: 14px

---

## Modal & Overlay Components

### Dialog/Modal
```
┌─────────────────────────────┐
│ ×                    Title  │
├─────────────────────────────┤
│                             │
│         Modal Content       │
│                             │
├─────────────────────────────┤
│              [Cancel] [Save] │
└─────────────────────────────┘
```
**Overlay**:
- **Background**: rgba(0,0,0,0.5)
- **Backdrop Blur**: Optional

**Modal**:
- **Background**: White
- **Border Radius**: 12px
- **Shadow**: lg shadow
- **Max Width**: 600px default
- **Padding**: 24px

### Tooltip
```
    ┌─────────────┐
    │ Tooltip Text │
    └──────▼──────┘
```
- **Background**: Foreground color (dark)
- **Text**: Background color (white)
- **Padding**: 8px 12px
- **Border Radius**: 8px
- **Font Size**: 12px
- **Arrow**: 6px triangle

---

## Layout Components

### Page Header
```
┌─────────────────────────────────────┐
│ Page Title                [Actions] │
│ Subtitle text                       │
└─────────────────────────────────────┘
```
- **Title**: 32px (3xl), font-weight bold
- **Subtitle**: 16px, muted-foreground
- **Actions**: Right-aligned button group
- **Spacing**: 32px margin-bottom

### Card Layout
```
┌─────────────────────────────────────┐
│ Card Title                          │
├─────────────────────────────────────┤
│                                     │
│           Card Content              │
│                                     │
└─────────────────────────────────────┘
```
**Header**:
- **Padding**: 24px horizontal, 20px vertical
- **Border**: Bottom border
- **Title**: 18px (lg), font-weight medium

**Content**:
- **Padding**: 24px all sides
- **Background**: White
- **Border**: 1px solid border color

### Grid Layouts

#### Dashboard Grid (4 columns)
```
┌─────┬─────┬─────┬─────┐
│ KPI │ KPI │ KPI │ KPI │
├─────┴─────┼─────┴─────┤
│   Chart   │  Summary  │
├───────────┴───────────┤
│      Data Table       │
└───────────────────────┘
```

#### Form Grid (2 columns)
```
┌─────────────┬─────────────┐
│ Field Label │ Field Label │
│ Input       │ Input       │
├─────────────┼─────────────┤
│ Field Label │ Field Label │
│ Input       │ Input       │
└─────────────┴─────────────┘
```

---

## Animation & Transitions

### Transition Durations
- **Fast**: 150ms - Hover states, button presses
- **Normal**: 200ms - Modal open/close, tab switches
- **Slow**: 300ms - Page transitions, complex animations

### Easing Functions
- **Standard**: ease-in-out
- **Enter**: ease-out
- **Exit**: ease-in

### Common Animations
- **Fade In**: opacity 0 → 1
- **Slide In**: transform translateY(20px) → translateY(0)
- **Scale**: transform scale(0.95) → scale(1)
- **Rotate**: transform rotate(0deg) → rotate(360deg) for loading