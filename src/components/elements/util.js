import Empty from "./../../assets/empty.gif";
import { monadColors } from "./colors";

export function _try(func, fallbackValue) {
  try {
    var value = func();
    return value === null || value === undefined ? fallbackValue : value;
  } catch (e) {
    return fallbackValue;
  }
}

export function imageError(ev) {
  ev.target.src = Empty;
}

export function perc2color(perc) {
  if (perc < 0) perc = 0;
  if (perc > 100) return "rgb(36, 255, 0)";
  var r,
    g,
    b = 0;
  if (perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  } else {
    g = 255;
    r = Math.round(510 - 5.1 * perc);
  }
  var h = r * 0x10000 + g * 0x100 + b * 0x1;
  return "#" + ("000000" + h.toString(16)).slice(-6);
}

export function roundDownToNearest10(num) {
  return Math.floor(num / 10) * 10;
}

export function RankColour(Rank) {
  if (!Rank) {
    return "";
  } else if (Rank === "F") {
    return `${monadColors.junk}`;
  } else if (Rank === "D") {
    return `${monadColors.common}`;
  } else if (Rank === "C") {
    return `${monadColors.intermediate}`;
  } else if (Rank === "B") {
    return `${monadColors.advanced}`;
  } else if (Rank === "A") {
    return `${monadColors.rare}`;
  } else if (Rank === "S") {
    return `${monadColors.epic}`;
  }
}
