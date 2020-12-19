import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';
import playStation from '../img/playstation.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import starfull from '../img/star-full.png'
import starempty from '../img/star-empty.png'



const GameDetail = () => {

    const history = useHistory();

    //Exit Detail

    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = 'auto';
            history.push('/')
        }

    };

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating)
        for (let i = 1; i <= 5; i++) {
            if( i <= rating) {
                stars.push(<img alt = "star" key = {i} src = {starfull}></img>)
            } else {
                stars.push(<img alt = "star" key = {i} src = {starempty}></img>)

            }
        };

        return stars;
    }

    const getPlatform = (platform) => {
        switch (platform) {
            case 'PlayStation 4':
                return playStation;
            case 'Xbox 1':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOs':
                return apple;
            default:
                return gamepad;
        }
    }

    const { screen, game, isLoading } = useSelector((state) => state.detail);
    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail>
                        <Stats>
                            <Rating>
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </Rating>
                            <Info>
                                <h3>Platforms</h3>
                                <Platform>
                                    {game.platforms.map((data) => (
                                        <img key={data.platform.id} src = {getPlatform(data.platform.name)} />
                                    ))}
                                </Platform>
                            </Info>

                        </Stats>
                        <Media>
                            <img src={game.background_image} alt="image" />
                        </Media>
                        <div className="description">
                            <p>{game.description_raw}</p>
                        </div>
                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img src={screen.image} key={screen.id} alt="game" />
                            ))}
                        </div>

                    </Detail>

                </CardShadow>
            )}
        </>
    )
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position:fixed;
  top:0;
  left:0;

  &::-webkit-scrollbar {
      width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
      background-color: orange;
  }
  &::-webkit-scrollbar-track {
      background: white;
  }
`;

const Detail = styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 80px;
background: white;
position:absolute;
left: 10%;
color: black;
img {
    width: 100%;
}
`;

const Stats = styled(motion.div)`
 display: flex;
 align-items:center;
 justify-content: space-between;

`
const Rating = styled(motion.div)`
 img {
     display: inline;
     width: 1.5rem;
     height: 1.5rem;
     
 }

`

const Info = styled(motion.div)`
 text-align: center;
`

const Platform = styled(motion.div)`
display: flex;
justify-content: space-evenly;
img {
    margin-left: 2rem;
}
`;

const Media = styled(motion.div)`
margin-top: 3rem;
img {
    width:100%
}
`;





export default GameDetail;

