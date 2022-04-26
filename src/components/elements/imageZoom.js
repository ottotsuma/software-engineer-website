import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageZoom = (props) => {
  return (
    <>
        <TransformWrapper
            defaultScale={1}
            defaultPositionX={1}
            defaultPositionY={1}
        >
            <TransformComponent>
            <img alt={props.alt} src={props.image} style={{ width: "100%" }} />
            </TransformComponent>
        </TransformWrapper>
    </>
  );
};

export default ImageZoom;