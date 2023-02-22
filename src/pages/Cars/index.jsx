import { useState } from "react";
import { MainContainer } from "./styles";
import carList from "../../api/cars.json";

function CarsPage() {
  const [ano, setAno] = useState("2000+");
  const [imageExpanded, setImageExpanded] = useState("");
  const [carName, setCarName] = useState("");

  const listaAno =
    ano === "2000+"
      ? carList.y2000
      : ano === "90"
      ? carList.y90
      : ano === "80"
      ? carList.y80
      : carList.y70;

  return (
    <MainContainer>
      <div className="select__box">
        <span>Filtrar por ano</span>
        <select onChange={(e) => setAno(e.target.value)}>
          <option value={"2000+"}>Anos 2000</option>
          <option value={"90"}>Anos 90</option>
          <option value={"80"}>Anos 80</option>
          <option value={"70"}>Anos 70</option>
        </select>
      </div>
      <div className="container">
        <h2>{`Anos ${ano}`}</h2>
        <ul className="card__lista">
          {listaAno.map((item) => (
            <li
              className="card__item"
              key={item.id}
              onClick={() => {
                setImageExpanded(item.image_path);
                setCarName(item.name);
              }}
            >
              <img src={item.image_path} className="card__image" alt="" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          imageExpanded !== ""
            ? "image__visualizer active"
            : "image__visualizer"
        }
        onClick={() => setImageExpanded("")}
      >
        <img src={imageExpanded} alt="" />
        <span>{carName}</span>
      </div>
    </MainContainer>
  );
}

export default CarsPage;
