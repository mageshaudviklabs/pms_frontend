import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PrivateRoute from '../../components/PrivateRoute';

import type { AppRoute } from '../../interface/routesInterface';

import NotFoundPage from '../../components/NotFoundPage';

const routesList: AppRoute[] = [
    {
        path: '/',
        element: <Home />,
    },
];

const name = 'pms-route';

export default function PmsRoutes() {
    return (
        <Routes>
            {routesList.map((ele, i) => {
                return (
                    <Route
                        key={name + i}
                        path={ele.path}
                        element={<PrivateRoute>{ele.element}</PrivateRoute>}
                    />
                    // <Route key={'pms-route' + i} element={<RequireAuth />}>
                    //     <Route path={ele.path} element={ele.element} />
                    // </Route>
                );
            })}
            {/* Catch-all 404 inside CoreRoutes */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
