# Currency-Calculator

<h3>COMPLETED W/O AUTHENTICATION </h3>

An app created specifically as an interview assessment.

<h2>Short Description</h2>
This is an app that consists of two parts, 
  Front-End <b><a href="https://github.com/antreasoum/Currency-Calculator/tree/master/app">(APP)</a></b>
    & Back-End <b><a href="https://github.com/antreasoum/Currency-Calculator/tree/master/server">(SERVER)</a></b>.
    </br>
    Various technologies have been used here like:
<b><a href="https://reactjs.org/">ReactJS</a>, 
  <a href="https://nodejs.org/en/">NodeJS</a>
  (+ <a href="https://expressjs.com/">ExpressJS</a>), CSS and Fetch.</b>

<h2>File Explanation</h2>
<h3>Client Side</h3>

In order for the UI to be made there are three major files.</br>
The app has been created with <code>npx create react-app</code>.

| Files | Description |
| --- | --- |
| App.js | Main File |
| Input.js | Component |
| App.css | Stylesheet |

<h3>Info</h3>

A JS file named Input is created and is being imported as a component in app.js.
<ol><li>Constants that have been created for the app to work:
</br>

```
  const [coinOptions, setCoinOptions] = useState([]) // USD, EUR, JPY etc.
  const [fromCoin, setFromCoin] = useState() //First Input
  const [toCoin, setToCoin] = useState() //Second Input
  const [exchangeRate, setExchangeRate] = useState()
  const [sum, setSum] = useState(1) // Amount Input 1 & 2
  const [sumInput, setSumInput] = useState(true) //Understanding of change in either Input 1 or 2
```

<li>useEffect with Fetch for the connection between Front & Back.
<li>Then two variables with the names "calcInput2" & "calcInput1" are responsible for the calculations.
</ol>

<h3>Server Side</h3>
In order for the API to be made there is one major file.</br>
The server has been created with:
  <ol>
    <li><code>npx create react-app</code>
    <li><code>npm install express cors nodemon</code>
  </ol>
  
  </br>
CORS is being used in order for the browser to allow cross-domain requests.
Also Nodemon was installed to be able to see the changes immediately.

<h2>Application Packages </h2>
<b>The packages imported to the project via npm are these below:</b>

    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
    "cors": "^2.8.5",
    "express": "^4.17.1"
    "nodemon": "^2.0.15"
