import React, { useEffect, useState } from 'react'

const Paste = () => {
  const [pastes , setPastes] = useState([]);

  useEffect(() => {
    const savedPastes = JSON.parse(localStorage.getItem("pastes")) || [];
    setPastes(savedPastes);
  },[]);
  return (
    <div>
      <h1> All Pastes </h1>

      {pastes.length > 0 ? (
        pastes.map((paste) => (
          <div key={paste._id}>
            <h3>Title: {paste.title}</h3>
            <p> Content: {paste.content}</p>
            <small> Created : {new Date(paste.createdAt).toLocaleString()}</small>
            </div>
        ))
      ) : (
        <p> No Pastes Available </p>
      )}
    </div>
  )
}

export default Paste
