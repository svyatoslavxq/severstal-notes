import React from "react";

const SideBar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Заметки</h1>
        <button onClick={onAddNote}>Создать</button>
      </div>
      <div className="app-sedebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`${
              note.id === activeNote
                ? " app-sidebar-note active"
                : "app-sidebar-note"
            }`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Удалить</button>
            </div>

            <p>{note.body && note.body.substr(0, 34) + "..."}</p>
            <small className="note-meta">
              Изменено{" "}
              {new Date(note.lastModified).toLocaleDateString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
