// SVG icons
import dropsBannerBg from "../../assets/img/drops/drops-banner-bg.png";

// Styles used in the component
export const styles = {
    dropNotificationBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
    },
    dropNotificationTimes: {
        display: "flex",
        alignItems: "center",
        gap: "16px", 
        "& p": {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            whiteSpace: "nowrap",
        },
    },
    dropNotificationLink: {
        display: "flex !important",
        alignItems: "center",
        gap: "14px", 
        fontSize: "14px",
        lineHeight: "14px",
        color: "var(--white-color)",
    },

    // Drop page banner
    dropsHeroBanner: {
        background: `url(${dropsBannerBg}) no-repeat`,
        backgroundSize: "cover",
        padding: "20px",
        minHeight: "450px",
    },
    dropsBannerSocial: {
        padding: "0",
        "& li": {
            display: "inline-block",
            paddingRight: "0",
            "& a": {
                display: "inline-block",
                width: "36px",
                height: "36px",
                borderRadius: "50px",
                border: "var(--social-icon-border)",
                background: "var(--social-icon-bg)",
                "& img": {
                    width: "100%",
                },
            },
            "&:not(:last-child)": {
                "& a": {
                    marginRight: "16px",
                },
            },
        },
    },
    dropsHeroLabel: {
        fontSize: "14px",
        lineHeight: "21px",
        color: "var(--white-color)",
        display: "flex",
        alignItems: "center",
        gap: "5px", 
        justifyContent: "flex-end",
    },
    verifiedLabel: {
        color: "#85FFA0",
    },
    dropLabelFlex: {
        display: "flex",
        alignItems: "center",
        gap: "10px", 
        justifyContent: "flex-end",
    },
    dropCategory: {
        fontWeight: "700",
        fontSize: "12px",
        lineHeight: "16px",
        textTransform: "uppercase",
        background: "var(--gradient-primary)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "var(--text-shadow-primary)",
        display: "flex",
        alignItems: "center",
        gap: "5px", 
        justifyContent: "center",
    },
    dropGameTitle: {
        fontFamily: "var(--font-primary)",
        fontWeight: "500",
        fontSize: "32px",
        lineHeight: "40px",
        color: "var(--white-color)",
        marginTop: "10px",
        "@media screen and (max-width: 991px)": {
            fontSize: "24px",
        },
    },
    dropBannerWrapper: {
        textAlign: "center",
    },
    dropBannerSubTitle: {
        fontSize: "14px",
        lineHeight: "20px",
        color: "var(--white-color)",
        margin: "20px auto",
    },
    dropBannerContent: {
        fontSize: "12px",
        lineHeight: "15px",
    },
    dropBannerActionsTag: {
        display: "flex",
        alignItems: "center",
        gap: "10px", 
        justifyContent: "center",
        marginBottom: "20px",
        marginTop: "16px",
    },

    // Drop page counter card
    dropsCountWrapper: {
        marginTop: "-50px",
        position: "relative",
        "&:after": {
            content: `""`,
            position: "absolute",
            right: 0,
            bottom: "-50px",
            height: "240px",
            width: "170px",
            background: "var(--page-gradient-blue-2)",
            MixBlendMode: "lighten",
            opacity: "0.35",
            filter: "blur(110px)",
            transform: "rotate(42.93deg)",
            zIndex: "-1",
        },
    },
    dropCountCard: {
        padding: "40px 50px",
        position: "relative",
        "&:after": {
            content: `""`,
            position: "absolute",
            left: "100px",
            bottom: "30px",
            height: "170px",
            width: "264px",
            background: "var(--page-gradient-blue-2)",
            MixBlendMode: "lighten",
            opacity: "0.35",
            filter: "blur(110px)",
            transform: "matrix(0.71, 0.28, -1.65, 0.75, 0, 0)",
            zIndex: "-1",
        },
    },
    dropCountLabel: {
        fontSize: "12px",
        opacity: "0.7",
        textTransform: "uppercase",
        marginBottom: "8px",
    },
    dropCountdownList: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px", 
    },
    dropCountContent: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    dropCountDownValue: {
        fontWeight: "700",
        fontSize: "25px",
        lineHeight: "32px",
    },
    dropCountDownLabel: {
        display: "flex",
        fontSize: "9px",
        lineHeight: "15px",
        textTransform: "uppercase",
    },
    dropStatesCard: {
        padding: "0px",
        position: "relative",
        overflow: "visible",
        height: "100%",
        "&:after": {
            content: `""`,
            position: "absolute",
            left: "0",
            bottom: "0",
            height: "4px",
            width: "100%",
            background: "var(--purple-dark)",
            boxShadow: "var(--line-box-shadow-purple)",
            borderRadius: "0px",
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
        },
    },
    dropStatesPostCard: {
        "&:after": {
            display: "none",
        },
    },
    dropStatesCardInner: {
        padding: "18px 20px",
    },
    dropCountdownCard: {
        padding: "0",
        textAlign: "center",
    },
    dropStatesLabelGroup: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    dropStatesLabel: {
        opacity: "0.7",
    },
    dropStatesLabelDark: {
        opacity: "1",
    },
    dropStatesLabelBold: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
    },
    dropStatesHeader: {
        marginBottom: "12px",
    },
    dropCountEventDate: {
        fontSize: "12px",
        lineHeight: "15px",
        marginTop: "8px",
    },
    dropCountEventEnd: {
        fontSize: "14px",
        lineHeight: "25px",
        marginTop: "24px",
        position: "relative",
        paddingLeft: "20px",
        "&::before": {
            content: `''`,
            position: "absolute",
            width: "4px",
            height: "40px",
            background: "var(--purple-dark)",
            borderRadius: "0px 26px 26px 0px",
            boxShadow: "var(--line-box-shadow-purple)",
            left: 0,
            top: "5px",
        },
        "& span": {
            display: "block",
        },
    },
    earnWhitelistRow: {
        display: "flex",
        alignItems: "center",
        gap: "24px",
        marginTop: "36px",
        "& button": {
            width: "25%",
            borderRadius: "6px",
            padding: "13px",
            "&::after": {
                borderRadius: "6px",
            },
            "&::before": {
                borderRadius: "6px",
            },
        },
    },
    earnWhitelistLabel: {
        padding: "13px",
        width: "100%",
        display: "inline-flex",
        justifyContent: "center",
        "& a": {
            width: "auto",
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginLeft: "5px",
            fontWeight: "bold",
            textDecoration: "underline",
        },
    },
    dropStatesPostValue: {
        marginTop: "20px",
    },
    dropPostText: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
    },

    // Drop page asset mint
};