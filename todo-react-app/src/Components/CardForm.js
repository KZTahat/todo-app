import useForm from "../Hooks/form.js";
import { v4 as uuid } from "uuid";

export default function Form(props) {
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    props.setList([...props.list, item]);
  }

  return (
    <div className="detailContainer">
      <header>
        <h2 className="inputs">To Do List: {props.incomplete} items pending</h2>
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
  );
}
