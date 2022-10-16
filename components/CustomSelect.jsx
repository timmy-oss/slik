import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const choices = {
  1: "Michael Okpara University of Agriculture at Umudike (Federally owned)",
  2: "Abia State University in Uturu (State owned)",
  3: "College of Health Sciences Aba",
  4: "Abia State polytechnic",
  5: "Covenant Polytechnic, Aba",
  6: "Temple Gate Polytechnic, Abayi",
  7: "Valley View Polytechnic, Aba",
  8: "Gregory University Uturu",
  9: "Rhema University",
  10: "",
};

export default function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function setI(i) {
    setSelected(i);
  }

  return (
    <div
      style={{ fontFamily: "Mulish" }}
      onClick={toggleOpen}
      className="relative mt-2 w-full flex flex-row justify-between items-center bg-white shadow border rounded px-4"
    >
      <span className="text-sm  py-2 block w-full lg:w-[80%]  text-black ">
        {selected ? Object.values(choices)[selected] : "Select an option"}
      </span>

      <FontAwesomeIcon
        icon={isOpen ? faCaretUp : faCaretDown}
        className="text-lg lg:text-xl text-black/90 dark:text-white"
      />

      {/* Drop Down  */}

      {isOpen && (
        <div className="absolute bg-white px-4 rounded  w-full py-4 overflow-y-auto hide-scroll-bar z-10 top-14  left-0 border shadow min-h-[100px] max-h-[180px] space-y-2">
          {Object.values(choices).map((c, i) => {
            return (
              <div onClick={(e) => setI(i)} key={i}>
                <span className="capitalize text-ellipsis overflow-x-clip text-sm lg:text-base">
                  {c}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
