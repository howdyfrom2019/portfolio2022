import React, {CSSProperties} from "react";
import {ReactComponent as SpinnerSVG} from "../assets/svg/spinner.svg";

interface SpinnerProps {
  className?: string;
  style?: CSSProperties;
}

const Spinner: React.FC<SpinnerProps> = ({className, style}) => {
  return (
    <>
      <SpinnerSVG className={`${className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} style={style}/>
      <span
        className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-7xl font-sans uppercase"}>loading...</span>
    </>
  );
}

export default Spinner;