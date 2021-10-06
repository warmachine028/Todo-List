import "./App.css"
import Header from "./MyComponents/Header"
import { Todos } from "./MyComponents/Todos"
import { AddTodo } from "./MyComponents/AddTodos"
import { Footer } from "./MyComponents/Footer"
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
	let initTodo = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
	const [todos, setTodos] = useState(initTodo)
	useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)) }, [todos])


	const addTodo = (title, desc) => {
		let sno = todos.length ? todos[todos.length - 1].sno + 1 : 0;
		const myTodo = { sno: sno, title: title, desc: desc }
		setTodos([...todos, myTodo])
	}

	const onDelete = (todo) => {
		setTodos(todos.filter((event) => { return event !== todo }))
		localStorage.getItem("todos", JSON.stringify(todos))
	}

	return (
		<>
			<Router>
				<Header title="My Todos List" searchBar={false} />
				<Switch>
					<Route exact path="/" render={() => {
						return (
							<>
								<AddTodo addTodo={addTodo} />
								<Todos todos={todos} onDelete={onDelete} />
							</>)
					}}></Route>
					<Route exact path="/about"><About /></Route>
				</Switch>
				<Footer />
			</Router>
		</>
	)
}

export default App;
