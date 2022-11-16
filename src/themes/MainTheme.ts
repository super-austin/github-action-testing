// External dependencies
import { createTheme } from "@mui/material";

// default theme
const defaultTheme = createTheme();

// colors
const Colors = {
    // v1
    red100: "#FCE7E9",
    red300: "#F19097",
    red500: "#E53948",
    red700: "#A81520",
    red900: "#620C13",
    blue100: "#D9E6F2",
    blue300: "#8FB4DA",
    blue500: "#336699",
    blue700: "#24496D",
    blue900: "#162B41",
    darkBlue100: "#7B8C9D",
    darkBlue300: "##D0CBBE",
    darkBlue500: "#333C44",
    darkBlue700: "#1E2429",
    darkBlue900: "#0A0C0E",
    lightBlue100: "#FEFFFF",
    lightBlue300: "#F6F8F9",
    lightBlue500: "#E8EBEE",
    lightBlue700: "#D4DADF",
    lightBlue900: "#C0C9D1",
    // v2
    white: "#FFFFFF",
    black: "#111111",
    blue: "#260F69",
    darkBlue: "#0F0432",
    cyan: "#23D7F0",
    green: "#12DD9D",
    purple: "#4D20B4",
    lightPrple: "#3E1A90",
    darkPurple: "#1B1238",
    red: "#D6335B",
    pink: "#97007D",
    yellow: "#FFEC5A",
    orange: "#FF8A00",
    gray: "rgba(255, 255, 255, 0.5)",
    // v3
    primary900: "#17122B",
    primary800: "#1F0D48",
    primary700: "#2E136C",
    primary600: "#3E1A90",
    gradientPrimary:
        "linear-gradient(252.64deg, #1F0D48 34.36%, #2E136C 105.02%)",
    primary500: "#4D20B4",
    primary400: "#714DC3",
    secondary500: "#FE5D5D",
    gradientSecondary:
        "linear-gradient(90deg, #D6335B -19.75%, #FE5D5D 109.88%), linear-gradient(252.64deg, #1F0D48 34.36%, #2E136C 105.02%)",
    darkGray: "#111111",
    neutral900: "#1B1A1F",
    Neutral800: "#36343D",
    Neutral500: "#878299",
    neutral700: "#514E5C",
    accentA500: "#23D7F0",
    accentC500: "#FFEC5A",
    accentE400: "#9395FF",
    accentE500: "#787AFF",
    alphaWhite90: "rgba(255, 255, 255, 0.9)",
    alphaWhite75: "rgba(255, 255, 255, 0.75)",
    alphaWhite50: "rgba(255, 255, 255, 0.5)",
    alphaWhite25: "rgba(255, 255, 255, 0.25)",
    alphaWhite10: "rgba(255, 255, 255, 0.1)",
    alphaBlack75: "rgba(0, 0, 0, 0.75)",
    alphaBlack25: "rgba(0, 0, 0, 0.25)",
    success600: "#0EB17E",
    lightYellow: "#FFB800",
    offWhite: "#D0CBBE",
    darkYellow: "#FF8A00",
};
// typography
const FONT_FAMILY = {
    plusJakarta: 'Plus Jakarta Display',
};
const FONT_WEIGHT = {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
};

