import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next/types'
import { Category, NewsCategoryLayoutType } from 'src/types/apps/newsType'
import NewsCategoryLayout from 'src/views/apps/news/NewsCategory'

const NewsApp = ({slug}: NewsCategoryLayoutType) => {
    return <NewsCategoryLayout slug={slug}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get('/apps/news/getAllCategories')
    const data: Category[] = await res.data.data
  
    const paths = data.map((category: Category) => ({
        params: { slug: category.slug }
    }))
  
    return {
      paths,
      fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
    return {
        props: {
            slug: params?.slug,
        },
        revalidate: 60
    }
}

export default NewsApp