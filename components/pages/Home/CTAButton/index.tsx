import React from 'react'

export default function CTAButton() {
  return (
    <div className="sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md shadow">
        <a
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
        >
          Contáctanos
        </a>
      </div>
    </div>
  )
}
