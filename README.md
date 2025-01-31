# Taskie 🦄 - Task Management App with Gamification

## Overview

Taskie transforms task management into an engaging experience, making productivity feel less like work and more like a game. This app aims to help users organize their tasks in a visually engaging way, combining effective task prioritization with gamified elements that motivate users to keep going.

Many users struggle with motivation in managing tasks effectively. By blending gamification with a clean, bold design, Taskie aims to make task tracking and completion more rewarding, addressing the need for a task management solution that encourages consistent productivity.

 [Live Demo](https://taskie-task-manager.netlify.app/)

## Features ✨

- **Task Creation & Editing**: Users can create, edit, and delete tasks with assigned priorities (low, medium, high) and due dates.
- **Points System**: Earn points based on task priority when completing tasks:
  Low Priority: +10 points
  Medium Priority: +20 points
  High Priority: +30 points
- **Levels**: As users accumulate points, they unlock new levels:
  Taskie Novice: 0 – 99 points
  Taskie Pro: 100 – 299 points
  Taskie Guru: 300+ points
- **Filters**: Filter tasks by priority (Low, Medium, High).
- **Modals**: Modals are used for creating/editing tasks and displaying game rules.
- **Progress Bar**: Shows progress toward the next level.
- **Gamification**: Unlock levels, badges, and celebrate task completion with animated feedback using Framer Motion.


## Tech Stack 🛠️

- `React`– For building the user interface.
- `TypeScript` – Enhances the project with static typing, improving code quality and maintainability.
- `Redux` - For state management.
- `Framer Motion` – For animations (button hovers, task completion badge animation, and modal fade-ins).
- `TailwindCSS`– For styling and layout.
- `UUID`– For generating unique IDs for tasks.
- `LocalStorage` - For data persistence.

## Animations and Effects 🎨

Using Framer Motion for:

- Button Hover: Smooth scaling for interactive feedback.
- Task Completion Badge: A celebratory badge pops up when a task is completed.
- Modals: Fade-in animation when modals are opened for creating/editing tasks or displaying rules.
- Form Input Error: Shaking animation and color transition.

## Getting Started
### Installation ⚙️

Clone the repository and install the dependencies:

```
$ git clone https://github.com/dnmore/task-manager.git
$ npm install

```
### Running the Application

Start the development server using:

```
$ npm run dev

```

Visit the app at `http://localhost:3000/`.

## Usage 🚀

1. **Create a Task**: Enter a task description, choose a priority, and set a due date. Click "Create" to add the task.
2. **Complete a Task**: Click the button on each task to toggle from `TO DO` to `DONE` and earn points.
3. **Filter Tasks**: Use the dropdown to filter tasks by priority.
4. **Unlock Levels**: Earn enough points to unlock new levels (Taskie Novice, Taskie Pro, Taskie Guru).
5. **View Rules**: Click the "Rules" button to see how to play the game.


## License 📄

This project is licensed under the MIT License.
