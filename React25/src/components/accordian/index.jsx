import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setselected] = useState(null);
  const [multiselect, setmultiselect] = useState(false);
  const [multiple, setmultiple] = useState([]);
  function handlesingleSelection(getcurrentId) {
    console.log(getcurrentId);
    setselected(getcurrentId === selected ? null : getcurrentId);
  }
  function handlemultiselect(getcurrentId) {
    let cpymultiple = [...multiple];
    const indexofCurrentId = cpymultiple.indexOf(getcurrentId);
    console.log(indexofCurrentId);
    if (indexofCurrentId === -1) cpymultiple.push(getcurrentId);
    else cpymultiple.splice(indexofCurrentId, 1);

    setmultiple(cpymultiple);
  }
  console.log(multiselect, selected);
  return (
    <div className="wrapper">
      <button onClick={() => setmultiselect(!multiselect)}>Multi-select</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="items">
              <div
                onClick={
                  multiselect
                    ? () => handlemultiselect(dataItem.id)
                    : () => handlesingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
