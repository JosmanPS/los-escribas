import React from 'react'
import Footer from '../Footer'
import Meta from '../Meta'
import Navigator from '../Navigator'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigator />
        <main>{ children }</main>
      </div>
      <Footer />
    </>
  )
}
