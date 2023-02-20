import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function InterventionsAdd() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sender_name, setSender_name] = useState('');
  const [sender_email, setSender_email] = useState('');
  const [sender_phone, setSender_phone] = useState('');
  const [created_at, setCreated_at] = useState('');
  const goBack = () => {
    history.goBack();
  }
  const onSubmit = (data) => {
    setCreated_at(new Date().toISOString().slice(0, 19).replace('T', ' '))
    // call API to save row
    // reset form and redirect to /
    setName('');
    setDescription('');
    setSender_name('');
    setSender_email('');
    setSender_phone('');
    history.push('/')
  }
  useEffect(() => {}, []);

  return (
    <div>
      <div style={styles.wcontainer}>
        <button style={styles.wbuttonDiscad} onClick={() => goBack()}>Annuler</button>
        <button style={styles.wbuttonSubmit} onClick={onSubmit}>Créer</button>
        <form onSubmit={onSubmit} style={styles.wform}>
          <label style={styles.wtext10}>NOM DE L'INTERVENTION</label>
          <br />
          <input
            type="text"
            placeholder="Nom"
            name="name"
            style={name?styles.winput:styles.placeholder}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <br />

          <label style={styles.wtext10}> DESCRIPTION</label>
          <br />
          <textarea
            placeholder="Saisissez la description de l'intervention"
            name="description"
            style={description?styles.winput:styles.placeholder}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
          <br />

          <label style={styles.wtext10}>DEMANDEUR</label>
          <br />
          <input
            type="text"
            placeholder="Prénom Nom"
            name="sender_name"
            style={sender_name?styles.winput:styles.placeholder}
            onChange={(e) => {
              setSender_name(e.target.value)
            }}
          />
          <br />

          <label style={styles.wtext10}>EMAIL</label>
          <br />
          <input
            type="text"
            placeholder="email@domaine.fr"
            name="sender_email"
            style={sender_email?styles.winput:styles.placeholder}
            onChange={(e) => {
              setSender_email(e.target.value)
            }}
          />
          <br />

          <label style={styles.wtext10}>TÉLÉPHONE</label>
          <br />
          <input
            type="text"
            placeholder="00 00 00 00 00"
            name="sender_phone"
            style={sender_phone?styles.winput:styles.placeholder}
            onChange={(e) => {
              setSender_phone(e.target.value)
            }}
          />
          <br />
        </form>
      </div>
    </div>
  );
}

export default InterventionsAdd;

const styles = {
  wcontainer: {
    position: "relative",
    padding: "2em",
    width: "500px",
    textAlign: "center",
    margin: "auto",
    marginBottom: "50px",
  },
  wform: {
    position: "absolute",
    left: 0,
    top: "100px",
    // width: 'auto',
    textAlign: "left",
  },
  wlabel: {
    position: "absolute",
    left: 0,
    top: "100px",
    width: "auto",
    textAlign: "left",
  },
  winput: {
    width: "500px",
    marginBottom: "15px",
    border: "2px solid #bcbcbc",
    borderRadius: "5px",
    paddingLeft: "10px",
  },
  placeholder: {
    color: "#bcbcbc",
    paddingLeft: "10px",
    width: "500px",
    marginBottom: "15px",
    border: "2px solid #bcbcbc",
    borderRadius: "5px",
  },
  wtext10: {
    fontWeight: "bold",
    fontSize: "11px",
    marginBottom: "2px",
  },
  wbuttonDiscad: {
    position: "absolute",
    left: 0,
    width: "100px",
    backgroundColor: "white",
    color: "gray",
    borderColor: "gray",
    borderRadius: "5px",
    padding: "5px 0 5px 0",
    fontWeight: "bold",
  },
  wbuttonSubmit: {
    position: "absolute",
    right: 0,
    width: "100px",
    backgroundColor: "#fffae4",
    color: "#fce462",
    borderColor: "#fffae4",
    borderRadius: "5px",
    padding: "5px 0 5px 0",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "red",
    },
  },
};