// create a new theme
const themeV3 = createTheme({
    palette: {
        primary: {
            main: Colors.primary500,
            light: Colors.primary400,
            dark: Colors.primary800,
        },
        secondary: {
            main: Colors.darkGray,
            light: Colors.Neutral800,
            dark: Colors.neutral900,
        },

        // background of pages
        background: {
            default: Colors.darkGray,
        },
        text: {
            primary: Colors.white,
        },

        common: Colors,
    },

    typography: {
        fontFamily: FONT_FAMILY.plusJakarta,
        allVariants: {
            color: Colors.white,
        },
        // 48, 34, 24, 20, 18, 16, 14, 12, 10
        h1: {
            fontSize: "3rem", // 3rem = 48px
            fontWeight: FONT_WEIGHT.medium,
            lineHeight: "3.5rem",
            color: Colors.white,
            fontFamily: 'Plus Jakarta Display',
        },
        h2: {
            fontSize: "2.125rem", // 2.125rem = 34px
            fontWeight: FONT_WEIGHT.medium,
            lineHeight: "2.5rem",
            color: Colors.white,
            fontFamily: 'Plus Jakarta Display',
        },
        h3: {
            fontSize: "1.5rem", // 1.5rem = 24px
            fontWeight: FONT_WEIGHT.medium,
            lineHeight: "2rem",
            color: Colors.white,
            fontFamily: 'Plus Jakarta Display',
            letterSpacing: "-0.64px",
        },
        h4: {
            fontSize: "1.25rem", // 1.25rem = 20px
            fontWeight: FONT_WEIGHT.medium,
            lineHeight: "1.5rem",
            color: Colors.white,
            fontFamily: 'Plus Jakarta Display',
            letterSpacing: "-0.32px",
        },
        h5: {
            fontSize: "1.125rem", // 1.125rem = 18px
            fontWeight: FONT_WEIGHT.semiBold,
            lineHeight: "1.625rem", // 26px
            color: Colors.white,
        },
        body1: {
            fontSize: "1rem", // 1rem = 16px
            fontWeight: FONT_WEIGHT.regular,
            lineHeight: "1.25rem", // 1.25rem = 20px
            color: Colors.white,
        },
        body2: {
            fontSize: "0.875rem", // 0.875rem = 14px
            fontWeight: FONT_WEIGHT.regular,
            lineHeight: "1.25rem", // 1.25rem = 20px
            color: Colors.alphaWhite90,
        },
        subtitle1: {
            fontSize: "0.75rem", // 0.75rem = 12px
            fontWeight: FONT_WEIGHT.regular,
            lineHeight: "1rem",
            color: "rgba(255, 255, 255, 0.5)",
        },
        subtitle2: {
            fontSize: "0.625rem", // 0.625rem = 10px
            fontWeight: FONT_WEIGHT.regular,
            lineHeight: "0.75rem",
            color: Colors.white,
        },
    },
    // overrides
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltipPlacementTop: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "var(--input-bg-dark)",
                    width: "auto",
                    height: "auto",
                    fontSize: "12px",
                    lineHeight: "16px",
                    padding: "10px",
                    color: "var(--purple-dark)",
                    "&::before": {
                        content: `""`,
                        position: "absolute",
                        inset: "0",
                        borderRadius: "10px",
                        padding: "1px",
                        background: "var(--gradient-dark-border)",
                        WebkitMask: 
                           "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        MaskComposite: "exclude",
                        zIndex: -1,
                        "@-moz-document url-prefix()": {
                            WebkitMaskComposite: "subtract",
                        },
                    },
                    "&::after": {
                        content: `""`,
                        position: "absolute",
                        height: "35px",
                        border: "18px solid transparent",
                        borderTopColor: "var(--black-dark-2)",
                        borderRadius: "2px",
                        transform: "rotate(0deg)",
                        bottom: "-50px",
                        left: "45%",
                    },
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0px",
                    textTransform: "none",
                    "&.Mui-disabled": {
                        background: Colors.primary800,
                        color: Colors.alphaWhite25,
                        fontWeight: FONT_WEIGHT.semiBold,
                    },
                    "&.MuiButton-contained": {
                        background: Colors.primary500,
                        color: Colors.white,
                        "&:hover": {
                            background: Colors.accentE500,
                        },
                    },
                    "&.MuiButton-outlined": {
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        // padding: "8px 15px",
                        color: Colors.alphaWhite75,
                        fontSize: "16px",
                        fontWeight: "600",
                        "&:hover": {
                            borderColor: Colors.accentE500,
                            color: Colors.accentE500,
                        },
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    width: "auto",
                    "&.MuiListItem-gutters": {
                        paddingLeft: "0px",
                    },
                    "&.MuiListItem-root.Mui-selected": {
                        background: "#2E136C",
                        color: "#ffff",
                    },
                    paddingTop: "12px",
                    paddingLeft: "0px",
                    paddingRight: "12px",
                    color: "#fff",
                },
                gutters: {
                    paddingLeft: "1.5rem",
                    height: "3rem",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: "rgba(27, 26, 31, 1)",
                },
            },
        },

        MuiContainer: {
            styleOverrides: {
                maxWidthMd: {
                    maxWidth: "1000px !important",
                },
                maxWidthLg: {
                    maxWidth: "1140px !important",
                },
                maxWidthXl: {
                    maxWidth: "1440px !important",
                },
                maxWidthSm: {
                    maxWidth: "724px !important",
                },
                maxWidthXs: {
                    maxWidth: "600px !important",
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    marginTop: "55px",
                    // marginLeft: "25px",
                    backgroundColor: Colors.lightPrple,
                    width: "210px",
                    height: "146px",
                    borderRadius: "0px",
                    [defaultTheme.breakpoints.down("xs")]: {
                        marginLeft: "0px",
                        marginTop: "45px",
                        width: "120px",
                        height: "auto",
                    },
                },
                list: {
                    color: Colors.lightBlue100,
                    padding: "0px",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                colorInherit: {
                    color: Colors.lightBlue100,
                },
            },
        },

        MuiDrawer: {
            styleOverrides: {
                paperAnchorRight: {
                    background: "#1B1A1F ",
                    [defaultTheme.breakpoints.down("xs")]: {
                        maxWidth: "100%",
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    background: Colors.darkBlue,
                },
                paperWidthSm: {
                    maxWidth: "700px",
                    borderRadius: "0px",
                },
                paperWidthMd: {
                    maxWidth: "700px",
                    borderRadius: "0px",
                    // background: Colors.darkBlue700,
                    [defaultTheme.breakpoints.down("xs")]: {
                        margin: "0px",
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        borderRadius: "0px",
                        minHeight: "100%",
                    },
                },
                paperWidthLg: {
                    width: "900px",
                    borderRadius: "0px",
                    background: Colors.black,
                    [defaultTheme.breakpoints.down("sm")]: {
                        margin: "0px",
                        maxHeight: "100%",
                        background: Colors.black,
                    },
                    [defaultTheme.breakpoints.down("xs")]: {
                        borderRadius: "0px",
                        overflow: "scroll",
                    },
                    "@media(min-width: 375px) and (max-width: 824px)": {
                        overflow: "scroll",
                    },
                },
            },
        },
        // Textfield
        MuiInput: {
            styleOverrides: {
                root: {
                    minWidth: "183px",
                    minHeight: "42px",
                    borderRadius: "0",
                    fontFamily: "Open Sans",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    background: "#271D46",
                    color: Colors.Neutral500,
                    paddingLeft: "8px",
                    [defaultTheme.breakpoints.down("sm")]: {
                        minWidth: "167px",
                    },
                },
                underline: {
                    "&::before": {
                        content: "none",
                        border: "none !important",
                        borderBottom: "0px !important",
                    },
                    "&::after": {
                        content: "none",
                        borderBottom: "0px !important",
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    padding: "0px",
                    "& label.Mui-focused": {
                        color: Colors.lightBlue100,
                        textAlign: "center",
                    },
                    "&.MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: Colors.lightBlue100,
                        },
                        "&:hover fieldset": {
                            borderColor: Colors.lightBlue100,
                        },
                        "&.Mui-focused fieldset": {
                            border: "1px solid",
                            borderColor: Colors.lightBlue100,
                        },
                    },
                },
                input: {
                    padding: "10px",
                    color: Colors.lightBlue100,
                    textAlign: "center",
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    overflow: "none",
                    backgroundColor: Colors.lightBlue100,
                },
                img: {
                    borderRadius: "500px",
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: "0px",
                    textTransform: "none",

                    [defaultTheme.breakpoints.down("xl")]: {
                        minWidth: "90px",
                    },
                    "@media(min-width: 600px) and (max-width: 736px)": {
                        minWidth: "75px",
                    },
                    textColorPrimary: {
                        MuiSelected: {
                            backgroundColor: "rgba(255, 255, 255, 0.25)",
                        },
                    },
                },
                wrapped: {
                    color: Colors.white,
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: FONT_WEIGHT.regular,
                },
                textColorInherit: {
                    opacity: "1",
                },
            },
        },

        MuiDivider: {
            styleOverrides: {
                root: {
                    border: "1.5px",
                    backgroundColor: "rgb(255 250 250 / 12%)",
                },
            },
        },
        // skeleton
        MuiSkeleton: {
            styleOverrides: {
                wave: {
                    background:
                        "linear-gradient(90deg, #162B41 0%, #D9E6F2 100%)",
                    borderRadius: "16px",
                    marginBottom: "24px",
                },
                root: {
                    background:
                        "linear-gradient(90deg, #162B41 0%, #D9E6F2 100%)",
                    borderRadius: "10px 10px 0px 0px",
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "12px",
                },
            },
        },

        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: "59px ",
                },
            },
        },

        MuiInputBase: {
            styleOverrides: {
                root: {
                    background: "#36343D",
                    width: "203px",
                    height: "2.5rem",
                    borderRadius: "1.2rem",
                    border: "1px solid #514E5C",
                },
                input: {
                    "&:-webkit-autofill": {
                        transitionDelay: "9999s",
                        transitionProperty: "background-color, color",
                    },
                },
            },
        },
        MuiNativeSelect: {
            styleOverrides: {
                select: {
                    height: "2.5rem",
                    textAlign: "left",
                    marginLeft: "1.125rem", // 2px
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: " #111111",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                gutterBottom: {
                    marginBottom: "0px",
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                regular: {
                    minHeight: "4.5rem", // = 72px
                    backgroundColor: "#111111",
                    "@media(min-width: 600px)": {
                        minHeight: "4.5rem",
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    "&.MuiMenu-paper": {
                        marginTop: "-10px",
                        border: "0.5px solid #714DC3",
                        borderRadius: "2px",
                        height: "auto",
                    },
                    "&.MuiPaper-elevation8": {
                        boxShadow: "0px 20px 56px rgba(0, 0, 0, 0.29)",
                    },
                },
                rounded: {
                    borderRadius: "0px",
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                standard: {
                    "&.MuiSelect-select.MuiSelect-select": {
                        paddingLeft: "24px",
                        textAlign: "center",
                        fontSize: "18px",
                        fontWeight: "600",
                        fontFamily: "Open Sans",
                        lineHeight: "25px",
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    "&.MuiSvgIcon-root": {
                        color: "#fff",
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&.MuiButtonBase-root": {
                        padding: "12px 28px",
                    },
                },
            },
        },
    },
});

export default themeV3;
