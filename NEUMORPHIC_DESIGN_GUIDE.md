# Neumorphic Design System Guide

## Overview

This design system has been converted to follow **Neumorphic** (Neomorphic) design principles. Neumorphism combines the soft, extruded elements of skeuomorphism with the flatness of flat design, creating a subtle, elegant aesthetic.

## Key Principles

### 1. **Color Palette**
The neumorphic system uses a soft, muted, monochromatic base with carefully selected accent colors:

```typescript
// Base Colors (Primary)
base: '#E0E5EC'           // Main background/surface
baseLight: '#F5F7FA'      // Lighter surface for depth
baseDark: '#A3B1C6'       // Darker surface for contrast

// Accent Colors (Muted)
blue: '#5F7FD4'           // Soft blue
green: '#5FB36D'          // Soft green
red: '#D85F6F'            // Soft red
orange: '#D99B5F'         // Soft orange
```

### 2. **Shadows**
Neumorphic design uses **dual shadows** to create depth:

- **Outset Shadows** (Raised effect): Light shadow from top-left + dark shadow from bottom-right
- **Inset Shadows** (Pressed effect): Inverted shadow direction for depressed elements

```typescript
// Examples
light: '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)'
medium: '5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)'
insetLight: 'inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)'
```

### 3. **Border Radius**
Smooth, rounded corners enhance the soft aesthetic:

```typescript
small: '12px'
medium: '20px'
large: '30px'
full: '50%'
```

## Component Updates

### Buttons
- **Primary Button**: Full colored background with raised shadow
- **Secondary Button**: Light background with subtle shadow
- **Outline Buttons**: Light background with text color emphasis

**Interactions:**
- **Hover**: Elevates with larger shadow
- **Active**: Insets with inset shadow effect

### Cards
- Soft background color matching the base palette
- Medium shadow for subtle depth
- Hover state elevates the card

### Form Inputs
- Inset shadows for the "pressed into surface" effect
- Focus state increases inset shadow depth
- Smooth transitions on all interactions

### Switch Toggle
- Inset shadow when inactive (appears pressed)
- Raised shadow and color change when active
- Smooth animation on toggle

### Pills/Badges
- Light outset shadow for visibility
- Muted background colors
- Rounded appearance

### Navigation
- **Top Navigation**: Uses card styling with neumorphic shadows
- **Side Navigation**: Base background with raised link hover states
- Active states use accent colors with appropriate shadows

### Modal
- Semi-transparent backdrop with blur effect
- Card-based modal content with enhanced shadows
- Neumorphic close button

### Progress Bar
- Inset shadow for the container (appears recessed)
- Smooth color transitions
- Neumorphic accent colors for progress

## Usage Examples

### Basic Button
```tsx
import { PrimaryButton } from '@gouravnema/design-system';

<PrimaryButton>Click Me</PrimaryButton>
```

### Form Input
```tsx
import { TextInput } from '@gouravnema/design-system';

<TextInput label="Email" type="email" placeholder="Enter email..." />
```

### Card Container
```tsx
import { Card } from '@gouravnema/design-system';

<Card>
  <h2>Neumorphic Card</h2>
  <p>Content goes here</p>
</Card>
```

### Switch
```tsx
import { Switch } from '@gouravnema/design-system';

<Switch 
  defaultState={false} 
  onChange={(isActive) => console.log(isActive)}
/>
```

## Theme Constants

All theme values are available from `@gouravnema/design-system`:

```typescript
// Colors
import { COLORS } from '@gouravnema/design-system';

// Shadows
import { SHADOW } from '@gouravnema/design-system';

// Border Radius
import { RADIUS } from '@gouravnema/design-system';

// Typography
import { TYPOGRAPHGY } from '@gouravnema/design-system';
```

## Design Characteristics

### Softness
- No hard borders or sharp edges
- Smooth transitions and animations
- Rounded corners throughout

### Subtlety
- Muted color palette
- Gentle shadow effects
- No harsh contrasts

### Depth
- Dual shadows create realistic depth perception
- Hover and active states enhance interactivity feedback
- Inset vs outset shadows create tactile feeling

### Consistency
- Unified shadow values across components
- Consistent color usage
- Predictable hover/active states

## Best Practices

1. **Maintain Consistency**: Always use theme values from `COLORS`, `SHADOW`, and `RADIUS`
2. **Respect Hierarchy**: Use larger shadows for more important elements
3. **Provide Feedback**: Implement hover and active states on all interactive elements
4. **Color Restraint**: Use accent colors sparingly for emphasis
5. **Smooth Transitions**: Apply consistent transition timing (0.3s ease) for interactions
6. **Accessibility**: Ensure sufficient color contrast for text readability
7. **Test Thoroughly**: Verify all interactive states on different screen sizes

## Migration Notes

If you're migrating from the previous design system:

- Replace flat shadows with dual-shadow neumorphic shadows
- Update color references to use new neumorphic palette
- Add inset/outset shadow transitions to buttons and interactive elements
- Increase border radius for softer appearance
- Update hover/active states to use shadow changes instead of color only
- Remove borders where possible (use shadows for definition)

## Browser Support

The neumorphic design system supports all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contact & Support

For questions or feedback about the neumorphic design system, please refer to the main project documentation.
