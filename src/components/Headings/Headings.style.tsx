// Styles used in the component
export const styles = {
    HeadingWrapper: {
        display: "flex",
        alignItems: "center",
        gap: "25px",
        marginBottom: "30px",
    },
    headingTitle: {
        fontFamily: "var(--font-primary)",
        fontWeight: "700",
        fontSize: "25px",
        lineHeight: "32px",
        color: "var(--white-color)",
        position: "relative",
        padding: "5px 0px 5px 30px",
        display: "flex",
        alignItems: "center",
        "& .line": {
            position: "absolute",
            width: "5px",
            height: "100%",
            background: "var(--gradient-blue-border)",
            borderRadius: "0px 26px 26px 0px",
            boxShadow: "var(--box-shadow-primary-big)",
            left: 0,
            "&.green": {
                "&.line": {
                    background: "var(--gradient-green-border)",
                    boxShadow: "var(--line-box-shadow-green)",
                },
            },
            "&.pink": {
                "&.line": {
                    background: "var(--gradient-pink-border)",
                    boxShadow: "var(--line-box-shadow-pink)",
                },
            },
            "&.blue": {
                "&.line": {
                    background: "var(--gradient-blue-border)",
                },
            },
            "&.purple": {
                "&.line": {
                    background: "var(--purple-dark)",
                    boxShadow: "var(--line-box-shadow-purple)",
                },
            },
            "&.none": {
                paddingLeft: "0",
                "&.line": {
                    display: "none",
                },
            },
        },
    },
    headingCounts: {
        fontSize: "12px",
        lineHeight: "14px",
        marginLeft: "12px",
        marginTop: "auto",
        fontWeight: "normal",
    },
    countPurple: {
        color: "var(--purple-dark)",
    },
    countGreen: {
        color: "var(--green-primary",
    },
    countPink: {
        color: "var(--pink-primary)",
    },
    countBlue: {
        color: "var(--blue-primary)",
    },
    headingSubtitle: {
        fontWeight: "700",
        fontSize: "14px",
        lineHeight: "153.6%",
        color: "var(--white-color)",
        textDecoration: "none",
        "& img": {
            margin: "0px 10px",
        },
    },
    headingIcon: {
        marginRight: "10px",
    },
};