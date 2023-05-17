import React, {useEffect, useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4} from 'uuid'
import { Todo }from './Todo'
import { EditTodo } from './EditTodo'
import { SwitchMode } from './SwitchMode'
uuidv4()

export const TodoWrapper = () => {

    const[todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed:false, isEditing: false}])
        console.log(todos);
    }
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed} : todo
        ))
    }
    const deleteTodo = id =>
    {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id =>
    {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }
    const editTask = (task, id) =>
    {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    const[theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' :'light') 
    }
    useEffect(() => {
        document.body.className = theme
    }, [theme])


  return (
    <div className="TodoWrapper">
        <SwitchMode theme={theme} toggleTheme={toggleTheme}></SwitchMode>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
            todo.isEditing ? (
            <EditTodo editTodo={editTask} task={todo} />
             ) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )))}
    </div>
  )
}
