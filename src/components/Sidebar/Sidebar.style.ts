// SVG icons
import userThumbShadow from "../../assets/svg/sidebar/user-thumb-shadow.svg";
import userThumbBorder from "../../assets/svg/sidebar/sidebar-circle-bordered.svg";

// Styles used in the component
export const styles = {
    sidebarWrapper: {
        background: "var(--black-light-gradient)",
        border: "1.5px solid",
        borderImageSource: "var(--gradient-dark-border)",
        borderRadius: "20px",
        position: "fixed",
        left: "15px",
        width: "240px",
        height: "calc(100vh - 30px)",
        display: "flex",
        flexDirection: "column",
        zIndex: "5",
        "@media screen and (max-width: 991px)" : {
            width: "70px",
        },
        "@media screen and (max-width: 767px)" : {
            width: "100%",
            height: "70px",
            bottom: "0",
        },
    },
    sidebarBody: {
        position: "relative",
        overflow: "hidden",
        height: "100%",
        borderRadius: "20px",
        "&::before": {
            content: `''`,
            position: "absolute",
            right: 0,
            top: 0,
            width: "370px",
            height: "170px",
            background: "var(--gradient-purple-shade-1)",
            mixBlendMode: "color-dodge",
            opacity: 0.7,
            filter: "blur(106px)",
            transform: "rotate(92.16deg)",
            zIndex: "-1",
        },
        "&::after": {
            content: `''`,
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "370px",
            height: "170px",
            background: "var(--gradient-blue-shade-1)",
            mixBlendMode: "color-dodge",
            opacity: 0.3,
            filter: "blur(106px)",
            transform: "rotate(121.47deg)",
            zIndex: "-1",
        },
        
    },
    sideLogoBox: {
        padding: "30px 0px 30px 20px",
        textAlign: "center",
        "& img": {
            maxWidth: "140px",
        },
        "& .primary-logo": {
            display: "block",
            "@media screen and (max-width: 991px)" : {
                display: "none",
            },
        },
        "& .small-logo": {
            display: "none",
            margin: "0 auto",
            "@media screen and (max-width: 991px)" : {
                display: "block",
            },
        },
    },
    userBox: {
        textAlign: "center",
        borderRadius: "8px",
        padding: "20px 35px",
        backgroundColor: "var(--blue-dark)",
        margin: "0px 20px",
        "@media screen and (max-width: 991px)" : {
            padding: "15px",
            margin: "0px 10px",
        },
    },
    userThumb: {
        // background: "var(--gradient-blue-border-1)",
        background: `url(${userThumbBorder}) no-repeat`,
        backgroundSize: "cover",
        borderRadius: "50px",
        padding: "10px",
        width: "69px",
        height: "69px",
        margin: "0 auto",
        "@media screen and (max-width: 991px)" : {
            width: "25px",
            height: "25px",
        },
    },
    userThumbBorder: {
        width: "100%",
        height: "100%",
        backgroundColor: "var(--blue-dark)",
        borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        "& img": {
            borderRadius: "50px",
            width: "65px",
            height: "65px",
            objectFit: "cover",
            zIndex: 1,
            "@media screen and (max-width: 991px)" : {
                width: "25px",
                height: "25px",
            },
        },
        "&::after": {
            content: `''`,
            position: "absolute",
            bottom: "-10px",
            left: "10px",
            width: "50px",
            height: "50px",
            background: `url(${userThumbShadow}), var(--gray-light-3)`,
            filter: "blur(7.5px)",
            borderRadius: "50px",
            "@media screen and (max-width: 991px)" : {
                width: "15px",
                height: "15px",
                left: "5px",
            },
        }
    },
    userName: {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "23px",
        color: "var(--white-color)",
        marginTop: "20px",
        fontFamily: "var(--font-primary)",
        "@media screen and (max-width: 991px)" : {
            display: "none",
        },
    },
    userId: {
        fontSize: "11px",
        lineHeight: "13px",
        color: "var(--gray-light-2)",
        margin: "10px 0px 0px",
        "@media screen and (max-width: 991px)" : {
            display: "none",
        },
    },
    sideNav: {
        marginTop: "50px",
        "& li, button": {
            padding: "12px 0px 12px 35px !important",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            lineHeight: "17px",
            color: "var(--menu-color-grey)",
            "& img": {
                marginRight: "15px",
                "&.active-icon": {
                    display: "none",
                },
            },
        },
        "& .active": {
            "&::before": {
                content: `''`,
                position: "absolute",
                width: "5px",
                height: "40px",
                background: "var(--gradient-blue-border)",
                borderRadius: "0px 26px 26px 0px",
                boxShadow: "var(--box-shadow-primary-big)",
                left: 0,
            },
            "& .active-icon": {
                display: "block",
            },
            "& .inactive-icon": {
                display: "none",
            },
        },
        "& button": {
            justifyContent: "flex-start",
            width: "100%",
        },
    },
    sideNavLink: {
        padding: "0px !important",
        position: "relative",
        "& a": {
            padding: "25px 0px 25px 35px !important",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            lineHeight: "17px",
            color: "var(--menu-color-grey)",
        },
        "& img": {
            marginRight: "15px",
        },
    },
    sideNavLinkActive: {
        "&::before": {
            content: `''`,
            position: "absolute",
            width: "5px",
            height: "40px",
            background: "var(--gradient-blue-border)",
            borderRadius: "0px 26px 26px 0px",
            boxShadow: "var(--box-shadow-primary-big)",
            left: 0,
        },
    },
    bottomNav: {
        marginTop: "auto",
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    bottomLoginBox: {
        padding: "15px",
        "& button": {
            justifyContent: "center !important",
            padding: "15px !important",
        },
    },
};