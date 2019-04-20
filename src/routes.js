import React from 'react';

// Componente
import Sidebar from './components/Sidebar/Sidebar';

// Views
import Home from './views/Home';
import Accountant from './views/Accountant';

// Cada roda lógica tem dois componentes, um para
// o sidebar e outro para a área de conteúdo. para
// renderizar os dois em diferentes lugares quando o
// caminho combinar com a URL atual.

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <Sidebar/>,
        main: () => <Home/>
    },
    {
        path: "/counter",
        exact: true,
        sidebar: () => <Sidebar/>,
        main: () => <Accountant/>

    }
];

export default routes;