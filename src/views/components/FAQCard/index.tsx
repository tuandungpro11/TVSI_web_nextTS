import { Paper } from "@mui/material"
import { ChevronLeft, ChevronRight } from "mdi-material-ui"
import Link from "next/link"
import { useState } from "react"

const FAQCard = () => {
    const [isHoverev, setIsHovered] = useState(false)
    return ((<Link href='#'>
        <Paper onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{
            width: '100%',
            minHeight: '70px',
            padding: '24px', 
            background: isHoverev ? '#fff' : '#F0F0F0',
            borderRadius: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>Khách hàng có thể giao dịch trực tuyến qua hệ thống nào? {isHoverev ? <ChevronLeft color='primary'/> : <ChevronRight/>}</Paper>
    </Link>))
}

export default FAQCard