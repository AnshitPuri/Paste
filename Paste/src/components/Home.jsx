import React, { useState } from "react";
import "./Home.css";
import { useParams, useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [serachParams, setSearchParams] = useSearchParams();
  const pasteId = serachParams.get("pasteId");

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // updating
    } else {
      //creating
      localStorage.setItem("paste", JSON.stringify(paste));
    }
  };
  const show = () => {
   const savedPaste = JSON.parse(localStorage.getItem("paste"));
  if (savedPaste) {
    console.log(savedPaste);
  } else {
    console.log("No paste found in localStorage");
  }
  };

  return (
    <div>
      <input
        className="bg-black"
        type="text"
        placeholder="Enter Title Here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createPaste}>
        {pasteId ? "Update Paste" : "Create My Paste"}
      </button>
      <button onClick={show}>
        Show
      </button>
      <div>
        <textarea
          value={value}
          placeholder="Enter Content Here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
