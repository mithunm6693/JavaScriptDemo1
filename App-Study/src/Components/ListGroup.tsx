import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, title, onSelectItem }: Props) {
  const [itemSelected, setItemSelected] = useState(-1);

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <p> No items in the list</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              itemSelected === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setItemSelected(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
