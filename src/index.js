import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

// import "./styles.css"
// import Count from './Count'
// function App(){

//     const [count, setCount] = React.useState(0)

//     function add(){
//         setCount(prevCount => prevCount + 1)
//     }

//     function subtract(){
//         setCount(prevCount => prevCount - 1)
//     }

//     return(
//         <div className="counter">
//             <button className="counter--minus" onClick={subtract}>-</button>
//             < Count number = {count} />
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     ) 
// }

// import "./styles.css"
// import Star from './Star'

// function App(){

//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })


//     function toggleFavorite(){
//         // setContact(prevState => {
//         //     return {
//         //         //spread operator using in arrays and objects too
//         //         ...prevState,
//         //         isFavorite: !prevState.isFavorite
//         //     }
//         // })

//         //shorter version.you have to wrapp the object inside parethesis 
//         //to make program know it is not a function but an object
//         setContact(prevState => ({
//             ...prevState,
//             isFavorite: !prevState.isFavorite
//         }))
//     }
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.jpg" alt="default profile pic" className="card--image" />
//                 <div className="card--info">
//                     < Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
//                     <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
//             </article>
//         </main>
//     )
// }

import "./styles.css"
import Header1 from './Header1'
import Body from './Body'

function App(){

    //Rule of the thumb: Keep state as local as you can. Dont 
    //put state on the parent or grandparent if some child
    //components dont need it.
    const [user, setUser] = React.useState("Charles")

    return (
        <main>
            <Header1 user={user} />
            <Body user={user} />
        </main>
    )
}

ReactDOM.render(<App />,  
document.getElementById("root"))