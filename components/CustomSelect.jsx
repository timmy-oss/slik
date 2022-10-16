import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const choices = [
  {
    name: "I  am name ",
    value: "I am value",
  },
  {
    name: "I  am name ",
    value: "I am value",
  },
  {
    name: "I  am name ",
    value: "I am value",
  },
  {
    name: "I  am name ",
    value: "I am value",
  },
  {
    name: "I  am name ",
    value: "I am value",
  },
  {
    name: "I  am name ",
    value: "I am value",
  },
  {
    name: "I  am name ",
    value: "I am value",
  },
];

export default function CustomSelect({
  defaultValue = null,
  currentValue,
  setValue,
  options = choices,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function setI(v) {
    setSelected(v);
    // setValue(v);
  }

  return (
    <div
      style={{ fontFamily: "Mulish" }}
      onClick={toggleOpen}
      className="relative mt-2 w-full flex flex-row justify-between items-center bg-white shadow border rounded px-4"
    >
      <span className="text-sm  py-2 block w-full lg:w-[80%] truncate  text-black ">
        {selected !== null ? selected.name : "Select an option"}
      </span>

      <FontAwesomeIcon
        icon={isOpen ? faCaretUp : faCaretDown}
        className="text-lg lg:text-xl text-black/90  pl-2"
      />

      {/* Drop Down  */}

      {isOpen && (
        <div className="absolute bg-white px-4 rounded  w-full py-2 overflow-y-auto hide-scroll-bar z-10 top-10  left-0 border shadow min-h-[100px] max-h-[180px] space-y-2">
          {options.map((c, i) => {
            return (
              <div
                className="truncate cursor-pointer hover:bg-gray-300 px-2 py-1 rounded"
                onClick={(e) => setI(c.value)}
                key={i}
              >
                <span className="capitalize  truncate  text-sm lg:text-base">
                  {c.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
