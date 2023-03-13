import { Link } from "react-router-dom";
import Container from "./styles";


function Home() {
  return (
    <Container>
      <section>
        <h2 className="section__title">Wiki dos carros</h2>
        <p className="section__description">
          Confira informações sobre carros japoneses desde a década de 70!
        </p>
        <img className="section__image" src="/img/data/pattern-1.png" alt=""/>
        <Link className="button__link" to={"/cars"}>
          <button className="section__button">Ver lista de carros</button>
        </Link>
      </section>
      <section>
        <h2 className="section__title">Videos</h2>
        <p className="section__description">
          Assista videos e compilações de carros JDM. Drift, drag, exibição e
          tudo que puder imaginar!
        </p>
        <img className="section__image" src="/img/data/pattern-2.png" alt=""/>
        <Link className="button__link" to={"/watch"}>
          <button className="section__button">Assistir videos</button>
        </Link>
      </section>
      <section>
        <h2 className="section__title">Contribuir</h2>
        <p className="section__description">
          Quer adicionar algum carro na Wiki? Adicionar algum video ou canal à
          nossa página de videos?
          <br />
          Entre em contato!
        </p>
        <img className="section__image" src="/img/data/pattern-3.png" alt=""/>
        <Link className="button__link" to={"/"}>
          <button className="section__button">Entrar em contato</button>
        </Link>
      </section>
    </Container>
  );
}

export default Home;
