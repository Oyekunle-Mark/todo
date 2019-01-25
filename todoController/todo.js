import db from '../db/db'

class TodoController {
	getAllTodos(req, res) {
		return res.status(200).send({
			success: true,
			message: "File gotten successfully",
			todo: db
		})
	}

	getATodo(req, res) {
		const id = parseInt(req.params.id)
		db.map((todo) => {
			if (todo.id == id) {
				return res.status(200).send({
					success: true,
					message: "File gotten successfully",
					todo
				})
			}
		})

		return res.status(404).send({
			success: false,
			message: "Todo not found"
		})
	}

	createATodo(req, res) {
		if (!req.body.title) {
			return res.status(400).send({
				success: false,
				message: "Title field is required"
			})
		} else if (!req.body.description) {
			return res.status(400).send({
				success: false,
				message: "Description field is required"
			})
		}

		const todo = {
			id: db.length + 1,
			title: req.body.title,
			description: req.body.description,
		}

		db.push(todo)
		return res.status(201).send({
			success: true,
			message: "New Todo created"
		})
	}
}

const todoController = new TodoController()

export default todoController
