// SVG icons
import convertGameLoader from "../../assets/svg/gameFi/modals-icon/convert-loading.svg";
import convertGameTransaction from "../../assets/svg/gameFi/modals-icon/transaction-loading.svg";
import switchThumbOff from "../../assets/svg/profile/ic-switch-off.svg";
import switchThumbOn from "../../assets/svg/profile/ic-switch-on.svg";

export const styles = {
    customSectionSpacing: {
        padding: "50px 0px",
    },

    // Utilities styles
    padding0: {
        padding: "0px",
    },
    paddingTop60: {
        paddingTop: "60px",
    },
    paddingTop30: {
        paddingTop: "30px",
    },
    paddingTop20: {
        paddingTop: "20px",
    },
    paddingTop0: {
        paddingTop: "0px",
    },
    margin0: {
        margin: "0px",
    },
    marginTop60: {
        marginTop: "60px",
    },
    marginTop30: {
        marginTop: "30px",
    },
    marginTop20: {
        marginTop: "20px",
    },
    marginTop0: {
        marginTop: "0px",
    },
    marginBottom0: {
        marginBottom: "0px",
    },
    marginBottom40: {
        marginBottom: "40px",
    },
    marginBottom30: {
        marginBottom: "30px",
    },
    marginBottom36: {
        marginBottom: "36px",
    },
    marginBottom20: {
        marginBottom: "20px",
    },
    marginLeftAuto: {
        marginLeft: "auto",
    },
    marginRightAuto: {
        marginRight: "auto",
    },
    textAlignLeft: {
        textAlign: "left",
    },
    textAlignRight: {
        textAlign: "right",
    },
    dBlock: {
        display: "block",
    },
    height100: {
        height: "100%",  
    },
    width100: {
        width: "100%",
    },

    // Buttons styles
    btnPrimary: {
        background: "var(--gradient-primary) !important",
        boxShadow: "var(--box-shadow-primary)",
        borderRadius: "6px",
        padding: "10px 20px",
        color: "var(--black-dark-gradient)",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "153.6%",
        minHeight: "44px",
        minWidth: "150px",
        "&:hover": {
            background: "var(--btn-primary-hover) !important",
        },
        "& .MuiButton-textPrimary": {
            "&:hover, &:focus": {
                color: "var(--black-dark-gradient) !important",
                background: "var(--btn-primary-hover) !important",
            },
        }, 
    },
    btnTextPrimary: {
        background: "var(--black-dark-gradient)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "500",
    },
    btnSecondary: {
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "6px",
        position: "relative",
        padding: "13px 25px",
        minWidth: "150px",
        background: "var(--gradient-secondary)",
        backdropFilter: "blur(213px)",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "25px",
        "&::after": {
            content: `''`,
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            padding: "1.5px",
            borderRadius: "6px",
            background: "transparent",
            mask: "var(--mask-gradient-primary)",
            webkitMask: "var(--mask-gradient-primary)",
            maskComposite: "destination-out",
            webkitMaskComposite: "destination-out",
            zIndex: -1,
            "@-moz-document url-prefix()": {
                WebkitMaskComposite: "subtract",
            },
        },
        "&::before": {
            content: `""`,
            position: "absolute",
            inset: "0",
            borderRadius: "6px",
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
        "& .MuiButton-textSecondary": {
            background: "var(--gradient-secondary) !important",
            border: "none",
            padding: "10px 20px",
            color: "var(--green-primary)",
            position: "relative",
        },
        "&:hover, &:focus": {
            color: "var(--black-dark-gradient) !important",
            border: "var(--gradient-primary)",
            position: "relative",
            "&::after": {
                background: "var(--gradient-primary)",
            },
        },
        "& .btn-icon": {
            marginLeft: "10px",
            "&.right": {
                transform: "rotate(270deg)",
            },
            "&.left-icon": {
                marginRight: "10px",
                marginLeft: "0",
            },
        },
    },
    btnTextSecondary: {
        background: "var(--gradient-primary)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "bold",
    },
    btnSecondaryRounded: {
        borderRadius: "50px",
        border: "none",
        borderTopLeftRadius: "50px",
        borderBottomLeftRadius: "50px",
        "&:hover, &:focus": {
            border: "none",
            "&::after": {
                background: "none",
            },
        },
        "&::after": {
            borderRadius: "50px",
        },
        "&::before": {
            borderRadius: "50px",
        },
    },
    btnTextSecondaryWhite: {
        color: "var(--btn-white-text)",
    },
    btnLink: {
        padding: 0,
        margin: 0,
        background: "var(--gradient-primary)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "500",
        fontSize: "16px",
    },
    btnLinkUnderline: {
        textDecoration: "underline !important",
        display: "inline-block !important",
    },
    btnPrimaryLink: {
        border: "none",
        borderRadius: "0px",
        padding: "0px 25px",
        background: "var(--gradient-primary)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "153.6%",
        "&:hover, &:focus": {
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        "& .btn-icon": {
            marginLeft: "10px",
            "&.right": {
                transform: "rotate(270deg)",
            },
            "&.left-icon": {
                marginRight: "10px",
                marginLeft: "0",
            },
        },
    },
    btnDisabled: {
        "&:hover, &:focus": {
            border: "none",
            "&::after": {
                background: "none",
            },
        },
    },
    btnTextDisabled: {
        opacity: "0.7",
        color: "#6B6B6B",
        "&:hover, &:focus": {
            border: "none",
            "&::after": {
                background: "none",
            },
        },
    },
    btnFlex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    // Headings styles
    headingTextH1: {
        fontWeight: "500",
        fontSize: "35px",
        lineHeight: "31px",
    },
    headingTextH2: {
        fontWeight: "500",
        fontSize: "25px",
        lineHeight: "32px",
    },
    headingTextH3: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
    },
    headingTextH4: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "22px",
    },
    headingTextH5: {
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "17px",
    },

    customDarkBox: {
        background: "var(--input-bg-dark)",
        backdropFilter: "blur(213px)",
        border: "none",
        borderRadius: "10px",
        color: "var(--white-color)",
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
    },

    // Dashboard wrapper styles
    dashboardWrapper: {
        background: "var(--body-bg-dark)",
        minHeight: "100vh",
        padding: "15px",
        position: "relative",
        color: "var(--white-color)",
        fontFamily: "var(--font-primary)",
    },
    mainWrapper: {
        width: "calc(100% - 270px)",
        marginLeft: "255px",
        padding: "15px",
        position: "relative",
        zIndex: "1",
        "&:before": {
            position: "absolute",
            content: `""`,
            width: "373px",
            height: "263px",
            left: "0px",
            top: "-71px",
            background: "var(--gradient-primary)",
            mixBlendMode: "lighten",
            opacity: "0.2",
            filter: "blur(106px)",
            transform: "rotate(42.93deg)",
            zIndex: "-1",
        },
        "@media screen and (max-width: 991px)" : {
            width: "calc(100% - 85px)",
            marginLeft: "70px",
        },
        "@media screen and (max-width: 767px)" : {
            width: "100%",
            marginLeft: "0px",
            overflowX: "hidden",
        },
    },
    mainWrapperPadding: {
        width: "calc(100% - 255px - 100px)",
    },

    // Custom tab design
    gameTabsWrapper: {
        marginTop: "60px",
        paddingRight: "100px",
        "@media screen and (max-width: 1366px)" : {
            paddingRight: "50px",
        },
        // overflowX: "hidden",
    },
    gameTabsTop0: {
        marginTop: 0,
    },
    primaryTabsUi: {
        border: "none",
        overflow: "visible !important",
        marginBottom: "60px",
        "> *": {
            overflow: "visible !important",
        },
        "& .MuiTabs-indicator": {
            position: "absolute",
            bottom: "-8px",
            left: 0,
            background: "var(--gradient-green-tabs)",
            boxShadow: "0px -5px 18px rgba(81, 233, 124, 0.8)",
            borderRadius: "26px 26px 0px 0px",
            width: "100%",
            height: "4px",
        },
    },
    primaryTabsItem: {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "22px",
        color: "var(--white-color)",
        opacity: "0.7",
        background: "transparent",
        border: "none",
        position: "relative",
        overflow: "visible",
        "&:not(:last-child)": {
            marginRight: "40px",
        },
        "&.Mui-selected": {
            color: "var(--green-primary)",
        },
    },

    //Custom slide controls styles
    customSlideControls: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "6px",
        marginTop: "20px",
    },
    galleryControls: {
        position: "absolute",
        top: "-12px",
        right: "0",
        zIndex: "9",
        pointerEvents: "none",
    },
    galleryControlsSlide: {
        position: "relative",
    },
    customControlButton: {
        width: "28px",
        height: "28px",
        minWidth: "auto",
        borderRadius: "50px !important",
        padding: "0px !important",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        background: "var(--input-bg-dark)",
        backdropFilter: "blur(213px)",
        color: "var(--white-color)",
        position: "relative",
        "&::before": {
            borderRadius: "50px !important",
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
            "@-moz-document url-prefix()": {
                WebkitMaskComposite: "subtract",
            },
        },
    },
    customControlText: {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
        opacity: "0.7",
    },

    // Custom search bar styles
    customSearchFormUi: {
        "& .MuiInput-root": {
            minWidth: "370px",
            minHeight: "48px",
            background: "var(--searchbar-bg-dark)",
            borderRadius: "6px",
            padding: "15px 20px",
            border: "none",
        },
    },

    // Custom countdown timer
    customCountdownStatus: {
        padding: "10px 30px",
        borderRadius: "5px",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
        display: "inline-block",
        textAlign: "center",
        background: "var(--gradient-secondary)",
        color: "var(--green-primary)",
        minWidth: "170px",
        position: "relative",
        "&:after": {
            content: `""`,
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "100%",
            height: "3px",
            background: "var(--gradient-green-border)",
            boxShadow: "var(--line-box-shadow-green)",
            borderRadius: "0px 26px 26px 0px",
        },
    },
    customCountdownBlue: {

    },
    customCountdownPink: {

    },
    customCountdownPurple: {

    },

    // Custom dropdown styles
    gamenautCustomDropdown: {
        top: "20px",
        "& .MuiPaper-root": {
            background: "transparent",
            border: "none",
        },
        "& ul": {
            background: "var(--input-bg-dark)",
            backdropFilter: "blur(213px)",
            padding: "0px",
            border: "none",
            borderRadius: "10px",
            color: "var(--white-color)",
            position: "relative",
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
            "& li": {
                padding: "20px !important",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                "& img": {
                    color: "#111",
                }, 
            },
        },
    },
    dropdownItemActive: {
        position: "relative",
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

    // Custom form styles
    customFormUi: {
        "& label": {
            color: "var(--gray-light-1)",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "18px",
            fontFamily: "var(--font-primary)",
            marginBottom: "10px",
            cursor: "auto",
        },
        "& .MuiFormControl-root": {
            width: "100%",
        },
        "& .MuiInputBase-root": {
            backgroundColor: "var(--input-bg-dark)",
            boxShadow: "var(--input-box-shadow-light)",
            borderRadius: "10px",
            padding: "12px 20px",
            fontSize: "14px",
            color: "var(--white-color)",
            position: "relative",
            border: "none",
            width: "100%",
            height: "3rem",
            "&::before": {
                content: `""`,
                position: "absolute",
                inset: "0",
                borderRadius: "10px",
                borderBottom: "none",
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
                display: "none",
            },
            "&:hover": {
                "&::before": {
                    border: "none",
                },
            },
            "& input": {
                border: "none",
                padding: 0,
            },
        },
    },
    customFormError: {
        fontSize: "12px",
        lineHeight: "16px",
        color: "#F47D7D",
    },

    // Custom checkbox styles
    cardCheckboxUi: {
        "& path": {
            fill: "var(--blue-primary)",
        },
    },
    cardCheckboxUiGreen: {
        "& .MuiCheckbox-root": {
            width: "20px",
            height: "20px",
            borderRadius: "5px",
            background: "var(--input-bg-dark)",
            backdropFilter: "blur(213px)",
            position: "relative",
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
        },
        "& path": {
            fill: "var(--green-primary)",
        },
    },

    // Custom filter styles
    customFilterModal: {
        zIndex: "1",
    },
    customFilterBoxUi: {
        minWidth: "280px",
        zIndex: "9",
    },
    customFilterHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "50px",
    },
    filterTitle: {
        fontWeight: "700",
        fontSize: "25px",
        lineHeight: "32px",
    },
    customFilterTitle: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "25px",
        marginBottom: "16px",
    },
    customFilterSubTitle: {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "21px",
        color: "var(--black-dark-1)",
    },
    customFilterList: {
        marginBottom: "35px",
    },

    // Custom progress bars
    customProgressUi: {
        background: "var(--progress-purple-bg)",
        boxShadow: "var(--progress-purple-shadow)",
        borderRadius: "50px",
        height: "5px",
        "& .MuiLinearProgress-barColorPrimary": {
            background: "var(--progress-purple-line)",
        },
    },
    progressGreenUi: {
        background: "var(--progress-green-bg)",
        boxShadow: "var(--progress-green-shadow)",
        borderRadius: "50px",
        height: "5px",
        "& .MuiLinearProgress-barColorPrimary": {
            background: "var(--progress-green-line)",
        },
    },
    progressPinkUi: {
        background: "var(--progress-pink-bg)",
        boxShadow: "var(--progress-pink-shadow)",
        borderRadius: "50px",
        height: "5px",
        "& .MuiLinearProgress-barColorPrimary": {
            background: "var(--progress-pink-line)",
        },
    },
    progressBlueUi: {
        background: "var(--progress-blue-bg)",
        boxShadow: "var(--progress-blue-shadow)",
        borderRadius: "50px",
        height: "5px",
        "& .MuiLinearProgress-barColorPrimary": {
            background: "var(--progress-blue-line)",
        },
    },
    progressPlainUi: {
        background: "rgba(255, 255, 255, 0.5)",
        boxShadow: "none",
        borderRadius: "50px",
        height: "2px",
        "& .MuiLinearProgress-barColorPrimary": {
            background: "rgba(255, 255, 255, 0.5)",
        },
    },

    // Custom charts styles
    apexChartUi: {
    },

    // Custom loader styles
    customModalLoader: {
        width: "70px !important",
        height: "70px !important",
        marginBottom: "20px",
        background: `url(${convertGameLoader}) no-repeat`,
        backgroundSize: "cover",
        "& svg": {
            opacity: "0",
        },
    },
    customModalTransaction: {
        background: `url(${convertGameTransaction}) no-repeat`,
    },

    // Custom switch styles
    customSwitcher: {
        background: "var(--setting-icon-dark)",
        backdropFilter: "blur(7px)",
        borderRadius: "10px",
        padding: "8px 25px",
        margin: 0,
        display: "flex",
        flexDirection: "row-reverse",
        "& .MuiTypography-root": {
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "18px",
        },
        "& .MuiSwitch-thumb": {
            background: `url(${switchThumbOff}) no-repeat`,
        },
        "& .MuiSwitch-track": {
            backgroundColor: "var(--switch-off-bg)",
            opacity: "1",
        },
        "& .Mui-checked": {
            "& .MuiSwitch-thumb": {
                background: `url(${switchThumbOn}) no-repeat`,
            },
            "& + .MuiSwitch-track": {
                backgroundColor: "var(--switch-on-bg) !important",
            },
        },
    },
    customSwitcherPlain: {
        background: "none",
        padding: "0",
    },

    // Custom radio styles
    customRadioBtn: {
        margin: "0",
        "& .MuiRadio-root": {
            padding: "4px",
        },
        "& .MuiSvgIcon-root": {
            width: "24px",
            height: "24px",
            background: "var(--radio-bg)",
            color: "transparent !important",
            borderRadius: "50px",
        },
        "& .Mui-checked": {
            "& .MuiSvgIcon-root": {
                color: "transparent !important",
                "& path": {
                    fill: "var(--blue-primary)",
                },
            },
        },
    },
};