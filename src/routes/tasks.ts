import express from 'express'
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  // tasksRouter
} from '../controllers/tasksController'

// const app = express()
const router = express.Router()

//  app.use('/tasks', tasksRouter)

// router.get('/tasks', (req, res) => {
//   res.send('get all task');
// });
// router.get('/tasks', getAllTasks)
// router.get('/task/:id', getTaskById)
// router.post('/task', createTask)
// router.patch('/task/:id', updateTask)
// router.delete('/task/:id', deleteTask)
router.get('/', getAllTasks) // becomes GET /tasks
router.get('/:id', getTaskById) // becomes GET /tasks/:id
router.post('/', createTask) // becomes POST /tasks
router.patch('/:id', updateTask) // becomes PATCH /tasks/:id
router.delete('/:id', deleteTask) // becomes DELETE /tasks/:id

// router.get('/tasks/:id', (req, res) => {
//   res.send(`getting individual task ${req.params.id}`);
// });

// router.post('/task', (req, res) => {
//   const data = req.body; // Access sent data here
//   res.status(201).json({ message: "task created", received: data });
// });

// router.patch('/task/:id', (req, res) => {
//   const data = req.body; // Access sent data here
//   res.status(201).json({ message: "updating a single task", received: data });
// });

// router.delete('/task/:id', (req, res) => {
//     const userId = req.params.id; // Extract ID from the URL

//     // Logic to delete the user from your database/array goes here
//     // Example: users = users.filter(user => user.id !== userId);

//     res.status(200).json({ message: `task ${userId} deleted successfully` }); //
// });

// app.get('/', (req, res) => {
//   res.json({ message: 'Task API is running' })
// })

export default router
