import { useState, useId, useRef, useEffect } from "react";
export default function NormalInputContainer({
  type,
  action,
  value,
  label,
  hint,
  regex,
  children,
  shouldFocus = false,
}) {
  const [isActive, setIsActive] = useState(false);
  const inputId = useId();
  const inputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus]); // runs whenever shouldFocus changes

  return (
    <>
      <div className="relative">
        <input
          ref={inputRef}
          value={value}
          type={type}
          onChange={(e) => {
            action(e);
            setIsActive(!!e.target.value);
          }}
          required
          id={inputId}
          pattern={regex || null}
          className={`
          text-text-black
            peer input validator bg-input-container 
            w-full rounded-xs border-border-black/40 
            
            `}
        />

        <label
          htmlFor={inputId}
          className={`
            absolute left-2 top-2
            peer-focus:-translate-y-10 peer-focus:text-black
          peer-active:text-black peer-active:-translate-y-10 
            transition-all
            pointer-events-none 
            ${isActive ? "-translate-y-10 text-black" : "text-slate-500"}
            `}
        >
          {label}
        </label>
        <div className="validator-hint whitespace-pre-line hidden absolute">
          {hint}
        </div>
        <p className="text-text-black/40 text-end text-sm mt-2">{children}</p>
      </div>
    </>
  );
}
