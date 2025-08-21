import React, { useState } from "react";
import "./Home.css";
import { useParams, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [serachParams, setSearchParams] = useSearchParams();
  const pasteId = serachParams.get("pasteId");

  const notify = () => toast("Paste Added");

  useEffect(() => {
    if(pasteId){
      const pastes = JSON.parse(localStorage.getItem("pastes")) || [];
      
    }
  })

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    const existingPastes = JSON.parse(localStorage.getItem("pastes")) || [];

    if (pasteId) {
      // updating

      existingPastes.map((p) => (p._id === pasteId ? paste : p));
    } else {
      //creating
      existingPastes.push(paste);
    }
    localStorage.setItem("pastes", JSON.stringify(existingPastes));

    setTitle("");
    setValue("");
    setSearchParams({});
  };
  const show = () => {
    const savedPastes = JSON.parse(localStorage.getItem("pastes"));
    if (savedPastes && savedPastes.length > 0) {
      console.log(savedPastes);
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
      <button
        onClick={() => {
          createPaste();
          notify();
        }}
      >
        {pasteId ? "Update Paste" : "Create My Paste"}
      </button>
      <button onClick={show}>Show</button>
      <div>
        <textarea
          value={value}
          placeholder="Enter Content Here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
