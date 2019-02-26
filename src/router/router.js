import Login from '@/pages/Login';
import Special from '@/pages/Special';
import Survey from '@/pages/Survey';

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
        path: '/special',
        component: Special,
        layout : 'MainLayout'
    },
    {
        path: '/survey',
        component: Survey,
        layout : 'MainLayout'
    }
]

export default route = route;