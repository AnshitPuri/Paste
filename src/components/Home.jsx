import React, { useState } from "react";
import "./Home.css";
import { useParams, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode")
  const pasteId = searchParams.get("pasteId");

  const notify = () => toast("Paste Added");
  const pastes = JSON.parse(localStorage.getItem("pastes")) || [];

  useEffect(() => {
    if (pasteId) {

      const currentPaste = pastes.find((pastes) => pastes._id === pasteId);

      if (currentPaste) {
        setTitle(currentPaste.title);
        setValue(currentPaste.content);
      }
    }
  },[pasteId]);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    const existingPastes = pastes

    if (pasteId) {
      // updating

      const updatedPaste = existingPastes.map((p) => (p._id === pasteId ? paste : p));
      localStorage.setItem("pastes", JSON.stringify(updatedPaste));

    } else {
      //creating
      existingPastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(existingPastes));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  };
  
  // const show = () => {
  //   const savedPastes = pastes
  //   if (savedPastes && savedPastes.length > 0) {
  //     console.log(savedPastes);
  //   } else {
  //     console.log("No paste found in localStorage");
  //   }
  // };

  return (
    <div className="main">
      <div className="home-conatiner">
        <div className="titleSpace">
          <input
            className="bg-black"
            type="text"
            placeholder="Enter Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={mode === "view"}
          />
          {mode === "view" ? (
            null
          ) : <button
            onClick={() => {
              createPaste();
              notify();
            }}
          >
            {pasteId ? "Update Paste" : "Create My Paste"}
          </button> }
         
          <button>
            <a href="/pastes" > Show </a>
          </button>
        </div>
        <div className="contentBox">
          <div className="utilbox"></div>
          <textarea
            className="textArea"
            value={value}
            placeholder="Write Content Here..."
            onChange={(e) => setValue(e.target.value)}
            rows={20}
            disabled={mode === "view"}
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;
