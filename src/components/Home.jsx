import React, { useState } from "react";
import "./Home.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [pastes , setPastes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const pasteId = searchParams.get("pasteId");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("pastes")) || [];
    setPastes(saved)
  }, []);
  
  useEffect(() => {
    if (pasteId) {
      const currentPaste = pastes.find((paste) => paste._id === pasteId);

      if (currentPaste) {
        setTitle(currentPaste.title);
        setValue(currentPaste.content);
      }
    }
  }, [pasteId , pastes]);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    const existingPastes = pastes;

    if (pasteId) {
      // updating

      const updatedPaste = existingPastes.map((p) =>
        p._id === pasteId ? paste : p
      );
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
          {mode === "view" ? null : (
            <button
              onClick={() => {
                createPaste();
                toast.success("Paste Added");
              }}
            >
              {pasteId ? "Update Paste" : "Create My Paste"}
            </button>
          )}

        </div>
        <div className="contentBox">
          <div className="utilbox">
            <div className="util1">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <div className="util2">
              <button className="button" onClick={() => {
                navigator.clipboard.writeText(value);
                toast.success("Copied to clipboard");
              }}>
                <FontAwesomeIcon icon={faCopy} className="icons" />
              </button>
            </div>
          </div>
          <textarea
            className="textArea"
            value={value}
            placeholder="Write Content Here..."
            onChange={(e) => setValue(e.target.value)}
            rows={20}
            disabled={mode === "view"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
