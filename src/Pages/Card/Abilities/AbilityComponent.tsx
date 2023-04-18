import { ReactElement, useState } from "react";
import RenderCounter from "../../../Components/RenderCounter";
import { useGlobalCharContext } from "../../../Context/CharacterContext";
// import { useCharContext } from "../../../App";
import { Ability } from "../../../Types/Character";
import { Container } from "../../IntroPage/Pages.styles";

type abilityProps = {
    ability: Ability,
}

export default function AbilityComponent(props: abilityProps): ReactElement {
    const { setAbility } = useGlobalCharContext();
    const [rank, setRank] = useState<number>(props.ability.rank);

    function updateRank(addRank: number): void {
        let newRank: number = rank;
        newRank += addRank;
        props.ability.rank = newRank;
        setAbility(props.ability.id, newRank);
        setRank(newRank);
    }

    return <>

    <RenderCounter location={`${props.ability.name}`} />
    <Container key={props.ability.id} color={'lightgreen'}>
        <button onClick={() => updateRank(+1)}>+</button>
        <p>{props.ability.name}</p>
        <p>{props.ability.rank}</p>
        <button onClick={() => updateRank(-1)}>-</button>
    </Container>
    </>
}