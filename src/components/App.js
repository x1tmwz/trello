import React from 'react';
import { Provider } from 'react-redux'
import AppRouter from '../routers/AppRouter';
import storeConfig from '../store/storeConfig';


const store = storeConfig();


const App = () => {

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}
export default App;