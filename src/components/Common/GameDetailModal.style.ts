// SVG icons
import videoPlayIcon from "../../assets/svg/gameDetail/video-circle.svg";

export const styles = {
    gamenautModalUi: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        maxHeight: "calc(90vh - 100px)",
        overflowY: "auto",
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
    gamenautVideoModalUi: {
        width: "800px !important",
        padding: "5px",
        "@media screen and (max-width: 767px)" : {
            width: "75% !important",
        },
        "&:after": {
            content: `''`,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "var(--video-blur-bg)",
            backdropFilter: "blur(10px)",
            opacity: "0.3",
            zIndex: "-1",
        },
        "& .react-player__play-icon": {
            background: `url(${videoPlayIcon}) no-repeat`,
            backgroundSize: "cover",
            border: "none",
        },
    },
    gamenautModalBigUi: {
        width: 900,
    },
    gamenautModalTitle: {
        marginBottom: "20px",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
    },
    gamenautModalHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& button": {
            position: "absolute",
            right: "15px",
            top: "15px",
            padding: "0",
            display: "block",
            minWidth: "auto",
        },
    },

    // Small stats modals styles
    customStatsModal: {
        width: 350,
        minHeight: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        position: "relative",
        overflowY: "hidden",
        "&:after": {
            content: `""`,
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "220px",
            height: "155px",
            background: "var(--gradient-primary)",
            mixBlendMode: "lighten",
            opacity: "0.2",
            filter: "blur(90px)",
            transform: "rotate(42.93deg)",
            zIndex: "-1",
        },
    },
    customStatsModalBox: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    customStatsModalTitle: {
        fontWeight: "700",
        fontSize: "25px",
        lineHeight: "32px",
    },
    customStatsModalInfo: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
    },
    statsModalButton: {
        marginTop: "80px",
        width: "100%",
        "& button": {
            width: "100%",
        },
    },
    statsModalIcon: {
        "& img": {
            width: "50px",
            height: "50px",
        },
    },
    statsModalBtnIcon: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "var(--white-color)",
    },
    statsModalDropData: {
        width: "85%",
        margin: "30px auto",
        "& ul": {
            "& li": {
                padding: "12px 22px !important",
                background: "var(--stats-modal-dark-bg)",
                borderRadius: "5px",
                gap: "15px",
                marginBottom: "10px",
            },
        },
    },
    statsDropListRight: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        width: "70%",
    },
    statsDropListLabel: {
        opacity: "0.7",
        width: "30%",
    },
    statsDropListTitle: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
    },
    statsDropName: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        "& img": {
            width: "36px",
            height: "36px",
            borderRadius: "5px",
        },
        "& p": {
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "25px",
        },
    },

    // Auth modals styles
    gameAuthModal: {
        width: 400,
        "& .MuiFormControl-root": {
            "&:not(:last-child)": {
                marginBottom: "30px",
            },
        },
        "& .MuiInputBase-root": {
            flexDirection: "row-reverse",
        },
        "& .MuiFormLabel-root": {
            color: "var(--black-dark-1)",
        },
    },
    gameAuthModalHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& button": {
            padding: "0",
            display: "block",
            minWidth: "auto",
        },
    },
    gameAuthModalTitle: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "16px",
    },
    gameAuthModalSubTitle: {
        color: "var(--black-dark-1)",
        marginTop: "15px",
    },
    gameAuthModalBody: {
        marginTop: "30px",
    },
    gameAuthModalFooter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: "30px",
    },
    gameAuthModalStepCard: {
        display: "flex",
        alignItems: "flex-start",
        padding: "16px",
        gap: "14px",
        "&:not(:last-child)": {
            marginBottom: "30px",
        },
    },
    gameAuthModalStepActive: {
        "&::before": {
            background: "var(--gradient-blue-border-1)",
        },
    },
    authStepCardTitle: {
        marginBottom: "8px",
    },
    authStepCardContent: {
        color: "var(--black-dark-1)",
    },
}