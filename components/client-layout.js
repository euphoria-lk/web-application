import ToolbarTop from "./toolbar-top";
import React from "react";
import {Box} from "@material-ui/core";

function ClientLayout({ children }) {
    return (
        <Box style={{backgroundColor:'#ecf0f1', minHeight:'100vh'}}>
            <ToolbarTop/>
            { children }
        </Box>
    );
}

export default ClientLayout;
