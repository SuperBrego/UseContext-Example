import { ReactElement, useRef } from "react";

type renderProps = {
    location?: string
}

export default function RenderCounter(props: renderProps): ReactElement {
    const location: string = (props.location) ? props.location : '';

    const renderCounter  = useRef(0);
    renderCounter.current = renderCounter.current + 1;

    return <>
    {/* <span style={{color: 'white'}}>Render Count in {location} {renderCounter.current}</span> */}
    </>
}