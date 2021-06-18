import React from 'react';
import Video from '../../Videos/video.mp4';
import {
    BannerContainer,
    BannerBg,
    VideoBg,
    BannerContent,
    BannerH1,
    BannerP
} from './BannerElements';

function Banner() {
    return (
        <BannerContainer>
            <BannerBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </BannerBg>
            <BannerContent>
                <BannerH1>Filipe Andrade</BannerH1>
                <BannerP>
                    ReactJs & Spring Boot Junior Full-Stack Developer
                </BannerP>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner
