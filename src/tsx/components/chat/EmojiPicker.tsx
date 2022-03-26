import { Picker } from 'emoji-mart';
import { useRef, useState, useEffect, FC } from 'react';

interface EmojiPickerProps {
  onSelect: any;
}
const EmojiPicker: FC<EmojiPickerProps> = ({ onSelect }) => {
  const [show, setShow] = useState(false);
  const buttonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const dimensions = useRef({ bottom: 0, left: 0 });
  useEffect(() => {
    const bcr = buttonRef.current.getBoundingClientRect();
    dimensions.current = { bottom: bcr.bottom, left: bcr.left };
  }, []);
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setShow((oldState) => !oldState)}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '4px',
          border: '3px solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        ej
      </button>
      {show && (
        <div
          style={{
            position: 'absolute',
            top: `${dimensions.current.bottom + 10}px`,
            left: `${dimensions.current.left}px`,
          }}
        >
          <Picker onSelect={onSelect} />
        </div>
      )}
    </>
  );
};

export default EmojiPicker;
