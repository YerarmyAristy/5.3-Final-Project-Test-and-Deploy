import React from "react";

const Buttons = ({ handleAdd, handleEdit, handleDelete }) => {
  return (
    <div>
      <button onClick={handleAdd}>Add Contact</button>
      <button onClick={handleEdit}>Edit Contact</button>
      <button onClick={handleDelete}>Delete Contact</button>
    </div>
  );
};

export default Buttons;
