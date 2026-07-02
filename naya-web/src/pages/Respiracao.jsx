import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function Respiracao() {
  return (
    <>
      <h1>🌬️ Respiração</h1>

      <p>Vamos fazer um exercício de respiração juntos.</p>

      <Link to="/">
        <Button texto="⬅ Voltar" />
      </Link>
    </>
  );
}

export default Respiracao;