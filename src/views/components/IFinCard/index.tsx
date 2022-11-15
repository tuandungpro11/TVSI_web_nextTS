import { Button, Fab } from "@mui/material"
import { ChevronRight } from "mdi-material-ui"
import Link from "next/link"
import { CSSProperties, useState } from "react"

interface IFinCardProps {
    order: string
    title: string
    text: string
    redirectUrl: string
    style?: CSSProperties
}

const IFinCard = (props: IFinCardProps) => {
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
                    alignItems: 'center',
                    flexBasis: '30%',
                    cursor: 'pointer'
            }}>
                <div style={{
                    width: '100%', 
                    height: '100%',
                    background: isOnHover ? '#D2353B' : '#FFFFFF',
                    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)',
                    borderRadius: '16px',
                    padding: '40px 25px 40px 0px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginTop: isOnHover ? '-30px' : ''
                }}>
                    <h2 style={{color: isOnHover ? '#fff' : '#D2353B', borderLeft: `7px solid ${isOnHover ? '#FFF' : '#D2353B'}`, paddingLeft: '18px'}}>{props.order}</h2>
                    <h2 style={{color: isOnHover ? '#fff' : '#1E1E1E', paddingLeft: '25px'}}>{props.title}</h2>
                    <p style={{color: isOnHover ? '#fff' : '#1E1E1E', fontSize: '16px', lineHeight: '22px', textAlign: 'justify', paddingLeft: '25px'}}>{props.text}</p>
                </div>
                {isOnHover ? <Button variant='contained' endIcon={<ChevronRight />} style={{
                    height: '60px', 
                    color: '#D2353B',
                    backgroundColor: '#fff',
                    marginTop: '-30px', 
                    borderRadius: '30px',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '25px',
                    letterSpacing: '0.1px',
                    zIndex: 1,
                }}>Tìm hiểu thêm</Button> : <Fab style={{height: '60px', marginTop: '-30px', background: '#fff', zIndex: 1,}}><ChevronRight color='primary'/></Fab>}
            </div>
        </Link>
    )
}

export default IFinCard