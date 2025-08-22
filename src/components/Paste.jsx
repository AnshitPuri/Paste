import React, { useEffect, useState } from "react";
import "./Paste.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCopy,
  faTrash,
  faEye,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

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
                  <div className="fontArea">
                    <button className="button">
                      <a href={`/?pasteId=${paste?._id}`}>
                        <FontAwesomeIcon icon={faPen} className="icons" />
                      </a>
                    </button>

                    <button  className="button">
                      <a href="/">
                        <FontAwesomeIcon icon={faTrash} className="icons" />
                      </a>
                    </button>
                    <button className="button">
                      <a href="/">
                        <FontAwesomeIcon icon={faEye} className="icons" />
                      </a>
                    </button>

                    <button className="button">
                      <a href="/">
                        <FontAwesomeIcon icon={faCopy} className="icons" />
                      </a>
                    </button>
                  </div>
                  <small>
                    <FontAwesomeIcon icon={faCalendar} />
                    {" "}
                    {new Date(paste.createdAt).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
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
