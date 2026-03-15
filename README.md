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

The useState hook is a function that allows you to add state to functional components. It returns an array with two elements - the current state value and a function to update it.

### 4) How can you share state between components in React?

The common rule is lifting state up to the nearest parent and passing data down via props.

### 5) How is event handling done in React?

Event handling in React is done with action handlers such as onClick, onChange, and onSubmit. DOM elements pass a function to these handlers, and React handles these through the handler functions.
