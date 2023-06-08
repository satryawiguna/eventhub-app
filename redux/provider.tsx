import React from "react";
import {store} from "@/redux/store";

const Provider = ({children}: {children: React.ReactNode}) => {
    return <Provider store={store}>{children}</Provider>;
}

export default Provider
