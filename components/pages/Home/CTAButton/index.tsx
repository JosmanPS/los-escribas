import React, { MutableRefObject } from 'react'
import HomeContext from '~/context/HomeContext'

export default function CTAButton() {
  const scrollToSection = (ref: MutableRefObject<any>) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <HomeContext.Consumer>
      { value => (
        <div className="sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <button
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              onClick={() => scrollToSection(value.contactRef)}
            >
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </HomeContext.Consumer>
  )
}
