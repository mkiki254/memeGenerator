import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

// function App(){

//     const [isGoingOut, SetIsGoingOut] = React.useState(true)
//     function goingOut(){
//         SetIsGoingOut(prevState => !prevState)
//     }

//     //ternary allows to put an if/else statement in a single line
//     // let answer = isGoingOut ? "Yes" : "No"

//     return(
//         <div>
//             <h1>Do I feel like going out tonight?</h1>
//             <h3 onClick={goingOut}>{isGoingOut ? "Yes" : "No"}</h3>
//         </div>
//     )
// }

// function App(){

//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
//     function addItem(){
//         setThingsArray(prevState => [...prevState, `Thing ${prevState.length + 1}`])
//     }

//     const thingsElements = thingsArray.map(thing =><p>{thing}</p>)
//     return(
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

import "./styles.css"

function App(){

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? "star-filled.jpg" : "star-empty.jpg"

    function toggleFavorite(){
        // setContact(prevState => {
        //     return {
        //         //spread operator using in arrays and objects too
        //         ...prevState,
        //         isFavorite: !prevState.isFavorite
        //     }
        // })

        //shorter version.you have to wrapp the object inside parethesis 
        //to make program know it is not a function but an object
        setContact(prevState => ({
            ...prevState,
            isFavorite: !prevState.isFavorite
        }))
    }
    return (
        <main>
            <article className="card">
                <img src="./images/user.jpg" alt="default profile pic" className="card--image" />
                <div className="card--info">
                    <img 
                    src={`./images/${starIcon}`} alt="star icon" 
                    className="card--favorite"
                    onClick={toggleFavorite} 
                    />
                    <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}

ReactDOM.render(<App />,  
document.getElementById("root"))