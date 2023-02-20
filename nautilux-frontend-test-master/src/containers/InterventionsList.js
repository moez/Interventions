import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const shortFrMonths = [
  "JAN",
  "FEV",
  "MAR",
  "AVR",
  "MAY",
  "JUN",
  "JUL",
  "AOU",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function InterventionsList() {
  const [listInterventions, setListInterventions] = useState();
  const [wfilter, setWfilter] = useState(1);
  const history = useHistory();
  useEffect(() => {
    // const data = axios
    //   .get(INTERVENTION_URL)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       setTimeout(() => {
    //         setListInterventions(
    //           response.data.sort(({ created_at: a }, { created_at: b }) =>
    //             a < b ? -1 : a > b ? 1 : 0
    //           )
    //         );
    //       }, 50);
    //     }
    //   })
    //   .catch((error) => {
    //     // console.log(error)
    //   });
  }, []);

  const filter = () => {
    if (listInterventions)
      if (wfilter === 1) {
        setTimeout(() => {
          setListInterventions(
            listInterventions.sort(({ created_at: a }, { created_at: b }) =>
              a < b ? -1 : a > b ? 1 : 0
            )
          );
          setWfilter(0);
        }, 50);
      } else {
        setTimeout(() => {
          setListInterventions(
            listInterventions.sort(({ created_at: a }, { created_at: b }) =>
              a > b ? -1 : a < b ? 1 : 0
            )
          );
          setWfilter(1);
        }, 50);
      }
  };

  const goToInterventionPage = (id) => {
    history.push("/intervention/" + id);
  };
  const goToCreateInterventionPage = (id) => {
    history.push("/create");
  };

  return (
    <div>
      <div style={styles.wsection1}>
        <button
          style={styles.wbutton}
          onClick={() => goToCreateInterventionPage()}
        >
          Créer une intervention
        </button>
        <span style={styles.wdisabled}>
          {listInterventions && listInterventions.length === 1
            ? "1 intervention"
            : listInterventions && listInterventions.length > 1
            ? listInterventions.length + " interventions"
            : ""}
        </span>
      </div>

      <table style={styles.wbody}>
        <thead style={styles.tableheader}>
          <tr>
            <th style={{ ...styles.wth, ...styles.wpointer }} onClick={filter}>
              DATE
              <span style={styles.arrowup}></span>
              <span style={styles.arrowdown}></span>
            </th>
            <th style={styles.wth}>NOM</th>
            <th style={styles.wth}>DESCRIPTION</th>
            <th style={styles.wth}>DEMANDEUR</th>
            <th style={styles.wth}>COORDONNÉES</th>
          </tr>
        </thead>
        <tbody style={styles.bodyheader}>
          {listInterventions &&
            listInterventions.map((inter, index) => {
              return (
                <tr
                  style={styles.wtr}
                  key={index}
                  onClick={() => goToInterventionPage(inter.id)}
                >
                  <td style={{ ...styles.wdivdate, ...styles.w100 }}>
                    <div style={styles.wdate}>
                      <div style={styles.wtext16}>
                        {new Date(
                          inter.created_at.replace(/-/g, "/")
                        ).getDate()}
                      </div>
                      <div style={styles.wtext12}>
                        {
                          shortFrMonths[
                            new Date(
                              inter.created_at.replace(/-/g, "/")
                            ).getMonth()
                          ]
                        }
                      </div>
                    </div>
                  </td>
                  <td style={{ ...styles.wtd, ...styles.w200 }}>
                    {inter.name}
                    <br />
                    <span style={styles.wdisabled}>
                      {new Date(
                        inter.created_at.replace(/-/g, "/")
                      ).toLocaleString("fr-FR", {
                        dateStyle: "short",
                        timeStyle: "short",
                      })}
                    </span>
                  </td>
                  <td style={{ ...styles.wtd }}>{inter.description}</td>
                  <td style={{ ...styles.wtd, ...styles.w200 }}>
                    {inter.sender_name}
                  </td>
                  <td style={{ ...styles.wtd, ...styles.w200 }}>
                    {inter.sender_email}
                    <br />
                    {inter.sender_phone &&
                      [
                        inter.sender_phone.slice(0, 2),
                        " ",
                        inter.sender_phone.slice(2, 4),
                        " ",
                        inter.sender_phone.slice(4, 6),
                        " ",
                        inter.sender_phone.slice(6, 8),
                        " ",
                        inter.sender_phone.slice(8),
                      ].join("")}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default InterventionsList;

const styles = {
  wbody: {
    width: "100%",
    textAlign: "center",
    borderCollapse: "collapse",
    borderRadius: "1em",
    overflow: "hidden",
  },
  wtextbold: {
    fontWeight: "bold",
  },
  wcenter: {
    textAlign: "center",
  },
  wdisabled: {
    color: "#a6a6a6",
    fontWeight: "bold",
  },
  tableheader: {
    height: "50px",
    fontSize: "12px",
    backgroundColor: "#f1f1f1",
  },
  bodyheader: {
    height: "70px",
    fontSize: "12px",
  },
  wbutton: {
    fontWeight: "bold",
    padding: "5px 10px 5px 10px",
    color: "white",
    borderColor: "#ffdd00",
    borderRadius: "5px",
    backgroundColor: "#ffdd00",
    marginRight: "25px",
  },
  container: {
    marginTop: "3em",
    padding: "10em",
    width: "100%",
    border: "3px dashed #f1f1f1",
    borderRadius: "15px",
    textAlign: "center",
  },
  placeholder: {
    fontSize: "1.5em",
    color: "#ccc",
    fontWeight: "bold",
  },
  wsection1: {
    padding: "2.5em 0 1.5em 0",
  },
  wtr: {
    height: "70px",
    widht: "70px",
    textAlign: "left",
    borderBottom: "2px solid #f1f1f1",
    cursor: "pointer",
  },
  wtd: {
    padding: "1em",
    fontWeight: "600",
  },
  wth: {
    padding: "1em",
    fontWeight: "bold",
  },
  wpointer: {
    cursor: "pointer",
  },
  w100: {
    minWidth: "100px",
  },
  w150: {
    minWidth: "150px",
  },
  w200: {
    minWidth: "200px",
  },
  w300: {
    minWidth: "300px",
  },
  arrowup: {
    position: "relative",
    bottom: "14px",
    left: "3px",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "5px solid black",
  },
  arrowdown: {
    position: "relative",
    top: "13px",
    right: "6.5px",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "5px solid black",
  },
  wtext12: {
    position: "relative",
    top: 0,
    fontSize: "12px",
  },
  wtext13: {
    fontSize: "13px",
    top: "81px",
    position: "relative",
  },
  wtext16: {
    fontSize: "16px",
  },
  wdivdate: {
    padding: "0",
  },
  wdate: {
    width: "40px",
    height: "40px",
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    textAlign: "center",
    margin: "auto",
  },
};
