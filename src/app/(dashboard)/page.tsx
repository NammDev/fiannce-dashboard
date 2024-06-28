import { DataGrid } from '@/components/card/data-grid'
import { DataCharts } from '@/components/chart/data-charts'

const DashboardPage = () => {
  return (
    <div className='mx-auto -mt-6 w-full max-w-screen-2xl pb-10'>
      <DataGrid />
      <DataCharts />
    </div>
  )
}

export default DashboardPage
