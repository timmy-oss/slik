import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ErrorMessage } from "formik";

export default function CustomSelect({
  defaultValue = null,
  currentValue,
  name,
  setValue,
  options,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function setI(v) {
    setSelected(v);
    setValue(v.value);
  }

  return (
    <div
      style={{ fontFamily: "Mulish" }}
      onClick={toggleOpen}
      className="relative mt-2 w-full flex flex-row justify-between items-center bg-white shadow border rounded px-4 cursor-default"
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
                key={i}
                className="truncate cursor-pointer hover:bg-gray-200 px-2 py-1 rounded"
                onClick={(e) => setI(c)}
              >
                <span className="capitalize  truncate  text-sm lg:text-base">
                  {c.name}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* <span className="mt-1 text-xs lg:text-sm block text-red-500">
        <ErrorMessage name={name} />
      </span> */}
    </div>
  );
}
