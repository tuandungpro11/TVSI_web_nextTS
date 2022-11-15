import { Paper } from "@mui/material"
import Link from "next/link"
import { styled } from '@mui/material/styles'

interface CardButtonProps {
    redirectUrl: string
    title: string
    iconUrl: string
}

const CardButton = (props: CardButtonProps) => {
    return (
        <>
            <Link href={props.redirectUrl}>
                <Paper variant="outlined" elevation={24} style={{
                    height: '120px',
                    width: '18%',
                    background: '#fff',
                    display: 'flex',
                    justifyContent:'space-around',
                    alignItems: 'center',
                    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)',
                    borderRadius:'8px',
                    fontWeight: '600',
                    fontSize: '24px',
                    zIndex: '2',
                    cursor: 'pointer',
                    lineHeight: '33px',
                    letterSpacing: '0.1px'}}
                >
                    <img style={{width: '47px', height: '47px'}} src={props.iconUrl}/>
                    <span style={{width: '130px'}}>{props.title}</span>
                </Paper>
            </Link>
        </>
    )
}

export default CardButton