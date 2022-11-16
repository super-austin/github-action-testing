// External dependencies
import { useState } from "react";
import { Box, Grid, Card } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// SVG icons
import slideLeftIcon from "../../../assets/svg/gameDetail/collectibles/slide-arrow-left.svg";
import slideRightIcon from "../../../assets/svg/gameDetail/collectibles/slide-arrow-right.svg";

// Internal dependencies
import { styles } from "../GameDetailPage.style";
import { styles as globalStyles } from "../../../components/Common/Global.style";
import { styles as cardStyles } from "../../../components/Common/GameDetailCard.style";
import Headings from "../../../components/Headings";
import { gallerySlides } from "../GameDetailPage.const";

export default function GameGallery() {
  const [ activeCard, setActiveCard ] = useState(0);

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    useTransform: false,
    // focusOnSelect:true,
    centerMode: true,
    afterChange: (index: number) =>{
       setActiveCard(index+1)
      }
  };

  return (
    <Box sx={[globalStyles.customSectionSpacing, styles.gameGalleryWrapper]}>
      <Grid container sx={globalStyles.galleryControlsSlide}>
        <Grid item sm={6}>
          <Headings title={"Gallery"} counts={0} lineColor={"purple"} />
        </Grid>
        {/* <Grid item sm={6}>
          <Box sx={[globalStyles.customSlideControls, globalStyles.galleryControls ]}>
            <Box sx={[globalStyles.customControlButton, cardStyles.customCardUi]}>
              <img src={slideLeftIcon} alt="control" />
            </Box>
            <Box sx={[globalStyles.customControlButton, cardStyles.customCardUi]}>
              <img src={slideRightIcon} alt="control" />
            </Box>
          </Box>
        </Grid> */}
      </Grid>
      <Grid container>
        <Grid item sm={12}>
          <Box sx={styles.gallerySlideWrapper}>
            <Slider {...settings}>
              {gallerySlides?.map((item, index) => {
                return (
                  <Card
                    onClick={() => setActiveCard(index)}
                    style={{ width: activeCard === index ? 600 : 150 }}
                    // className={
                    //   item.slideClass + " " + "gallery-slide custom-card"
                      
                    // }
                    sx={(styles as any)[item.slideClass]}
                    key={index}
                  >
                    <img src={item.gallerySlide} alt="gallery" />
                  </Card>
                );
              })}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
