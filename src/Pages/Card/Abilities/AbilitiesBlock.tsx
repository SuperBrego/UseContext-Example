import { ReactElement, useContext, useState } from "react";
import RenderCounter from "../../../Components/RenderCounter";
import { useGlobalCharContext } from "../../../Context/CharacterContext";
// import { useCharContext } from "../../../App";
import { Ability } from "../../../Types/Character";
import { Container } from "../../IntroPage/Pages.styles";
import AbilityComponent from "./AbilityComponent";

export default function AbilitiesBlock(): ReactElement {
    const { character } = useGlobalCharContext();
    const [abilities] = useState<Ability[]>(character.abilities);

    return <>
    <RenderCounter location='AbilitiesBlock' />
    <Container gridFlow='column'>
        {abilities.map((elem: Ability) => <AbilityComponent ability={elem} /> )}
    </Container>
    </>;
}