import React, { MutableRefObject } from 'react'
import ContactForm from '~/components/ContactForm'
import Container from '~/components/Container'
import HomeContext from '~/context/HomeContext'

export default function Contact() {
  return (
    <HomeContext.Consumer>
      {(value) => (
        <section id="contact" ref={value.contactRef} className="py-24">
          <Container>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-center text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Contáctanos
              </h2>
              <p className="text-center mt-6 max-w-2xl text-xl text-gray-500 lg:mx-auto mb-16">
                ¡Los escribas estamos listos para dar a conocer tu mensaje!
              </p>
              <ContactForm />
            </div>
          </Container>
        </section>
      )}
    </HomeContext.Consumer>
  )
}
