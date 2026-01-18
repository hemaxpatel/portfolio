"use client";
import { useMemo } from "react";
import { Cloud } from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      background: "transparent",
      paddingTop: 30,
    },
  },
  options: {
    reverse: true,
    depth: 0.5,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: false,
  },
};

const renderCustomImage = (imageSrc, alt, index) => {
  return (
    <a key={`${alt}-${index}`} href="#" onClick={(e) => e.preventDefault()}>
      <img
        src={imageSrc}
        alt={alt}
        width="50"
        height="50"
        style={{
          width: "50px",
          height: "50px",
          objectFit: "contain",
        }}
      />
    </a>
  );
};

export default function IconCloud({ customImages }) {
  const renderedIcons = useMemo(() => {
    if (!customImages || customImages.length === 0) {
      return [];
    }

    return customImages.map((image, index) =>
      renderCustomImage(image.src, image.alt, index)
    );
  }, [customImages]);

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
