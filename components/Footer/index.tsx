import React from 'react'
import BrandName from '../BrandName'
import Container from '../Container'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="mb-4 w-full text-center lg:text-left">
            <BrandName />
          </div>
          <div className='lg:text-right w-full text-center'>
            <p>&copy;	{(new Date()).getFullYear()} Los Escribas.</p>
          </div>
          <div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
