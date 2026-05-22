// Neumorphic color palette - soft, muted, monochromatic base
export const COLORS = {
    // Primary neumorphic base colors
    base: '#E0E5EC',           // Main background/surface
    baseLight: '#F5F7FA',      // Lighter surface
    baseDark: '#A3B1C6',       // Darker surface for contrast

    // Accent colors (muted for neumorphism)
    blue: '#5F7FD4',           // Soft blue
    green: '#5FB36D',          // Soft green
    dark_green: '#4A8A54',     // Darker soft green
    red: '#D85F6F',            // Soft red
    dark_red: '#B84C5A',       // Darker soft red
    orange: '#D99B5F',         // Soft orange
    dark_orange: '#B87A47',    // Darker soft orange

    // Text colors
    text_dark: '#3A3F47',      // Dark text
    text_light: '#6B7280',     // Light text

    // Background colors
    background: '#E0E5EC',     // Main background
    card_background: '#E0E5EC', // Card background (neumorphic base)

    // Legacy grays (maintained for compatibility, now neumorphic)
    light_gray: '#F5F7FA',
    medium_gray: '#C9D1DC',
    dark_gray: '#8FA3BD',
}

export const TYPOGRAPHGY  = {
    font_family: 'Arial',
    font_weight: 'normal',
}

export const SIZES = {
    xs: '12px',
    sm: '12px',
    md: '12px',
    lg: '12px',
    xl: '12px',
}

export const WEIGHTS = {
    xs: '300px',
    sm: '300px',
    md: '300px',
    lg: '300px',
    xl: '300px',
}

export const RADIUS = {
    small: '12px',
    medium: '20px',
    large: '30px',
    full: '50%',
}

export const SHADOW = {
    // Inset shadows (pressed/depressed effect)
    insetLight: 'inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)',
    insetMedium: 'inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)',
    insetDark: 'inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)',

    // Outset shadows (raised/embossed effect)
    light: '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)',
    medium: '5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)',
    medium2: '5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)',
    large: '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)',
}