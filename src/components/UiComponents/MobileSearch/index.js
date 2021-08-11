import React, { useRef, useEffect } from "react";
import SearchField from "../SearchField";

const MobileSearch = ({ setState, btnRef }) => {
  const blockRef = useRef(null);

  const handleClickOutside = (event) => {
    if (blockRef.current && !blockRef.current.contains(event.target)) {
      if (!btnRef.current.contains(event.target)) {
        setState((prevState) => {
          return {
            ...prevState,
            search: false,
          };
        });
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mobile_search" ref={blockRef}>
      <SearchField />
    </div>
  );
};

export default MobileSearch;
