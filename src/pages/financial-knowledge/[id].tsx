import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next/types'
import { NewsDetailType, NewsItem } from 'src/types/apps/newsType'
import NewsLayout from 'src/views/apps/news/News'

const NewsApp = ({id}: NewsDetailType) => {
    return <NewsLayout id={id}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get('/apps/news/getAllNews')
    const data: NewsItem[] = await res.data.data
  
    const paths = data.map((news: NewsItem) => ({
        params: { id: news.id.toString() }
    }))
  
    return {
      paths,
      fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
    return {
        props: {
            id: params?.id,
        },
        revalidate: 60
    }
}

export default NewsApp