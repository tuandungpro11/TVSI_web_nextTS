import Link from 'next/link'
import { useEffect } from 'react'
interface TransactionFeeRedirectionProps {
    redirectForIndex?: boolean
    redirectForBond?: boolean
    redirectForOther?: boolean
}
const TransactionFeeRedirection = ({ redirectForIndex, redirectForBond, redirectForOther }: TransactionFeeRedirectionProps) => {
    useEffect(() => {
        console.log(!redirectForIndex, !redirectForBond, !redirectForOther)
    }, [])
  return (
    <div className='row flex-column align-items-center flex-xl-row btn-groups justify-content-between'>
      {!redirectForIndex && <div className='col-lg-6'>
        <Link href='/transaction-fee'>
          <a className='box-shadow mb-3 mb-xl-0 mx-auto'>
            Biểu phí giao dịch chứng khoán
            <img src='/images/vendors/ic-right-transaction-fee.svg' alt='ic caret right' />
          </a>
        </Link>
      </div>}
      {!redirectForBond && <div className='col-lg-6'>
        <Link href='/transaction-fee/bond'>
          <a className='box-shadow mb-3 mb-xl-0 mx-auto'>
            Biểu phí giao dịch trái phiếu
            <img src='/images/vendors/ic-right-transaction-fee.svg' alt='ic caret right' />
          </a>
        </Link>
      </div>}
      {!redirectForOther && <div className='col-lg-6'>
        <Link href='/transaction-fee/other'>
          <a className='box-shadow mx-auto'>
            Biểu phí các dịch vụ khác
            <img src='/images/vendors/ic-right-transaction-fee.svg' alt='ic caret right' />
          </a>
        </Link>
      </div>}
    </div>
  )
}

export default TransactionFeeRedirection
