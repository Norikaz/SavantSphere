## About the project 
TBD

## Set up 
1. Clone the repo to your perfered IDE(VS Code Highly suggested)
2. run npm install
3. Assuming you are using VS Code -> Install the following extentsions for ideal development:
- Eslint: dbaeumer.vscode-eslint (Extension Id's)
- Prettier: esbenp.prettier-vscode
- Jest: Orta.vscode-jest

## Team Coding conventions
### Componenets 
Should follow this structure

![Screen Shot 2023-09-10 at 8 48 01 PM](https://github.com/Norikaz/web-dev-project-1/assets/53831591/10dee6d0-ac63-49fb-bd5c-d9a20aadb6da)

### Props
If your component takes in any props define an interface for them at the top most level underneath the imports 

### Test
Test structure should be a mirror of the src file and follow the naming convention sameNameAsFileBeingTested.test.tsx

## Development 
We will be using Git branch work flow 
- create a new branch for every new feature that is being implimented
- You must unit test that code if there is functionality
- 
IMPORTANT: Make sure to commit once to a branch and any changes after should be an ammed commit and not a new commit. This will allow the reivewers to see the diff between revisions easier and make reviews more efficient

## Pull Request 
should not be more than one page if you have to much code in one pull request you will have to split them up into multiple differnt pull request if possible do not overwhelem the reviewers with too much code.
Look into [Sub branching](https://stackoverflow.com/questions/4470523/create-a-branch-in-git-from-another-branch) to optimize your development workflow in order to not be slowed down while waiting on code to be reviewed or use it to have a follow up pull request if your original one was to large

A PR can only be merged when it has approval from atleast two reviewers

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn About the Tech Stack

[React](https://reactjs.org/)

[TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - Note: If you are familiar with javascript then you can just learn this as you develop 

[Jest](https://jestjs.io/docs/using-matchers)

[React Testing Libray](https://testing-library.com/docs/react-testing-library/intro)
