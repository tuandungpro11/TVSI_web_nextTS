import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next/types'
import { NewsItem } from 'src/types/apps/newsType'
import { ShareholderRelationLayoutType } from 'src/types/apps/shareholderRelationType'
import ShareholdersRelationLayout from 'src/views/components/shareholdersRelationLayout'

const ShareholdersRelationApp = ({slug}: ShareholderRelationLayoutType) => {
    return <ShareholdersRelationLayout slug={slug}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get('/apps/news/getAllNews')
  
    const paths = [
        {params: {slug: 'financial-report'}},
        {params: {slug: 'annual-report'}},
        {params: {slug: 'corporate-governance'}},
        {params: {slug: 'shareholder-meetings'}},
        {params: {slug: 'puhlished-information'}},
    ]
  
    return {
      paths,
      fallback: false
    }
}

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
    return {
        props: {
            slug: params?.slug,
        },
    }
}

export default ShareholdersRelationApp