import React from 'react'
import Container from '~/components/Container'
import CTAButton from '../CTAButton'

export default function CTAImage() {
  return (
    <section className="w-full relative bg-green-50 py-8">
      <div className="relative">
        <Container>
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:-top-20 lg:w-1/2 -mt-20 lg:-mt-0">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded shadow"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
          <div className="relative pb-8 lg:py-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div></div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">
                  ¿Estás listo para comenzar a publicar?
                </h2>
                <CTAButton />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
