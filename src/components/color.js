import Empty from "./../assets/empty.gif";
export function imageError(ev) {
  ev.target.src = Empty
}

export const colors = {
    blue: "#0d89eb",
    lightBlue: "#2CA8FF",
    darkBlue: "#161b21",
    red: "#f92b00",
    lightRed: "#ff5745",
    green: "#54cc4f",
    offWhite: '#CCCCCC',
    offBlack: '#1A1A1A',
    grey: '#474747',
    electricLime: '#c1ff00',
    lightBackground: `linear-gradient(0deg, rgba(34,89,195,0.7) 9%, rgba(45,253,209,0.3) 100% )`,
}

export const BackgroundColor = `
linear-gradient(
    0deg,
    rgba(34, 89, 195, 0.7) 9%,
    rgba(45, 253, 209, 0.3) 100%
  );
`

export const HomeColors = {
    LinkHover: colors.lightBlue,
    Button: colors.blue,
    ButtonHover: colors.lightBlue,
    circle1: `linear-gradient(
        0deg,
        rgba(255, 0, 221, 0.7),
        rgba(255, 255, 255, 0.3)
      );`,
    circle2: `linear-gradient(
        0deg,
        rgba(255, 0, 221, 0.7),
        rgba(255, 255, 255, 0.3)
      );`,
}

export const NavColors = {
    NavBar: colors.blue,
}