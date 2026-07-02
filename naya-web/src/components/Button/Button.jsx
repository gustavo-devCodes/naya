import "./Button.css";

function Button({ texto, onClick }) {
  return (
    <button className="botao" onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;