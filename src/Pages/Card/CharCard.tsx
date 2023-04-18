import './ChardCard.styles.tsx';
import { ReactElement, useRef } from "react";
import { Container, Header } from "../IntroPage/Pages.styles";
import AbilitiesBlock from "./Abilities/AbilitiesBlock";
import { Card } from './ChardCard.styles';
import NameEdit from "./NameEditing/NameEdit";
import { useGlobalCharContext } from '../../Context/CharacterContext';
import { Ability } from '../../Types/Character';
import RenderCounter from '../../Components/RenderCounter';

export default function CharCard(): ReactElement {
    const { character } = useGlobalCharContext();

    return <>
    <Card>
        <Header>{character.name}</Header>
        {/* <NameEdit /> */}
        <RenderCounter location='CharCard' />
        <Container color='lightblue'>
            Habilidades
        </Container>
        <Container gridFlow="column">
            <Container>
                Total
                <Container color={"white"}>
                    {character.abilities.map((elem: Ability) => <p>{elem.name} • {elem.rank}</p>)}
                </Container>
            </Container>
            {/* Campo de Edição das Habilidades */}
            <AbilitiesBlock />
        </Container>
    </Card>
    </>;
}