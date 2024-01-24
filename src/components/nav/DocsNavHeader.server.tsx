

export type DocsNavHeaderProps = {
    backLinkTitle: string,
    title: string
}
export const DocsNavHeader = ({ backLinkTitle, title }: DocsNavHeaderProps) => {

    return (
        <div className="d-none px-4 pb-3 border-bottom d-xxl-block">
            <div className="mt-3"><a rel="" className="f6 pl-2 pr-5 ml-n1 pb-1 Link--primary color-fg-default" href="/en">
                <svg aria-hidden="true" focusable="false" role="img" className="mr-1" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{"display":"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}}>
                    <path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"></path>
                </svg>
                {backLinkTitle}
            </a>
            </div>
            <div className="mt-3" id="allproducts-menu">
                <a rel="" data-testid="sidebar-product-xl" className="d-block pl-1 mb-2 h3 color-fg-default no-underline _product-title" href="/en/pages">{title}</a>
            </div>
        </div>
    )

}

                    