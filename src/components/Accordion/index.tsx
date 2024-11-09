import { useState } from "react";
import { TItem } from "../../utils/accordionData";
import { Link } from "react-router-dom";

const Accordion = ({ item }: { item: TItem }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="w-[80%] border rounded-lg p-2">
      <div onClick={handleClick} className="flex items-center text-2xl">
        <span className="font-semibold flex-auto">{item.title}</span>
        <Link
          to={item.link}
          className="font-bold"
          onClick={(e) => e.stopPropagation()}
        >
          &rarr;
        </Link>
      </div>
      {expanded && <p className="py-3 border-t">{item.description}</p>}
    </div>
  );
};

export default Accordion;
