import { useState } from "react";

function MuseumCard(props){
    //console.log('Hello')
    console.log(props)
    const [ name ] = useState(props.museumCard.name);
    const [ city ] = useState(props.museumCard.city);
    return(
        //<h1>Hello 1</h1>
    <div className="card" style={{width: 200}}>
    <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{city}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    )
}

export default MuseumCard;


