import React from "react";
import "../css/NavBar.css";
import {Link} from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase-config"


function NavBar(){

    onAuthStateChanged(auth, user => {
        if(!user) {
          window.location = '/';
        }
      });

    const logout = async () => {
        await signOut(auth);
    }

    return(
        <nav className="navBar">
            <ul>
                <li><Link to="/home" className="title">LoopEdia</Link></li>
                <li><Link to="/astronomy" className="link">Astronomy</Link> </li>
                <li><Link to="/news" className="link">World News</Link> </li>
                <li><Link to="/science" className="link">Science</Link> </li>
                <li></li>
            </ul>
            <Link to="#" onClick={logout} className="signOut">Sign Out</Link>     
        </nav>
    )
}

export default NavBar