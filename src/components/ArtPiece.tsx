import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import EventsContext from "../context/EventsContext";
// import { Event } from "../models/Events";

interface ArtProps {
    art:any
}   
export function ArtPiece(props:ArtProps){

    // const {addEvent, removeEvent, list} = useContext(EventsContext);

    // let addToBucketList = () => {
        
    //     addEvent(props.event)
    //     console.log(props.event);
    //     // console.log("list:" + list.toString())
    // }
    // let removeFromBucketList = () => {
    //     removeEvent(props.event.id)
    // }
    // console.log(props)
    return(
        <div className="event-in-list">
            {/* <img src={props.event.images[0].url} alt="" style={{height: "100px", width: "150px"}}/>
            <h3 className="event-title">{props.event.name}</h3>
            <p className="dates">{props.event.dates.start.localDate}</p> */}
            {/* <Link id="link" to={`/details/${props.event.id}`}>
                details
            </Link> */}
            {/* <button onClick={addToBucketList}>Add to Bucket List</button>
            <button onClick={removeFromBucketList}>Remove from Bucket List</button>
             */}
        </div>
    )
}