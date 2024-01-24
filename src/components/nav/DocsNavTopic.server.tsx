import { getArticlesAsync, getTopicsAsync } from "../../eav"
import { Post } from "../../eav/Post"
import { getCurrentLocale } from "../../locales/server"


export const DocsNavArticle = ({ title, categoryId, topicId, article }: Post & DocsNavArticlesProps & { article: string }) => {

    const locale = getCurrentLocale();

    return (
        <li className="Item__LiBox-sc-yeql7o-0 bFlTuc">
            <a tabIndex={0} aria-labelledby=":Rqlj36:--label " id=":Rqlj36:" aria-current="false" href={`/${locale}/docs/${categoryId}/${topicId}/${article}`} className="Link__StyledLink-sc-14289xe-0 cyYuMS">
                <div data-component="ActionList.Item--DividerContainer" className="Box-sc-g0xbh4-0 hROlum">
                    <span id=":Rqlj36:--label" className="Box-sc-g0xbh4-0 iGPchh">{title}</span>
                </div>
            </a>
        </li>
    )
}

export type DocsNavArticlesProps = {
    categoryId: string,
    topicId:string
}
export const DocsNavArticles = async ({ categoryId,topicId }: DocsNavArticlesProps) => {

    const articles = await getArticlesAsync(categoryId, topicId);

    return (
        <ul id=":Rlj36H1:" aria-labelledby=":Rlj36:" className="Box-sc-g0xbh4-0 gMkIpo">
            {articles.map(a => <DocsNavArticle key={a.article} categoryId={categoryId} topicId={topicId} {...a} />)}
        </ul>
    )
}

export const DocsNavTopic = ({ categoryId,topicId }: DocsNavArticlesProps) => {


    return (
        <li aria-labelledby=":Rlj36:" className="Box-sc-g0xbh4-0 Ywlla">
            <button tabIndex={0} aria-labelledby=":Rlj36:--label " id=":Rlj36:" aria-expanded="false" aria-controls=":Rlj36H1:" className="Item__LiBox-sc-yeql7o-0 fOqRlj">
                <div data-component="ActionList.Item--DividerContainer" className="Box-sc-g0xbh4-0 hROlum">
                    <div className="Box-sc-g0xbh4-0 cUxMoC">
                        <span id=":Rlj36:--label" className="Box-sc-g0xbh4-0 iGPchh">{topicId}</span>
                        <span className="Box-sc-g0xbh4-0 bQYDur">
                            <svg aria-hidden="true" focusable="false" role="img" className="Octicon-sc-9kayk9-0 daAEFx" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{display:'inline-block',userSelect:'none',verticalAlign:'textBottom',overflow:'visible'}}>
                                <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </button>
            <div>
                <DocsNavArticles categoryId={categoryId} topicId={topicId} />
            </div>
        </li>
    )

    return (
        <li className="Item__LiBox-sc-yeql7o-0 bFlTuc">
            <a tabIndex={0} aria-labelledby=":Rdj36:--label " id=":Rdj36:" aria-current="false" href="/en/pages/quickstart" className="Link__StyledLink-sc-14289xe-0 NyjZv">
                <div data-component="ActionList.Item--DividerContainer" className="Box-sc-g0xbh4-0 hROlum">
                    <span id=":Rdj36:--label" className="Box-sc-g0xbh4-0 iGPchh">Quickstart</span>
                </div>
            </a>
        </li>
    )
}


export type DocsNavTopicsProps = {
    categoryId: string
}
export const DocsNavTopics = async ({categoryId }: DocsNavTopicsProps) => {

    const topics = await getTopicsAsync(categoryId);

    return (
        <div className="border-right d-none d-xxl-block bg-primary overflow-y-auto flex-shrink-0" style={{ width: '326px', height: 'calc(100vh - 175px)', paddingBottom: '185px' }}>
            <div data-testid="sidebar" style={{overflowY:"auto"}} className="pt-3">
                <div className="ml-3" data-testid="product-sidebar">
                    <nav aria-label="Product sidebar" className="NavList__NavBox-sc-1c8ygf7-0">
                        <ul className="List__ListBox-sc-1x7olzq-0 hgjakc">
                            {topics.map(t => <DocsNavTopic key={t.topic} categoryId={categoryId} topicId={t.topic} {...t} />)}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}