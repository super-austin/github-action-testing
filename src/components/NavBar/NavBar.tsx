// External dependencies
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Box,
    InputBase,
    Avatar,
    Typography,
} from "@mui/material";

// Internal dependencies
import { styles } from "./NavBar.style";

// SVG icons
import iconSearch from "../../assets/svg/iconSearch.svg";
import iconNaut from "../../assets/svg/iconNaut.svg";

/**
 *  NavBar Component
 */
export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar sx={styles.toolbar}>
                <Box sx={styles.searchBarWrapper}>
                    <Box sx={styles.searchBar}>
                        <Box sx={styles.searchInput}>
                            <img src={iconSearch} />
                            <InputBase
                                sx={styles.inputBase}
                                placeholder={"Discover"}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.navBar as CSSProperties}>
                    <Link style={styles.navItem} to="#">
                        Driver
                    </Link>
                    <Link style={styles.navItem} to="#">
                        Browse
                    </Link>
                    <Link style={styles.navItem} to="#">
                        News
                    </Link>
                    <Link style={styles.navItem} to="#">
                        Analytics
                    </Link>
                </Box>
                <Box sx={styles.userWrapper as CSSProperties}>
                    <Box sx={styles.optionWrapper as CSSProperties}>
                        <Box sx={styles.iconWrapper}>
                            <img src={iconNaut} style={styles.img} alt="logo" />
                        </Box>
                        <Box sx={styles.options as CSSProperties}>
                            <Typography sx={styles.naut}>
                                1,235.75 naut
                            </Typography>
                            <Typography sx={styles.usd}>
                                $usd 10,025.85
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.avatarWrapper}>
                        <Avatar sx={styles.avatar}>C</Avatar>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
