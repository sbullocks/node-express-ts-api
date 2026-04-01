import { Request, Response, NextFunction } from 'express'

//   Two types of middleware

// Global — runs on every request:
// app.use(myMiddleware)

// Route-specific — only runs on matched routes:
// router.get('/:id', authMiddleware, getTaskById)

// next() is the key. If you don't call it, the request stops there — no response ever gets sent, the client hangs. You either call next() to continue the pipeline, or you send a response yourself.

// const myMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ): void => {
//   // do something
//   next() // pass control to the next middleware or route handler
// }

export const getAllTasks = (req: Request, res: Response): void => {
  res.json({ message: 'get all tasks' })
}

export const getTaskById = (req: Request, res: Response): void => {
  res.json({ message: 'get single task by id' })
}

export const createTask = (req: Request, res: Response): void => {
  res.json({ message: 'creating new task' })
}

export const updateTask = (req: Request, res: Response): void => {
  res.json({ message: 'updating task' })
}

export const deleteTask = (req: Request, res: Response): void => {
  // res.json({message: 'removing task'})
  res.status(204).send()
}

// Request gives you types for req.params, req.body, req.query. Response gives you types for res.json(), res.status(), etc.
