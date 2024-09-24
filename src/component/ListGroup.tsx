import { useState } from "react";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items , onSelectItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //hanler Event
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <p
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </p>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
