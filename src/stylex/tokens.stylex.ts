import stylex from "@stylexjs/stylex";
import { media } from "./dark.breakpoints.stylex";



export const tokens = stylex.defineVars({
    maxWith: '1100px',
    foregroundRgb: {
        default: '0, 0, 0',
        [media.DARK]:'255, 255, 255'
    }
})