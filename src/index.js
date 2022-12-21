import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

function App(){
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

     function addAnotherThing(){
        const newThing = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThing])
    }

    const items = things.map(item =><p>{item}</p>)

    return(
        <div>
            {/* using events listeners for mouse */}
            <button onClick={addAnotherThing}>Add Item</button>
            <p>{items}</p>
        </div>
    )
}

ReactDOM.render(<App />,  
document.getElementById("root"))