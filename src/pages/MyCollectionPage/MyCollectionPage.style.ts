// SVG icons
import clipNftBox from "../../assets/svg/nftBox.svg";
import btnNftUp from "../../assets/svg/nftBtnUp.svg";
import btnNftDown from "../../assets/svg/nftBtnDown.svg";
import btnNftMint from "../../assets/svg/nftBtnMint.svg";
import btnNftMintDisabled from "../../assets/svg/nftBtnMint-disabled.svg";

// Styles used in the component
export const styles = {
    notifyCaption: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "46px",
        fontSize: "16px",
        background: "#8D45FF",
        color: "white",
    },
    notifyDarkCaption: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "46px",
        fontSize: "16px",
        background: "#6b43cb",
        color: "white",
    },
    mainContainer: {
        fontFamily: "MonumentExtended",
        color: "white",
    },
    nftContainer: {
        display: "flex",
        background: `url(${clipNftBox}) no-repeat`,
        backgroundSize: "100% 100%",
        width: "602px",
        height: "426px",
    },
    nftWrapper: {
        display: "flex",
        padding: "13px 19px",
    },

    nftMedia: {
        backgroundSize: "cover",
        width: "308px",
        height: "401px",
        clipPath:
            'path("M0.716797 15.7429C0.716797 7.45866 7.43253 0.74292 15.7168 0.74292H77.7467H154.777L216.518 0.74292C220.073 0.74292 223.513 2.0058 226.224 4.30633L303.542 69.9243C306.9 72.7743 308.836 76.9563 308.836 81.3608V118.315V235.887V353.459V386.433C308.836 394.718 302.121 401.433 293.836 401.433H231.806H154.777H77.7467H59.8472C56.1451 401.433 52.5739 400.064 49.8205 397.59L5.69013 357.928C2.52471 355.083 0.716797 351.028 0.716797 346.772V235.887V118.315V15.7429Z")',
    },

    nftInfoBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "min-content",
        marginLeft: "24px",
        fontFamily: "MonumentExtended",
    },

    nftBadge: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "red",
        color: "white",
        fontSize: "12px",
        fontWeight: "400",
        width: "123px",
        height: "24px",
        borderRadius: "6px",
        marginTop: "15px",
    },

    nftName: {
        fontWeight: "800",
        fontSize: "35px",
        color: "black",
        marginTop: "7px",
    },

    nftPriceBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#33325E",
        borderRadius: "30px",
        width: "215px",
        height: "51px",
        marginRight: "-43px",
    },

    nftPriceNear: {
        marginTop: "8px",
        fontSize: "18px",
        fontWeight: "400",
        color: "white",
    },

    nftPriceUsd: {
        fontSize: "14px",
        fontWeight: 400,
        color: "#ffffff80",
    },

    nftSupplyBox: {
        marginTop: "19px",
    },

    nftProgressBar: {
        width: "215px",
        height: "9px",
        borderRadius: "30px",
        background: "#33325E",
    },

    nftProgressFill: {
        height: "100%",
        borderRadius: "inherit",
        background: "#8d45ff",
    },

    nftSupplyInfo: {},

    nftSupplyLabel: {
        fontSize: "10px",
        fontWeight: 400,
        color: "white",
    },

    nftSupplyCount: {
        fontSize: "14px",
        fontWeight: 400,
        color: "white",
    },

    nftQuantityBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "31px",
    },

    nftQuantityInfo: {
        fontSize: "20px",
        fontWeight: "800",
        color: "black",
        marginLeft: "5px",
    },

    nftQuantityButton: {},

    nftBtnUp: {
        background: `url(${btnNftUp}) no-repeat`,
        backgroundSize: "contain",
        width: "56px",
        height: "37px",
        border: "none",
        padding: "0px",
        marginLeft: "-10px",
    },

    nftBtnDown: {
        background: `url(${btnNftDown}) no-repeat`,
        backgroundSize: "contain",
        width: "49px",
        height: "37px",
        border: "none",
        padding: "0px",
    },
    
    nftMintBox: {
        display: "flex",
        marginTop: "15px",
    },

    nftBtnMint: {
        background: `url(${btnNftMint}) no-repeat`,
        backgroundSize: "contain",
        fontSize: "19px",
        fontWeight: 800,
        color: "white",
        width: "220px",
        height: "54px",
        border: "none",
        "&.Mui-disabled": {
            background: `url(${btnNftMintDisabled}) no-repeat`,
            color: "white",
        },
    },
};
