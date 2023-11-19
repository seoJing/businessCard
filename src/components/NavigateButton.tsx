import { useNavigate } from 'react-router-dom';

export default function NavigateButton() {
	const navigate = useNavigate();
	const toNextPage = () => {
		navigate('/asd');
	};
	const toBackPage = () => {
		navigate('/asd');
	};

	return (
		<>
			<button onClick={toNextPage}></button>
			<button onClick={toBackPage}></button>
		</>
	);
}
