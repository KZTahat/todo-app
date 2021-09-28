import React, { useEffect, useState, useContext } from "react";
import Form from "./CardForm";
import "./components.css";
import { Card, H5, Elevation } from "@blueprintjs/core";
import { SettingsContext } from "../Context/settings";
import { loginContext } from "../Context/logIn";
import { When } from "react-if";

export default function ToDo(props) {
  const settings = useContext(SettingsContext);
  const loginState = useContext(loginContext);
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [incomplete, setIncomplete] = useState([]);

  const canDo = loginState.can("delete");
  console.log(canDo);

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
    if (loginState.can("update")) {
      const items = list.map((item) => {
        if (item.id == id) {
          item.complete = !item.complete;
          let toggelButton = document.getElementById(id);
          if (item.complete) {
            toggelButton.style.backgroundColor = "green";
          } else {
            toggelButton.style.backgroundColor = "red";
          }
        }
        return item;
      });

      setList(items);
    }
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  if (listParts[index]) {
    return (
      <>
        <When condition={() => loginState.can("create")}>
          <Form list={list} incomplete={incomplete} setList={setList} />
        </When>
        <div className="listContainer">
          {/* Next Button */}
          {list.length > settings.itemsNumber &&
          index < listParts.length - 1 ? (
            <button
              id="nextBtn"
              className="traversButtons"
              onClick={() => setIndex(index + 1)}
            >
              Next
            </button>
          ) : (
            <div />
          )}
          {/* Prev Button */}
          {index > 0 ? (
            <button
              className="traversButtons"
              onClick={() => setIndex(index - 1)}
            >
              Prev
            </button>
          ) : (
            <div />
          )}
          <When condition={loginState.loggedIn}>
            {listParts[index].map((item) => {
              return (
                <div key={item.id} className="cards">
                  {/* if(!(item.complete && !(settungs.showCompleted))){ */}
                  <Card elevation={Elevation.THREE}>
                    <H5>{item.text}</H5>
                    <p>Assigned to: {item.assignee}</p>
                    <button
                      id={item.id}
                      onClick={() => toggleComplete(item.id)}
                      style={{
                        backgroundColor: "red",
                        marginLeft: "5px",
                      }}
                    >
                      Complete: {item.complete.toString()}
                    </button>
                    <When condition={() => loginState.can("delete")}>
                      <button
                        onClick={() => deleteItem(item.id)}
                        style={{ marginLeft: "5px" }}
                      >
                        Close
                      </button>
                    </When>
                  </Card>
                  {/* }} */}
                  <hr />
                </div>
              );
            })}
          </When>
        </div>
      </>
    );
  } else {
    return <Form list={list} incomplete={incomplete} setList={setList} />;
  }
}
