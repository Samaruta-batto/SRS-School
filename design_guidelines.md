# School Management System Design Guidelines
*Inspired by Framer Plugins Aesthetic*

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Framer's elegant, professional SaaS design language - characterized by sophisticated card layouts, refined typography, generous spacing, and smooth transitions. The design balances visual sophistication with functional clarity for administrative workflows.

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 240 6% 10% (Deep charcoal for headers and key UI elements)
- Background: 0 0% 100% (Pure white)
- Surface: 240 5% 96% (Light gray for cards)
- Border: 240 6% 90% (Subtle borders)
- Accent: 262 83% 58% (Purple for CTAs and highlights)
- Success: 142 71% 45% (Green for confirmations)
- Warning: 38 92% 50% (Amber for alerts)
- Text Primary: 240 10% 4%
- Text Secondary: 240 4% 46%

**Dark Mode:**
- Primary: 262 83% 58% (Purple accent becomes more prominent)
- Background: 240 10% 4% (Rich dark background)
- Surface: 240 6% 10% (Elevated card surfaces)
- Border: 240 4% 16% (Subtle dark borders)
- Text Primary: 0 0% 98%
- Text Secondary: 240 5% 65%

### B. Typography

**Font Families:**
- Primary: Inter (via Google Fonts CDN)
- Monospace: JetBrains Mono (for data tables, IDs)

**Hierarchy:**
- Page Titles: 2.25rem (36px), font-weight 700, letter-spacing -0.025em
- Section Headers: 1.5rem (24px), font-weight 600
- Card Titles: 1.125rem (18px), font-weight 600
- Body Text: 0.875rem (14px), font-weight 400, line-height 1.6
- Small Text/Labels: 0.75rem (12px), font-weight 500, uppercase, letter-spacing 0.05em
- Data/Metrics: 2rem (32px), font-weight 700 (for dashboard stats)

### C. Layout System

**Spacing Primitives:**
- Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Card padding: p-6 (24px)
- Section spacing: space-y-6 to space-y-8
- Grid gaps: gap-4 to gap-6

**Container Strategy:**
- Main content area: max-w-7xl mx-auto
- Sidebar: Fixed width 16rem (256px) on desktop
- Cards: Responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

### D. Component Library

**Navigation:**
- Vertical sidebar with icon + label navigation items
- Active state: Purple accent bar on left edge + lighter background
- Hover: Subtle background color shift
- Compact mobile menu with hamburger toggle

**Dashboard Cards:**
- Stat cards with large metric numbers, small labels, and subtle gradient backgrounds
- Use subtle shadows (shadow-sm) and rounded corners (rounded-xl)
- Include small trend indicators (↑/↓ with percentage)
- Grid layout: 3 columns on desktop, stack on mobile

**Data Tables:**
- Alternating row backgrounds for readability
- Sticky headers on scroll
- Monospace font for IDs and numerical data
- Row hover state with subtle background shift
- Action buttons in last column (Edit, Delete icons)

**Forms & Inputs:**
- Clean bordered inputs with focus ring in purple accent
- Floating labels or top-aligned labels with font-size 0.875rem
- Multi-step fee forms with clear section separation
- Checkbox/toggle switches for boolean values (hostel resident, payment status)
- Date pickers with calendar icon

**Modals & Overlays:**
- Centered modal with backdrop blur
- Max width 32rem (512px) for forms
- Smooth enter/exit transitions (scale + fade)
- Close button in top-right corner

**Buttons:**
- Primary: Purple filled with white text, rounded-lg, px-6 py-2.5
- Secondary: Outlined with purple border
- Ghost: No background, purple text for tertiary actions
- Icon buttons: Square with padding p-2, rounded-md

**Cards (General):**
- Background on surface color
- Border: 1px solid border color
- Rounded corners: rounded-xl (12px)
- Shadow: shadow-sm with hover:shadow-md transition
- Padding: p-6 consistently

### E. Module-Specific Design

**Student Management:**
- Card grid displaying student cards with avatar placeholder, name, admission ID, grade, contact
- Filter bar at top with dropdown selects for grade and hostel status
- "Add Student" CTA button in top-right (purple filled)

**Fees Management:**
- Student selector dropdown at top
- Fee breakdown in table format with individual line items
- Total calculation prominently displayed
- "Mark as Paid" toggle switch with payment date picker
- Financial summary cards showing Total Collected vs Total Pending with percentage bar

**Attendance Tracking:**
- Calendar view or list view toggle
- Student rows with Present/Absent radio buttons or toggle
- Quick actions: "Mark All Present" button
- Date selector at top

**Event Regulator:**
- Event list in card format with date, name, description
- JSON editor: Textarea with monospace font, syntax highlighting suggestion
- Parsed table: Clean data table with scrollable container, export option

**Staff & Transport:**
- Similar card-based layouts to Student Management
- Staff cards include role badges (Teacher, Driver, Non-Teaching)
- Transport routes show driver assignment + student count indicator

**User Profile Section:**
- Display Firebase User ID in monospace font
- Role badge showing "Administrator"
- Small profile card in sidebar or top-right corner

## Animations

**Minimal, Purposeful Motion:**
- Card hover: Subtle scale (scale-[1.02]) + shadow elevation
- Page transitions: Fade-in content on route change
- Loading states: Skeleton loaders matching card layouts
- Button interactions: Scale down on click (active:scale-95)
- No complex animations - focus on smooth, instant feedback

## Responsive Breakpoints

- Mobile: Base (< 768px) - Stack all cards, full-width components
- Tablet: md (768px+) - 2-column grids, visible sidebar
- Desktop: lg (1024px+) - 3-column grids, full layout

## Images

**No Hero Images Required**: This is a utility-focused admin dashboard, not a marketing page. Focus on data visualization and functional UI elements.

**Icon Usage:**
- Use Lucide React icons throughout for consistency
- Icon sizes: 16px for inline, 20px for buttons, 24px for section headers
- Navigation icons: 20px with 8px right margin

## Accessibility

- Maintain WCAG AA contrast ratios in both light and dark modes
- Focus indicators on all interactive elements (purple ring)
- Semantic HTML structure with proper headings hierarchy
- Keyboard navigation support for all actions
- Screen reader labels for icon-only buttons