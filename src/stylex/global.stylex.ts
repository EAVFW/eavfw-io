import stylex from "@stylexjs/stylex";
import { tokens } from "./tokens.stylex";



export const styles = stylex.create({
    html: {
        "maxWidth": "100vw",
        "overflowX": "hidden"
    },
    body: {
        color: `rgb(${tokens.foregroundRgb})`
   
    }
});
