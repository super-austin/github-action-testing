// Style used in the component
export const styles = {
    toolbar: {
        height: "72px",
        backgroundColor: "#131227",
        justifyContent: "space-between",
    },

    searchBarWrapper: {
        height: "40px",
        padding: "16px 8px",
        marginLeft: "111px",
    },

    searchBar: {
        display: "flex",
        height: "100%",
    },

    searchInput: {
        width: "310px",
        display: "flex",
        padding: "8px 16px",
        gap: "8px",
        backgroundColor: "#27292B",
        border: "1px solid #323436",
        borderRadius: "50px",
        alignItems: "center",
        "& .MuiInputBase-root": {
            border: "none",
            background: "transparent",
        },
    },

    inputBase: {
        height: "100%",
        color: "#74787E",
        flexGrow: 1,
        fontFamily: "Open Sans",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "16px",
        letterSpacing: "-0.02em",
        "& input": {
            margin: "0 !important",
            border: "none !important",
            boxShadow: "none !important",
        },
    },

    navBar: {
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        marginTop: "3px",
    },

    navItem: {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
        color: "rgba(255, 255, 255, 0.5)",
        "&.active": {
            color: "white",
        },
    },

    avatarWrapper: {
        padding: "0 0 2px",
    },

    avatar: {
        width: "50px",
        height: "50px",
        fontFamily: "Open Sans",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "26px",
        backgroundColor: "#8D45FF",
        color: "white",
        borderRadius: "13px",
    },

    userWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "23px",
        marginRight: "24px",
    },

    optionWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5px",
        backgroundColor: "#313131",
        borderRadius: "32px",
        padding: "4px 0px",
    },

    iconWrapper: {
        margin: "4px 0 4px 11px",
        width: "28px",
        height: "28px",
    },
    img: {
        width: "100%",
        height: "100%",
    },

    options: {
        display: "flex",
        flexDirection: "column",
        textTransform: "uppercase",
        flexGrow: 1,
        marginRight: "13px",
        color: "white",
    },

    naut: {
        fontFamily: "Roboto",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "17px",
        letterSpacing: "-0.04em",
        color: "white",
    },

    usd: {
        fontFamily: "Open Sans",
        fontWeight: 600,
        fontSize: "10px",
        lineHeight: "17px",
        color: "rgba(255, 255, 255, 0.75)",
    },
};
