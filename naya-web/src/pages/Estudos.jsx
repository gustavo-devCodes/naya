import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function Estudos() {
  return (
    <>
      <h1>📚 Estudos</h1>

      <p>Organize sua rotina e acompanhe seu progresso.</p>

      <Link to="/">
        <Button texto="⬅ Voltar" />
      </Link>
    </>
  );
}

export default Estudos;