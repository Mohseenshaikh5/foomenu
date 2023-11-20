"use client"
import { Provider } from "react-redux"; // Correct import statement
import { store, persistor } from "../redux/store";
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
// import { ToastContainer, toast } from 'react-toastify';

const Providers = ({ children }) => {
    return (
        <HelmetProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
            {/* <ToastContainer limit={1} autoClose={3000} /> */}

        </HelmetProvider>
    );
};

export default Providers;