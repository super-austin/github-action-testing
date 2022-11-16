// SVG icons
import slickArrowLeft from "../../assets/svg/gameDetail/slide-prev-blue.svg";
import slickArrowRight from "../../assets/svg/gameDetail/slide-next-blue.svg";
import gameConverBg from "../../assets/svg/gameFi/convert-point-bg.svg";
import userThumbShadow from "../../assets/svg/sidebar/user-thumb-shadow.svg";
import userThumbBorder from "../../assets/svg/sidebar/sidebar-circle-bordered.svg";

// Styles used in the component
export const styles = {
    gameFiSliderWrapper: {
        ".slick-slide>div": {
            padding: "0 20px",
        },
        "& .slick-arrow": {
            background: `url(${slickArrowLeft}) no-repeat, var(--input-bg-dark)`,
            backgroundSize: "20px",
            backgroundPosition: "center",
            backdropFilter: "blur(213px)",
            color: "var(--white-color)",
            right: "-30px",
            top: "50%",
            width: "28px",
            height: "28px",
            borderRadius: "50px !important",
            padding: "0px !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 2,
            "&::before": {
                content: `""`,
                position: "absolute",
                inset: "0",
                padding: "1px",
                background: "var(--gradient-dark-border)",
                WebkitMask: 
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                MaskComposite: "exclude",
                zIndex: -1,
                opacity: 1,
                borderRadius: "50px !important",
                "@-moz-document url-prefix()": {
                    WebkitMaskComposite: "subtract",
                },
            },
            "&.slick-prev": {
                left: "-5px",
            },
            "&.slick-next": {
                background: `url(${slickArrowRight}) no-repeat, var(--input-bg-dark)`,
                backgroundSize: "20px",
                backgroundPosition: "center",
            },
        },
    },
    gameFiFilterRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "30px",
    },
    gameAssetsTabsUi: {
        position: "relative",
        "&:before": {
            position: "absolute",
            content: `""`,
            width: "250px",
            height: "180px",
            left: "0",
            bottom: "0",
            background: "var(--page-gradient-green-1)",
            mixBlendMode: "lighteṇ",
            opacity: "0.15",
            filter: "blur(75px)",
            transform: "rotate(42.93deg)",
        },
    },

    // Game convert card styles
    gameFiConvertCardWrapper: {
        background: `url(${gameConverBg}) no-repeat, var(--input-bg-dark)`,
        backgroundSize: "cover",
        minHeight: "180px",
        overflow: "visible",
    },
    gameFiConvertCardInner: {
        padding: "0px",
    },
    gameFiConvertCardUi: {
        position: "relative",
        "&:before": {
            content: `""`,
            position: "absolute",
            width: "115px",
            height: "114px",
            left: 0,
            top: "20%",
            background: "var(--gradient-primary)",
            mixBlendMode: "lighten",
            opacity: "0.5",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
        },
        "&:after": {
            content: `""`,
            position: "absolute",
            width: "115px",
            height: "114px",
            right: 0,
            top: 0,
            background: "var(--page-gradient-green-1)",
            mixBlendMode: "lighten",
            opacity: "0.5",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
        },
    },
    gameFiConvertData: {
        textAlign: "center",
        "& p": {
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "15px",
        },
        "& h2": {
            margin: "10px 0px 20px",
            fontWeight: "700",
            fontSize: "25px",
            lineHeight: "32px",
        },
        "button": {
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "18px",
            textDecoration: "underline",
        },
    },

    // GameFi game cards styles
    gameFiCardBox: {
        display: "flex !important",
        alignItems: "center",
        gap: "15px",
        padding: "8px",
        "@media screen and (max-width: 991px)" : {
            display: "block",
        },
        "& .slick-arrow": {
            background: "var(--input-bg-dark)",
            backdropFilter: "blur(213px)",
            color: "var(--white-color)",
            right: 0,
            left: "auto",
            top: "-50px",
            width: "28px",
            height: "28px",
            borderRadius: "50px !important",
            padding: "0px !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&::before": {
                content: `""`,
                position: "absolute",
                inset: "0",
                padding: "1px",
                background: "var(--gradient-dark-border)",
                WebkitMask: 
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                MaskComposite: "exclude",
                zIndex: -1,
                borderRadius: "50px !important",
                "@-moz-document url-prefix()": {
                    WebkitMaskComposite: "subtract",
                },
            },
            "&.slick-prev": {
                right: "35px",
            },
        },
    },
    gameFiCardTitle: {
        fontWeight: "500",
        fontSize: "14px",
    },
    gameFiCardActive: {
        "&::before": {
            background: "var(--page-gradient-green-1)",
        },
    },

    // GameFi points card styles
    gameFiPointCard: {
        padding: "0px !important",
        position: "relative",
        height: "100%",
        "& .purple-card": {
            "&::after": {
                background: "var(--purple-dark)",
            },
        },
        "& .blue-card": {
            "&::after": {
                background: "var(--gradient-primary)",
            },
        },
    },
    gameFiPointCardInner: {
        padding: "0px",
        minHeight: "240px",
    },
    gradientPink: {
        position: "relative",
        padding: "25px 15px",
        "&::after": {
            content: `""`,
            position: "absolute",
            left: "50px",
            bottom: "-50px",
            background: "var(--pink-primary)",
            mixBlendMode: "lighten",
            opacity: "0.3",
            filter: "blur(25px)",
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            width: "140px",
            height: "107.69px",
        },
    },
    gradientPurple: {
        position: "relative",
        padding: "25px 15px",
        "&::after": {
            content: `""`,
            position: "absolute",
            left: "50px",
            bottom: "-50px",
            background: "var(--purple-dark)",
            mixBlendMode: "lighten",
            opacity: "0.3",
            filter: "blur(25px)",
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            width: "140px",
            height: "107.69px",
        },
    },
    gradientBlue: {
        position: "relative",
        padding: "25px 15px",
        "&::after": {
            content: `""`,
            position: "absolute",
            left: "50px",
            bottom: "-50px",
            background: "var(--gradient-primary)",
            mixBlendMode: "lighten",
            opacity: "0.3",
            filter: "blur(25px)",
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            width: "140px",
            height: "107.69px",
        },
    },
    gameFiPointCardIcon: {
        "& img": {
            width: "25px",
        },
    },
    gameFiPintCardTitle: {
        margin: "25px 0px 35px",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "14px",
        maxWidth: "50%",
        opacity: "0.7",
    },
    gameFiPintCardCounts: {
        fontWeight: "400",
        fontSize: "25px",
        lineHeight: "25px",
    },
    gameFiConvertInputs: {
        display: "flex",
        gap: "8px",
        "& .MuiInputBase-root": {
            width: "auto",
        },
    },
    gameFiConvertButton: {
        width: "100%",
        marginTop: "15px",
    },
    gameFiConvertTooltip: {
        marginBottom: "20px",
        fontSize: "12px",
        lineHeight: "15px",
        color: "var(--purple-dark)",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        cursor: "pointer",
    },
    gameFiTooltipGroup: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "20px",
    },

    // Gamefi challenge card styles
    gameFiChallengeCard: {
        display: "flex",
        flexDirection: "column",
        gap: "30px",
    },
    challengeCardHeader: {
        display: "flex",
        gap: "20px",
    },
    challengeStars: {
        marginTop: "13px",
        display: "flex",
        gap: "5px",
    },
    cardIconPurple: {
        position: "relative",
        "&::after": {
            content: `""`,
            position: "absolute",
            width: "47px",
            height: "47px",
            left: "10px",
            bottom: "0",
            background: "var(--f-card-shadow-purple)",
            filter: "blur(16px)",
        },
        "& img": {
            zIndex: "1",
        },
    },
    cardIconGreen: {
        position: "relative",
        "&::after": {
            content: `""`,
            position: "absolute",
            width: "47px",
            height: "47px",
            left: "10px",
            bottom: "0",
            background: "var(--f-card-shadow-green)",
            filter: "blur(16px)",
        },
        "& img": {
            zIndex: "1",
        },
    },
    cardIconPink: {
        position: "relative",
        "&::after": {
            content: `""`,
            position: "absolute",
            width: "47px",
            height: "47px",
            left: "10px",
            bottom: "0",
            background: "var(--f-card-shadow-pink)",
            filter: "blur(16px)",
        },
        "& img": {
            zIndex: "1",
        },
    },
    challengeCardProgressHead: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    challengeProgressValue: {

    },
    challengeCardText: {
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "15px",
        opacity: "0.7",
        marginBottom: "12px",
    },
    challengeCardRewards: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    challengeCardRewardsBox: {
        padding: "5px",
        borderRadius: "5px",
    },
    challengeUpStats: {
        display: "flex",
        alignItems: "center",
        gap: "3px",
    },
    challengeCardActions: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
    },

    // Gamifi user badge card
    userBadgeCard: {
        display: "flex",
        alignItems: "center",
        gap: "40px",
        padding: "15px 20px",
    },
    userThumbBox: {
        // background: "var(--gradient-blue-border-1)",
        background: `url(${userThumbBorder}) no-repeat`,
        backgroundSize: "cover",
        borderRadius: "50px",
        padding: "7px",
        width: "70px",
        height: "70px",
        margin: "0 auto",
        "@media screen and (max-width: 991px)" : {
            width: "25px",
            height: "25px",
        },
    },
    userThumbBorderBox: {
        width: "100%",
        height: "100%",
        // backgroundColor: "var(--blue-dark)",
        borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "0px",
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
        },
    },
    userBadgeInfo: {
        display: "flex",
        alignItems: "center",
        gap: "15px",
    },
    userBadgeSkillList: {
        "& li": {
            padding: "10px 0px 0px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            height: "auto",
        },
    },
    userBadgeTitle: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
    },
    badgeGraphicsList: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        "& li": {
            height: "auto",
            flex: "33.33%",
            padding: "5px",
            justifyContent: "center",
        },
    },

    // Season pass slider
    seasonPassSlider: {
        textAlign: "center",
        "& .slick-slider": {
            marginTop: "65px",
            "& .slick-arrow": {
                top: "50%",
                left: "65px",
                "&.slick-next": {
                    left: "auto",
                    right: "65px",
                },
            },
            "& .slick-list": {
                margin: "0px -20px",
                overflow: "visible",
            },
            "& .slick-slide": {
                position: "relative",
                left: "175px",
                // transform: "matrix(1, -0.35, 0, 0.95, 0, 0)",
                "&.slick-current": {
                    transform: "none",
                    margin: "0 50px",
                },
                "&.slick-current > &.slick-slide": {
                    transform: "none",
                },
                "&.slick-active + &.slick-active": {
                    // transform: "matrix(1, 0.35, 0, 0.95, 0, 0)",
                },
                "& > div": {
                    padding: "0px 20px",
                },
                "& > div > div": {
                    padding: "0px 20px",
                    transition: "0.4s all ease-in",
                },
            },
            "& .slick-dots": {
                top: "-45px",
                zIndex: "-1",
            },
            "& .s-slide-left": {
                transform: "matrix(1, -0.35, 0, 0.95, 0, 0)",
                position: "relative",
                top: "40px",
            },
            "& .s-slide-right": {
                transform: "matrix(1, 0.35, 0, 0.95, 0, 0)",
                position: "relative",
                top: "40px",
            },
        },
    },
    seasonPassTitle: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
    },
    seasonSlideCard: {
        padding: "10px",
        borderRadius: "15px",
        "&:before": {
            borderRadius: "15px",
        },
        "& img": {
            width: "100%",
            maxWidth: "100%",
            borderRadius: "15px",
        },
    },
    seasonSlideTextBox: {
        textAlign: "center",
        maxWidth: "40%",
        margin: "0 auto",
        "@media screen and (max-width: 991px)": {
            maxWidth: "100%",
        },
    },
    seasonSlideTitle: {
        margin: "25px 0px 6px",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
    },
    seasonSlideContent: {
        fontSize: "12px",
        lineHeight: "18px",
        opacity: "0.7",
        maxWidth: "85%",
        margin: "0 auto",
        "& span": {
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "22px",
            color: "var(--green-primary)",
            display: "inline-block",
            marginLeft: "5px",
        },
    },

    // Gamifi faction table
    factionTableTitleLight: {
        fontSize: "14px",
        opacity: "0.7",
    },
    gameFiFactionTableWrapper: {
        position: "relative",
        "&:before": {
            position: "absolute",
            content: `""`,
            width: "115px",
            height: "114px",
            background: "var(--page-gradient-green-1)",
            mixBlendMode: "lighten",
            opacity: "0.5",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
            left: "45%",
            top: 0,
        },
        "&:after": {
            position: "absolute",
            content: `""`,
            width: "225px",
            height: "154px",
            background: "var(--page-gradient-green-1)",
            mixBlendMode: "lighten",
            opacity: "0.7",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
            left: 0,
            top: "50%",
            zIndex: "0",
        },
    },
    gameFiFactionTableCard: {
        position: "relative",
        zIndex: 1,
    },
    gameFiFactionTableCardParent: {
        position: "relative",
        "&:before": {
            position: "absolute",
            content: `""`,
            width: "225px",
            height: "154px",
            background: "var(--gradient-primary)",
            mixBlendMode: "lighten",
            opacity: "0.7",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
            right: "0",
            top: "50%",
        },
    },

    // Game assets transfer
    transferAssetsRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "50px 0px 35px",
        padding: "12px",
        "& ul": {
            display: "flex",
            padding: "0",
            "& li": {
                height: "auto",
                padding: "0",
                gap: "15px",
                marginRight: "35px",
                "& img": {
                    width: "55px",
                    height: "55px",
                    borderRadius: "5px",
                },
            },
        },
    },
    transferAssetsCheckbox: {
        "& .MuiBox-root": {
            "& .MuiFormControlLabel-root": {
                flexDirection: "row-reverse",
                marginLeft: "0px",
            },
        },
    },
    transferAssetsAction: {
        paddingLeft: "50px",
        borderLeft: "1px solid var(--black-dark-1)",
        "& button": {
            minWidth: "180px",
        },
    },
    transferAssetThumb: {
        "& img": {
            width: "150px",
            height: "150px",
            borderRadius: "5px",
            objectFit: "cover",
        },
    },
    transferAssetModalCard: {
        padding: "20px",
        borderRadius: "10px",
        background: "var(--black-dark-3)",
        position: "relative",
        "& ul": {
            padding: "0",
            "& li": {
                height: "auto",
                padding: "0",
                fontSize: "14px",
                lineHeight: "21px",
                display: "flex",
                gap: "50px",
                textAlign: "left",
                "&:not(:last-child)": {
                    marginBottom: "10px",
                },
            },
        },
    },
    transferAssetCheckbox: {
        position: "absolute",
        top: "20px",
        right: "20px",
        "& .MuiCheckbox-root": {
            padding: "0",
        },
    },
    transferLabelText: {
        opacity: "0.7",
        width: "30%",
    },
    transferModalListText: {        
        textAlign: "left",
        width: "70%",
    },
    transferModalForm: {
        display: "flex",
        gap: "16px",
        "& button": {
            minWidth: "200px",
        },
    },
    gameAssetsTabsPanel: {
        position: "relative",
    },
    gameAssetsPagination: {
        position: "absolute",
        right: "0",
        top: "-60px",
        "& .MuiTablePagination-selectLabel": {
            display: "none",
        },
        "& .MuiInputBase-root": {
            display: "none",
        },
        "& .MuiToolbar-root": {
            background: "transparent",
        },
    },
    gameStatsChartPlay: {
        position: "relative",
        "&:before": {
            content: `""`,
            position: "absolute",
            top: "0",
            left: "0",
            width: "225px",
            height: "154px",
            background: "var(--page-gradient-blue-1)",
            MixBlendMode: "lighten",
            opacity: "0.7",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
            zIndex: "-1",
        },
    },
};