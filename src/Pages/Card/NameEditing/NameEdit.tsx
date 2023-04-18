import { ReactElement, useRef, useState } from "react";
// import { useGlobalContext } from "../../../App";

export default function NameEdit(): ReactElement {
    // const { copy, setCopy } = useGlobalContext();
    const nameRef = useRef();
    // nameRef.current = copy;
    // const [name, setName] = useState<string>(copy);

    const renderCounter  = useRef(0);
    renderCounter.current = renderCounter.current + 1;

    return <>
    {/* <input 
    type    = "text" 
    ref     = {nameRef.current}
    value   = {name}
    // placeholder   = {copy} 
    onChange= {(e: any) => setName(e.target.value)} 
    onBlur  = {(e: any) => setCopy(e.target.value)} 
    />
    <span>Input Render {renderCounter.current}</span> */}
    </>;
}