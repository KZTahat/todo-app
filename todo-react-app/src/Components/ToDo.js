import React, { useEffect, useState, useContext } from "react";
import Form from "./Form";
import "./components.css";
import { Card, H5, Elevation } from "@blueprintjs/core";
import { SettingsContext } from "../Context/settings";

export default function ToDo(props) {
  const settings = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [incomplete, setIncomplete] = useState([]);

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  let listParts = list.reduce((all, one, i) => {
    const ch = Math.floor(i / settings.itemsNumber);
    all[ch] = [].concat(all[ch] || [], one);
    return all;
  }, []);

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

  if (listParts[index]) {
    return (
      <>
        <Form list={list} incomplete={incomplete} setList={setList} />
        <div className="listContainer">
          {/* Next Button */}
          {list.length > settings.itemsNumber &&
          index < listParts.length - 1 ? (
            <button id='nextBtn' className='traversButtons' onClick={() => setIndex(index + 1)}>Next</button>
          ) : (
            <div />
          )}
          {/* Prev Button */}
          {index > 0 ? (
            <button className='traversButtons' onClick={() => setIndex(index - 1)}>Prev</button>
          ) : (
            <div />
          )}
          {listParts[index].map((item) => {
            return (
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
            );
          })}
        </div>
      </>
    );
  } else {
    return <Form list={list} incomplete={incomplete} setList={setList} />;
  }
}
