import axios from "axios"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next/types'
import { ShareholderRelationLayoutType } from "src/types/apps/shareholderRelationType"
import AboutLayout from "src/views/components/aboutLayout"

const AboutUsApp = ({slug}: ShareholderRelationLayoutType) => {
    return <AboutLayout slug={slug}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {params: {slug: 'index'}},
        {params: {slug: 'enterprise-value'}},
        {params: {slug: 'milestones'}},
        {params: {slug: 'teams'}},
        {params: {slug: 'transaction-network'}},
        {params: {slug: 'profile'}},
    ]
  
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

export default AboutUsApp