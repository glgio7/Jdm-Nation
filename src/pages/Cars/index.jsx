import { useState } from "react";
import { YearSelector, Wrapper, Visualizer } from "./styles";
import carList from "../../api/cars.json";

function Cars() {
	const [ano, setAno] = useState("90");
	const [itemDetailed, setItemDetailed] = useState([]);

	const listaAno =
		ano === "2000+"
			? carList.y2000
			: ano === "90"
			? carList.y90
			: ano === "80"
			? carList.y80
			: carList.y70;

	const showDetails = (id) => {
		const item = listaAno.find((value) => value.id == id);
		setItemDetailed(item);
	};

	itemDetailed.id
		? (document.body.style.overflowY = "hidden")
		: (document.body.style.overflowY = "auto");

	return (
		<>
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
						itemDetailed.id ? "info-visualizer active" : "info-visualizer"
					}
				>
					<button
						className="info-visualizer__close"
						onClick={() => setItemDetailed([])}
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
				</div>
			</Visualizer>
		</>
	);
}

export default Cars;
