export default function Star(props){

    const starIcon = props.isFilled ? "star-filled.jpg" : "star-empty.jpg"
    return(
        <img 
        src={`./images/${starIcon}`} alt="star icon" 
        className="card--favorite"
        onClick={props.handleClick} 
        />
    )
}