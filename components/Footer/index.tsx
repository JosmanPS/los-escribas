import React from 'react'
import BrandName from '../BrandName'
import Container from '../Container'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="mb-4">
            <BrandName />
          </div>
          <div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
