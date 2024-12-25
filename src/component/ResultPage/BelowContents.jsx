import styled from 'styled-components';
import YouTube from 'react-youtube';
import { ImageDownloadButton } from './ImageDownloadButton';
import { Button } from '../Button';
import twitter from '../../assets/ResultPage/twitter_icon.svg';
import kakao from '../../assets/ResultPage/kakao_icon.svg';
import copylink from '../../assets/ResultPage/copylink_icon.svg';
import spark from '../../assets/ResultPage/light_object.svg';

export const BelowContents = ({ onCapture }) => {
    return (
        <BelowContainer>
            <ImageDownloadButton onClick={onCapture} />
            <ShareContainer>
                <TitleText>공유하기</TitleText>
                <ShareIcons>
                    <Icon src={twitter}/>
                    <Icon src={kakao}/>
                    <Icon src={copylink}/>
                </ShareIcons>
            </ShareContainer>
            <Text>
                지금까지 nnn명이<br />이 노래를 추천받았어요
            </Text>
            <TitleText>
                바로 들어보고 싶다면
            </TitleText>
            <YouTubeContainer>
                <Spark src={spark} />
                <YouTube 
                    videoId='YLxEK0ZKx9A'
                    opts={{
                        playerVars: {
                            autoplay: 1,
                            modestbranding: 1,
                        },
                    }}
                    onEnd={(e)=>{e.target.stopVideo(0);}}
                />
            </YouTubeContainer>
            <ButtonsContainer>
                <Button text="다른 소원 빌기" color="yellow" isActive={true} />
                <Button text="노래 전체 목록 보기" color="brown" isActive={true} />
            </ButtonsContainer>
        </BelowContainer>
    );
};

const BelowContainer = styled.div`
    @media (min-width: 501px) {
        width: 31.25rem; // 500px
        margin: 0 auto;
    }
    width: 100%;
    padding-left: 3.25rem;
    padding-right: 3.25rem;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ShareContainer = styled.div`
    width: 100%;
    margin-top: 2.56rem;
    margin-bottom: 2.88rem;
    padding-left: 3.25rem;
    padding-right: 3.25rem;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.div`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.44rem;
    color: #ACA298;
`;

const TitleText = styled.div`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
`;

const Icon = styled.img`
    cursor: pointer;
`;

const ShareIcons = styled.div`
    display: flex;
    width: 15rem;
    justify-content: space-between;
    align-items: center;
`;

const Spark = styled.img`
    position: absolute;
    top: -3.5rem;
    right: -3.5rem;
    z-index: 10;
`;

const YouTubeContainer = styled.div`
    width: 100%;
    max-width: 25rem;
    position: relative;
    overflow: visible;
    background: #ACA298;

    &::before {
        content: "";
        display: block;
        padding-top: 56.25%; 
        /* 16:9 비율 유지 */
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        max-width: 25rem;
    }

    @media (max-width: 480px) {
        max-width: 20rem;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.35rem;
`;