import { LabelType } from "../types";
import { THEME_BLACK, THEME_BLUE, THEME_RED, THEME_WHITE, THEME_YELLOW } from "./GlobalStyle";

export default function getColor(isIcon: boolean, label?: LabelType): string {
  if (!label) return isIcon ? THEME_BLACK : THEME_WHITE;
  switch(label.name) {
    case 'Need':
      return THEME_YELLOW;
    case 'Want':
      return THEME_RED;
    case 'Routine':
      return THEME_BLUE;
    default:
      return isIcon ? THEME_BLACK : THEME_WHITE;
  }
}