import {Link} from "react-router-dom";
import '../css/FeedComponent.css';
function FeedComponent(props){
    return(
        <Link to={props.reroute} className="link">
            <button className="feedComponent">
                <div className="feedCTitle"> {props.title}</div>
                <div className="description">
                    <p>{props.description}</p>
                </div>
                <img src={props.imageID} alt={props.title}/>
            </button>
        </Link>
    )
}
export default FeedComponent