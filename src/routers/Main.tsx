import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useStore } from '../store/useStore';
import { Provider as ReduxProvider } from 'react-redux';

export default function ExRouter() {
	const store = useStore();
	return (
		<ReduxProvider store={store}>
			<DndProvider backend={HTML5Backend}>
				<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbH7hn%2FbtqxLXwnJ0R%2FGQnmk4rpwQfoKEYGZQWbF1%2Fimg.jpg"></img>
			</DndProvider>
		</ReduxProvider>
	);
}
