"use client";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store';

export default function RootProvider({ children }) {
    return (
        <Provider store={store}>
            <PersistGate loading={<p>Loading reducers</p>} persistor={persistor}>
        { children }
      </PersistGate>
        </Provider>
    )
}