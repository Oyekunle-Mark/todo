import express from 'express'
import TodoController from '../todoController/todo'

const router = express.Router()
const versionedEndPoint = '/api/v1/todos'

router.get(versionedEndPoint, TodoController.getAllTodos)
router.get(`${versionedEndPoint}:id`, TodoController.getATodo)
router.post(versionedEndPoint, TodoController.createATodo)

export default router
