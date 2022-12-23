import memesData from './memesData'
import React from 'react'

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "How are you",
        bottomText: "We are fine",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    let url
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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
            <img src={meme.randomImage} alt="Meme icon" className="meme--image" />
            <p>{meme.topText}</p>
            <p>{meme.bottomText}</p>
        </main>
    )
}