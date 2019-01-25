import express from 'express'
import bodyParser from 'body-parser'
import route from './routes/app'

const PORT = 5000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(route)

// to use the default Heroku port use the process.env.PORT as an alternative
app.listen(process.env.PORT || PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
