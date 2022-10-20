import { useState, useEffect } from "react";

export default function HLoader() {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    let tid = setTimeout(() => {
      setLeft(left >= 100 ? -100 : left + (left >= 100 ? 150 : 2));
    }, 10);

    return () => {
      clearTimeout(tid);
    };
  }, [left]);

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-30 bg-red-100  h-[5px]">
      <div
        className="bg-red-500 w-[50%] absolute left-0 top-0 h-[5px]"
        style={{
          left: `${left}%`,
        }}
      ></div>
    </div>
  );
}
