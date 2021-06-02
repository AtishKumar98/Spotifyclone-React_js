import React from 'react';
import "./Footer.css";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";



function Footer() {
    return (
        <div class="p_Footer">
            <div className="footer_left"> 
            <div className="footer_albumlogo">
            <img src = "https://cms-assets.tutsplus.com/uploads/users/114/posts/34296/image/Final-image.jpg" alt = ""/>
            </div>
            <div className="footer_songinfo">
            <h4>Haye!</h4>
            <p>Albums and Song Details</p>
            </div>
              
            </div>


            <div className="footer_center">
            <ShuffleIcon className="footer_green"/>
            <SkipPreviousIcon className="footer_icon"/>
            <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer_large"/>
            <SkipNextIcon className="footer_icon"/>
            <RepeatIcon className="footer_green"/>
            </div>


            <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
            </Grid>
        </div>
        </div>
    )
}

export default Footer
