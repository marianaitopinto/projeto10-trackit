import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import styled from 'styled-components';

export default function Header() {
    const { photo } = useContext(UserContext);
    return (
        <BodyCss>
            <Container>
                <p>Trackit</p>
                <img src={photo} alt="user" />
            </Container>
        </BodyCss>
    )
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    display: flex;
    position: fixed;
    top: 0;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 1;
    
    img {
        width: 51px;
        height: 51px;
        background: url(image.png);
        border-radius: 98.5px;
    }

    p {
        font-size: 38.9px;
        line-height: 50px;
        color: #FFFFFF;
    }
`;

const BodyCss = styled.div`
    background: #E5E5E5;
    width: 375px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `