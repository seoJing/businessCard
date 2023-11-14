import {DnDProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useStore} from '../store/useStore'

export default function ExRouter() {

	const store = useStore();
    return (
        <ReduxProvider store={store}>
			<DnDProvider backend={HTML5Backend}>
				asd
			</DnDProvider>
		</ReduxProvider>
    )
}