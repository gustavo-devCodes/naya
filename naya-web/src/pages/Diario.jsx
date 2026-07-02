import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function Diario() {
  return (
    <>
      <h1>📖 Diário</h1>

      <p>Em breve você poderá registrar como foi o seu dia.</p>

      <Link to="/">
        <Button texto="⬅ Voltar" />
      </Link>
    </>
  );
}

export default Diario;