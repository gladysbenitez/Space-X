# Gladys' React Evaluation

Thanks for taking the time to check out my evaluation! 

### Instructions
1. Download the project locally 
2. Navigate in space-x folder 
3. ## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. 



## How to See the functionality 
1. The initial load, grabs all the missions and displays them as the home screen. 

2. In the Navigation bar, the Space-X logo can be clicked to return to home at any point in time. 

3. The Navigation Bar has launch site names that have been sliced down to two words for a better looking header filter.

4. On click of any of the launch site names, the corresponding filtered missions display without order. You can navigate back and forth 

5. When you click the Sort button, I decided to sort by Date using the Merge Sort Method 

6. You are able to sort the missions on whichever launch site name or even logo you click.  


## Developer Notes / Things I would likely improve had more time

1. I would like to add more tests to test functionality of filter and sort functions. I would target the element and fire events to capture changes in the UI. When dealing with errors finding data-test-id i would use the screen.debug() to see what my output looks like and work backwards from there

2. I used the Merge Sort Method with time complexiity of O(n*Log n) because it was the most efiicient. divide and conquer. the helper function files have that but i have a bug i would have liked to fix with time which was with a repeating date/time. 

3. I would remove the inline styling and probably do custom styling with styling compoents or tailwind. im familiar and comfortable with both as well as many other librries, but i chose this bootstrap library for time purposes. 

4. I would like to extract more components from the navigation bar and make a folder to hold those components as well as mission to refactor for reusability.  

5. This was my first time using this styling method, graph ql, and testing with an apollo client. I worked on it Saturday for a few hours and Sunday for another few hours. 


## Thank you! 

## 
## This portion below is not nessesary to see my code in action! 

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  





# Space-X
