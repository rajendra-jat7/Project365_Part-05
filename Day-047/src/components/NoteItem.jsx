import PropTypes from "prop-types";
import "../styles/NoteItem.css";

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div className="note-card">
      <p>{note.text}</p>
      <button className="delete-btn" onClick={() => deleteNote(note.id)}>❌</button>
    </div>
  );
};

NoteItem.propTypes = {
    note: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    deleteNote: PropTypes.func.isRequired,
  };

export default NoteItem;
