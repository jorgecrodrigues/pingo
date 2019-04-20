import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {store, persistor} from './store';
import routes from './routes';
import './assets/styles/sass/app.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <div className="app__sidebar">
                                {
                                    routes.map((route, index) => (
                                        // Renderiza o componente Sidebar ...
                                        <Route key={index} path={route.path} exact={route.exact}
                                               component={route.sidebar}/>
                                    ))
                                }
                            </div>
                            <div className="app__main">
                                {
                                    routes.map((route, index) => (
                                        // Renderiza o componente do conteúdo ...
                                        <Route key={index} path={route.path} exact={route.exact}
                                               component={route.main}/>
                                    ))
                                }
                            </div>
                        </PersistGate>
                    </Provider>
                </div>
            </Router>
        );
    }
}

export default App;
