import stylex from "@stylexjs/stylex";
import { layoutTokens } from "./layout.tokens.stylex";

export const RootStyles = stylex.create({
    displayUnset: {
        display: 'unset'
    },
    colorBorderMuted: {
        borderColor: `${layoutTokens.borderColorMuted}!important`
    },
    z3: {
        zIndex:3,
    },

})
