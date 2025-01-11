import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChange(event) {
    if (event.target.name === "title") {
      setTitle(event.target.value); // Fixed typo here
    } else {
      setContent(event.target.value);
    }
  }

  function handleClick(event) {
    event.preventDefault(); // Prevent default form submission (page refresh)

    onAdd({
      title,
      content,
    });

    // Clear the input fields by resetting the state
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="4"
          onChange={handleChange}
          value={content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
