// SVG icons
import icMinimum from "../../assets/svg/gameDetail/ic-minimum.svg";
import icRecommended from "../../assets/svg/gameDetail/ic-recommended.svg";

// SVG icons feature section
import icFeature1 from "../../assets/svg/gameDetail/ic-feature_1.svg";
import icFeature2 from "../../assets/svg/gameDetail/ic-feature_2.svg";
import icFeature3 from "../../assets/svg/gameDetail/ic-feature_3.svg";
import icFeature4 from "../../assets/svg/gameDetail/ic-feature_4.svg";
import statsServer from "../../assets/svg/gameDetail/stats-ic-server.svg";
import statsRewards from "../../assets/svg/gameDetail/stats-ic-rewards.svg";
import statsPlayers from "../../assets/svg/gameDetail/stats-ic-players.svg";
import statsLivePlayers from "../../assets/svg/gameDetail/stats-ic-live-players.svg";
import statsDownload from "../../assets/svg/gameDetail/stats-ic-download.svg";
import statsRewardGiven from "../../assets/svg/gameDetail/stats-ic-reward-given.svg";
import cardGraphPink from "../../assets/svg/gameDetail/graph-pink.svg";
import cardGraphGreen from "../../assets/svg/gameDetail/graph-green.svg";
import cardGraphBlue from "../../assets/svg/gameDetail/graph-blue.svg";
import cardGraphBlank from "../../assets/svg/gameDetail/graph-blank.svg";
import ethereiumIcon from "../../assets/svg/gameDetail/etherium-icon.svg";
import statsIconBlank from "../../assets/svg/gameDetail/stats-icon-blank.svg";
import player1 from "../../assets/svg/gameDetail/user-1.svg";
import player2 from "../../assets/svg/gameDetail/user-2.svg";
import player3 from "../../assets/svg/gameDetail/user-3.svg";

// SVG icons social community section
import iconDiscord from "../../assets/svg/gameDetail/social/Icon_Discord.png";
import iconInstagram from "../../assets/svg/gameDetail/social/Icon_Instagram.png";
import iconTwitter from "../../assets/svg/gameDetail/social/Icon_Twitter.png";
import iconYoutube from "../../assets/svg/gameDetail/social/Icon_Youtube.png";
import iconTwitch from "../../assets/svg/gameDetail/social/Icon_Twitch.png";

// SVG icons gallery section
import galleryItem1 from "../../assets/img/game-detail/gallery/gallery-1.png";
import galleryItem2 from "../../assets/img/game-detail/gallery/gallery-2.png";
import galleryItem3 from "../../assets/img/game-detail/gallery/gallery-3.png";
import galleryItem4 from "../../assets/img/game-detail/gallery/gallery-4.png";
import galleryItem5 from "../../assets/img/game-detail/gallery/gallery-5.png";

// SVG icons news section
import icView from "../../assets/svg/gameDetail/news/ic-eye.svg";
import icTime from "../../assets/svg/gameDetail/news/ic-time.svg";

// SVG icons event section
import eventThumb1 from "../../assets/img/game-detail/news/event-1.png";
import eventThumb2 from "../../assets/img/game-detail/news/event-2.png";
import eventThumb3 from "../../assets/img/game-detail/news/event-3.png";
import eventThumb4 from "../../assets/img/game-detail/news/event-4.png";
import eventThumb5 from "../../assets/img/game-detail/news/event-5.png";
import multiUsers from "../../assets/svg/gameDetail/news/multi-users.svg";
import teamAstralis from "../../assets/svg/gameDetail/news/team-astralis.svg";
import teamNavi from "../../assets/svg/gameDetail/news/team-navi.svg";
import gameDefaultIc from "../../assets/svg/gameDetail/news/game-thumb-default.svg";
import gameCardCover1 from "../../assets/svg/gameDetail/news/game-card-cover-1.svg";
import icRedirect from "../../assets/svg/gameDetail/ic-redirect.svg";

