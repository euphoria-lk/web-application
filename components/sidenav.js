import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
// import Link from "@material-ui/core";
import {Link as uiLink} from "@material-ui/core";

function SideNav() {


    return(
        <div>
            <Grid item>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Link href={}>
                            Browse
                        </Link>
                        <Link href={}>
                            Appointments
                        </Link>
                        <Link href={}>
                            Your records
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default SideNav;
