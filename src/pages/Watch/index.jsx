import { Player, Video, VideosContainer, WrapperTitle } from "./styles";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

// "channels": "StateSide Supercars, DutchMotorsport, Eletor, Drift Sight, OutlawPhonk, Checkpoint Japan",

const playlistIds = ["PLOniaSxIscjb2Gm4fAAmFiRMJC32ua21i"];
const apiUrl =
	"https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=";

function Watch() {
	const [videos, setVideos] = useState([]);

	const [playNow, setPlayNow] = useState({});

	const [logged, setLogged] = useState(false);

	const videosContainer = useRef();

	useEffect(() => {
		const promises = playlistIds.map((id) =>
			axios.get(`${apiUrl}${id}&key=${apiKey}`)
		);

		Promise.all(promises)
			.then((responses) => {
				const videos = responses.reduce(
					(acc, response) => [...acc, ...response.data.items],
					[]
				);
				setVideos(videos);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleWheel = (event) => {
		const scrollSize = 200;
		const direction = event.deltaY > 0 ? 1 : -1;
		videosContainer.current.scrollLeft += direction * scrollSize;
	};

	return (
		<>
			<WrapperTitle>Favoritos</WrapperTitle>
			<VideosContainer ref={videosContainer}>
				{logged ? (
					<div className="wrapper">
						{videos.reverse().map((video) => (
							<Video
								key={video.id}
								onClick={() => {
									setPlayNow(video);
									videosContainer.current.scrollTop = 0;
								}}
							>
								<div className="action-thumbnail">
									<img
										src={video.snippet.thumbnails.medium.url}
										alt={video.snippet.title}
									/>
									<img
										className="action-thumbnail__play"
										src="/img/data/play.png"
										alt="Play"
									/>
								</div>
								<span>
									{video.snippet.title.length > 40
										? video.snippet.title.substring(0, 40) + "..."
										: video.snippet.title}
								</span>
							</Video>
						))}
					</div>
				) : (
					<div className="wrapper__not-logged">
						<p>
							Em breve: faça login, adicione videos como favorito e eles
							aparecerão aqui.
						</p>
					</div>
				)}
			</VideosContainer>
			<WrapperTitle>Recomendados</WrapperTitle>
			<VideosContainer ref={videosContainer} onWheel={handleWheel}>
				<div className="wrapper">
					{videos.reverse().map((video) => (
						<Video
							key={video.id}
							onClick={() => {
								setPlayNow(video);

								if (playNow) document.body.style.overflowY = "hidden";
							}}
						>
							<div className="action-thumbnail">
								<img
									src={video.snippet.thumbnails.medium.url}
									alt={video.snippet.title}
								/>
								<img
									className="action-thumbnail__play"
									src="/img/data/play.png"
									alt="Play"
								/>
							</div>
							<span>
								{video.snippet.title.length > 40
									? video.snippet.title.substring(0, 40) + "..."
									: video.snippet.title}
							</span>
						</Video>
					))}
				</div>
			</VideosContainer>

			{/* /////// Player below*/}

			{playNow.snippet && (
				<Player>
					<button
						className="player__close"
						onClick={() => {
							setPlayNow({});
							videosContainer.current.style.overflowY = "auto";

							if (playNow) {
								document.body.style.overflowY = "hidden";
							}
						}}
					>
						Fechar
					</button>
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${playNow.snippet.resourceId.videoId}`}
						title="YouTube Player"
						frameBorder={0}
						allowFullScreen
					></iframe>
				</Player>
			)}
		</>
	);
}

export default Watch;
