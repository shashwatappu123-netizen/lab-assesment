function App() {
  const name = "Shashwat"
  const age = 20

  return (
    <div>
      <h1>React App</h1>
      <Child name={name} age={age} />
    </div>
  )
}

function Child(props) {
  return (
    <div>
      <p>Name is: {props.name}</p>
      <p>Age is: {props.age}</p>
    </div>
  )
}

export default App

             