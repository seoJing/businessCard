import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStore } from './store/useStore';
import { Provider as ReduxProvider } from 'react-redux';

import Activities from './routers/Activities';
import Awards from './routers/Awards';
import Certificate from './routers/Certificate';
import Information from './routers/Information';
import Loding from './routers/Loding';
import Main from './routers/Main';
import Portfolio from './routers/Portfolio';
import Stacks from './routers/Stacks';

export default function App() {
	const store = useStore();
	return (
		<BrowserRouter>
			<Routes>
				<ReduxProvider store={store}>
					<Route path={'/'} element={<Main />} />
					<Route path={'/Loding'} element={<Loding />} />
					<Route path={'/Activities'} element={<Activities />} />
					<Route path={'/Awards'} element={<Awards />} />
					<Route path={'/Certificate'} element={<Certificate />} />
					<Route path={'/Information'} element={<Information />} />
					<Route path={'/Portfolio'} element={<Portfolio />} />
					<Route path={'/Stacks'} element={<Stacks />} />
				</ReduxProvider>
			</Routes>
		</BrowserRouter>
	);
}
