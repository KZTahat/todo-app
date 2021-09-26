import React, { useEffect, useState, useContext } from "react";
import useForm from "../Hooks/form";
import "./navBar.css";
import { v4 as uuid } from "uuid";
import { Card, H5, Elevation } from "@blueprintjs/core";
import { SettingsContext } from "../Context/settings";

function ToDo(props) {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  // const settings = useContext(SettingsContext);
  // console.log(SettingsContext);
  // console.log(settings);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

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
      <div className="detailContainer">
        <header>
          <h2 className="inputs">To Do List: {incomplete} items pending</h2>
        </header>

        <form onSubmit={handleSubmit}>
          <h3 className="inputs">Add To Do Item</h3>

          <label>
            <input
              onChange={handleChange}
              className="inputs"
              name="text"
              type="text"
              placeholder="Item Details"
            />
          </label>

          <label>
            <input
              className="inputs"
              onChange={handleChange}
              name="assignee"
              type="text"
              placeholder="Assignee Name"
            />
          </label>

          <label>
            <input
              onChange={handleChange}
              className="inputs"
              defaultValue={3}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </label>

          <label>
            <button className="inputs" type="submit">
              Add Item
            </button>
          </label>
        </form>
      </div>
      <div className="listContainer">
        {list.map((item) => (
          <div key={item.id} className="cards">
            <Card elevation={Elevation.THREE}>
              <H5>{item.text}</H5>
              <p>Assigned to: {item.assignee}</p>
              <div onClick={() => toggleComplete(item.id)}>
                Complete: {item.complete.toString()}
              </div>
            </Card>
            <hr />
          </div>
        ))}
        <SettingsContext>
          {(settings) => (
            <button>Next</button>
            // {
            //   list.length > settings.itemsNumber ? <button>Next</button> : {}
            // }
          )}
        </SettingsContext>
      </div>
    </>
  );
}

export default ToDo;
