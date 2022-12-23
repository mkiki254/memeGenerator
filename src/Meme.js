import memesData from './memesData'
import React from 'react'

export default function Meme(){

    const [imageUrl, setImageUrl] = React.useState("")
    let url
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        url = memesArray[randomNumber].url
        setImageUrl(url)
    }
    return(
        <main>
            <div className="form">
                <input 
                type="text"
                className="form--inputs"
                placeholder="Top text" 
                />
                <input 
                type="text"
                className="form--inputs"
                placeholder="Bottom text"
                 />
                <button
                className="form--button"
                onClick={getMemeImage}
                >
                    <p>Get a new meme image</p> 
                    <img src="./images/image-icon.jpg" alt="meme input icon" className="meme--icon" />
                </button>
            </div>
            <img src={imageUrl} alt="Meme icon" className="meme--image" />
        </main>
    )
}