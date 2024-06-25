'use client'

import { useGetAccounts } from '@/features/accounts/api/use-get-accounts'

// import { DataCharts } from '@/components/data-charts'
// import { DataGrid } from '@/components/data-grid'

const DashboardPage = () => {
  const { data: accounts, isLoading } = useGetAccounts()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className='mx-auto -mt-6 w-full max-w-screen-2xl pb-10'>
      <p>
        {accounts?.map((account) => (
          <div key={account.id}>{account.name}</div>
        ))}
      </p>
    </div>
  )
}

export default DashboardPage
