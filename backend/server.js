const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
	res.send('hello world')
})

app.listen(5000, 'Server is running port 5000')