// SVG icons collectible tab
import collectible1 from "../../assets/img/game-detail/collectibles/collectible-1.png";
import collectible2 from "../../assets/img/game-detail/collectibles/collectible-2.png";
import collectible3 from "../../assets//img/game-detail/collectibles/collectible-3.png";
import collectible4 from "../../assets//img/game-detail/collectibles/collectible-4.png";
import collectible5 from "../../assets//img/game-detail/collectibles/collectible-5.png";
import collectible6 from "../../assets//img/game-detail/collectibles/collectible-6.png";
import collectible7 from "../../assets//img/game-detail/collectibles/collectible-7.png";
import collectible8 from "../../assets//img/game-detail/collectibles/collectible-8.png";
import collectible9 from "../../assets//img/game-detail/collectibles/collectible-9.png";
import collectible10 from "../../assets//img/game-detail/collectibles/collectible-10.png";
import collectible11 from "../../assets//img/game-detail/collectibles/collectible-11.png";
import collectible12 from "../../assets//img/game-detail/collectibles/collectible-12.png";
import collectIconDiscord from "../../assets/svg/gameDetail/collectibles/Icon_Discord.svg";

// SVG icons for gamefi rules
import gamefiDetailThumb1 from "../../assets/img/game-detail/gamefi-detail-2.png";
import gamefiDetailThumb2 from "../../assets/img/game-detail/gamefi-detail-3.png";

// SVG icons for Game cover
import gameThumb from "../../assets/svg/gameDetail/game-thumb.svg";

// SVG icons for Game play
import gameDescPic from "../../assets/img/game-detail/game-description-cover.png";

// Game cover info data
export const gameCoverInfo = [
  {
    thumb: gameThumb,
    tagline: "Tagline",
    gameTitle: "Legends of Aria",
    gameTags: [
      {
        tag: "Tag",
      },
      {
        tag: "Tag",
      },
      {
        tag: "Tag",
      },
    ],
    gameBy: "Reaper Games",
    gameDetail:
      "WidiLand is a P2E blockchain game that has a “new earth” style. Cook, breed, farm and cultivate to complete your daily quests. Will you be a hard-working citizen?",
  },
];

// Game details hardware requirement
export default [
  {
    id: "minimum",
    type: "Minimum",
    icon: icMinimum,
    features: [
      {
        featureType: "OS",
        featureName: "Windows 10 (64 bit)",
      },
      {
        featureType: "Processor",
        featureName:
          "Intel Core i5-2300 @ 2.8 GHz or Ryzen 3 1200 @ 3.1GHz or AMD FX-8350 @ 4.2GHz",
      },
      {
        featureType: "Memory",
        featureName: "8GB RAM",
      },
      {
        featureType: "Graphics",
        featureName:
          "Nvidia GeForce GTX 780 or AMD HD 7950 (Support of Vulkan 1.1 required)",
      },
      {
        featureType: "Video RAM",
        featureName: "8GB RAM",
      },
      {
        featureType: "Storage",
        featureName: "55GB",
      },
    ],
  },
  {
    id: "recommended",
    type: "Recommended",
    icon: icRecommended,
    features: [
      {
        featureType: "OS",
        featureName: "Windows 10 (64 bit)",
      },
      {
        featureType: "Processor",
        featureName: "i5-6600 @ 3.3 GHz or Ryzen 3 1300 X @ 3.4 GHz",
      },
      {
        featureType: "Memory",
        featureName: "Windows 10 (64 bit)",
      },
      {
        featureType: "Graphics",
        featureName:
          "Nvidia GeForce GTX 1060 or AMD Radeon RX 580 (Support of Vulkan 1.1 required)",
      },
      {
        featureType: "Video RAM",
        featureName: "12GB RAM",
      },
      {
        featureType: "Storage",
        featureName: "55GB",
      },
    ],
  },
];

// Game details features
export const featureCards = [
  {
    id: 1,
    icon: icFeature1,
    iconClass: "featureCardPurpleIc",
    alt: "feature",
    title: "Feature",
    text: "A full-loot play-and-earn sandbox MMORPG.",
  },
  {
    id: 2,
    icon: icFeature2,
    iconClass: "featureCardGreenIc",
    alt: "feature",
    title: "Feature",
    text: "A full-loot play-and-earn sandbox MMORPG.",
  },
  {
    id: 3,
    icon: icFeature3,
    iconClass: "featureCardBlueIc",
    alt: "feature",
    title: "Feature",
    text: "A full-loot play-and-earn sandbox MMORPG.",
  },
  {
    id: 4,
    icon: icFeature4,
    iconClass: "featureCardPinkIc",
    alt: "feature",
    title: "Feature",
    text: "A full-loot play-and-earn sandbox MMORPG.",
  },
];

