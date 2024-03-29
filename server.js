// console.log('Node Started');

// const express = require('express');

// const app = express();

// // a package that serves as MIDDLEWARE that allows me to parse the body of my request fields.
// const bodyParser = require('body-parser')

// const port = 3000;


// // https://www.npmjs.com/package/body-parser Body parser = middleware
// // allows express to allow body parser to extract data from the form and add it to the body property in a request object
// // urlencoded = built in method from body parser extract data from the form and add it to the body propert in a request object. 

// // installed mongodb dependancy so we can use this require.
// const MongoClient = require('mongodb').MongoClient

// const url = 'mongodb://localhost:27017'

// MongoClient.connect(url, (error, client) => {
//     if (error) return console.error(error);

// console.log('Connected to MongoDB');

// const db = client.db('HelloCrudDatabase');

// const coursesCollection = db.collection('courses');

// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(port, function () {
//     console.log('Listening on Port 3000');
// });

// // Get request for homepage
// app.get('/', (req,res) => {

// res.sendFile(__dirname + '/index.html');
// });

// // Post request for form submit
// app.post('/courses', (req,res) => {

//     coursesCollection.insertOne(req.body)
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.error(error));
// });
// });



console.log('Node Started');

const express = require('express');

const app = express();

// a package that serves as MIDDLEWARE that allows me to parse the body of my request fields.
const bodyParser = require('body-parser')

const port = 3000;


// https://www.npmjs.com/package/body-parser Body parser = middleware
// allows express to allow body parser to extract data from the form and add it to the body property in a request object
// urlencoded = built in method from body parser extract data from the form and add it to the body propert in a request object. 

// installed mongodb dependancy so we can use this require.
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (error, client) => {
if (error) return console.error(error);

console.log('Connected to MongoDB');

const db = client.db('HelloCrudDatabase');

const coursesCollection = db.collection('courses');

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function () {
    console.log("Listening on Port 3000");
});

// Get request for homepage
app.get("/", (req, res) => {

res.sendFile(__dirname + '/index.html');
});

// Post request for form submit
app.post('/courses', (req,res) => {

    coursesCollection.insertOne(req.body)
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error));
});
});