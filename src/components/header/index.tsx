import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

import { HeaderLogo } from './header-logo'
import { WelcomeMsg } from './welcome-msg'
import { Navigation } from './navigation'
import { Filters } from './filters'

export const Header = () => {
  return (
    <header className='bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 lg:pb-32'>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='mb-14 flex w-full items-center justify-between'>
          <div className='flex items-center lg:gap-x-16'>
            <HeaderLogo />
            <Navigation />
          </div>

          <div className='flex items-center gap-x-2'>
            <ClerkLoaded>
              <UserButton afterSignOutUrl='/' />
            </ClerkLoaded>

            <ClerkLoading>
              <Loader2 className='size-8 animate-spin text-slate-400' />
            </ClerkLoading>

            {/* <Link
              href={links.sourceCode}
              target='_blank'
              rel='noreferrer noopener'
              title='Source Code'
            >
              <Image src='/github.svg' alt='GitHub' height={24} width={24} />
            </Link> */}
          </div>
        </div>

        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  )
}
