// Styles used in the component
export const styles = {
    gamenautTableWrapper: {
        backgroundColor: "transparent",
        boxShadow: "none",
        width: "100%",
        overflowX: "auto",
        "::-webkit-scrollbar": {
            width: "8px",
        },
        "::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 5px grey",
            borderRadius: "8px",
        },
        "::-webkit-scrollbar-thumb": {
            background: "var(--black-dark-4)",
            borderRadius: "8px",
        },
    },
    gamenautTableUi: {
        "& thead": {
            "& tr": {
                background: "var(--gradient-secondary)",
                borderRadius: "5px",
                "& th": {
                    border: "none",
                    lineHeight: "20px",
                    color: "var(--thead-text)",
                    padding: "4px 16px",
                    borderRadius: "5px",
                    background: "transparent",
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                    "&:not(:first-of-type)": {
                        borderTopLeftRadius: "0",
                        borderBottomLeftRadius: "0",
                    },
                },
            },
        },
        "& tr": {
            "& td": {
                border: "none",
                color: "var(--white-color)",
                verticalAlign: "middle",
                borderBottom: "1px solid var(--table-border)",
                padding: "20px 15px",
            },
            "& a": {
                color: "var(--white-color)",
                display: "inline",
            },
            "&:last-child": {
                "& td": {
                    border: "none",
                    paddingBottom: "5px",
                },
            },
        },
    },
    topRank:{
        fontWeight: "700",
        fontSize: "16px",
        color: "var(--white-color)",
        background: "var(--gradient-blue-border-1)",
        padding: "2px",
        borderRadius: "50px",
        display: "inline-block",
        width: "35px",
        height: "35px",
    },
    rankInner: {
        textShadow: "var(--text-shadow-primary)",
        background: "var(--card-bg-dark)",
        width: "100%",
        height: "100%",
        borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    tableHeadDark: {
        // display: "inline-block",
        // background: "var(--gradient-secondary)",
        // borderRadius: "5px",
        // padding: "6px 20px",
    },
    playerListTable: {

    },
    playerInfo: {
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
    },
    playerThumb: {

    },
    tableThumbsGroup: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        "& img": {
            width: "24px",
            height: "24px",
            borderRadius: "2px",
        },
    },
    thumbRounded: {
        "& img": {
            borderRadius: "50px",
        },
    },
};