// Game details stats
export const statsCard = [
  {
    statsClass: "server",
    statsTitle: "Server Status",
    statsIcon: statsServer,
    statsText: "Under Maintenance",
    statsValue: "20%",
    statsGraph: cardGraphBlank,
    statsTextIcon: statsIconBlank,
    statsTextClass: "purple",
  },
  {
    statsClass: "reward",
    statsTitle: "Total Rewards",
    statsIcon: statsRewards,
    statsText: "300,236,000 ETH ~ 23656 USD",
    statsValue: "20%",
    statsGraph: cardGraphBlank,
    statsTextIcon: ethereiumIcon,
    statsTextClass: "purple",
  },
  {
    statsClass: "players",
    statsTitle: "Total no of Players",
    statsIcon: statsPlayers,
    statsText: "58965876",
    statsValue: "20%",
    statsGraph: cardGraphGreen,
    statsTextIcon: statsIconBlank,
    statsTextClass: "purple",
  },
  {
    statsClass: "livePlayers",
    statsTitle: "Total no of Live Players",
    statsIcon: statsLivePlayers,
    statsText: "58965876",
    statsValue: "20%",
    statsGraph: cardGraphPink,
    statsTextIcon: statsIconBlank,
    statsTextClass: "purple",
  },
  {
    statsClass: "download",
    statsTitle: "Total Downloads",
    statsIcon: statsDownload,
    statsText: "58965876",
    statsValue: "20%",
    statsGraph: cardGraphBlue,
    statsTextIcon: statsIconBlank,
    statsTextClass: "purple",
  },
  {
    statsClass: "rewardOut",
    statsTitle: "Total rewards given out",
    statsIcon: statsRewardGiven,
    statsText: "58965876",
    statsValue: "20%",
    statsGraph: cardGraphBlank,
    statsTextIcon: statsIconBlank,
    statsTextClass: "purple",
  },
];

// Game details leaderboards table
export const playerList = [
  {
    count: 1,
    playerThumb: player1,
    playerName: "VangsKings (7q7 ... hDP)",
    time: "125 Min",
    gamePoints: "569896",
    playerType: "topRank",
    rankInner: "rankInner",
  },
  {
    count: 2,
    playerThumb: player2,
    playerName: "AlexJJ-ON-TWITCH-BA...)",
    time: "125 Min",
    gamePoints: "569896",
    playerType: "topRank",
    rankInner: "rankInner",
  },
  {
    count: 3,
    playerThumb: player3,
    playerName: "AlexJJ-ON-TWITCH-BA...)",
    time: "125 Min",
    gamePoints: "569896",
    playerType: "topRank",
    rankInner: "rankInner",
  },
  {
    count: 4,
    playerThumb: player2,
    playerName: "AlexJJ-ON-TWITCH-BA...)",
    time: "125 Min",
    gamePoints: "569896",
    playerType: "",
    rankInner: "",
  },
  {
    count: 5,
    playerThumb: player2,
    playerName: "AlexJJ-ON-TWITCH-BA...)",
    time: "125 Min",
    gamePoints: "569896",
    playerType: "",
    rankInner: "",
  },
];

// Game details join community social list
export const communitySocial = [
  {
    icon: iconDiscord,
    url: "https://discord.com",
  },
  {
    icon: iconInstagram,
    url: "https://www.instagram.com",
  },
  {
    icon: iconTwitter,
    url: "https://twitter.com",
  },
  {
    icon: iconYoutube,
    url: "https://www.youtube.com",
  },
  {
    icon: iconTwitch,
    url: "https://www.twitch.tv",
  },
];

// Game details gallery
export const gallerySlides = [
  {
    gallerySlide: galleryItem1,
    slideClass: "",
  },
  {
    gallerySlide: galleryItem2,
    slideClass: "activeGallery",
  },
  {
    gallerySlide: galleryItem3,
    slideClass: "",
  },
  {
    gallerySlide: galleryItem4,
    slideClass: "",
  },
  {
    gallerySlide: galleryItem5,
    slideClass: "",
  },
  {
    gallerySlide: galleryItem1,
    slideClass: "",
  },
  {
    gallerySlide: galleryItem2,
    slideClass: "",
  },
  {
    gallerySlide: galleryItem3,
    slideClass: "",
  },
  {
    gallerySlide: galleryItem4,
    slideClass: "",
  },
  {
    gallerySlide: galleryItem5,
    slideClass: "",
  },
];

