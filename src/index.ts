import express from 'express'
import * as dotenv from 'dotenv'
import tasksRouter from './routes/tasks'

dotenv.config()
const app = express()
const port = process.env.PORT || '3000'

app.use(express.json()) // parses incoming JSON bodies
app.use('/tasks', tasksRouter) // mounts the tasks router

// app.get('/', (req, res) => {
//   res.json({ message: 'Task API is running' })
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
