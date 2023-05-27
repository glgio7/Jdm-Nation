import { useEffect, useState } from "react";
import { Container, YearSelector, Wrapper, Visualizer } from "./styles";
import fullCarList from "../../api/cars.json";
import { ICar } from "./types";

function Cars() {
	const [itemDetailed, setItemDetailed] = useState<ICar | null>(null);
	const [year, setYear] = useState<string>("y90");
	const [carList, setCarList] = useState<ICar[]>(
		fullCarList[year as keyof typeof fullCarList]
	);

	useEffect(() => {
		setCarList(fullCarList[year as keyof typeof fullCarList]);
	}, [year]);

	useEffect(() => {
		itemDetailed
			? (document.body.style.overflowY = "hidden")
			: (document.body.style.overflowY = "auto");
	}, [itemDetailed]);

	let listTitle = year
		.split("")
		.filter((letter) => letter !== "y")
		.join("");

	const showDetails = (carId: string) => {
		const item = carList.find((value: ICar) => value.id == carId);
		setItemDetailed(item || null);
	};

	return (
		<Container>
			<YearSelector>
				<span>Filtrar por ano</span>
				<select onChange={(e) => setYear(e.target.value)}>
					<option value={"y90"}>Anos 90</option>
					<option value={"y80"}>Anos 80</option>
					<option value={"y70"}>Anos 70</option>
					<option value={"y2000"}>Anos 2000</option>
				</select>
			</YearSelector>
			<Wrapper>
				<h2>{`Anos ${listTitle}`}</h2>
				<ul className="card__lista">
					{carList.map((item: ICar) => (
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
						itemDetailed ? "info-visualizer active" : "info-visualizer"
					}
				>
					{itemDetailed && (
						<>
							<button
								className="info-visualizer__close"
								onClick={() => setItemDetailed(null)}
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
