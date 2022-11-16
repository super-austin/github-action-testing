// External dependencies
import React, { useState } from "react";
import {
	Card,
	Grid,
	Box,
	Typography,
	Button,
	FormControl,
	TextField,
	List,
	ListItem,
	FormLabel,
	Tooltip,
	Fade,
	Modal,
	Link,
	CircularProgress
} from "@mui/material";
import Slider from "react-slick";
import LinearProgress from "@mui/material/LinearProgress";

// SVG icons
import infoCircleIcon from "../../../assets/svg/gameFi/info-circle-purple.svg";
import userDefault from "../../../assets/svg/sidebar/user-default.svg";
import skillBadge from "../../../assets/svg/gameFi/skill-badge-icon.svg";
import trophyBadge from "../../../assets/svg/gameFi/trophy-badge-icon.svg";
import convertPointSorry from "../../../assets/svg/gameFi/modals-icon/sorry-icon.svg";
import convertPointDone from "../../../assets/svg/gameFi/modals-icon/done-icon.svg";
import stateIconPoints from "../../../assets/svg/empty-states/empty-game-point-icon.svg";
import stateIconAchievement from "../../../assets/svg/empty-states/empty-achievement-icon.svg";
import stateAchievementGraphic from "../../../assets/svg/empty-states/empty-achievement-graphic.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as modalStyles } from "../../../components/Common/GameDetailModal.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles } from "../GameFiPage.style";
import Headings from "../../../components/Headings";
import EmptyStates from "../../../components/EmptyStates";

// JSON data
import {
	gameFiPointCards,
	gamificationCards,
	seasonSlides,
	userBadges,
} from "../GameFi.const";

