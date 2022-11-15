import Link from "next/link"
import { useState } from "react"
import { NewsDisplayType } from "src/types/enum"

interface NewsCardProps {
    Title: string
    CategoryName: string
    CreatedDate: string
    RedirectUrl: string
    displayType: NewsDisplayType
}
const NewsCard = (props: NewsCardProps) => {
    return props.displayType === NewsDisplayType.HOME ? 
        <div style={{display: 'flex', gap: '20px'}}>
            <Link href={props.RedirectUrl}>
                <img src='/images/featured_news.png' style={{width: '200px', height: '115px', cursor: 'pointer'}}/>
            </Link>
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-around',
                
            }}>
                <Link href={props.RedirectUrl}>
                    <h4 style={{margin: 0, cursor: 'pointer'}}>{props.Title}</h4>
                </Link>
                <span>
                    <Link href={props.CategoryName}><span style={{cursor: 'pointer', borderRight: "1px solid #333", paddingRight: '10px', color: '#D2353B'}}>Tin TVSI</span></Link><span style={{marginLeft: '10px'}}>22/08/2022</span>
                </span>
            </div>
        </div>
     : <></>
}

export default NewsCard;