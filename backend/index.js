const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 3000

async function main() {
	await mongoose.connect(process.env.MONGO_URI)

	app.get('/', (req, res) => {
		res.send('Lebaba E-commerce Server is running....!')
	})
}

app.listen(PORT, async () => {
	await main()
		.then(() => console.log('MongoDB is successfully connected.'))
		.catch((err) => console.log(err))
	console.log(`App is listening on port ${PORT}`)
})
