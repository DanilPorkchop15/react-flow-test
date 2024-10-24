import React, {memo, useCallback, useRef} from "react";

export const EditableLabelInput = memo<{
  label: string;
  value: string;
  onInputChange: (value: string) => void;
  onLabelChange: (label: string) => void;
}>(({label, value, onInputChange, onLabelChange}) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleLabelBlur = useCallback(
    (e: React.FocusEvent<HTMLLabelElement>) => {
      onLabelChange(e.currentTarget.textContent || '');
    },
    [onLabelChange]
  );

  return (
    <>
      <label
        ref={labelRef}
        contentEditable
        suppressContentEditableWarning
        className="nodrag"
        onBlur={handleLabelBlur}
      >
        {label}
      </label>
      <br/>
      <input
        type="text"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        className="nodrag"
        style={{border: '1px solid black'}}
      />
    </>
  );
});