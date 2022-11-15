import mock from 'src/@fake-db/mock'
import { Category, NewsItem } from 'src/types/apps/newsType'
import { news } from './mock-news'

const categories: Category[] = [
    { id: 1, categoryName: "Sản phẩm & dịch vụ", slug: "san-pham-dich-vu", children: [
        { id: 5, categoryName: "Đầu tư", slug: "dau-tu", posts: [
            { id: 1, title: "Chứng khoán cơ sở", slug: "chung-khoan-co-so"},
            { id: 2, title: "Trái phiếu", slug: "trai-phieu"},
        ]},
        { id: 6, categoryName: "Dịch vụ chứng khoán", slug: "dich-vu-chung-khoan", posts: [
            { id: 3, title: "Lưu ký chứng khoán", slug: "luu-ky-chung-khoan"},
            { id: 4, title: "Thực hiện quyền", slug: "thuc-hien-quyen"},
            { id: 5, title: "Đại lý đấu giá", slug: "dai-ly-dau-gia"},
            { id: 6, title: "Quản lý sổ cổ đông", slug: "quan-ly-so-co-dong"},
        ]},
        { id: 7, categoryName: "Dịch vụ tài chính", slug: "dich-vu-tai-chinh", posts: [
            { id: 7, title: "Cho vay GDKQ", slug: "cho-vay-gdkq"},
            { id: 8, title: "Ứng trước tiền bán", slug: "ung-truoc-tien"},
            { id: 9, title: "Rút tiền bằng sức mua", slug: "rut-tien-bang-suc-mua"},
        ]},
        { id: 8, categoryName: "Tài chính doanh nghiệp", slug: "tai-chinh-doanh-nghiep", posts: [
            { id: 10, title: "Nghiệp vụ thị trường vốn", slug: "nghiep-vu-thi-truong-von"},
            { id: 11, title: "Nghiệp vụ thị trường nợ", slug: "nghiep-vu-thi-truong-no"},
            { id: 12, title: "Nghiệp vụ ngân hàng đầu tư", slug: "nghiep-vu-ngan-hang-dau-tu"},
        ]},
    ]},
    { id: 2, categoryName: "Trung tâm phân tích", redirectUrl: "https://ifin.tvsi.com.vn/"},
    { id: 3, categoryName: "Biểu phí", slug: "bieu-phi",  children: [
        { id: 9, categoryName: "Các loại phí dịch vụ", slug: "phi-dich-vu", posts: [
            { id: 13, title: "Biểu phi giao dịch chứng khoán", slug: "bieu-phi-gdck"},
            { id: 14, title: "Biểu phi giao dịch trái phiếu", slug: "bieu-phi-gdtp"},
            { id: 15, title: "Biểu phi các dịch vụ khác", slug: "bieu-phi-dv"},
        ]},
    ]},
    { id: 4, categoryName: "Hỗ trợ", slug: "ho-tro", children: [
        { id: 10, categoryName: "Câu hỏi thường gặp", redirectUrl: "https://faq.tvsi.com.vn/"},
        { id: 11, categoryName: "Kiến thức tài chính", slug: "kien-thuc-tai-chinh"},
        { id: 12, categoryName: "Lịch hội thảo & đào tạo", slug: "lich-hoi-tao-dao-tao"},
    ]},
]

mock.onGet('/apps/categories/getAllCategories').reply(config => {
    return [
        200, 
        {
            params: config.params, 
            data: news,
        }
    ]
})

mock.onGet('/apps/categories/getById').reply(config => {
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

mock.onGet('/apps/categories/getAllCategories').reply(config => {
    return [200, { data: [...categories] }]
})

mock.onGet('/apps/categories/getCategoryBySlug').reply(config => {
    const { slug = 'tin-tvsi'} = config.params ?? ''
    const [result] = categories.map(x => x.slug === slug) 
    return [200, { params: config.params, data: result}]
})