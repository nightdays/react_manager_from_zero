import Login from '@/pages/Login';
import User from '@/pages/User';
import System from '@/pages/System';

let route = [
    {
        path: '/login',
        component: Login,
        exact : true,
        layout : 'LoginLayout'
    },
    {
        path: '/changePassword',
        component: Login,
        exact: true,
        layout : 'CommonLayout',
    },
    {
        path: '/user',
        component: User,
        layout : 'CommonLayout'
    },
    {
        path: '/system',
        component: System,
        layout : 'CommonLayout'
    }
]

export default route = route;