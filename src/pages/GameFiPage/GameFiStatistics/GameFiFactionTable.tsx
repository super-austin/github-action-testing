// External dependencies
import { Box, Card, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles as tableStyles } from "../../../components/Common/GameDetailTable.style";
import { styles } from "../GameFiPage.style";

// JSON data
import { factionWarList } from "../GameFi.const";

export default function GameFiFactionTable() {
    return (
        <>
            <Grid 
                container
                sx={[globalStyles.marginTop60, styles.gameFiFactionTableWrapper]}
            >
                <Grid item sm={12} sx={styles.gameFiFactionTableCardParent}>
                    <Card sx={[cardStyles.customCardUi, styles.gameFiFactionTableCard]}>
                        <Grid
                            container
                            sx={globalStyles.marginBottom40}
                            alignItems="center"
                        >
                            <Grid item sm={4}>
                                <Typography component="h4">Faction Wars</Typography>
                            </Grid>
                            <Grid item sm={4} textAlign="center">
                                <Typography component="h4" sx={globalStyles.customCountdownStatus}>
                                    45 : 25 : 36
                                </Typography>
                            </Grid>
                            <Grid item sm={4} textAlign="right">
                                <Typography sx={styles.factionTableTitleLight} component="h5">Jan 01 - Jan 02</Typography>
                            </Grid>
                        </Grid>
                        
                        <TableContainer component={Paper} sx={[tableStyles.gamenautTableWrapper]}>
                            <Table sx={[tableStyles.gamenautTableUi, tableStyles.playerListTable]} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Rank</TableCell>
                                        <TableCell align="center">Faction</TableCell>
                                        <TableCell align="left">Player</TableCell>
                                        <TableCell align="left">Role</TableCell>
                                        <TableCell align="left">Members</TableCell>
                                        <TableCell align="left">Score</TableCell>
                                        <TableCell align="left">Points</TableCell>
                                        <TableCell align="left">Awards</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        factionWarList?.map((item, index) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell align="center">
                                                        <Box component="span" sx={(tableStyles  as any)[item.playerType]}>
                                                            <Box component="span" sx={(tableStyles  as any)[item.rankInner]}>
                                                                {item.count}
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <img src={item.factionIcon} alt="faction" />
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <Link to="/">
                                                            <Box component="div" sx={tableStyles.playerInfo}>
                                                                <Box sx={tableStyles.playerThumb}>
                                                                    <img src={item.playerThumb} alt="player" />
                                                                </Box>
                                                                {item.playerName}
                                                            </Box>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell align="left">{item.role}</TableCell>
                                                    <TableCell align="left">
                                                        <Box sx={[tableStyles.tableThumbsGroup, tableStyles.thumbRounded]}>
                                                            {
                                                                item.members?.map((ele, index) => {
                                                                    return (
                                                                        <img alt="thumb" key={index} src={ele.member} />
                                                                    )
                                                                })   
                                                            }
                                                            {item.memberCount}
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="left">{item.score}</TableCell>
                                                    <TableCell align="left">{item.points}</TableCell>
                                                    <TableCell align="left">
                                                        <Box sx={tableStyles.tableThumbsGroup}>
                                                            {
                                                                item.awards?.map((ele, index) => {
                                                                    return (
                                                                        <img alt="thumb" key={index} src={ele.award} />
                                                                    )
                                                                })   
                                                            }
                                                            {item.memberCount}
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}