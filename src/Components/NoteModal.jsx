import "../css/Modal.css"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase-config"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase-config";

function NoteModal({ setOpenModal }) {
    if (!setOpenModal) return null;

    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const [userEmail, setUserEmail] = useState("");
    

    onAuthStateChanged(auth, user => {
        if(!user) {
          window.location = '/';
        } else {
            setUserEmail(user.email);
        }
    });

    async function addNote(data) {
        setLoading(true);
        try {
            const docRef = await addDoc(collection(db, "usersNotes"), {
              createdAt: Date.now(9),
              note: data.content,
              title: data.title,
              color: data.color,
              user: userEmail
            });
            alert("Success!");
        } catch (error) {
            alert(error);
        }
        setLoading(false);
        setOpenModal(false);
    }

    return (
        <div className="modalBG">
            <div className="modalContainer">
                <div className="closeBtn">
                    <button onClick={() => { setOpenModal(false); }}>
                        x
                    </button>
                </div>
                <div className="modalTitle">
                    Add note
                </div>
                <div className="modalBody">
                    <form onSubmit={handleSubmit(addNote)}>
                        <input type="text" required placeholder="Write a title..." {...register("title")} />
                        <textarea required placeholder="Write your note..." {...register("content")} />
                        <div>
                            <input type="color"  className="colorInput" id="noteColor" name="noteColor" {...register("color")} />
                            <label for="noteColor">Select a background color</label>
                        </div>    
                        <button type="submit" disabled={isLoading}>{isLoading ? (
                        <div className="loader-container">
                            <div className="spinner"></div>
                        </div>
                        ) : "Add"}</button>
                    </form>
                </div>
                {/*
                <div className="modalFooter">
                    <button onClick={() => { setOpenModal(false);}}>Cancelar</button>
                </div>
                */}
            </div>
        </div>

    );
}

export default NoteModal;