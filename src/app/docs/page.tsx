
import { docsStyle } from "./docs.stylex"; 
import stylex from "@stylexjs/stylex"


export default function DocsWelcomePage() {


    return <div {...stylex.props(docsStyle.welcome)}>Welcome to EAVFW Docs</div>
}