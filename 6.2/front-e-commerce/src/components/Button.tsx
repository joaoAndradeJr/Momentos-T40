type ButtonProps = {
  value: string;
  onClick: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ value, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      type={ type }
      onClick={ onClick }
    >
      { value }
    </button>
  );
}
