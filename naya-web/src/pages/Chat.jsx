import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function Chat() {
  return (
    <>
      <h1>💬 Conversa</h1>

      <p>Olá! Eu sou a Naya.</p>

      <p>Como você está se sentindo hoje?</p>

      <Link to="/">
        <Button texto="⬅ Voltar" />
      </Link>
    </>
  );
}

export default Chat;