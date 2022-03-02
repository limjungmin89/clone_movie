import { useState } from 'react'

const Todos = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<Array<string>>([])
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (todo === '') {
      return
    }
    setTodos((prev) => [todo, ...prev])
    setTodo('')
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My To dos ( {todos.length} )</h1>
        <input type="text" placeholder="Write Your todo.." value={todo} onChange={onChange}></input>
        <button type="submit">Add To do</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
