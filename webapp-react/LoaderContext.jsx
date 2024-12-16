import { createContext, useContext } from 'react';

const LoaderContext = createContext();

export const useLoader = () => {
    return useContext(LoaderContext);
};

export default LoaderContext;

