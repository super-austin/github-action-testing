// SVG images
import gamenautCardBg from "../../assets/svg/gameDetail/gamenaut-card-bg-small.svg";
import assetCardBgShape from "../../assets/img/drops/asset-card-bg-shape.png";
import userThumbBorder from "../../assets/svg/sidebar/sidebar-circle-bordered.svg";
import userThumbShadow from "../../assets/svg/sidebar/user-thumb-shadow.svg";

// Styles used in the component
export const styles = {
  customCardUi: {
    background: "var(--input-bg-dark)",
    backdropFilter: "blur(213px)",
    padding: "30px",
    border: "none",
    borderRadius: "10px",
    color: "var(--white-color)",
    boxShadow: "var(--input-box-shadow-light)",
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
  customCardInner: {
    padding: "30px",
  },
  customCardHeight100: {
    height: "calc(100% - 60px)",
  },
  cardPlain: {
    background: "transparent",
    backdropFilter: "none",
    boxShadow: "none",
    "&::before": {
      display: "none",
    },
  },
  cardBorder15: {
    borderRadius: "15px",
    "&::before": {
      borderRadius: "15px",
    },
  },

    // Game details Requirement card styles
    requirementCardWrapper: {
        position: "relative",
        "&:before": {
            content: `""`,
            position: "absolute",
            width: "225px",
            height: "154px",
            background: "var(--page-gradient-pink-1)",
            mixBlendMode: "lighten",
            opacity: "0.2",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
            bottom: 0,
            left: 0,
            zIndex: "-1",
        },
        "&:after": {
            content: `""`,
            position: "absolute",
            width: "225px",
            height: "154px",
            background: "var(--page-gradient-blue-1)",
            mixBlendMode: "lighten",
            opacity: "0.4",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
            bottom: 0,
            right: 0,
            zIndex: "-1",
        },
    },
    requirementCard: {
        padding: 0,
    },
    iconWrapper: {
        display: "flex",
        alignItems: "center",
        marginBottom: "35px",
    },
    iconRequire: {
        marginRight: "15px",
        width: "36px",
        height: "36px",
        borderRadius: "50px",
        backgroundColor: "var(--card-icon-bg-primary)",
        border: "1px solid var(--card-icon-border-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    requireText: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "14px",
        color: "var(--white-color)",
        opacity: "0.7",
        margin: 0,
        fontFamily: "var(--font-primary)",
    },
    requriementList: {
        "& li": {
            marginBottom: "25px",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "14px",
            color: "var(--white-color)",
            display: "block",
            padding: 0,
            height: "auto",
            opacity: 1,
            fontFamily: "var(--font-primary)",
            "& p": {
                display: "block",
            },
        },
    },
    featureTitle: {
        opacity: 0.7,
        margin: "0px 0px 8px",
    },

    // Game details Feature card styles
    featureCardWrapper: {
        position: "relative",
        paddingTop: "30px !important",
        "&:after": {
            content: `""`,
            position: "absolute",
            width: "225.95px",
            height: "154.46px",
            background: "var(--page-gradient-blue-1)",
            mixBlendMode: "lighten",
            opacity: "0.7",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
            top: 0,
            right: 0,
            zIndex: "-1",
        },
        "&:before": {
            content: `""`,
            position: "absolute",
            width: "225.95px",
            height: "154.46px",
            background: "var(--page-gradient-pink-1)",
            mixBlendMode: "lighten",
            opacity: "0.3",
            filter: "blur(106px)",
            transform: "matrix(0.78, 0.32, 0.96, -0.87, 0, 0)",
            bottom: 0,
            left: "30%",
        },
    },
    featureCardUi: {
        textAlign: "center",
        boxShadow: "var(--input-box-shadow-light)",
        backdropFilter: "blur(213px)",
        marginTop: "20px",
        padding: "40px 40px 50px",
        overflow: "visible",
    },
    featureCardIcon: {
        width: "50px",
        margin: "-60px auto 30px",
    },
    featureCardPurpleIc: {
        position: "relative",
        "&::after": {
            position: "absolute",
            content: `''`,
            width: "45px",
            height: "45px",
            bottom: "-10px",
            left: "2px",
            background: "var(--f-card-shadow-purple)",
            filter: "blur(16px)",
            zIndex: 0,
        },
    },
    featureCardGreenIc: {
        position: "relative",
        "&::after": {
            position: "absolute",
            content: `''`,
            width: "45px",
            height: "45px",
            bottom: "-10px",
            left: "2px",
            background: "var(--f-card-shadow-green)",
            filter: "blur(16px)",
            zIndex: 0,
        },
    },
    featureCardBlueIc: {
        position: "relative",
        "&::after": {
            position: "absolute",
            content: `''`,
            width: "45px",
            height: "45px",
            bottom: "-10px",
            left: "2px",
            background: "var(--f-card-shadow-blue)",
            filter: "blur(16px)",
            zIndex: 0,
        },
    },
    featureCardPinkIc: {
        position: "relative",
        "&::after": {
            position: "absolute",
            content: `''`,
            width: "45px",
            height: "45px",
            bottom: "-10px",
            left: "2px",
            background: "var(--f-card-shadow-pink)",
            filter: "blur(16px)",
            zIndex: 0,
        },
    },
    featureIcImg: {
        width: "50px",
        position: "relative",
        zIndex: 1,
    },
    featureCardTitle: {
        fontWeight: "700",
        fontSize: "25px",
        lineHeight: "31px",
        color: "var(--white-color)",
        marginBottom: "20px",
    },
    featureCardText: {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "25px",
        color: "var(--white-color)",
        opacity: "0.7",
        maxWidth: "80%",
        margin: "0 auto",
    },
  // Game details Requirement card styles
  // Game details Stats card design
  gameStatsWrapper: {
    position: "relative",
    "&:after": {
      content: `""`,
      position: "absolute",
      width: "291.63px",
      height: "138.3px",
      background: "var(--page-gradient-green-1)",
      mixBlendMode: "lighten",
      opacity: "0.3",
      filter: "blur(91px)",
      transform: "rotate(147.94deg)",
      top: "150px",
      right: "-10%",
    },
  },
  statsCardUi: {
    position: "relative",
    marginBottom: "13px",
    display: "flex",
    flexDirection: "row",
    minHeight: "150px",
    justifyContent: "space-between",
    borderRadius: "15px",
    padding: "0px",
    "&:before": {
      borderRadius: "15px",
    },
  },
  statsCardInner: {
    padding: "16px",
  },
  singleStatsCard: {
    display: "flex",
    alignItems: "stretch",
    "> div": {
      width: "100%",
      display: "block",
    },
  },
  statsCardIconTop: {
    position: "absolute",
    right: "10px",
    top: "10px",
    width: "25px",
  },
  statsCardTitle: {
    fontWeight: "400",
    fontFamily: "var(--font-primary)",
    fontSize: "14px",
    lineHeight: "14px",
    color: "var(--white-color)",
    opacity: "0.7",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsCardTitleSmall: {
    fontFamily: "var(--font-primary)",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "15px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    "&.purple": {
      color: "var(--purple-dark)",
    },
  },
  statsTextPink: {
    color: "var(--pink-primary)",
  },
  statsTextGreen: {
    color: "var(--green-primary)",
  },
  statsTextPurple: {
    color: "var(--purple-dark)",
  },
  statsTextBlue: {
    color: "var(--blue-primary)",
  },
  statsCardTitleBig: {
    fontWeight: "400",
    fontSize: "25px",
    lineHeight: "25px",
  },
  statsCardTitleBigger: {
    fontWeight: "400",
    fontSize: "35px",
    lineHeight: "35px",
  },
  statsCardFlexItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    marginTop: "30px",
    "& h4": {
      marginBottom: "0",
    },
  },
  statsCardRight: {
    marginLeft: "25px",
  },
  statsCardLeft: {
    width: "100%",
  },
  statsCardGraph: {
    "& img": {
      maxWidth: "100%",
      width: "100%",
    },
  },

  // Game Fi Bar and donut charts
  customDonutChart: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& ul": {
      position: "absolute",
      "& li": {
        display: "flex",
        alignItems: "center",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "25px",
        padding: "0",
        height: "auto",
        gap: "15px",
        "&:not(:last-child)": {
          marginBottom: "5px",
        },
        "& p": {
          display: "flex",
          alignItems: "center",
        },
        "& .circle": {
          marginRight: "10px",
          width: "6px",
          height: "6px",
          borderRadius: "50px",
          display: "inline-block",
          background: "var(--pink-primary)",
          boxShadow: "0px 0px 4px #FF7FE3",
          "&.blue": {
            background: "var(--purple-dark)",
            boxShadow: "0px 0px 4px #6568FF",
          },
          "&.cyan": {
            background: "var(--cyan-primary)",
            boxShadow: "0px 0px 4px #6568FF",
          },
        },
      },
    },
  },
  donutChartLightValue: {
    opacity: "0.7",
  },

  // Game details Gamenaut card styles
  announceCardGrid: {
    "& .slick-slide": {
      padding: "0px",
    },
    "& .slick-list": {
      margin: "0px -20px",
    },
    ".slick-slide>div": {
      padding: "0 20px",
    },
  },
  customGamenautCard: {
    padding: "0",
    position: "relative",
  },
  gamenautCardThumb: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "280px",
    maxHeight: "280px",
    objectFit: "cover",
    "& img": {
      width: "100%",
      minHeight: "113px",
      maxHeight: "calc(100% - 110px)",
      objectFit: "cover",
      "&.icon": {
        width: "50px",
        margin: "20px 0px 0px",
        objectFit: "contain",
      },
    },
  },
  gamenautCardBody: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: `url(${gamenautCardBg}) no-repeat`,
    backdropFilter: "blur(8.295px)",
    backgroundSize: "cover",
    minHeight: "100px",
    borderRadius: "9px",
    padding: "0 !important",
    "&:before": {
      content: `""`,
      position: "absolute",
      background: "linear-gradient(308.42deg, #3FC2EA 48.71%, #A9EBFF 112.5%)",
      boxShadow: "3px 0px 18px #3FC2EA",
      borderRadius: "26px 26px 0px 0px",
      width: "43%",
      height: "4px",
      top: 0,
      left: "5px",
    },
  },
  gamenautCardInner: {
    padding: "25px 20px 25px 15px",
  },
  gamenautCardText: {
    fontSize: "14px",
    lineHeight: "17px",
    opacity: "0.7",
  },
  gamenautCardTextIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
      width: "auto",
    },
  },
  gamenautCardDate: {
    marginBottom: "15px",
  },
  gamenautTitle: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "15px 0px 5px",
  },
  gamenautSubTitle: {
    lineHeight: "17px",
    opacity: "0.7",
    margin: 0,
  },

    // Game details Gamenaut card styles
    announceCardWrapper: {
        position: "relative",
        "&:before": {
            content: `""`,
            position: "absolute",
            width: "225px",
            height: "154px",
            background: "var(--page-gradient-green-1)",
            mixBlendMode: "lighten",
            opacity: "0.4",
            filter: "blur(106px)",
            transform: "matrix(-0.72, 0.41, 1.12, 0.74, 0, 0)",
            top: "-50px",
            left: "-100px",
            zIndex: "-1",
        },
    },
  // Game details Collectible card styles
  collectibleCardUi: {
    padding: "7px 9px",
    cursor: "pointer",
    borderRadius: "15px",
    "& img": {
      borderRadius: "15px",
    },
    "&:before": {
      borderRadius: "15px",
    },
  },
  collectibleCardInner: {
    position: "relative",
    "& > img": {
      width: "100%",
      height: "220px",
      objectFit: "cover",
    },
  },
  collectibleCardUiBox4: {
    "& > img": {
      width: "100%",
      minHeight: "320px",
      objectFit: "cover",
    },
  },
  collectibleCardStatus: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  collectibleCardCheckbox: {
    position: "absolute",
    bottom: "5px",
    right: "5px",
  },
  collectibleCardsWrapper: {
    maxHeight: "900px",
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

  // Game thumb cards
  gameThumbCard: {
    padding: "7px 9px",
    borderRadius: "15px",
    textAlign: "center",
    "&:before": {
      borderRadius: "15px",
    },
    "& img": {
      width: "100%",
      objectFit: "cover",
      borderRadius: "15px",
    },
  },
  gameThumbCardHeading: {
    marginBottom: "20px",
  },
  gameThumbTitle: {
    marginTop: "25px",
    fontWeight: "400",
  },

  // Game assets cards
  gameAssetsCardUi: {
    position: "relative",
    borderRadius: "10px",
    "& > img": {
      width: "100%",
      height: "100%",
      minHeight: "400px",
      objectFit: "cover",
      borderRadius: "10px",
    },
  },
  gameAssetsCardStatus: {
    position: "absolute",
    top: "22px",
    right: "22px",
  },
  gameAssetsModalDetailCard: {
    padding: "20px",
    borderRadius: "10px",
    background: "var(--black-dark-3)",
  },
  gameAssetsLabelFlex: {
    display: "flex",
    gap: "10px",
    fontSize: "14px",
    lineHeight: "21px",
  },
  gameAssetsModalLabel: {
    fontSize: "14px",
    lineHeight: "21px",
    marginBottom: "8px",
    opacity: "0.7",
  },
  gameAssetsLabelLight: {
    opacity: "0.7",
  },
  gameAssetsLabelFlexColumn: {
    flexDirection: "column",
  },
  gameAssetsModalScrollList: {
    maxHeight: "auto",
    overflowY: "auto",
    marginTop: "20px",
    "& ul": {
      display: "flex",
      gap: "15px",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      "& li": {
        display: "block",
        float: "left",
        border: "1px solid var(--card-icon-border-primary)",
        filter: "drop-shadow(0px 19px 68px #151517)",
        backdropFilter: "blur(213px)",
        borderRadius: "8px",
        padding: "10px 15px",
        paddingLeft: "15px !important",
        height: "50%",
        width: "calc(50% - 10px)",
      },
    },
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
  gameAssetsNFTList: {
    "& li": {
      display: "flex",
      gap: "16px",
      marginBottom: "8px",
      "& img": {
        width: "30px",
        height: "30px",
        borderRadius: "5px",
      },
    },
  },
  gameAssetsNFTListStats: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  gameAssetsNFTListStatsGreen: {
    color: "var(--green-primary)",
  },
  gameAssetsTabsText: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    opacity: "0.7",
  },
  gameAssetsTabList: {
    maxHeight: "250px",
    "& li": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 0px",
      borderBottom: "var(--tag-border)",
      height: "auto",
      "& p": {
        display: "inline-block",
        "&:first-of-type": {
          marginBottom: "10px",
        },
      },
    },
  },
  gameAssetsTabDataRight: {
    marginLeft: "auto",
    textAlign: "right",
  },  

  // Drops asset mint card styles
  assetMintCardBox: {
    position: "relative",
    minHeight: "500px",
    borderRadius: "10px",
    "@media screen and (min-width: 1600px)" : {
      minHeight: "600px",
    },
  },
  assetMintCardThmb: {
    // position: "absolute",
    // top: "0",
    "& img": {
      maxWidth: "100%",
      position: "relative",
      top: "0",
    },
  },
  assetMintStats: {
    position: "absolute",
    top: "16px",
    left: "16px",
  },
  assetMintLegend: {
    position: "absolute",
    top: "16px",
    right: "16px",
    padding: "10px 25px",
    fontWeight: 700,
    fontSize: "11px",
    lineHeight: "22px",
    background: "rgba(48, 48, 48, 0.5)",
    border: "1px solid #6568FF",
    boxShadow: "0px 2px 4px rgba(187, 142, 128, 0.21)",
    backdropFilter: "blur(2px)",
    borderRadius: "5px",
  },
  assetMintCard: {
    padding: "15px",
    background: `url(${assetCardBgShape}) no-repeat`,
    backgroundSize: "100%",
    position: "absolute",
    top: "auto",
    bottom: "0",
    width: "calc(100% - 30px)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    borderRadius: "10px",
    "&:before": {
      content: `""`,
      position: "absolute",
      background: "var(--purple-dark)",
      boxShadow: "3px 0px 18px #3FC2EA",
      borderRadius: "26px 26px 0px 0px",
      width: "43%",
      height: "4px",
      top: 0,
      left: "10px",
    },
  },
  assetMintTitle: {
    fontWeight: "700",
    fontSize: "25px",
    lineHeight: "32px",
  },
  assetMintCoinText: {
    fontSize: "16px",
    lineHeight: "25px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    "& span": {
      fontSize: "12px",
      lineHeight: "15px",
      opacity: "0.7",
    },
  },
  assetCardCountGroup: {
    gap: "10px",
    alignItems: "center",
    "& .MuiInputBase-root": {
      minWidth: "50px",
      minHeight: "auto",
      width: "auto",
      height: "auto",
      padding: "0",
      textAlign: "center",
      justifyContent: "center",
    },
    "& button": {
      width: "40px",
      height: "40px",
      minWidth: "auto !important",
      padding: "0",
      borderRadius: "50px",
      borderTopRightRadius: "50px !important",
      borderBottomRightRadius: "50px !important",
      borderTopLeftRadius: "50px !important",
      borderBottomLeftRadius: "50px !important",
      "&:before": {
        borderRadius: "50px",
      },
      "&:after": {
        borderRadius: "50px",
      },
    },
    "& input": {
      width: "40px",
      height: "40px",
      minWidth: "50px",
      padding: "0px 20px !important",
    },
  },
  progressLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  progressTextRight: {
      textAlign: "right",
  },
  progressText: {

  },
  assetProgressPlain: {
    marginBottom: "16px",
  },
  assetCardCounterRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  assetCardBodyBtn: {
    minWidth: "auto",
  },

  // Profile and settings card styles
  settingCard: {
    padding: "0px",
    height: "100%",
    position: "relative",
    "& button": {
      padding: "9px 30px",
    },
  },
  settingCardInner: {
    padding: "20px 30px",
  },
  settingCardAuto: {
    height: "auto",
  },
  cardNotificationList: {
    padding: "0",
    "& li": {
      height: "auto",
      display: "flex",
      alignItems: "flex-start",
      padding: "0",
      gap: "20px",
      paddingBottom: "16px",
    },
  },
  cardNotificationThumb: {
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--setting-icon-dark)",
    backdropFilter: "blur(7px)",
    borderRadius: "50px",
  },
  cardNotificationTitle: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "25px",
    marginBottom: "8px",
  },
  cardNotificationDetail: {
    fontWeight: 400,
    fontSize: "14px",
    opacity: "0.7",
  },
  cardNotificationActions: {
    marginLeft: "auto",
  },
  cardNotificationUserInfo: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    width: "100%",
  },
  cardFormLabel: {
    opacity: "0.7",
    width: "20%",
  },
  cardFormVerified: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "25px",
    color: "var(--green-primary)",
  },
  settingCardFormValue: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    "& .MuiInputBase-root": {
      border: "none",
      background: "transparent",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      background: "transparent",
    },
    "& .MuiInputBase-input": {
      border: "none",
      WebkitTextFillColor: "none !important",
      textAlign: "left",
      paddingLeft: "0",
    },
    "& .Mui-disabled": {
      WebkitTextFillColor: "var(--white-color) !important",
    },
  },
  settingCardFormValueDisabled: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    "& .MuiInputBase-root": {
      border: "none",
      background: "transparent",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
      background: "transparent",
      borderBottom: "0.74px solid var(--gray-light-2) !important",
      borderRadius: "0",
    },
    "& .MuiInputBase-input": {
      border: "none",
      WebkitTextFillColor: "none !important",
      textAlign: "left",
      paddingLeft: "0",
    },
    "& .Mui-disabled": {
      WebkitTextFillColor: "var(--white-color) !important",
    },
  },
  settingCardUserList: {
    "& li": {
      alignItems: "center",
    },
  },
  settingCardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "18px",
  },
  settingCardSubTitle: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "25px",
    marginBottom: "6px",
  },
  settingCardContent: {
    opacity: "0.7",
    lineHeight: "25px",
  },
  settingUserCard: {
    textAlign: "center",
    padding: "30px",
  },
  settingUserThumb: {
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
  settingUserBorder: {
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
  settingUserDownload: {
    position: "absolute",
    right: "16px",
    bottom: "16px",
    width: "auto !important",
    display: "inline-block !important",
  },
};