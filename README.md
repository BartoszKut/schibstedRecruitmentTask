# Schibsted recruitment task
## By way of introduction
This project is built on software delivered by [Create React App](https://create-react-app.dev/), which requires installed `Node` >= 14.0.0.<br/>
The tech stack I've picked for project development is:
1. [npm](https://www.npmjs.com/) - as package manager
2. [React](https://reactjs.org/) - to create single-page application 
3. [axios](https://www.npmjs.com/package/axios) - to make HTTP requests
4. [React bootstrap](https://react-bootstrap.github.io/) - to build responsive app and for basic styling
5. `http-server` - To create a proxy for API requests, as the server under initially url I've received was not sending CORS headers.<br/><br/>

## Steps to run the application:

### 1. Install Dependencies
Please run `npm install`<br/>

### 2. Run the proxy server for local API communication. 
Please run `node proxy.js`<br/>

### 3. Runs the app in the development mode.
In the another card of your terminal please run `npm start`<br/>

### 4. View app in the browser
[http://localhost:3000](http://localhost:3000)<br/><br/>


## Side notes
1. To communicate the lazybus API I had to create proxy.js which proxying requests.
2. To fetch data from the API I created a custom hook where axios communicate with proxy.
3. To better UX I decided to render different types of images depending on viewport size.
4. I focused on 2 kinds of devices desktops (large viewport) and mobile (small viewport) so different sizes require improvements.
5. I decided that for every component which requires additional styling by css I imported different css file created for this component.
6. To almost every commit in addition to the main message I also added a short description message.
7. I decided to work only on the one `main` branch.<br/><br/>
