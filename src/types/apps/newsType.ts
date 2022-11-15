export type NewsCategoryRouteParams = {
    slug?: string
}
export type NewsDetailRouteParams = {
    id?: string
}
export type NewsItem = {
    id: string
    title: string
    categoryId?: number
    categoryName?: string
    slug: string
    createdDate: string
}
export type Category = {
    id: number
    categoryName: string
    slug?: string
    children?: Category[]
    posts?: PostNavItem[]
    redirectUrl?: string
}
export type Post = {
    id: number
    title: string
    slug: string
    categoryId: number
    content: string
}
export type PostNavItem = Pick<Post, "id" | "title" | "slug">
export type NewsCategoryLayoutType = NewsCategoryRouteParams & {}
export type NewsDetailType = NewsDetailRouteParams & {}