import { createContext } from 'react';

export const RootContext = createContext({ isAuth: false });
export const ChildContext = createContext({ modal: 'Laptop' });

export default { RootContext, ChildContext };
