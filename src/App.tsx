import React from 'react';
import {Provider as ReduxProvider} from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {ExRouter} from '../routers/ExRouter'

export default function App() {

	return ( 
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<ExRouter />}/>
			</Routes>
		</BrowserRouter>
	)
}

