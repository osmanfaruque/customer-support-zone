# Customer Support Zone

Customer Support Zone is a React-based ticket management interface where support agents can move tickets through progress states and resolve them with clear visual tracking.

## Features

- Navbar with logo/title on the left and menu plus action button on the right.
- Gradient banner with live counts for In Progress and Resolved tickets.
- Customer tickets displayed as cards in a 2-column desktop grid.
- Task Status panel to track active work and complete tickets.
- Resolved list that records completed tickets.
- React-Toastify notifications replacing browser alerts.
- Responsive layout for mobile, tablet, and desktop.

## React Concept Q and A

### 1) What is JSX, and why is it used?

JSX (JavaScript XML) is an extension for JavaScript that let us write html like structures directly in js code

### 2) What is the difference between State and Props?

Props are properties that are used to pass data from parent to child components.
state is technique used to manupulate data in a component which can be changed by user or other actions.

### 3) What is the useState hook, and how does it work?

UseState

### 4) How can you share state between components in React?

The common approach is lifting state up to the nearest common parent and passing data/functions down via props. For larger applications, Context API or state libraries can be used to avoid excessive prop drilling.

### 5) How is event handling done in React?

Event handling in React is done with camelCase event props such as onClick, onChange, and onSubmit. You pass a function reference or inline handler to these props. React handles these through its synthetic event system.

Example:

```jsx
<button onClick={handleClick}>Complete</button>
```

## Submission

- Live Link: TO_BE_ADDED
- GitHub Repository: https://github.com/osmanfaruque/customer-support-zone