// Game details news list
export const newsList = [
  {
    url: "",
    title: "Rosario dawson walks back punisher confirmation comments",
    iconView: icView,
    iconTime: icTime,
    iconRedirect: icRedirect,
    views: "3255",
    time: "4 min",
    date: "03 Sep,2022",
  },
  {
    url: "",
    title: "Rosario dawson walks back punisher confirmation comments",
    iconView: icView,
    iconTime: icTime,
    iconRedirect: icRedirect,
    views: "3255",
    time: "4 min",
    date: "03 Sep,2022",
  },
  {
    url: "",
    title: "Rosario dawson walks back punisher confirmation comments",
    iconView: icView,
    iconTime: icTime,
    iconRedirect: icRedirect,
    views: "3255",
    time: "4 min",
    date: "03 Sep,2022",
  },
];

// Game details events list
export const eventListing = [
  {
    id: 1,
    thumb: eventThumb1,
    title: "2022 IEM Season XV Katowice World Championship",
    stats1: "Final",
    stats2: "Dota 2 - $1,000,000",
    stats2Icon: eventThumb1,
    stats3: "320,286",
    stats3Icon: multiUsers,
    teamTag1: "Austrais",
    teamTag1Icon: teamAstralis,
    teamTag2: "Navi",
    teamTag2Icon: teamNavi,
    vsText: "Vs",
  },
  {
    id: 2,
    thumb: eventThumb2,
    title: "2022 IEM Season XV Katowice World Championship",
    stats1: "Final",
    stats2: "Dota 2 - $1,000,000",
    stats2Icon: eventThumb2,
    stats3: "320,286",
    stats3Icon: multiUsers,
    teamTag1: "Austrais",
    teamTag1Icon: teamAstralis,
    teamTag2: "Navi",
    teamTag2Icon: teamNavi,
    vsText: "Vs",
  },
  {
    id: 3,
    thumb: eventThumb3,
    title: "2022 IEM Season XV Katowice World Championship",
    stats1: "Final",
    stats2: "Dota 2 - $1,000,000",
    stats2Icon: eventThumb3,
    stats3: "320,286",
    stats3Icon: multiUsers,
    teamTag1: "Austrais",
    teamTag1Icon: teamAstralis,
    teamTag2: "Navi",
    teamTag2Icon: teamNavi,
    vsText: "Vs",
  },
  {
    id: 4,
    thumb: eventThumb4,
    title: "2022 IEM Season XV Katowice World Championship",
    stats1: "Final",
    stats2: "Dota 2 - $1,000,000",
    stats2Icon: eventThumb4,
    stats3: "320,286",
    stats3Icon: multiUsers,
    teamTag1: "Austrais",
    teamTag1Icon: teamAstralis,
    teamTag2: "Navi",
    teamTag2Icon: teamNavi,
    vsText: "Vs",
  },
  {
    id: 5,
    thumb: eventThumb5,
    title: "2022 IEM Season XV Katowice World Championship",
    stats1: "Final",
    stats2: "Dota 2 - $1,000,000",
    stats2Icon: eventThumb5,
    stats3: "320,286",
    stats3Icon: multiUsers,
    teamTag1: "Austrais",
    teamTag1Icon: teamAstralis,
    teamTag2: "Navi",
    teamTag2Icon: teamNavi,
    vsText: "Vs",
  },
];

