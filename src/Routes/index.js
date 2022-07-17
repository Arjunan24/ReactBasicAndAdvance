import App from '../App';
import PageNotFound from '../Components/PageNotFound';
import ParentFunctionComponentWithPropDrilling from '../Components/ParentFunctionComponentWithPropDrilling';

let userAccess = () => {
  sessionStorage.setItem('token', '12345');
  return sessionStorage.getItem('token');
};
let routes = [
  { path: '/', Element: App, privateRoute: false, publicRoute: true },
  { path: '/home', Element: App, privateRoute: false },
  {
    path: '/users',
    Element: ParentFunctionComponentWithPropDrilling,
    privateRoute: false,
    publicRoute: true,
    roles: 1234
  },
  {
    path: '*',
    Element: PageNotFound,
    privateRoute: false,
    roles: 8888
  }
];

export default routes;
