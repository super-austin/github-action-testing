// External dependencies
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

// SVG icons
import emptyLeaderboardIcon from "../../../assets/svg/empty-states/empty-leaderboard-icon.svg";
import emptyLeaderboardGraphic from "../../../assets/svg/empty-states/empty-leaderboard-graphic.svg";

// Internal dependencies
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import { styles as tableStyles } from "../../../components/Common/GameDetailTable.style";
import { playerList } from "../GameDetailPage.const";
import Headings from "../../../components/Headings";

import { useAppDispatch } from "../../../store/store";
import { getLeaderBoardData } from "../../../store/slices/GameInfo/thunks";
import { LeaderBoardItem } from "../../../store/types/GameInfo.types";

import player1 from "../../../assets/svg/gameDetail/user-1.svg";
import {
  selectErrorStatus,
  selectLoadingStatus,
} from "../../../store/selectors/GameInfoSelector";
import EmptyStates from "../../../components/EmptyStates";

export default function GameLeaderBoard() {
  // Empty states
  const [ emptyGameStats, setEmptyGameStats ] = useState(true);

  const dispatch = useAppDispatch();
  const [tableData, setTableData] = useState<LeaderBoardItem[]>();
  const isLoading = useSelector(selectLoadingStatus());
  const isError = useSelector(selectErrorStatus());

  useEffect(() => {
    const getInitialData = async () => {
      const { payload } = await dispatch(getLeaderBoardData({}));
      setTableData(payload.entries);
    };

    getInitialData();
  }, []);

  return (
    <Box sx={globalStyles.customSectionSpacing}>
      <Headings title={"Leaderboard"} counts={0} lineColor={"green"} />
      {emptyGameStats === false ?
        <EmptyStates 
            icon={emptyLeaderboardIcon} 
            title={"Game statistics not collected yet"} 
            content={"Your game statistics will become available after the first game"} 
            graphic={emptyLeaderboardGraphic}
            titleCapital={""}
        />
      :
      <Card sx={[globalStyles.marginTop30, cardStyles.customCardUi]}>
        <TableContainer component={Paper} sx={tableStyles.gamenautTableWrapper}>
          <Table
            sx={[tableStyles.gamenautTableUi, tableStyles.playerListTable]}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Rank</TableCell>
                <TableCell align="left">Player</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Total Game Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData &&
                tableData.map((item, index) => {
                  return (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      key={index}
                    >
                      <TableCell align="center">
                        <Box
                          component="span"
                          sx={
                            (tableStyles as any)[
                              item.rank && item.rank <= 3 ? "topRank" : ""
                            ]
                          }
                        >
                          <Box
                            component="span"
                            sx={
                              (tableStyles as any)[
                                item.rank && item.rank <= 3 ? "rankInner" : ""
                              ]
                            }
                          >
                            {item.rank}
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="left">
                        <Box component="div" sx={tableStyles.playerInfo}>
                          <Box sx={tableStyles.playerThumb}>
                            {/* TODO: Change Player avatar */}
                            <img src={player1} alt="player" />
                          </Box>
                          {item.player}
                        </Box>
                      </TableCell>
                      <TableCell align="center">{item.time}</TableCell>
                      <TableCell align="center">{item.totalGP}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      }
    </Box>
  );
}
