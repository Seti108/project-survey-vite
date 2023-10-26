<h1 align="center">
  <a href="">
    <img src="/src/assets/survey.svg" alt="Project Banner Image">
  </a>
</h1>

# Survey Project

Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

Building Multi-Step Form

A multi-step form consists of 5 questions and one result page. The project aims for practicing of React hooks and props and import and export.

1. Initial State and State Management
The 'useState()' hook is used to create a state variable called 'data' and it recieves an object with properties q1, q2, q3, q4, and q5. These will be used to store user's inputs from five questions inside the form. At the start, all properties are empty strings.
'data' - displays current value for the question in each field
'updateData()' - updated form's state with latest user inputs to each equestion.

2. Reset button
The 'resetApp()' function brings user back to question no.1 (setCurrentStep(1)). 'e.preventDefault()' is also used at the beginning to ensures that when the event associated with the "reset" action occurs, the default behavior of that event is suppressed. Usage: onClick={resetApp}.

3. Form Rendering
- In 'QuestionsAndAnswer.jsx', the 'return' blocks contains the form structure. The form renders each question based on the value of 'currentStep'. To be able to render in order, the currentStep must match number of each question (Ex. currentStep === 1).
- Then, the rendering will go through <Question(1, 2,...5) /> components and pass the 'updateData' and the relevant data ('data.q1', 'data.q2',...'data.q5') as props.
- When the 'currentStep' === 6, it will render <Results />

Collaborators: Sebastian Tigerschiöld
May Sunktong
 
### View it live

https://glittering-crisp-83ddf9.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
