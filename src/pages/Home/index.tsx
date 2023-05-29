import HomeCard from "../../components/HomeCard";
import * as S from "./styles";

function Home() {
	return (
		<S.Home>
			<S.Wrapper>
				<HomeCard
					loginRequired={false}
					background={"/img/data/pattern-1.png"}
					title={"Wiki dos carros"}
					description={
						"Confira informações sobre carros japoneses desde a década de 70!"
					}
					href={"/cars"}
					buttonSpan={"Ver lista de carros"}
				/>
				<HomeCard
					loginRequired={true}
					background={"/img/data/pattern-2.png"}
					title={"Videos"}
					description={
						"Assista videos e compilações de carros JDM. Drift, drag, exibição e tudo que puder imaginar!"
					}
					href={"/watch"}
					buttonSpan={"Assistir videos"}
				/>
				<HomeCard
					loginRequired={true}
					background={"/img/data/pattern-3.png"}
					title={"Colaborador"}
					description={
						"Quer adicionar algum carro na Wiki? Adicionar algum video ou canal à nossa página de videos?"
					}
					href={"/contribute"}
					buttonSpan={"Contribuir"}
				/>
			</S.Wrapper>
		</S.Home>
	);
}

export default Home;
