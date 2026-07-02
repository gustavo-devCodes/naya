import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function Home({ abrirTela }) {
  return (
    <>
      <Header />

      <Link to="/chat">
  <Button texto="💬 Conversar" />
</Link>

      <Link to="/diario">
  <Button texto="📖 Diário" />
</Link>

<Link to="/respiracao">
  <Button texto="🌬️ Respirar" />
</Link>

<Link to="/estudos">
  <Button texto="📚 Estudos" />
</Link>

      <Footer />
    </>
  );
}

export default Home;