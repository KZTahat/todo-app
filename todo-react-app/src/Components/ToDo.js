import React, { useEffect, useState, useContext } from "react";
import Form from "./Form";
import "./navBar.css";
import { Card, H5, Elevation } from "@blueprintjs/core";
import { SettingsContext } from "../Context/settings";

export default function ToDo(props) {
  const settings = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Form list={list} incomplete={incomplete} setList={setList} />
      <div className="listContainer">
        {list.map((item) => (
          <div key={item.id} className="cards">
            {/* if(!(item.complete && !(settungs.showCompleted))){ */}
            <Card elevation={Elevation.THREE}>
              <H5>{item.text}</H5>
              <p>Assigned to: {item.assignee}</p>
              <div onClick={() => toggleComplete(item.id)}>
                Complete: {item.complete.toString()}
              </div>
              <button onClick={() => deleteItem(item.id)}>Close</button>
            </Card>
          {/* }} */}
            <hr />
          </div>
        ))}
        {
          // list.length > settings.itemsNumber ? <button>Next</button> : {}
        }
      </div>
    </>
  );
}

// complete : true // settings : false // no
// complete : true // settings : true // yes
// complete : false // settings : false // yes
// complete : false // settings : true // yes