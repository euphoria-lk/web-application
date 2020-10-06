import ToolbarTop from "./toolbar-top";
import React from "react";
import {Box, Grid} from "@material-ui/core";

function LoginLayout({ children }) {
    return (
        <Grid container>
            <Grid item xs={12}>
                { children }
            </Grid>
        </Grid>
    );
}

export default LoginLayout;
