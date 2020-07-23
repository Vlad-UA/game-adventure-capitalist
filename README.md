
# General information about the project:

### Hosted application
https://vlad-ua.github.io/game-adventure-capitalist/

![Alt text](/Vlad-UA/game-adventure-capitalist/blob/master/src/assets/images/main-screen.jpg?raw=true "Main screen")

### Features
* Buy and upgrade businesses.
* Make money from a business.
* Hiring managers, so that money will be made automatically.
* Businesses continue to make progress while you’re away (if you have a manager).<br /> 
Used the Local Storage to store the current game state (saved each second).<br /> 
When the player returns, the game calculates the offline time and then calculates a received income.

### Used language for development
JavaScript

### UI
* React (to speed up of creation was used Create React App https://create-react-app.dev/)
* CSS styling: CSS in JS (https://styled-components.com/)

### Structure of folders
* components -- main components of the game. Files started with capital letters contains the visible components (React specific approach).
* constants
* hooks —  contains business logic (one business logic in one Hook file). Each component can have its own "hooks" folder with its specific business logic.
* store — Redux store of the game. For debug, you can use Redux DevTools 
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
* styles — common CSS (For instance: styled button)
* utils – a collection of utils (moved into one place to reuse in code).
     

### Code Style
Used Airbnb rules for the coding style consistent.<br />
To install auto-check and correction, use EsLint https://eslint.org/ (will be automatically installed by “npm install”).<br />
To check code style run "lint:show-errors"  (package.json —> "scripts”)


### TODO for more stability of game:
* convert JavaScript to TypeScript
* add tests



## Information related to Create React App:


This project was bootstrapped with [Create React Game](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React Game documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web Game

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
