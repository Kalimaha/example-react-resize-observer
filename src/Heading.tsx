import styled from "styled-components";

export const FontSize = [
  "12px",
  "16px",
  "20px",
  "24px",
  "28px",
  "30px",
  "40px",
  "60px",
  "80px",
  "100px",
  "120px",
  "140px",
  "160px",
  "180px",
];

const LetterSpacing = [
  "0px",
  "-0.45px",
  "-0.5px",
  "-0.6px",
  "-0.65px",
  "-0.7px",
  "-0.75px",
  "-0.8px",
  "-0.9px",
  "-1.0px",
  "-1.05px",
  "-1.2px",
  "-1.6px",
  "-2.4px",
];

const Color = {
  WHITE: "#fff",
  BLACK: "#131314",
  MOFO_GREEN: "#77b204",
  GREEN_LANTERN: "#48a90f",
  VADER: "#131314",
  DARK_MOFO: "#232627",
  RED_RED_WINE: "#9a0945",
  LIQUID_GOLD: "#d6a871",
  DORIAN_GRAY: "#626468",
  ALMOST_WHITE: "#f7f8fa",
  NEON_GREEN: "#cdff6b",
  BUBBLY: "#fff2d4",
  CHARLIE: "#fca403",
  CLOCKWORK: "#ff6d21",
  SUNLIT: "#fca403",
  DEAL: "#d51c5c",
  PINKY: "#ff62a5",
  MYSTIQUE: "#1392c5",
  PAPA_SMURF: "#1cb6f4",
  SMURFETTE: "#e0f6ff",
  large: "#e0f6ff",
  medium: "#9a0945",
  small: "#77b204",
} as {
  [key: string]: string
};

const FontFamily = {
  TEXT: `"Graphik", sans-serif`,
  HEADING: `"GT Walsheim", sans-serif`,
};

export interface HeadingProps {
  ref: string;
  color: string;
  size: number;
}

export const Heading = styled.h2<HeadingProps>`
  color: ${({ color }) => Color[color]};
  font-family: ${FontFamily.HEADING};
  font-size: ${({ size }) => FontSize[size]};
  letter-spacing: ${({ size }) => LetterSpacing[size]};
  margin-top: 0;
  margin-bottom: 0;
  id: ${({ ref }) => ref};
`;

Heading.defaultProps = {
  color: "DORIAN_GRAY",
  size: 10,
};
