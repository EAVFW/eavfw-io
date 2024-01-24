import { getCategoryAsync } from "../../eav"
import { DocsNavHeader } from "./DocsNavHeader.server"
import { DocsNavTopics } from "./DocsNavTopic.server"

export type DocsNav = {
    categoryid: string
}
export const DocsNav =async ({ categoryid }: DocsNav) => {


    const category = await getCategoryAsync(categoryid);

    return (
        <div data-container="nav" className="position-sticky d-none border-right d-xxl-block" style={{ width: '326px', height: 'calc(100vh - 65px)', top: '65px' }} >
            <nav aria-labelledby="allproducts-menu">

                <DocsNavHeader backLinkTitle="Home" title={category.category} />

                <DocsNavTopics categoryId={categoryid} />


            </nav>
        </div>
    )
}