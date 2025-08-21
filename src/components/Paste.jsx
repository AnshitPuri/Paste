import React, { useEffect, useState } from "react";
import "./Paste.css";

const Paste = () => {
  const [pastes, setPastes] = useState([]);
  const [searchTerm, setSeatchTerm] = useState("");

  useEffect(() => {
    const savedPastes = JSON.parse(localStorage.getItem("pastes")) || [];
    setPastes(savedPastes);
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Paste Here..."
        value={searchTerm}
        onChange={(e) => setSeatchTerm(e.target.value)}
      />

      <div className="mainBox">
        <h1> All Pastes </h1>
        <hr />
        {pastes.length > 0 ? (
          pastes.map((paste) => (
            <div className="pasteArea">
              <div key={paste._id} className="pasteBox">
                <div className="infoArea">
                  <h4>{paste.title}</h4>
                <p> {paste.content}</p>
                </div>
                <div className="buttonArea">
                  <small>
                  {" "}
                  {new Date(paste.createdAt).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })}
                </small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p> No Pastes Available </p>
        )}
      </div>
    </div>
  );
};

export default Paste;
