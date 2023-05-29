import { useEffect, useState } from "react";
import { Container, YearSelector, Wrapper, Visualizer } from "./styles";
import { ICar, ICarDetailed } from "./types";
import { useDb } from "../../hooks/useDb/useDb";
import { RiEditFill } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";

function Cars() {
	const [carDetailed, setCarDetailed] = useState<ICarDetailed | null>(null);
	const [collectionName, setCollectionName] = useState<string>("cars-wiki-90");
	const [carList, setCarList] = useState<ICar[]>([]);
	const { getAll, updateOne } = useDb();
	const { user } = useAuth();

	const navigate = useNavigate();

	useEffect(() => {
		getAll(collectionName).then((response) => setCarList(response));
	}, [collectionName]);

	let listTitle = collectionName
		.split("")
		.filter((item) => item.match(/^\d+$/))
		.join("");

	const showDetails = (carId: string) => {
		const item = carList.find((value: ICar) => value.id == carId);
		setCarDetailed(({ ...item, readonly: true } as ICarDetailed) || null);
	};

	const updateDetails = async (car: ICarDetailed) => {
		if (!user) {
			window.confirm("Login necessário para atualizar as informações");
			navigate("/login");
			return;
		}
		setCarDetailed((prevState) => {
			return { ...prevState!, modifiedBy: user!.displayName };
		});

		const { modifiedBy, power, vel_max, zero_to_100, id } = car;

		await updateOne(collectionName, id!, {
			modifiedBy: modifiedBy,
			power: power || "",
			vel_max: vel_max || "",
			zero_to_100: zero_to_100 || "",
		});
		alert("Dados atualizados com sucesso!");
	};

	return (
		<Container>
			<YearSelector>
				<span>Filtrar por ano</span>
				<select onChange={(e) => setCollectionName(e.target.value)}>
					<option value={"cars-wiki-90"}>Anos 90</option>
					<option value={"cars-wiki-80"}>Anos 80</option>
					<option value={"cars-wiki-70"}>Anos 70</option>
					<option value={"cars-wiki-2000"}>Anos 2000</option>
				</select>
			</YearSelector>
			<Wrapper>
				<h2>{`Anos ${listTitle}`}</h2>
				<ul className="card__lista">
					{carList.map((item: ICar) => (
						<li
							className="card__item"
							key={item.id}
							onClick={() => item.id && showDetails(item.id)}
						>
							<img src={item.image_path} className="card__image" alt="" />
							<span>{item.name}</span>
						</li>
					))}
				</ul>
			</Wrapper>
			{carDetailed && (
				<Visualizer active={carDetailed}>
					<button className="close-btn" onClick={() => setCarDetailed(null)}>
						Fechar
					</button>
					<img src={carDetailed.image_path} alt="" />
					<ul className="details-list">
						<li>
							<h2>{carDetailed.name}</h2>
						</li>
						<li>
							<h3>Potência</h3>

							<label htmlFor="power">
								<RiEditFill
									className="edit-btn"
									onClick={() =>
										setCarDetailed((item) => {
											return { ...item!, readonly: !item!.readonly };
										})
									}
								/>
							</label>
							<input
								id="power"
								value={carDetailed.power}
								readOnly={carDetailed.readonly}
								onChange={(e) =>
									setCarDetailed((item) => {
										return { ...item!, power: e.target.value };
									})
								}
							/>
						</li>
						<li>
							<h3>Velocidade Máxima</h3>
							<label htmlFor="vel_max">
								<RiEditFill
									className="edit-btn"
									onClick={() =>
										setCarDetailed((item) => {
											return { ...item!, readonly: !item!.readonly };
										})
									}
								/>
							</label>
							<input
								id="vel_max"
								value={carDetailed.vel_max}
								readOnly={carDetailed.readonly}
								onChange={(e) =>
									setCarDetailed((item) => {
										return { ...item!, vel_max: e.target.value };
									})
								}
							/>
						</li>
						<li>
							<h3>0 a 100km/h</h3>
							<label htmlFor="zero_to_100">
								<RiEditFill
									className="edit-btn"
									onClick={() =>
										setCarDetailed((item) => {
											return { ...item!, readonly: !item!.readonly };
										})
									}
								/>
							</label>
							<input
								id="zero_to_100"
								value={carDetailed.zero_to_100}
								readOnly={carDetailed.readonly}
								onChange={(e) =>
									setCarDetailed((item) => {
										return { ...item!, zero_to_100: e.target.value };
									})
								}
							/>
						</li>
						<button
							className="update-btn"
							onClick={() => {
								updateDetails(carDetailed);
							}}
						>
							Atualizar
						</button>
						<span>{`Última modificação feita por @${
							carDetailed.modifiedBy || "Admin"
						}`}</span>
					</ul>
				</Visualizer>
			)}
		</Container>
	);
}

export default Cars;
