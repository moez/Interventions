import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const data = [
  {
    "id": 1,
    "created_at": "2020-04-15 14:53:09",
    "name": "Nid de poule",
    "description": "Le nid de poules sur la route des prés devient dangereux. Pourriez-vous intervenir pour le reboucher ?",
    "sender_name": "Romuald Gauthier",
    "sender_email": "romuald_gautier@gmail.com",
    "sender_phone": "0648736255"
  }
];

function InterventionsView() {
  const [listInterventions, setListInterventions] = useState();
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  }
  useEffect(() => {
    
  }, []);

  return (
    <div>
      
      <div style={styles.wcontainer}>
        <button style={styles.backbutton} onClick={() => goBack()}>Retour</button>
      </div>
      <div style={styles.container}>
        <div style={styles.wsection}>
          <h4 style={styles.wh2}>{data[0].name}</h4>
          <p style={styles.wtext10}>DESCRIPTION</p>
          <p>{data[0].description}</p>
          <p style={styles.wtext10}>DEMANDEUR</p>
          <p style={{...styles.mb2, ...styles.bolded}}>{data[0].sender_name}</p>
          <p style={styles.mb2}>{data[0].sender_email}</p>
          <p style={styles.mb2}>
            {data[0].sender_phone &&
              [
                data[0].sender_phone.slice(0, 2),
                " ",
                data[0].sender_phone.slice(2, 4),
                " ",
                data[0].sender_phone.slice(4, 6),
                " ",
                data[0].sender_phone.slice(6, 8),
                " ",
                data[0].sender_phone.slice(8),
              ].join("")}
          </p>
        </div>
      
      </div>
    </div>
  );
}

export default InterventionsView;

const styles = {
  wcontainer: {
    position: 'relative',
    padding: "2em",
    width: "50%",
    textAlign: "center",
    margin: "auto",
    marginBottom: "50px",
  },
  container: {
    position: 'relative',
    padding: "10em",
    width: "50%",
    border: "3px solid #f1f1f1",
    borderRadius: "15px",
    textAlign: "center",
    margin: "auto",
  },
  wsection: {
    position: "absolute",
    left: 0,
    top: 0,
    padding: '10px',
    textAlign: "left",
  },
  backbutton: {
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
  wh2: {
    fontWeight: "bold",
    fontSize: "25px !important",
    paddingBottom: "15px"
  },
  wtext10: {
    fontWeight: "bold",
    fontSize: "11px",
    marginBottom: "2px",
  },
  mb2: {
    marginBottom: "2px",
  },
  bolded: {
    fontWeight: "bold",
    fontSize: "15px !important",
  },
};
