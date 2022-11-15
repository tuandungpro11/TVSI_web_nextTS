export type ShareholderRelationCategoryRouteParams = {
    slug: string
}
export type ShareholderRelationCategory = {
    id: number
    categoryName: string
    slug?: string
}
export type ShareholderRelationItem = {
    id: number
    title: string
    slug: string
    categoryId: number
    attachmentUrl: string
}
export type ShareholderRelationLayoutType = ShareholderRelationCategoryRouteParams & {}