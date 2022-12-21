import memesData from './memesData'

export default function Meme(){
    let url
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        url = memesArray[randomNumber].url
        alert(url)
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
             <p>{url}</p>
        </main>
    )
}