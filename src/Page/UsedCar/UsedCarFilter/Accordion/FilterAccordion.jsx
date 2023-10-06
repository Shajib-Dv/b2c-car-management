import { Collapse } from "react-collapse";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
const FilterAccordion = ({ open, toggle, title, children }) => {
  return (
    <div className="my-5">
      <div
        onClick={toggle}
        className="center-itm justify-between cursor-pointer"
      >
        <p className="title">{title}</p>
        {open ? (
          <FiMinusCircle className="text-gray-400 text-2xl" />
        ) : (
          <FiPlusCircle className="text-gray-400 text-2xl" />
        )}
      </div>

      <Collapse isOpened={open}>{children}</Collapse>
    </div>
  );
};

export default FilterAccordion;
