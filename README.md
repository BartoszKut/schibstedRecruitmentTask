This project is built on the environment delivered by the create-react-app command. <br/>
You’ll need to have `Node` >= 14.0.0 and `npm` >= 5.6 on your machine. <br/><br/>

# How to run a project locally

### 1. Install Dependencies
Please run `npm install`<br/>

### 2. Lazybus API is not sending CORS headers so to work locally with the API proxying requests is required.
Please run `node proxy.js`<br/>

### 3. Runs the app in the development mode.
In the another card of your terminal please run `npm start`<br/>

### 4. View app in the browser
[http://localhost:3000](http://localhost:3000)<br/><br/><br/>


# Side notes
1. To complete the task I have used external libraries like `axios` or `react-bootstrap`.
2. A large part of the styling is made using classes from indicated above `react-bootstrap` library.
3. To communicate the lazybus API I had to create proxy.js which proxying requests.
4. To fetch data from the API I created a custom hook where axios communicate with proxy.
5. To better UX I decided to render different types of images depending on viewport size.
6. I focused on 2 kinds of devices desktops (large viewport) and mobile (small viewport) so different sizes require improvements.
7. I decided that for every component which requires additional styling by css I imported different css file created for this component.
8. To almost every commit in addition to the main message I also added a short description message.
9. I decided to work only on the one `main` branch. 
