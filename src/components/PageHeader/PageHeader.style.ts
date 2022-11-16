// Styles used in the component
export const styles = {
    headerTitle: {
        fontWeight: "700",
        fontSize: "35px",
        lineHeight: "45px",
        "@media screen and (max-width: 767px)" : {
            fontSize: "24px",
            lineHeight: "30px",
            display: "flex",
            alignItems: "center",
        },
        "& span": {
            background: "var(--gradient-primary)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        "& img": {
            marginLeft: "15px",
        },
    },
    headerSearch: {
        marginRight: "0px",
        "& .MuiInputBase-root": {
            "@media screen and (max-width: 767px)" : {
                width: "100%",
                height: "35px",
                minWidth: "auto",
                minHeight: "auto",
                padding: "10px",
            },
            "& input": {
                "&::placeholder": {
                    "@media screen and (max-width: 767px)" : {
                        color: "transparent",
                    },
                },
            },
        },
    },
    headerRightItems: {
        textAlign: "right",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "16px",
        "& button": {
            minWidth: "120px",
            padding: "12px 16px",
            "@media screen and (max-width: 767px)" : {
                display: "none",
            },
        },
    },
    notifyBtn: {
        minWidth: "auto !important",
    },
    headerNotifyBtn: {
        display: "grid",
        "& img": {
            position: "relative",
            "&::after": {
                content: `""`,
                position: "absolute",
                width: "8px",
                height: "8px",
                borderRadius: "50px",
                background: "#00D1FF",
                border: "1px solid #232223",
            },
        },
    },
    headerMobileBtn: {
        borderRadius: "10px",
        minWidth: "auto",
        width: "35px",
        height: "35px",
        padding: "5px",
        textAlign: "center",
    },
    headerMobileTitle: {
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "31px",
    },
    headerRightMobile: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },
}