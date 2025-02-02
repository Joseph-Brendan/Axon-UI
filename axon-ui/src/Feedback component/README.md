# Feedback Components

A collection of reusable React components for user feedback and interaction.

## Table of Contents
1. [Modal](#modal)
2. [Tooltip](#tooltip)
3. [Snackbar](#snackbar)
4. [Loaders](#loaders)

## Modal

A flexible modal dialog component with customizable content, title, and footer.

```jsx
import { Modal } from './components/feedback';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Example Modal"
      footer={
        <button onClick={() => setIsOpen(false)}>Close</button>
      }
    >
      <p>Modal content goes here</p>
    </Modal>
  );
}
```

### Props
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback when modal is closed
- `title` (string): Modal title
- `children` (node): Modal content
- `footer` (node, optional): Modal footer content
- `className` (string): Custom class for the modal container
- `overlayClassName` (string): Custom class for the overlay
- `headerClassName` (string): Custom class for the header
- `contentClassName` (string): Custom class for the content
- `footerClassName` (string): Custom class for the footer
- `width` (string): The width of the modal

## Tooltip

A tooltip component that appears on hover with customizable position and delay.

```jsx
import { Tooltip } from './components/feedback';

<Tooltip 
    content="This is a tooltip" 
    position="top"
    delay={200}
    color='#fff'
    backgroundColor='#323232'
  >
  <button>Hover me</button>
</Tooltip>
```

### Props
- `content` (string): Tooltip text
- `position` (string): Tooltip position ('top', 'bottom', 'left', 'right')
- `children` (node): Element that triggers the tooltip
- `delay` (number, optional): Delay before showing tooltip (default: 200ms)
- `className` (string): Custom class for the tooltip container
- `tooltipClassName` (string): Custom class for the tooltip content
- `animation` (string): The animation type ('fade', 'slide)
- `animationDuration` (number): The duration (in milliseconds) of the animation
- `color` (string): The text color of the tooltip
- `backgroundColor` (string): The background color of the tooltip

## Snackbar

A notification component for displaying brief messages.

```jsx
import { Snackbar } from './components/feedback';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Snackbar
      isOpen={isOpen}
      message="Action completed successfully"
      onClose={() => setIsOpen(false)}
      variant="success"
      action={{
        label: "Undo",
        onClick: () => handleUndo()
      }}
    />
  );
}
```

### Props
- `message` (string): Message to display
- `isOpen` (boolean): Controls snackbar visibility
- `onClose` (function): Callback when snackbar closes
- `autoHideDuration` (number, optional): Time in ms before auto-hiding (default: 5000)
- `action` (object, optional): Action button configuration ({ label: string, onClick: function })
- `variant` (string, optional): Style variant ('default', 'success', 'error', 'warning', 'info')
- `className` (string): Custom class for the tooltip container
- `messageClassName` (string): Custom class for the message
- `actionClassName` (string): Custom class for the action button
- `animation` (string): The animation type ('fade', 'slide)
- `animationDuration` (number): The duration (in milliseconds) of the animation
- `color` (string): The text color of the tooltip
- `backgroundColor` (string): The background color of the tooltip


## Loaders

### Determinate Progress

A loader that shows progress with a percentage.

```jsx
import { Determinate } from './components/feedback';

// Linear progress bar with percentage
<Determinate 
    progress={75} 
    variant="linear" 
    color='#ff5722'
    backgroundColor='#f0f0f0'
    width='100%'
    height='6px'
/>

// Circular progress with percentage
<Determinate 
    progress={75} 
    variant="circular" 
    size={120}
    color='#000'
    backgroundColor='#f5f5f5'
/>
```

#### Props
- `progress` (number): Progress value (0-100)
- `variant` (string): Type of progress indicator ('linear', 'circular')
- `className` (string): Custom class for the loader container
- `color` (string): The text color of the tooltip
- `backgroundColor` (string): The background color of the tooltip
- `width` (string): The width for the linear loader
- `height` (string): The height for the linear loader
- `size` (string): The size (diameter) for the circular loader

### Indeterminate Progress

Loading indicators for unknown progress duration.

```jsx
import { Indeterminate } from './components/feedback';

// Linear loading bar
<Indeterminate 
    variant="linear" 
    color='#4caf50'
    backgroundColor='#e8f5e9'
    width='200px'
    height='6px'
/>

// Circular spinner
<Indeterminate 
    variant="circular" 
    size={40} 
    color='#4caf50'
    backgroundColor='#e8f5e9'
/>
```

#### Props
- `variant` (string): Type of loader ('linear', 'circular')
- `size` (number, optional): Size in pixels for circular variant (default: 40)
- `className` (string): Custom class for the loader container
- `color` (string): The text color of the tooltip
- `backgroundColor` (string): The background color of the tooltip
- `width` (string): The width for the linear loader
- `height` (string): The height for the linear loader

### Skeleton

A placeholder loader for content that is still loading.

```jsx
import { Skeleton } from './components/feedback';

// Text line placeholder
<Skeleton 
    variant="text" 
    color='#ddd'
    backgroundColor='#eee'
    width='150px'
    height='100px'    
/>

// Circle placeholder
<Skeleton 
    variant="circle" 
    width={40} 
    height={40} 
    color='#ddd'
    backgroundColor='#eee'
/>

// Rectangle placeholder
<Skeleton 
    variant="rect" 
    width='200px'
    height='100px' 
    color='#ddd'
    backgroundColor='#eee'
/>
```

#### Props
- `variant` (string): Type of skeleton ('text', 'circle', 'rect')
- `width` (number|string, optional): Width of skeleton
- `height` (number|string, optional): Height of skeleton
- `className` (string): Custom class for the skeleton container
- `color` (string): The color of the skeleton loader
- `backgroundColor` (string): The background color of the skeleton loader

### Text Loader

A loader that displays a text message with animated dots.

```jsx
import { TextLoader } from './components/feedback';

<TextLoader  
    text="Loading" 
    color='#333' 
    dotColor='#ff9800' 
/>
```

#### Props
- `text` (string): Text to display before the animated dots (default: "Loading")
- `className` (string): Custom class for the text loader container.
- `color` (string): The color of the text.
- `dotColor` (string): The color of the animated dots.

## Styling

All components use CSS modules for styling and can be customized by modifying their respective `.module.css` files. The components are designed to work for additional styling flexibility.

General Notes

- Accessibility: All components include ARIA attributes and keyboard support for better accessibility.
- Customization: Use className and other class name props to apply custom styles.
- Animation: Use animation and animationDuration props to customize animations.