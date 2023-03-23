import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArtArray } from "../models/ArtArray";
import { ArtPiece } from "../models/ArtPiece";
import { GetArtData } from "../services/ArtService";
import { GetSpecificArtData } from "../services/ArtService";
// import { Events, Event } from "../models/Events";
// import { GetEventData } from "../services/EventService";
// import { EventInList } from "./EventInList";
// import { EventsForm } from "./EventsForm";


export function ArtPage(props:any){
    let [artArray, setArtArray] = useState<ArtArray | any>();
    let [pieceOfArt, setPieceOfArt] = useState<ArtPiece | any>();
    let [image, setImage] = useState('');
    let [artDetails, setArtDetails] = useState({
        name: '',
        title: ''
    })
    // let [userInput, setUserInput] = useState('');
    
    // useEffect(() => {
    //     // props.setAppEvents(art)
    //     // console.log(EventData);

    //     if(art !== undefined){
    //         console.log("NO EVENTS")
    //     } else{
    //         setImage('https://www.artic.edu/iiif/2/' + art.data.image_id + '/full/843,/0/default.jpg')
    //     }
    // },[art]);
  
    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
      }

    let onSubmit = () => {
        // , city:string
        // setUserInput(inputData);
        // GetEventData(userInput).then(data => setEvents(data))
        try{
            GetArtData().then(data => setArtArray(data))
            // console.log(artArray.data);
            let randomArt = artArray.data[getRandomInt(100)]
            // console.log(randomArt)
            GetSpecificArtData(randomArt.id).then(data => setPieceOfArt(data))
            console.log(pieceOfArt)
            setImage('https://www.artic.edu/iiif/2/' + pieceOfArt.data.image_id + '/full/843,/0/default.jpg');
            setArtDetails({
                name: pieceOfArt.data.artist_title,
                title: pieceOfArt.data.title
            })
        // , city
        } catch(error){
            console.log(error)
        }
        // console.log(userInput)
    }
    
    return(
    
        <div className="events-page" style={{display:'flex', flexDirection:'column'}}>
            {/* <EventsForm onSubmit={onSubmit}/> */}
            {/* <Link id="link" to={`/bucketlist`}>
                bucketlist
            </Link> */}
            <button onClick={onSubmit}>Get Random Image</button>
            <img src={image}  width="400px" alt="" />
            <p>Artist: {artDetails.name}</p>
            <p>Title: {artDetails.title}</p>
           <div> 
            {/* {events !== undefined && events._embedded.events.map((x:Event) => {
               return <div key={x.id}><ArtPiece art={x}/></div>
            })} */}
            {/* <ArtPiece art={art}></ArtPiece> */}
            </div>
        </div>
    )
}