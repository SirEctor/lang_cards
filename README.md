# What is Lang-Cards?
Lang-Cards is a flashcard study/quiz system I made to help learn the letters of languages.

# What Does It Utilize?
-   React
-   Material UI
-   Django
-       corsheaders
-       restframework
-   AWS
-       S3 (to host the frontend @ http://lang-card-bucket.s3-website-us-east-1.amazonaws.com/ ) (Deprecated)
-       EC2 (to host the Django apis @ http://107.20.1.29:8000/api/) (Deprecated)
-           which is in its own custom VPC
-       Cloudfront (for CDN) (Deprecated)
-     Moved to Github pages (csv for backend, since pages require static, single page applications)


# Next steps
-    Add a Login/Registration for custom user profiles
-    Add more languages (+ language apis)
  

# Where can you visit it?
http://lang-card-bucket.s3-website-us-east-1.amazonaws.com/


---------------------------------------------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
(To try running this locally on your own, simply clone and pull my repo before running the following commands to activate the React on port 3000. Note that you will also need a Django instance running on port 8000!!!!)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
