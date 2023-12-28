
## Objective
This exercise is created to get hands on with different variant of routes in React

## To Do
- Fork the boilerplate
- Clone the forked repository to local system
- Open terminal in forked project location and run `npm i` command to install dependency
- Follow the instruction in each `.js` file in components folder to complete the assignment
- Do not modify any test cases.

## Tasks
- `App.js` is the Home component that involves all logic to navigate users to different components.
- `/`: Empty route that routes user to Login Component
- `*`: Must navigate users to NotFound Component
- `/login`: Should routes the user to Login Component
- `/home`: Is a Protected route, That should navigate users to `Home component` when `isAuthenticated` variable is set to true, else should route to `Login Component`
- '`/about`: Is a Protected route, That should navigate users to `About component` when `isAuthenticated` variable is set to true, else should route to `Login Component`
- '`/about/:organization`: Is a Protected and Parameterized route, That should navigate users to `About component` when `isAuthenticated` variable is set to true, else should route to `Login Component`.
- In `About.js`: Get the organization name from url params and display data accordingly.

# Submitting your solution for preliminary automated review
- Open Hobbes and login into the platform
- Under Assignment repository select react-state-events, and branch master
- Under Your solution repository select your own repository and branch
- Press Submit
- Press click here for the feedback
- Evaluation will take around 5 mins to complete after which you need to refresh your browser and get the updated status
- Watch out for your total score and detailed status on each test and eslint errors in the coloured blocks on the screen
