import React, { useState } from "react";

const CustomToggle = ({
  on,
  defaultOn = false,
  onChange,
  label,
  disabled = false,
}: {
  on?: boolean;
  defaultOn?: boolean;
  onChange?: (next: boolean) => void;
  label: string;
  disabled?: boolean;
}) => {
  const isControlled = on !== undefined;
  const [internalOn, setInternalOn] = useState(defaultOn);
  const actualOn = isControlled ? on : internalOn;
  const toggle=()=>{
    if(disabled){
      return;
    }
    const next= !actualOn;
    // function call after checking if its not null
    onChange?.(next);
    // only update local state if uncontrolled
    if(!isControlled){
      setInternalOn(next)
    }
  }

  return (
    <div>
      <button
        id="custom-toggle"
        type="button"
        aria-pressed={actualOn}
        onClick={toggle}
        disabled={disabled} 
        style={{
          padding: "8px 12px",
          cursor: disabled ? "not-allowed" : "pointer",
          background: actualOn ? "#22c55e" : "#e5e7eb",
          color: actualOn ? "white" : "black",
          border: "1px solid #d1d5db",
          borderRadius: 6,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {label && <span>{label}</span>}
        <span>{actualOn ? "ON" : "OFF"}</span>
      </button>
    </div>
  );
};

export default CustomToggle;
