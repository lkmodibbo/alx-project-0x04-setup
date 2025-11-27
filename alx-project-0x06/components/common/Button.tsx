
interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor }) => {
  return (
    <button
      style={{ backgroundColor: buttonBackgroundColor }}
      className="text-white px-4 py-2 rounded"
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
