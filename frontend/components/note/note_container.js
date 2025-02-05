import { connect } from 'react-redux';
import { updateNote, deleteNote, setCurrentNote, fetchNotes } from '../../actions/note_actions';
import { fetchNoteTags } from '../../actions/tag_actions';
import Note from './note';

const mapStateToProps = (state) => {
  return ({
    currentNote: state.notes.currentNote,
    notebooks: state.notebooks.allNotebooks,
    currentUser: state.session.currentUser,
    noteCount: state.notes.allNotes.length,
    allNotes: state.notes.allNotes
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (note) => dispatch(deleteNote(note)),
    setCurrentNote: (note) => dispatch(setCurrentNote(note)),
    fetchNoteTags: (note) => dispatch(fetchNoteTags(note)),
    fetchNotes: () => dispatch(fetchNotes())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
