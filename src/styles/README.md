# CSS Organization

This project uses a modular CSS architecture for better maintainability and scalability.

## Structure

```
src/
├── index.css          # Main entry point - imports all CSS modules
└── styles/
    ├── variables.css   # CSS custom properties & theme configuration
    ├── base.css        # Reset, typography, buttons, utilities
    ├── header.css      # Header & navigation styles
    ├── sections.css    # All page sections (Hero, Experience, Education, Projects, Skills, Certifications)
    ├── resume.css      # Resume page & PDF viewer styles
    └── responsive.css  # Media queries & responsive design
```

## Import Order

The CSS files are imported in a specific order to ensure proper cascading:

1. **variables.css** - Theme colors and CSS custom properties
2. **base.css** - Base styles, resets, and utilities
3. **header.css** - Navigation and header components
4. **sections.css** - Main content sections
5. **resume.css** - Resume page specific styles
6. **responsive.css** - Media queries and breakpoints

## Theme System

The project uses CSS custom properties for theming:

### Dark Theme (Default)
- Primary: `#2563eb` (Blue)
- Background: `#0f172a` (Dark slate)
- Text: `#e2e8f0` (Light gray)

### Light Theme
- Primary: `#2563eb` (Blue)
- Background: `#ffffff` (White)
- Text: `#1e293b` (Dark slate)

Theme switching is handled by the `ThemeContext` which toggles the `data-theme` attribute.

## Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 769px and above
- **Large Desktop**: 1440px and above

## Best Practices

1. **Use CSS Variables**: All colors and spacing should use CSS custom properties
2. **Component-Based**: Each major component has its own section in the CSS
3. **Mobile-First**: Base styles work for mobile, with media queries for larger screens
4. **Semantic Naming**: Class names follow BEM-like convention (`.component-element-modifier`)
5. **Maintainability**: Related styles are grouped together with clear comments

## Adding New Styles

1. Determine which file the styles belong to based on the component
2. Add styles to the appropriate file
3. Follow existing naming conventions
4. Use CSS custom properties for colors and spacing
5. Test in both light and dark themes
6. Verify responsive behavior

## Performance

- CSS is split into modules for better caching
- `@import` statements in development, can be bundled for production
- Minimal specificity for faster rendering
- CSS custom properties for dynamic theming without runtime overhead