export default function GameFiPoints() {
	// Empty states
	const [gamePoints] = useState(true);
	const [gameAchievement] = useState(true);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	// Loading states
	const [isLoading, setIsLoading] = useState(true);

	// Progress states
	const [progress] = useState(75);
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState({
		title: "Sorry...",
		subTitle: "Please, try again",
		value: "Try again",
		clickCount: 0,
		iconType: convertPointSorry,
	});

	// Modal states
	const handleOpen = () => {
		setOpen(true)
		setTimeout(() => {
			setIsLoading(false)
		}, 3000)
	};
	const handleClose = () => setOpen(false);

	// Modal data
	const dataChange = () => {
		setContent({
			title: "Done!",
			subTitle: "Your game points have been converted",
			value: "View wallet balance",
			clickCount: 1,
			iconType: convertPointDone,
		});
		if (content.clickCount === 1) {
			handleClose();
			setContent({
				title: "Sorry...",
				subTitle: "Please, try again",
				value: "Try again",
				clickCount: 0,
				iconType: convertPointSorry,
			});
		}
	};

	// Season slider
	const seasonSlider = {
		dots: true,
		infinite: true,
		slidesToShow: 1.5,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		centerMode: true,
		afterChange: (index: number) => setActiveIndex(index),
		beforeChange: (index: number) => console.log(99, index),
		responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]  
	};
	return (
		<>
			<Grid container sx={globalStyles.customSectionSpacing}>
				<Grid item sm={12}>
					<Headings title="Game Points" counts={0} lineColor={"purple"} />
				</Grid>
			</Grid>
			{gamePoints === false ? (
				<Box>
					<EmptyStates
						icon={stateIconPoints}
						title={"Game points and token balance"}
						content={
							"Here you will see game points and fungible tokens, as well as the ability to convert game points to FT."
						}
						graphic={""}
						titleCapital={""}
					/>
				</Box>
			) : (
				<Box>
					<Grid container spacing={5}>
						<Grid item md={12} lg={6}>
							<Grid container spacing={4}>
								{gameFiPointCards?.map((item, index) => {
									return (
										<Grid item md={4} key={index}>
											<Card
												sx={[
													cardStyles.customCardUi,
													styles.gameFiPointCard,
													cardStyles.cardBorder15,
												]}
											>
												<Box sx={[cardStyles.customCardInner, styles.gameFiPointCardInner]}>
													<Box sx={(styles as any)[item.gamePointGradient]}>
														<Box sx={styles.gameFiPointCardIcon}>
															<img src={item.gamePointIcon} alt="icon" />
														</Box>
														<Typography sx={styles.gameFiPintCardTitle}>
															{item.gamePointTitle}
														</Typography>
														<Typography
															component="h3"
															sx={styles.gameFiPintCardCounts}
														>
															{item.gamePointCounts}
														</Typography>
													</Box>
												</Box>
											</Card>
										</Grid>
									);
								})}
							</Grid>
						</Grid>
						<Grid item md={12} lg={6}>
							<Card
								sx={[
									cardStyles.customCardUi,
									styles.gameFiConvertCardWrapper,
									cardStyles.cardBorder15,
								]}
							>
								<Box sx={[cardStyles.customCardInner, styles.gameFiConvertCardInner]}>
									<Box sx={styles.gameFiConvertCardUi}>
										<Tooltip
											title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
											placement="top-start"
										>
											<Typography sx={styles.gameFiConvertTooltip}>
												<img src={infoCircleIcon} alt="info" />
												How convert game points?
											</Typography>
										</Tooltip>
										<Grid container>
											<Grid item md={6}>
												<Box
													component="form"
													sx={[
														globalStyles.customFormUi,
														styles.gameFiConvertInputs,
													]}
												>
													<FormControl>
														<FormLabel>Game point</FormLabel>
														<TextField
															hiddenLabel
															id="filled-hidden-label-normal"
															placeholder="1"
															variant="filled"
														/>
													</FormControl>
													<FormControl>
														<FormLabel>Exchange rate</FormLabel>
														<TextField
															hiddenLabel
															id="filled-hidden-label-normal"
															placeholder="0.013ETH"
															variant="filled"
														/>
													</FormControl>
												</Box>
												<Button
													sx={[
														globalStyles.btnPrimary,
														styles.gameFiConvertButton,
													]}
													onClick={handleOpen}
													color="primary"
												>
													<Box sx={globalStyles.btnTextPrimary}>
														Convert Game Points
													</Box>
												</Button>
											</Grid>
											<Grid item md={6} sx={styles.gameFiConvertData}>
												<Typography>Tokens will be received</Typography>
												<Typography component="h2">208.8 ETH</Typography>
												<Link href="/" sx={[globalStyles.btnLink, globalStyles.btnLinkUnderline]}>
													View conversion transaction
												</Link>
											</Grid>
										</Grid>
									</Box>
								</Box>
							</Card>
						</Grid>
					</Grid>
				</Box>
			)}

			{/* User badge cards and gamification */}
			{gameAchievement === false ? (
				<Box>
					<EmptyStates
						icon={stateIconAchievement}
						title={"Levels and Achievements"}
						content={
							"This section will show your rating, progress, Gamification and Season Pass"
						}
						graphic={stateAchievementGraphic}
						titleCapital={""}
					/>
				</Box>
			) : (
				<Grid container sx={globalStyles.customSectionSpacing} spacing={4}>
					<Grid item sm={12} lg={7}>
						<Card
							sx={[
								cardStyles.customCardUi,
								styles.userBadgeCard,
								cardStyles.cardBorder15,
							]}
						>
							<Grid container spacing={3} alignItems="center">
								<Grid item sm={3}>
									<Box sx={styles.userBadgeInfo}>
										<Box sx={[styles.userThumbBox, globalStyles.margin0]}>
											<Box sx={styles.userThumbBorderBox}>
												<img src={userDefault} alt="user" />
											</Box>
										</Box>
										<List sx={styles.userBadgeSkillList}>
											<Typography component="h2" sx={styles.userBadgeTitle}>
												VangsKings
											</Typography>
											<ListItem>
												<img src={skillBadge} alt="skill" />
												Skill
											</ListItem>
											<ListItem>
												<img src={trophyBadge} alt="skill" />
												270
											</ListItem>
										</List>
									</Box>
								</Grid>

								<Grid item sm={5}>
									<Box>
										<Box sx={styles.challengeCardProgressHead}>
											<Typography sx={styles.challengeCardText}>
												User Progress
											</Typography>
											<Typography
												sx={[
													styles.challengeProgressValue,
													styles.challengeCardText,
												]}
											>
												{progress}
											</Typography>
										</Box>
										<LinearProgress
											sx={globalStyles.progressBlueUi}
											variant="determinate"
											value={progress}
										/>
									</Box>
								</Grid>

								<Grid item sm={4}>
									<List sx={styles.badgeGraphicsList}>
										{userBadges?.map((item, index) => {
											return (
												<ListItem key={index}>
													<img src={item.userBadgeThumb} alt="skill" />
												</ListItem>
											);
										})}
									</List>
								</Grid>
							</Grid>
						</Card>

						<Card
							sx={[
								globalStyles.marginTop30,
								cardStyles.customCardUi,
								cardStyles.cardBorder15,
							]}
						>
							<Typography
								sx={[
									globalStyles.headingTextH3,
									cardStyles.gameThumbCardHeading,
								]}
								component="h1"
							>
								Gamification
							</Typography>
							<Grid container spacing={3}>
								{gamificationCards?.map((item, index) => {
									return (
										<Grid item sm={6} md={3} key={index}>
											<Card
												sx={[cardStyles.customCardUi, cardStyles.gameThumbCard]}
											>
												<img src={item.gameThumb} alt="game-thumb" />
											</Card>
											<Typography
												component="h3"
												sx={[
													globalStyles.headingTextH3,
													cardStyles.gameThumbTitle,
												]}
											>
												{item.gameTitle}
											</Typography>
										</Grid>
									);
								})}
							</Grid>
						</Card>
					</Grid>
					<Grid item sm={12} lg={5}>
						<Box sx={globalStyles.height100}>
							<Card
								sx={[
									cardStyles.customCardUi,
									styles.seasonPassSlider,
									cardStyles.cardBorder15,
									cardStyles.customCardHeight100,
								]}
							>
								<Typography variant="h4" sx={styles.seasonPassTitle}>
									Season Pass
								</Typography>
								<Slider {...seasonSlider}>
									{seasonSlides?.map((item, index) => {
										console.log(123, activeIndex)
										return (
											<Box key={index} className={`${(activeIndex === 0 && index === seasonSlides.length - 1) ? "s-slide-left" : index === activeIndex - 1 ? "s-slide-left" : index === activeIndex + 1 ? "s-slide-right" : ''}`}>
												<Box
													sx={[cardStyles.customCardUi, styles.seasonSlideCard]}
												>
													<img src={item.slideThumb} alt="slide-thumb" />
												</Box>
											</Box>
										);
									})}
								</Slider>
								<Box sx={styles.seasonSlideTextBox}>
									<Typography variant="h4" sx={styles.seasonSlideTitle}>
										Name for each season pass
									</Typography>
									<Typography sx={styles.seasonSlideContent}>
										Expiry Date
										<span>18 Day</span>
									</Typography>
								</Box>
							</Card>
						</Box>
					</Grid>
				</Grid>
			)}

			{/* Convert game points stats modals */}
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					{isLoading ?
						<Box sx={[
							cardStyles.customCardUi,
							modalStyles.gamenautModalUi,
							modalStyles.customStatsModal,
						]}>
							<CircularProgress sx={globalStyles.customModalLoader} />
							<Typography component="h4" sx={modalStyles.customStatsModalTitle}>
								Convert game points
							</Typography>
						</Box>
						:
						<Box
							sx={[
								cardStyles.customCardUi,
								modalStyles.gamenautModalUi,
								modalStyles.customStatsModal,
							]}
						>

							<Box sx={modalStyles.customStatsModalBox}>
								<Box sx={modalStyles.statsModalIcon}>
									<img src={content.iconType} alt="modal-icon" />
								</Box>
								<Typography component="h4" sx={modalStyles.customStatsModalTitle}>
									{content.title}
								</Typography>
								<Typography sx={modalStyles.customStatsModalInfo}>
									{content.subTitle}
								</Typography>
							</Box>
							<Box sx={modalStyles.statsModalButton}>
								<Button
									sx={globalStyles.btnPrimary}
									color="primary"
									onClick={dataChange}
								>
									<Box sx={globalStyles.btnTextPrimary}>{content.value}</Box>
								</Button>
							</Box>
						</Box>}
				</Fade>
			</Modal>
		</>
	);
}
