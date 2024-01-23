

const path = require("path");
const fs = require("fs");
const test = "import { gridTokens } from \"../../stylex/tw/twTokens.stylex\";\nconst MOBILE = `@media only screen and (max-width: ${gridTokens.mobile})`;\nconst TABLET = `@media only screen and (max-width: ${gridTokens.tablet})`;\nconst DESKTOP = `@media only screen and (max-width: ${gridTokens.desktop})`;";

function processChunk(source, map) {
    this.cacheable()
    console.log(this.resource);
    //const optionsArray = getOptionsArray(this)
    let newSource = source;

    let breakpoints = /import {.*} from.*['"](.*\.breakpoints\.stylex.*)['"].*/.exec(newSource);
    if (breakpoints) {
        console.log(breakpoints);
        const module = path.join(path.dirname(this.resource), breakpoints[1]);
        console.log(module);
        const content = fs.readFileSync(module + [".ts", ".tsx"].filter(ext => fs.existsSync(module + ext))[0]);

        newSource = source.replace(/import {.*} from.*['"](.*\.breakpoints\.stylex.*)['"].*/, (str) => content);
        console.log(newSource);
    }

    //  console.log(source);

    this.callback(null, newSource, map)
}

module.exports = processChunk


