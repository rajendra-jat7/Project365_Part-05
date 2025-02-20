import { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import "../styles/Notes.css";

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });
  const [newNote, setNewNote] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="notes-container">
      <h1>📝 Notes App</h1>
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="add-note">
        <input
          type="text"
          placeholder="Write a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes-list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
          ))
        ) : (
          <p className="no-notes">No notes found!</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
