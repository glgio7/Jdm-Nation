import { useState } from "react";
import FormContainer from "../../components/FormContainer";
import LoadingContainer from "../../components/Loading";
import PopUp from "../../components/PopUp";
import { useDb } from "../../hooks/useDb/useDb";

const Contribute = () => {
	const [nome, setNome] = useState("");
	const [velMax, setVelMax] = useState("");
	const [power, setPower] = useState("");
	const [zeroTo100, setZeroTo100] = useState("");

	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState("");

	const [imageUrl, setImageUrl] = useState("");
	const [collectionName, setCollectionName] = useState<string>("");

	const { addOne, uploadImage } = useDb();

	const handleAddCar = async () => {
		if (imageUrl && collectionName) {
			setLoading(true);
			try {
				addOne(
					{
						name: nome,
						power: power,
						vel_max: velMax,
						zero_to_100: zeroTo100,
						image_path: imageUrl,
					},
					collectionName
				);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError("Error creating document:");
				console.log("Error creating document:", error);
			}
		}
	};

	return (
		<FormContainer>
			{loading && <LoadingContainer />}
			{error && (
				<PopUp
					success={false}
					href={""}
					message={error}
					buttonText={"Tentar novamente"}
				/>
			)}
			{!loading && !error && (
				<>
					<h2>Adicionar carro</h2>
					<form onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="imagem">Adicionar imagem</label>
						<input
							type="file"
							id="imagem"
							accept="image/*"
							onChange={(e) => uploadImage({ e, setImageUrl, setError })}
							required
						/>
						<label htmlFor="nome">Nome</label>
						<input
							type="text"
							id="nome"
							value={nome}
							onChange={(e) => setNome(e.target.value)}
							required
						/>
						<label htmlFor="power">Potência</label>
						<input
							type="text"
							id="power"
							placeholder="Exemplo: 200 cv"
							value={velMax}
							onChange={(e) => setPower(e.target.value)}
						/>
						<label htmlFor="vel_max">Velocidade Máxima</label>
						<input
							type="text"
							id="vel_max"
							placeholder="Exemplo: 250 km/h"
							value={velMax}
							onChange={(e) => setVelMax(e.target.value)}
						/>
						<label htmlFor="vel_max">0 a 100km/h</label>
						<input
							placeholder="Exemplo: 7.5 segundos"
							type="text"
							id="vel_max"
							value={zeroTo100}
							onChange={(e) => setZeroTo100(e.target.value)}
						/>
						<label>Selecione o ano</label>
						<select
							onChange={(e) => setCollectionName(e.target.value)}
							required
						>
							<option value={""}></option>
							<option value={"cars-wiki-90"}>Anos 90</option>
							<option value={"cars-wiki-80"}>Anos 80</option>
							<option value={"cars-wiki-70"}>Anos 70</option>
							<option value={"cars-wiki-2000"}>Anos 2000</option>
						</select>
						<div>
							<button onClick={handleAddCar}>Adicionar</button>
						</div>
					</form>
				</>
			)}
		</FormContainer>
	);
};

export default Contribute;
