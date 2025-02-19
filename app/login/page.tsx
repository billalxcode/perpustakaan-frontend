import Footer from '@/components/ui/footer/footer'
import Header from '@/components/ui/header/header'
import LoginContainer from '@/components/ui/pages/login/container'
import React from 'react'

export default function Page() {
  return (
    <div className="flex flex-col">
        <Header />

        <LoginContainer />
        
        <Footer />
    </div>
  )
}
