import Button from '@mui/material/Button'
import { ChevronRight } from 'mdi-material-ui'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, useState } from 'react'

interface CardElevatedProps {
    redirectUrl: string
    imgSrc: string
    title: string
    text: string
    style?: CSSProperties
}

const CardElevated = (props: CardElevatedProps) => {
    const [isOnHover, setIsOnHover] = useState(false)
    return (
        <Link href={props.redirectUrl}>
            <div
                onMouseEnter={() => setIsOnHover(true)}
                onMouseLeave={() => setIsOnHover(false)}
                style={{
                    ...props.style, 
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
            }}>
                <div style={{
                    width: '100%', 
                    height: '580px',
                    background: '#FFFFFF',
                    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)',
                    borderRadius: '16px',
                    padding: '40px 25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: isOnHover ? '-30px' : ''
                }}>
                    <div style={{width: '87.5%', height: '283px', position: 'relative'}}>
                        <Image src={props.imgSrc} layout='fill'/>
                    </div>
                    <h2 style={{color: '#D2353B'}}>{props.title}</h2>
                    <p style={{color: "#1E1E1E", fontSize: '16px', lineHeight: '22px', textAlign: 'justify'}}>{props.text}</p>
                </div>
                {isOnHover && <Button variant='contained' color='primary' endIcon={<ChevronRight />} style={{
                    height: '60px', marginTop: '-30px', borderRadius: '30px',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '25px',
                    letterSpacing: '0.1px',
                }}>Tìm hiểu thêm</Button>}
            </div>
        </Link>
    )
}

export default CardElevated