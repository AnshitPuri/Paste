import React, { useEffect, useState } from "react";
import "./Paste.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCopy,
  faTrash,
  faEye,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Paste = () => {
  const [pastes, setPastes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedPastes = JSON.parse(localStorage.getItem("pastes")) || [];
    setPastes(savedPastes);
  }, []);

  const filteredData = !searchTerm.trim() 
  ? pastes
  : pastes.filter((paste) => 
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id) => {
    const remainingPastes = pastes.filter((pastes) => pastes._id !== id);
    setPastes(remainingPastes);

      localStorage.setItem("pastes", JSON.stringify(remainingPastes));

  };

  return (
    <div className="container">
      <input
        id="inputBox"
        type="text"
        placeholder="Search Paste Here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mainBox">
        <h1> All Pastes </h1>
        <hr />
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div className="pasteArea">
              <div key={paste._id} className="pasteBox">
                <div className="infoArea">
                  <h4>{paste.title}</h4>
                  <p> {paste.content}</p>
                </div>
                <div className="buttonArea">
                  <div className="fontArea">
                    <a
                      href={`/?mode=edit&pasteId=${paste?._id}`}
                      className="button"
                    >
                      <FontAwesomeIcon icon={faPen} className="icons" />
                    </a>

                    <button
                      className="button"
                      onClick={() => {
                        handleDelete(paste._id);
                        toast.success("Deleted");
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} className="icons" />
                    </button>

                    <a
                      href={`/?mode=view&pasteId=${paste._id}`}
                      className="button"
                    >
                      <FontAwesomeIcon icon={faEye} className="icons" />
                    </a>

                    <button
                      className="button"
                      onClick={() => {
                        navigator.clipboard.writeText(paste.content);
                        toast.success("Copied to clipboard");
                        console.log("Fired");
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} className="icons" />
                    </button>
                  </div>
                  <small>
                    <FontAwesomeIcon icon={faCalendar} />{" "}
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
          <p className="errorMsg"> No Data Found </p>
        )}
      </div>
    </div>
  );
};

export default Paste;
