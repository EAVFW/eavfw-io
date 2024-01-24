
import icon from "@/../public/icon.svg";
import Image from 'next/image';
export const Header = () => {

    return (
        <div data-container="header" className="border-bottom d-unset color-border-muted no-print z-3 color-bg-default Header_header__frpqb">
            <div></div>
            <header className="color-bg-default p-2 position-sticky top-0 z-1 border-bottom" role="banner" aria-label="Main">
                <div className="d-flex flex-justify-between p-2 flex-items-center flex-wrap" data-testid="desktop-header">
                    <div tabIndex={-1} className="Header_logoWithClosedSearch__zhF6Q" id="EAVFW-logo">
                        <a rel="" className="d-flex flex-items-center color-fg-default no-underline mr-3" href="/en">
                            {/*<svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-mark-EAVFW" viewBox="0 0 16 16" width="32" height="32" fill="currentColor" style={{ "display": "inline-block", "userSelect": "none", "verticalAlign": "text-bottom", "overflow": "visible" }}>*/}
                            {/*    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>*/}
                            {/*</svg>*/}
                             
                            <Image
                                priority
                                src={icon}
                                alt="Home"
                                height={40 }
                            />
                            <span className="h4 text-semibold ml-2 mr-3">EAVFW Docs</span>
                        </a>
                        <div className="hide-sm border-left pl-3">
                            <div data-testid="version-picker" className="">
                                <button type="button" aria-label="Select EAVFW product version: current version is free-pro-team@latest" className="types__StyledButton-sc-ws60qy-0 kmxwYj color-fg-default width-full p-1 pl-2 pr-2" id=":R9cr6:" aria-haspopup="true" tabIndex={0}>
                                    <span data-component="buttonContent" className="Box-sc-g0xbh4-0 cEhRXB">
                                        <span data-component="text">
                                            <span style={{ "whiteSpace": "pre-wrap" }}>Version: </span>
                                            <span className="f5 color-fg-muted text-normal" data-testid="field">Free, Pro, &amp; Team</span>
                                        </span>
                                    </span>
                                    <span data-component="trailingAction" className="Box-sc-g0xbh4-0 dmdEgz">
                                        <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{ "display": "inline-block", "userSelect": "none", "verticalAlign": "text-bottom", "overflow": "visible" }} >
                                            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-items-center">
                        <div className="Header_searchContainerWithClosedSearch__h372b mr-3"><div data-testid="search"><div className="position-relative z-2">
                            <form role="search" className="width-full d-flex">
                                <meta name="viewport" content="width=device-width initial-scale=1" />
                                <label className="text-normal width-full">
                                    <span className="visually-hidden" aria-describedby="Enter a search term to find it in the EAVFW Docs.">Search EAVFW Docs</span>
                                    <span className="TextInputWrapper__TextInputBaseWrapper-sc-1mqhpbi-0 TextInputWrapper-sc-1mqhpbi-1 bwNwji erLEIl TextInput-wrapper" aria-busy="false">
                                        <input type="search" required data-testid="site-search-input" placeholder="Search EAVFW Docs" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" maxLength={512} aria-label="Search EAVFW Docs" aria-describedby="Enter a search term to find it in the EAVFW Docs." data-component="input" className="UnstyledTextInput-sc-14ypya-0 jvumlb" value="" />
                                    </span>
                                </label>
                                <button data-component="IconButton" type="submit" aria-label="Search" data-no-visuals="true" className="types__StyledButton-sc-ws60qy-0 ctzMFf">
                                    <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{ "display": "inline-block", "userSelect": "none", "verticalAlign": "text-bottom", "overflow": "visible" }} ><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg>
                                </button>
                            </form>
                        </div>
                        </div>
                        </div>
                        <div className="d-none d-lg-flex flex-items-center"><div data-testid="language-picker" className="d-flex">
                            <button data-component="IconButton" type="button" aria-label="Select language: current language is English" id=":Racr6:" aria-haspopup="true" tabIndex={0} data-no-visuals="true" className="types__StyledButton-sc-ws60qy-0 gPJIFz">
                                <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-globe" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{ "display": "inline-block", "userSelect": "none", "verticalAlign": "text-bottom", "overflow": "visible" }}>
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.78 8.75a9.64 9.64 0 0 0 1.363 4.177c.255.426.542.832.857 1.215.245-.296.551-.705.857-1.215A9.64 9.64 0 0 0 10.22 8.75Zm4.44-1.5a9.64 9.64 0 0 0-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 0 0-.857 1.215A9.64 9.64 0 0 0 5.78 7.25Zm-5.944 1.5H1.543a6.507 6.507 0 0 0 4.666 5.5c-.123-.181-.24-.365-.352-.552-.715-1.192-1.437-2.874-1.581-4.948Zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.507 6.507 0 0 0-4.666 5.5Zm10.181 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.507 6.507 0 0 0 4.666-5.5Zm2.733-1.5a6.507 6.507 0 0 0-4.666-5.5c.123.181.24.365.353.552.714 1.192 1.436 2.874 1.58 4.948Z"></path></svg>
                            </button>
                        </div>
                        </div>
                        <button data-component="IconButton" type="button" className="types__StyledButton-sc-ws60qy-0 gPJIFz hide-lg hide-xl d-flex flex-items-center" data-testid="mobile-search-button" aria-label="Open Search Bar" aria-expanded="false" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{ "display": "inline-block", "userSelect": "none", "verticalAlign": "text-bottom", "overflow": "visible" }}><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg>
                        </button>
                        <button data-component="IconButton" type="button" className="types__StyledButton-sc-ws60qy-0 lfyvAm px-3" data-testid="mobile-search-button" aria-label="Close Search Bar" aria-expanded="false" data-no-visuals="true">
                            <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-x" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{ "display": "inline-block", "userSelect": "none", "verticalAlign": "text-bottom", "overflow": "visible" }}><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg>
                        </button>
                        <div><button data-component="IconButton" type="button" data-testid="mobile-menu" aria-label="Open Menu" id=":Rqcr6:" aria-haspopup="true" tabIndex={0} data-no-visuals="true" className="types__StyledButton-sc-ws60qy-0 LjTFK">
                            <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{ "display": "inline-block", "userSelect": "none", "verticalAlign": "text-bottom", "overflow": "visible" }}><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}