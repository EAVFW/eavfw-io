
const iopath = require('path');
const fs = require('fs');
module.exports = function ({ types: t }, opt) {
    //  console.log(t);
    return {
        visitor: {
            Program: {
                enter: (path, s) => {
                    //  console.log(t);
                    // console.log(path)

                    //   console.log(path.hub.file.code);

                    path.traverse({
                        ImportDeclaration(path) {
                            // console.log("program declaration", path.node.source.value);
                            // if (path.node.source.value.indexof('.breakpoints.') !== -1) {
                            //     console.log("breakpoints", path.node.source.value);
                            // }
                            // if (path.node.key.name.endsWith(classMethodEnv)) {
                            ///    path.remove();
                            // }
                        }
                    });

                    console.log()
                    console.log()


                }

            },
            ImportDeclaration(path, state) {
                //    console.log("breakpoints", path.node.source.value);
                if (path.node.source.value.indexOf('.breakpoints.') !== -1) {
                    console.log("breakpoints", path.node.source.value);
                    //                        [state, path.node.source.value, path]);
                    const module = iopath.join(iopath.dirname(opt.resource), path.node.source.value);
                    //   const content = fs.readFileSync(module+[".ts", ".tsx"].filter(ext => fs.existsSync(module + ext))[0]);

                    const content = "import { gridTokens } from \"./twTokens.stylex\";\nconst MOBILE = `@media only screen and (max-width: ${gridTokens.mobile})`;\nconst TABLET = `@media only screen and (max-width: ${gridTokens.tablet})`;\nconst DESKTOP = `@media only screen and (max-width: ${gridTokens.desktop})`;";

                    console.log("Replaced breakpoints with\n" + content);
                    path.replaceWith(t.stringLiteral(content));


                }
                return;

                var identifiers = state.opts.identifiers || [],
                    prefix = state.opts.prefix || ".",
                    postfix = state.opts.postfix || "",
                    fallback = state.opts.fallback || "",
                    dels = state.opts.delimiters || ["{", "}"],
                    value = path.node.source.value, // the last part of: import x from './y'
                    ident,
                    identPad,
                    replacement

                for (ident of identifiers) {
                    identPad = dels[0] + ident + dels[1]

                    if (!value.includes(identPad)) {
                        continue
                    }

                    replacement = (process.env[ident] || fallback).trim()

                    if (replacement !== "") {
                        replacement = prefix + replacement + postfix
                    }

                    value = value.split(identPad).join(replacement)
                }

                if (value === path.node.source.value) {
                    return
                }

                path.replaceWith(
                    t.importDeclaration(
                        path.node.specifiers,
                        t.stringLiteral(value)
                    )
                )
            }
        }
    }
}