import { StyledLoading } from "./styles";

const LoadingContainer = () => {
	return (
		<StyledLoading>
			<img src="/img/data/loading.gif" alt="Loading..." />
			<span>Loading...</span>
		</StyledLoading>
	);
};

export default LoadingContainer;
