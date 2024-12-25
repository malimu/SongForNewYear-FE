import React, { useEffect } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { ImageDownloadButton } from './ImageDownloadButton';
import { Button } from '../Button';
import twitter from '../../assets/ResultPage/twitter_icon.svg';
import kakao from '../../assets/ResultPage/kakao_icon.svg';
import copylink from '../../assets/ResultPage/copylink_icon.svg';
import spark from '../../assets/ResultPage/light_object.svg';
import { useNavigate } from 'react-router-dom';

export const BelowContents = ({ onCapture, videoCode, nickname, songTitle, lyrics, artist, wishCount }) => {
    const nav = useNavigate();
    const shareUrl = 'https://songfornewyear.vercel.app/';

    useEffect(() => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
        }
    }, []);

    const messagesArray = [
        "원하는 대로 다 이룰 수 있는 새해가 될 거예요🌄",
        "마음껏 사랑하는 한 해이길 바라요💕",
        "가고 싶은 대로 길이 만들어질 거예요🏃💨",
        "행운🍀도 행복☘️도 가득한 새해가 되길",
        "꿈꿔온 모든 것이 펼쳐지는 한 해일 거예요🌟",
        "소중한 사람들과 소중한 추억을 만들어요🎆",
        "한 걸음씩 나아가는 용기 있는 한 해가 될 거예요💪",
        "새로운 시작, 새로운 기회가 함께하는 한 해 되세요✈️",
        "웃음 가득한 새해가 될 거예요😄",
        "반짝반짝 빛나는 한 해가 될 거예요✨",
    ];

    const message = messagesArray[Math.floor(Math.random() * messagesArray.length)];

    const twitterText = `[${nickname} 님을 위한 새해 첫곡]%0A🎵${songTitle} - ${artist}%0A" ${lyrics} "%0A${message}%0A새해 첫곡 고르러 가기▶️`;

    const shareOnTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterUrl, '_blank');
    };

    const shareOnKakao = () => {

        if (window.Kakao && window.Kakao.isInitialized()) {
            window.Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: `${nickname} 님을 위한 새해 첫곡`,
                    description: `🎵${songTitle} - ${artist}\n" ${lyrics} "\n${message}`,
                    imageUrl: '',
                    link: {
                        mobileWebUrl: shareUrl,
                        webUrl: shareUrl,
                    },
                },
                buttons: [
                    {
                        title: '새해 첫곡 고르러 가기▶️',
                        link: {
                            mobileWebUrl: shareUrl,
                            webUrl: shareUrl,
                        },
                    },
                ],
            });
        } else {
            navigator.clipboard.writeText(
                `[${nickname} 님을 위한 새해첫곡]\n🎵${songTitle} - ${artist}\n" ${lyrics} "\n${message}\n${shareUrl}`
            )
            .then(() => {
                alert('클립보드에 카카오톡 공유 내용이 복사되었습니다!');
            })
            .catch(() => {
                alert('공유 링크 복사에 실패했습니다. 다시 시도해주세요.');
            });
        }
    };

    const copyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('공유 링크가 복사되었습니다!');
        });
    };

    return (
        <BelowContainer>
            <ImageDownloadButton onClick={onCapture} />
            <ShareContainer>
                <TitleText>공유하기</TitleText>
                <ShareIcons>
                    <Icon src={twitter} onClick={shareOnTwitter}/>
                    <Icon src={kakao} onClick={shareOnKakao}/>
                    <Icon src={copylink} onClick={copyLink}/>
                </ShareIcons>
            </ShareContainer>
            <Text>
                지금까지 {wishCount}명이<br />이 노래를 추천받았어요
            </Text>
            <TitleText>
                바로 들어보고 싶다면
            </TitleText>
            <YouTubeContainer>
                <Spark src={spark} />
                <YouTube 
                    videoId={videoCode}
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
                <Button text="다른 소원 빌기" color="yellow" isActive={true} onClick={() => nav('/')} />
                <Button text="노래 전체 목록 보기" color="brown" isActive={true} onClick={() => nav('/songlist')} />
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