import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useStore } from '../store/useStore';
import { Provider as ReduxProvider } from 'react-redux';

import ExComponent from '../components/ExComponent';

export default function ExRouter() {
	const store = useStore();
	return (
		<ReduxProvider store={store}>
			<DndProvider backend={HTML5Backend}>
				<ExComponent></ExComponent>
			</DndProvider>
		</ReduxProvider>
	);
}
