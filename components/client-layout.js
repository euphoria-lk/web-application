import ToolbarTop from "./toolbar-top";
import React from "react";

function ClientLayout({ children }) {
    return (
        <div>
            <ToolbarTop/>
            { children }
        </div>
    );
}

export default ClientLayout;
