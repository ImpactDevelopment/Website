import { AppBar, Fab, Toolbar, Typography } from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Head from "next/head";
import ElevationScroll from "./ElevationScroll";
import ScrollTop from "./ScrollTop";
import Copyright from "./Copyright";

interface Props {
    children: React.ReactElement,
    title?: string
}

export default function Layout({children, title = 'Impact'}: Props): React.ReactElement {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ElevationScroll>
                <AppBar position="sticky">
                    <Toolbar variant="dense">
                        <Typography variant="h4" component="h1" gutterBottom>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <ScrollTop>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>

            {children}

            <footer>
                <Copyright />
            </footer>
        </>
    )
}