import mock from 'src/@fake-db/mock'
import { Category, NewsItem } from 'src/types/apps/newsType'
import { news } from './mock-news'

const categories: Category[] = [
    { id: 1, categoryName: "Tin TVSI", slug: "tin-tvsi"},
    { id: 2, categoryName: "TVSI Vì cộng đồng", slug: "vi-cong-dong"},
    { id: 3, categoryName: "Ảnh tư liệu", slug: "anh-tu-lieu"},
]

mock.onGet('/apps/news/getNewsBySlug').reply(config => {
    const { slug = 'tin-tvsi', page = 1 } = config.params ?? ''
    const filteredData = news.filter(x => x.slug == slug)
    const result = filteredData.slice((page - 1) * 12, page * 12)
    return [
        200, 
        {
            params: config.params, 
            data: result,
            totalRows: filteredData.length,
            totalPage: filteredData.length % 12 == 0 ? filteredData.length / 12 + 1 : Math.floor(filteredData.length / 12)
        }
    ]
})

mock.onGet('/apps/news/getAllNews').reply(config => {
    return [
        200, 
        {
            params: config.params, 
            data: news,
            totalRows: news.length,
            totalPage: news.length % 12 == 0 ? news.length / 12 : Math.floor(news.length)
        }
    ]
})

mock.onGet('/apps/news/getById').reply(config => {
    const { id = 1 } = config.params ?? ''
    const [result] = news.filter(x => x.id == id) 
    return [
        200, 
        {
            params: config.params, 
            data: result,
        }
    ]
})

mock.onGet('/apps/news/getAllCategories').reply(config => {
    return [200, { data: [...categories] }]
})

mock.onGet('/apps/news/getCategoryBySlug').reply(config => {
    const { slug = 'tin-tvsi'} = config.params ?? ''
    const [result] = categories.map(x => x.slug === slug) 
    return [200, { params: config.params, data: result}]
})