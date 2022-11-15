import AnnualReportCard from './AnnualReportCard'
import Pagination from './Pagination'

const AnnualReportLayout = () => {
  return (
    <div className='annual-report'>
      <div className='row'>
        <AnnualReportCard />
        <AnnualReportCard />
        <AnnualReportCard />
        <AnnualReportCard />
      </div>
      <Pagination />
    </div>
  )
}

export default AnnualReportLayout
