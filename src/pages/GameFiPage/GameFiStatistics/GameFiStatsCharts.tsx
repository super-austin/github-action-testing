// External dependencies
import { Card, Grid, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";
import { useState } from "react";

// SVG icons
import statsArrowUpPink from "../../../assets/svg/gameDetail/arrow-up-pink.svg";
import statsArrowUpPurple from "../../../assets/svg/gameDetail/arrow-up-purple.svg";
import statsArrowUpBlue from "../../../assets/svg/gameDetail/arrow-up-blue.svg";
import statsIcWins from "../../../assets/svg/gameDetail/stats-ic-badge.svg";
import statsIcKils from "../../../assets/svg/gameDetail/stats-ic-kills.svg";
import statsIcTime from "../../../assets/svg/gameDetail/stats-ic-time.svg";

// Internal dependencies
import { styles as cardStyle } from "../../../components/Common/GameDetailCard.style";
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles } from "../GameFiPage.style";

import { GameFiStatsChartsProps } from "./GameFiStatistics.types";

export default function GameFiStatsCharts(props: GameFiStatsChartsProps) {
  const [optionsL, setOptionsL] = useState<object>({
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["rgba(121, 207, 255, 1)"],
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-20T01:30:00.000Z",
        "2018-09-21T02:30:00.000Z",
        "2018-09-22T03:30:00.000Z",
        "2018-09-23T04:30:00.000Z",
        "2018-09-24T05:30:00.000Z",
        "2018-09-25T06:30:00.000Z",
      ],
      axisTicks: {
        show: false,
      },
      labels: {
        format: "dd-MMM",
        style: {
          colors: "#4B4C56",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 150,
      tickAmount: 5,
      labels: {
        style: {
          colors: "#4B4C56",
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });
  const [seriesL, setSeriesL] = useState([
    {
      name: "series1",
      data: [60, 85, 60, 110, 120, 100, 120],
    },
  ]);

  // Wins and lose Pie chart
  const [optionsD, setOptionsD] = useState<object>({
    chart: {
      type: "donut",
    },
    fill: {
      colors: ["rgba(255, 127, 227, 1)", "rgba(101, 104, 255, 1)"],
    },
    colors: ["rgba(255, 127, 227, 1)", "rgba(101, 104, 255, 1"],
    stroke: {
      colors: ["rgba(34, 34, 36, 1)", "rgba(34, 34, 36, 1)"],
      width: 7,
    },
    labels: ["Win", "Lose"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "87%",
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: false,
            },
            total: {
              label: "Win" + " " + "Lose",
              show: false,
              showAlways: false,
              // formatter: function (value:any) {
              //    return seriesD[0] + "%" + " " +seriesD[1] + "%"
              // }
            },
          },
        },
        expandOnClick: false,
      },
    },
  });

  const seriesD: number[] = [
    (props.data.extracts / (props.data.extracts + props.data.deaths)) * 100,
    (props.data.deaths / (props.data.extracts + props.data.deaths)) * 100,
  ];

  // Kills and death Pie chart
  const [optionsK, setOptionsK] = useState<object>({
    chart: {
      type: "donut",
    },
    fill: {
      colors: ["#79CFFF", "rgba(101, 104, 255, 1)"],
    },
    colors: ["#79CFFF", "rgba(101, 104, 255, 1"],
    stroke: {
      colors: ["rgba(34, 34, 36, 1)", "rgba(34, 34, 36, 1)"],
      width: 7,
    },
    labels: ["Kills", "Death"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "87%",
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: false,
            },
            total: {
              label: "Kills" + " " + "Death",
              show: false,
              showAlways: false,
              // formatter: function (value:any) {
              //    return seriesD[0] + "%" + " " +seriesD[1] + "%"
              // }
            },
          },
        },
        expandOnClick: false,
      },
    },
  });
  const seriesK: number[] = [
    (props.data.kills / (props.data.kills + props.data.deaths)) * 100,
    (props.data.deaths / (props.data.kills + props.data.deaths)) * 100,
  ];

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={6} lg={4} sx={styles.gameStatsChartPlay}>
          <Card
            sx={[
              cardStyle.customCardUi,
              cardStyle.cardBorder15,
              globalStyles.marginBottom20,
            ]}
          >
            <Typography>Play Time</Typography>
            <Chart
              options={optionsL}
              series={seriesL}
              type="line"
              width="100%"
            />
          </Card>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Card
                sx={[
                  cardStyle.customCardUi,
                  cardStyle.statsCardUi,
                  cardStyle.cardBorder15,
                ]}
              >
                <Box sx={[cardStyle.customCardInner, cardStyle.statsCardInner]}>
                  <Box>
                    <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                      Total Coins Collected
                    </Typography>
                    <Box sx={cardStyle.statsCardFlexItem}>
                      <Typography variant="h2" sx={cardStyle.statsCardTitleBig}>
                        {props.data.total_coin_collected}
                      </Typography>
                    </Box>
                    <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                      In the last week
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card
                sx={[
                  cardStyle.customCardUi,
                  cardStyle.statsCardUi,
                  cardStyle.cardBorder15,
                ]}
              >
                <Box sx={[cardStyle.customCardInner, cardStyle.statsCardInner]}>
                  <Box>
                    <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                      Extracts
                    </Typography>
                    <Box sx={cardStyle.statsCardFlexItem}>
                      <Typography variant="h2" sx={cardStyle.statsCardTitleBig}>
                        {props.data.extracts}
                      </Typography>
                    </Box>
                    <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                      In the last week
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} lg={4}>
          <Grid container spacing={3} sx={globalStyles.marginBottom20}>
            <Grid item sm={6}>
              <Card
                sx={[
                  cardStyle.customCardUi,
                  cardStyle.statsCardUi,
                  cardStyle.cardBorder15,
                ]}
              >
                <Box
                  sx={[
                    cardStyle.customCardInner,
                    cardStyle.statsCardInner,
                    cardStyle.statsCardLeft,
                  ]}
                >
                  <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                    Deaths
                    <img src={statsIcWins} alt="stats-icon" />
                  </Typography>
                  <Box sx={cardStyle.statsCardFlexItem}>
                    <Typography
                      variant="h2"
                      sx={cardStyle.statsCardTitleBigger}
                    >
                      {props.data.deaths}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={6}>
              <Card
                sx={[
                  cardStyle.customCardUi,
                  cardStyle.statsCardUi,
                  cardStyle.cardBorder15,
                ]}
              >
                <Box
                  sx={[
                    cardStyle.customCardInner,
                    cardStyle.statsCardInner,
                    cardStyle.statsCardLeft,
                  ]}
                >
                  <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                    Kills
                    <img src={statsIcKils} alt="stats-icon" />
                  </Typography>
                  <Box sx={cardStyle.statsCardFlexItem}>
                    <Typography
                      variant="h2"
                      sx={cardStyle.statsCardTitleBigger}
                    >
                      {props.data.kills}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Card sx={[cardStyle.customCardUi, cardStyle.cardBorder15]}>
                <Box sx={[cardStyle.customCardInner, globalStyles.padding0]}>
                  <Box
                    sx={[cardStyle.statsCardFlexItem, globalStyles.marginTop0]}
                  >
                    <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                      E/D Ratio
                    </Typography>
                    <Typography variant="h2" sx={[cardStyle.statsCardTitleBig]}>
                      {(props.data.extracts / props.data.deaths).toFixed(2)}
                    </Typography>
                  </Box>
                  <Box sx={cardStyle.customDonutChart}>
                    <List>
                      <ListItem>
                        <Typography sx={cardStyle.donutChartLightValue}>
                          <span className="circle"></span>
                          Extracts
                        </Typography>
                        <Typography>{seriesD[0] + "%"}</Typography>
                      </ListItem>
                      <ListItem>
                        <Typography sx={cardStyle.donutChartLightValue}>
                          <span className="circle blue"></span>
                          Deaths
                        </Typography>
                        <Typography>{seriesD[1] + "%"}</Typography>
                      </ListItem>
                    </List>
                    <Chart
                      options={optionsD}
                      series={seriesD}
                      type="donut"
                      width="100%"
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} lg={4}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Card
                sx={[
                  cardStyle.customCardUi,
                  cardStyle.cardBorder15,
                  globalStyles.marginBottom20,
                ]}
              >
                <Box sx={[cardStyle.customCardInner, globalStyles.padding0]}>
                  <Box
                    sx={[cardStyle.statsCardFlexItem, globalStyles.marginTop0]}
                  >
                    <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                      K/D Ratio
                    </Typography>
                    <Typography variant="h2" sx={[cardStyle.statsCardTitleBig]}>
                      {((props.data.kills / props.data.deaths) * 100).toFixed(
                        2
                      )}
                    </Typography>
                  </Box>
                  <Box sx={globalStyles.apexChartUi}>
                    <Box sx={cardStyle.customDonutChart}>
                      <List>
                        <ListItem>
                          <Typography sx={cardStyle.donutChartLightValue}>
                            <span className="circle"></span>
                            Kills
                          </Typography>
                          <Typography>{seriesK[0] + "%"}</Typography>
                        </ListItem>
                        <ListItem>
                          <Typography sx={cardStyle.donutChartLightValue}>
                            <span className="circle cyan"></span>
                            Death
                          </Typography>
                          <Typography>{seriesK[1] + "%"}</Typography>
                        </ListItem>
                      </List>
                      <Chart
                        options={optionsK}
                        series={seriesK}
                        type="donut"
                        width="100%"
                      />
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Card sx={[cardStyle.customCardUi, cardStyle.statsCardUi]}>
            <Box
              sx={[
                cardStyle.customCardInner,
                cardStyle.statsCardInner,
                cardStyle.statsCardLeft,
              ]}
            >
              <Typography variant="h4" sx={cardStyle.statsCardTitle}>
                Survival Time
                <img src={statsIcTime} alt="stats-icon" />
              </Typography>
              <Box sx={cardStyle.statsCardFlexItem}>
                <Typography variant="h2" sx={cardStyle.statsCardTitleBig}>
                  {Math.ceil(props.data.time_alive / 60)} min
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
