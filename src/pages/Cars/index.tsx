import { useState } from "react";
import { Container, YearSelector, Wrapper, Visualizer } from "./styles";
import carList from "../../api/cars.json";
import { ICar } from "./types";

function Cars() {
	const [ano, setAno] = useState("90");
	const [itemDetailed, setItemDetailed] = useState<ICar | undefined>(
		{} as ICar
	);

	const listaAno =
		ano === "2000+"
			? carList.y2000
			: ano === "90"
			? carList.y90
			: ano === "80"
			? carList.y80
			: carList.y70;

	const showDetails = (id: string) => {
		const item = listaAno.find((value) => value.id == id);
		setItemDetailed(item);
	};

	itemDetailed !== undefined
		? (document.body.style.overflowY = "hidden")
		: (document.body.style.overflowY = "auto");

	return (
		<Container>
			<YearSelector>
				<span>Filtrar por ano</span>
				<select onChange={(e) => setAno(e.target.value)}>
					<option value={"90"}>Anos 90</option>
					<option value={"80"}>Anos 80</option>
					<option value={"70"}>Anos 70</option>
					<option value={"2000+"}>Anos 2000</option>
				</select>
			</YearSelector>
			<Wrapper>
				<h2>{`Anos ${ano}`}</h2>
				<ul className="card__lista">
					{listaAno.map((item) => (
						<li
							className="card__item"
							key={item.id}
							onClick={() => showDetails(item.id)}
						>
							<img src={item.image_path} className="card__image" alt="" />
							<span>{item.name}</span>
						</li>
					))}
				</ul>
			</Wrapper>
			<Visualizer>
				<div
					className={
						itemDetailed !== undefined
							? "info-visualizer active"
							: "info-visualizer"
					}
				>
					{itemDetailed !== undefined && (
						<>
							<button
								className="info-visualizer__close"
								onClick={() => setItemDetailed(undefined)}
							>
								Fechar
							</button>
							<img src={itemDetailed.image_path} alt="" />
							<ul className="info-visualizer__details">
								<li>
									<h2>{itemDetailed.name}</h2>
								</li>
								<li>
									<h3>Potência</h3>
									<span>{itemDetailed.power}</span>
								</li>
								<li>
									<h3>Velocidade Máxima</h3>
									<span>{itemDetailed.velMax}</span>
								</li>
								<li>
									<h3>0 a 100km/h</h3>
									<span>{itemDetailed.t0to100}</span>
								</li>
							</ul>
						</>
					)}
				</div>
			</Visualizer>
		</Container>
	);
}

export default Cars;