// Game details announcement cards
export const announcementList = [
  {
    id: 1,
    thumb: gameDefaultIc,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb icon",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 2,
    thumb: gameCardCover1,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 3,
    thumb: gameDefaultIc,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb icon",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 4,
    thumb: gameCardCover1,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 5,
    thumb: gameDefaultIc,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb icon",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 6,
    thumb: gameCardCover1,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 7,
    thumb: gameDefaultIc,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb icon",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 8,
    thumb: gameCardCover1,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 9,
    thumb: gameCardCover1,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 10,
    thumb: gameCardCover1,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 11,
    thumb: gameCardCover1,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 12,
    thumb: gameDefaultIc,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb icon",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 13,
    thumb: gameCardCover1,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 14,
    thumb: gameDefaultIc,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb icon",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 15,
    thumb: gameCardCover1,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
  {
    id: 16,
    thumb: gameDefaultIc,
    date: "01 Sep, 2022",
    cardTextPrimary: "Small Update or Changes List",
    redirectIc: icRedirect,
    gameThumbClass: "game-thumb icon",
    gameTitle: "Dota 2 Update - 8/31/2022",
    gameSubtitle: "Update 7.32b is out!",
  },
];

// Game details collectibles cards list
export const collectibleCards = [
  {
    thumb: collectible1,
    icon: collectIconDiscord,
    checkboxIcon: "",
    evolutionRequired: true,
    assetMinted: true,

    rarity: "Unusual",
    collection: "Unusual",
    name: "assets1",
  },
  {
    thumb: collectible2,
    icon: collectIconDiscord,
    checkboxIcon: "",
    evolutionRequired: false,
    assetMinted: false,
    wallet: true,
    sufficientFunds: true,

    rarity: "Ordinary",
    collection: "Unusual",
    name: "assets1",
  },
  {
    thumb: collectible3,
    icon: collectIconDiscord,
    checkboxIcon: "",
    evolutionRequired: true,
    assetMinted: true,

    rarity: "Rare",
    collection: "Unusual",
    name: "assets1",
  },
  {
    thumb: collectible4,
    icon: collectIconDiscord,
    checkboxIcon: "",
    evolutionRequired: true,
    assetMinted: false,
    wallet: false,

    rarity: "Unusual",
    collection: "Unusual",
    name: "assets1",
  },
  {
    thumb: collectible5,
    icon: "",
    checkboxIcon: "",
    evolutionRequired: false,
    assetMinted: false,
    wallet: true,
    sufficientFunds: false,

    rarity: "Ordinary",
    collection: "Unusual",
    name: "assets1",
  },
  {
    thumb: collectible6,
    icon: "",
    checkboxIcon: "",
    evolutionRequired: false,
    assetMinted: false,
    wallet: true,
    sufficientFunds: true,
    assetMintedSuccess: false,

    rarity: "Rare",
    collection: "Ordinary",
    name: "assets2",
  },
  {
    thumb: collectible7,
    icon: "",
    checkboxIcon: "",
    evolutionRequired: false,
    assetMinted: false,
    wallet: true,
    sufficientFunds: true,
    assetMintedSuccess: true,

    rarity: "Unusual",
    collection: "Ordinary",
    name: "assets2",
  },
  {
    thumb: collectible8,
    icon: "",
    checkboxIcon: "",
    evolutionRequired: false,

    rarity: "Ordinary",
    collection: "Ordinary",
    name: "assets2",
  },
  {
    thumb: collectible9,
    icon: "",
    checkboxIcon: "",
    evolutionRequired: true,

    rarity: "Rare",
    collection: "Ordinary",
    name: "assets2",
  },
  {
    thumb: collectible10,
    icon: "",
    checkboxIcon: "",
    evolutionRequired: false,

    rarity: "Unusual",
    collection: "Ordinary",
    name: "assets2",
  },
  {
    thumb: collectible11,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Rare",
    name: "assets3",
  },
  {
    thumb: collectible12,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Rare",
    name: "assets3",
  },
  {
    thumb: collectible1,
    icon: collectIconDiscord,
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Rare",
    name: "assets3",
  },
  {
    thumb: collectible2,
    icon: collectIconDiscord,
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Rare",
    name: "assets3",
  },
  {
    thumb: collectible3,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Rare",
    name: "assets3",
  },
  {
    thumb: collectible4,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Unusual",
    name: "assets4",
  },
  {
    thumb: collectible5,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Unusual",
    name: "assets4",
  },
  {
    thumb: collectible6,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Unusual",
    name: "assets4",
  },
  {
    thumb: collectible7,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Unusual",
    name: "assets4",
  },
  {
    thumb: collectible8,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Unusual",
    name: "assets4",
  },
  {
    thumb: collectible9,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Ordinary",
    name: "assets5",
  },
  {
    thumb: collectible10,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Ordinary",
    name: "assets5",
  },
  {
    thumb: collectible11,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Ordinary",
    name: "assets5",
  },
  {
    thumb: collectible12,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Ordinary",
    name: "assets5",
  },
  {
    thumb: collectible9,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Ordinary",
    name: "assets5",
  },
  {
    thumb: collectible10,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Rare",
    name: "assets6",
  },
  {
    thumb: collectible11,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Rare",
    name: "assets6",
  },
  {
    thumb: collectible12,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Rare",
    name: "assets6",
  },
  {
    thumb: collectible1,
    icon: collectIconDiscord,
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Rare",
    name: "assets6",
  },
  {
    thumb: collectible2,
    icon: collectIconDiscord,
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Rare",
    name: "assets6",
  },
  {
    thumb: collectible3,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Unusual",
    name: "assets7",
  },
  {
    thumb: collectible4,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Unusual",
    name: "assets7",
  },
  {
    thumb: collectible5,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Unusual",
    name: "assets7",
  },
  {
    thumb: collectible6,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Unusual",
    name: "assets7",
  },
  {
    thumb: collectible7,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Unusual",
    name: "assets7",
  },
  {
    thumb: collectible8,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Ordinary",
    name: "assets8",
  },
  {
    thumb: collectible9,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Ordinary",
    name: "assets8",
  },
  {
    thumb: collectible10,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Ordinary",
    name: "assets8",
  },
  {
    thumb: collectible11,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Ordinary",
    name: "assets8",
  },
  {
    thumb: collectible12,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Ordinary",
    name: "assets8",
  },
  {
    thumb: collectible8,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Rare",
    name: "assets9",
  },
  {
    thumb: collectible9,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Rare",
    name: "assets9",
  },
  {
    thumb: collectible10,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Rare",
    name: "assets9",
  },
  {
    thumb: collectible11,
    icon: "",
    checkboxIcon: "Rare",

    rarity: "Ordinary",
    collection: "Rare",
    name: "assets9",
  },
  {
    thumb: collectible12,
    icon: "",
    checkboxIcon: "Unusual",

    rarity: "Rare",
    collection: "Unusual",
    name: "assets9",
  },
  {
    thumb: collectible8,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Unusual",
    name: "assets10",
  },
  {
    thumb: collectible9,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Unusual",
    name: "assets10",
  },
  {
    thumb: collectible10,
    icon: "",
    checkboxIcon: "",

    rarity: "Rare",
    collection: "Unusual",
    name: "assets10",
  },
  {
    thumb: collectible11,
    icon: "",
    checkboxIcon: "",

    rarity: "Unusual",
    collection: "Ordinary",
    name: "assets10",
  },
  {
    thumb: collectible12,
    icon: "",
    checkboxIcon: "",

    rarity: "Ordinary",
    collection: "Ordinary",
    name: "assets10",
  },
];

// Gamefi details rules slides
export const gameFiDescriptionRules = [
  {
    ruleTitle: "How to Play",
    ruleImage: gamefiDetailThumb1,
    gameFiDetailList: [
      {
        detailList:
          "Go to https://www.fractal.is/metaops/tournaments and click “Play Now”",
      },
      {
        detailList: "Download the Installer.exe",
      },
      {
        detailList:
          "Create an account and link your Fractal Wallet (30 seconds)",
      },
      {
        detailList: "That’s it, you’re ready to play!",
      },
    ],
  },
  {
    ruleTitle: "Prizes",
    ruleImage: gamefiDetailThumb2,
    gameFiDetailList: [
      {
        detailList:
          "1st place: 2,500 $MODS, 1x Custom MetaOps x EFAS Ship, 1x Founder’s Pass, 1x PFP, 1x CQC Melee Weapon (distributed after the mint is over)",
      },
      {
        detailList:
          "2nd place: 2,000 $MODS, 1x Custom MetaOps x EFAS Ship, 1x Founder’s Pass, 1x PFP, 1x CQC Melee Weapon",
      },
      {
        detailList: "That’s it, you’re ready to play!",
      },
    ],
  },
];

// Gameplay description
export const gamePlayDetails = [
  {
    gameDescThumb: gameDescPic,
    gameTitle1: "Evil Dead: The Game",
    gameInfo1:
      "Step into the role of Ash Williams or his friends from the iconic Evil Dead franchise and take action in the game with an amazing PVP co-op and multiplayer mode! Play as a team of four survivors infiltrating the world, loot, manage your fear and find key items to close between worlds in a game inspired by the senses of danger and the Evil Dead movies and STARZ's Ash vs Evil Dead TV series.",
    gameTitle2: "Ionic Characters",
    gameInfo2:
      "Play as characters from the Evil Dead universe including Ash, Scotty, Lord Arthur, Kelly Maxwell and more, with new dialogue from Bruce Campbell and more!",
    gameTitle3: "Rules",
    gameInfo3a:
      "Play as characters from the Evil Dead universe including Ash, Scotty, Lord Arthur, Kelly Maxwell and more, with new dialogue from Bruce Campbell and more!",
    gameInfo3b:
      "Evil Dead franchise and take action in the game with an amazing PVP co-op and multiplayer mode! Play as a team of four survivors infiltrating the world, loot, manage your fear and find key items to close between worlds in a game inspired",
    gameInfo3c:
      "Step into the role of Ash Williams or his friends from the iconic Evil Dead franchise and take action in the game with an amazing PVP co-op and multiplayer mode!",
  },
];
