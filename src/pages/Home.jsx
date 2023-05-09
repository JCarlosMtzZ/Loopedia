import { React, useState, useEffect } from "react"
import {Link} from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";
import FeedComponent from "../Components/FeedComponent.jsx";
import NoteButton from "../components/NoteButton.jsx";
import "../css/Home.css";
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import {db} from '../lib/firebase-config';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase-config";

function Home(){

    const [notes, setNotes] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState("");

    const [articles, setArticles] = useState([])
    const collectionRef = collection(db, 'postsList')

    useEffect(()=>{
        async function getArticles(){
            const data = await getDocs(collectionRef)
            setArticles(data.docs.map((doc)=> ({...doc.data(), id: doc.userID})))
            console.log(data)
        }
        getArticles()

        const q = query(
            collection(db, "usersNotes"),
            orderBy("createdAt")
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let notes = [];
            QuerySnapshot.forEach((doc) => {
              notes.push({ ...doc.data(), id: doc.id });
            });
            setNotes(notes);
            setLoading(false);
            setError("");
          });
          return () => unsubscribe;
    }, [])

    onAuthStateChanged(auth, user => {
        if(user) {
          setUserEmail(user.email);
        }
    });

    return (
        <>
            <NoteButton />
            <NavBar/>
            <div className="home">
                <div className="feed">
                {articles.map((article) => {
                    return(
                    <div>
                        {" "}
                        {article.title?(
                            <FeedComponent title={article.title}
                                           imageID={article.imageID}
                                           reroute={article.reroute}
                                           description={article.description}/>
                        ):(
                            <div></div>
                        )}


                    </div>
                    )
                })}
                </div>
                <div className="userNotes">
                    <div className="notesTitle">
                        My Notes
                    </div>
                    <div className="cardContainer">
                    {loading && (
                        <div className="loader-container-home">
                            <div className="spinner-home"></div>
                        </div>)}
                    {error && "Error"}
                        {notes.map(({ user, title, note, color}) => (
                            user == userEmail ?
                            <div className="card" style={{
                                backgroundColor: `${color}`,
                            }}>
                                <div className="cardTitle">
                                    {title}
                                </div>
                                <div className="cardContent">
                                    {note}
                                </div>
                            </div> : null
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home