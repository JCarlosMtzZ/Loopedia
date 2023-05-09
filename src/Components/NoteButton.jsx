import "../css/NoteButton.css";
import NoteModal from "../components/NoteModal.jsx";
import { useState } from "react";

function NoteButton() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            {modalOpen ? (<NoteModal setOpenModal={setModalOpen} />) : 
            (<button className="plusBtn" onClick={() => { setModalOpen(true); }}>+</button>)
            }
        </div>
    );
}

export default NoteButton;