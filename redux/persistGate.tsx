import React from "react";
import {persistor, store} from "@/redux/store";

const handleOnBeforeLift = () => {
}

const PersistGate = ({children}: {children: React.ReactNode}) => {
    return <PersistGate loading={null} persistor={persistor} onBeforeLift={handleOnBeforeLift}>{children}</PersistGate>;
}

export default PersistGate
