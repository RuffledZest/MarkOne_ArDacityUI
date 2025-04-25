export const componentConfig = [
  {
    id: 'text-pressure',
    name: 'TextPressure',
    category: 'Text Effects',
    description: 'A visually engaging text effect that responds to cursor proximity with font variation.',
    packageName: '@ar-dacity/ardacity-text-pressure',
    importStatement: 'import TextPressure from "@ar-dacity/ardacity-text-pressure";',
    component: 'TextPressure',
    props: [
      { name: 'text', type: 'string', default: 'Ardacity UI', description: 'The text content to be displayed' },
      { name: 'fontFamily', type: 'string', default: 'Compressa VF', description: 'The font family to use' },
      { name: 'fontUrl', type: 'string', default: 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2', description: 'URL to the font file' },
      { name: 'width', type: 'boolean', default: 'true', description: 'Whether to animate font width' },
      { name: 'weight', type: 'boolean', default: 'true', description: 'Whether to animate font weight' },
      { name: 'italic', type: 'boolean', default: 'true', description: 'Whether to animate font italic style' },
      { name: 'alpha', type: 'boolean', default: 'false', description: 'Whether to animate opacity' },
      { name: 'flex', type: 'boolean', default: 'true', description: 'Whether to use flex layout' },
      { name: 'stroke', type: 'boolean', default: 'false', description: 'Whether to apply stroke effect' },
      { name: 'scale', type: 'boolean', default: 'false', description: 'Whether to scale text to fit container' },
      { name: 'textColor', type: 'string', default: 'auto', description: 'Text color (auto for theme detection)' },
      { name: 'strokeColor', type: 'string', default: '#FF0000', description: 'Stroke color when stroke is enabled' },
      { name: 'strokeWidth', type: 'number', default: '2', description: 'Stroke width when stroke is enabled' },
      { name: 'className', type: 'string', default: '', description: 'Additional CSS classes' },
      { name: 'minFontSize', type: 'number', default: '36', description: 'Minimum font size in pixels' }
    ]
  },
  {
    id: 'aurora',
    name: 'Aurora',
    category: 'Backgrounds',
    description: 'A beautiful aurora effect rendered with WebGL for creating atmospheric backgrounds.',
    packageName: '@ar-dacity/ardacity-aurora',
    importStatement: 'import Aurora from "@ar-dacity/ardacity-aurora";',
    component: 'Aurora',
    props: [
      { name: 'colorStops', type: 'array', default: '["#00d8ff", "#7cff67", "#00d8ff"]', description: 'Array of colors used in the gradient' },
      { name: 'amplitude', type: 'number', default: '1.0', description: 'The amplitude of the aurora effect' },
      { name: 'blend', type: 'number', default: '0.5', description: 'Controls the blending/transparency of the effect' },
      { name: 'speed', type: 'number', default: '1.0', description: 'Animation speed factor' }
    ]
  },
  {
    id: 'pixel-transition',
    name: 'PixelTransition',
    category: 'Transitions',
    description: 'A pixelated transition effect between two content elements.',
    packageName: '@ar-dacity/ardacity-pixel-transition',
    importStatement: 'import PixelTransition from "@ar-dacity/ardacity-pixel-transition";',
    component: 'PixelTransition',
    props: [
      { name: 'firstContent', type: 'node', default: '', description: 'The first content to display (React node)' },
      { name: 'secondContent', type: 'node', default: '', description: 'The second content to transition to (React node)' },
      { name: 'gridSize', type: 'number', default: '12', description: 'Size of the transition grid' },
      { name: 'pixelColor', type: 'string', default: '#614df2', description: 'Color of the transition pixels' },
      { name: 'animationStepDuration', type: 'number', default: '0.4', description: 'Duration of each step in the transition animation' },
      { name: 'className', type: 'string', default: '', description: 'Additional CSS classes' }
    ]
  },
  {
    id: 'scroll-reveal',
    name: 'ScrollReveal',
    category: 'Animations',
    description: 'A component that adds scroll-triggered reveal animations to its children.',
    packageName: '@ar-dacity/ardacity-scroll-reveal',
    importStatement: 'import ScrollReveal from "@ar-dacity/ardacity-scroll-reveal";',
    component: 'ScrollReveal',
    props: [
      { name: 'baseOpacity', type: 'number', default: '0', description: 'Initial opacity before reveal' },
      { name: 'baseRotation', type: 'number', default: '5', description: 'Initial rotation angle (in degrees) before reveal' },
      { name: 'enableBlur', type: 'boolean', default: 'true', description: 'Whether to apply blur effect' },
      { name: 'blurStrength', type: 'number', default: '10', description: 'Blur strength when enableBlur is true' },
      { name: 'className', type: 'string', default: '', description: 'Additional CSS classes' },
      { name: 'children', type: 'node', default: '', description: 'Content to be revealed' }
    ]
  },
  {
    id: 'splash-cursor',
    name: 'SplashCursor',
    category: 'Cursors',
    description: 'A custom cursor effect with animated splash interactions.',
    packageName: '@ar-dacity/ardacity-splash-cursor',
    importStatement: 'import SplashCursor from "@ar-dacity/ardacity-splash-cursor";',
    component: 'SplashCursor',
    props: [
      { name: 'color', type: 'string', default: '#3498db', description: 'Color of the cursor splash effect' },
      { name: 'size', type: 'number', default: '30', description: 'Size of the cursor splash in pixels' },
      { name: 'splashRadius', type: 'number', default: '100', description: 'Maximum radius of the splash animation' },
      { name: 'splashDuration', type: 'number', default: '0.8', description: 'Duration of the splash animation in seconds' },
      { name: 'enabled', type: 'boolean', default: 'true', description: 'Whether the splash cursor is enabled' }
    ]
  },
  {
    id: 'hyperspeed',
    name: 'Hyperspeed',
    category: 'Backgrounds',
    description: 'A star-field animation emulating a hyperspeed/warp effect in space.',
    packageName: '@ar-dacity/ardacity-hyperspeed',
    importStatement: 'import Hyperspeed from "@ar-dacity/ardacity-hyperspeed";',
    component: 'Hyperspeed',
    props: [
      { name: 'starColor', type: 'string', default: '#FFFFFF', description: 'Color of the stars' },
      { name: 'starCount', type: 'number', default: '1000', description: 'Number of stars in the animation' },
      { name: 'speed', type: 'number', default: '2', description: 'Animation speed factor' },
      { name: 'backgroundColor', type: 'string', default: '#000000', description: 'Background color' }
    ]
  },
  {
    id: 'message-signer',
    name: 'MessageSigner',
    category: 'Message Signer',
    description: 'A beautiful, interactive message signing component with Lua code editor for React applications.',
    packageName: '@ar-dacity/ardacity-message-signer',
    importStatement: 'import { MessageSignerForm } from "@ar-dacity/ardacity-message-signer";',
    component: 'MessageSignerForm',
    props: [
      { name: 'title', type: 'string', default: 'Message Signer', description: 'Title displayed at the top of the form' },
      { name: 'description', type: 'string', default: 'Sign messages using Lua handlers', description: 'Description text displayed below the title' },
      { name: 'initialLuaCode', type: 'string', default: '(Default Lua code)', description: 'Initial code to display in the Lua editor' },
      { name: 'onSign', type: 'function', default: 'undefined', description: 'Callback function called when a message is signed' },
      { name: 'className', type: 'string', default: '', description: 'Additional CSS classes to apply to the component' },
      { name: 'style', type: 'object', default: '{}', description: 'Additional inline styles to apply to the component' }
    ]
  },
  {
    id: 'hero-one',
    name: 'HeroOne',
    category: 'Layout',
    description: 'A stunning, animated hero section with Arweave wallet integration for React applications.',
    packageName: '@ar-dacity/ardacity-hero-one',
    importStatement: 'import { HeroOne } from "@ar-dacity/ardacity-hero-one";',
    component: 'HeroOne',
    props: [
      { name: 'None', type: '', default: '', description: 'This component does not accept any props currently. Configuration is done by editing the component file.' }
    ]
  }
]; 