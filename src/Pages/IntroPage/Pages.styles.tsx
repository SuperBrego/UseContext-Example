import styled from 'styled-components';

interface ContainerProps {
    color?: string;
    gridFlow?: string;
}

export const Container = styled.div<ContainerProps>`
    display: grid;
    grid-auto-flow: ${props => props.gridFlow || 'row'};
    background-color: ${props => props.color || 'SteelBlue'};
    padding: 10px;
    border-radius: 5px;

    Header {
        border-radius: 5px;
    }
`;

interface HeaderProps {
    color?: string;
}

export const Header = styled.header<HeaderProps>`
    text-align: center;
    background-color: ${props => props.color || 'lightblue'};
    font-size: 2vw;
    font-weight: bold;
`;