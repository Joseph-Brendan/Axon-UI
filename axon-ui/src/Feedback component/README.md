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

## Tooltip

A tooltip component that appears on hover with customizable position and delay.

```jsx
import { Tooltip } from './components/feedback';

<Tooltip content="Helpful information" position="top">
  <button>Hover me</button>
</Tooltip>
```

### Props
- `content` (string): Tooltip text
- `position` (string): Tooltip position ('top', 'bottom', 'left', 'right')
- `children` (node): Element that triggers the tooltip
- `delay` (number, optional): Delay before showing tooltip (default: 200ms)

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
- `action` (object, optional): Action button configuration
- `variant` (string, optional): Style variant ('default', 'success', 'error', 'warning', 'info')

## Loaders

### Determinate Progress

Progress indicators with known progress value.

```jsx
import { Determinate } from './components/feedback';

// Linear progress bar with percentage
<Determinate progress={75} variant="linear" />

// Circular progress with percentage
<Determinate progress={75} variant="circular" />
```

#### Props
- `progress` (number): Progress value (0-100)
- `variant` (string): Type of progress indicator ('linear', 'circular')

### Indeterminate Progress

Loading indicators for unknown progress duration.

```jsx
import { Indeterminate } from './components/feedback';

// Linear loading bar
<Indeterminate variant="linear" />

// Circular spinner
<Indeterminate variant="circular" size={40} />
```

#### Props
- `variant` (string): Type of loader ('linear', 'circular')
- `size` (number, optional): Size in pixels for circular variant (default: 40)

### Skeleton

Placeholder loading state for content.

```jsx
import { Skeleton } from './components/feedback';

// Text line placeholder
<Skeleton variant="text" />

// Circle placeholder
<Skeleton variant="circle" width={40} height={40} />

// Rectangle placeholder
<Skeleton variant="rect" width={200} height={100} />
```

#### Props
- `variant` (string): Type of skeleton ('text', 'circle', 'rect')
- `width` (number|string, optional): Width of skeleton
- `height` (number|string, optional): Height of skeleton

### Text Loader

Animated text with dots for loading states.

```jsx
import { TextLoader } from './components/feedback';

<TextLoader text="Loading" />
```

#### Props
- `text` (string): Text to display before the animated dots (default: "Loading")

## Styling

All components use CSS modules for styling and can be customized by modifying their respective `.module.css` files. The components are designed to work for additional styling flexibility.