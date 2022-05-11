import React from 'react'
import Container from '~/components/Container'

export default function About() {
  return (
    <section className="py-24">
      <Container>
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Necesitas un escriba
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Dios te dio un mensaje que necesita ser escrito
          </p>
          <blockquote className="mt-8 max-w-2xl text-md mx-auto text-gray-500">
            <em>
              "Así que Jeremías mandó llamar a Baruc, hijo de Nerías, y mientras
              Jeremías le dictaba todas las profecías que el Señor le había
              dado, Baruc las escribía en un rollo."
              <br />
              <b>Jeremías 36:4 NTV</b>
            </em>
          </blockquote>
          <p className="mt-8 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Sabemos que el ministerio toma tiempo y que lo estás dedicando a
            orar, predicar, enseñar y discipular a otros.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dios ya te ha dado un mensaje, pero si quieres que éste llegue a más
            personas y no se pierda en el tiempo, necesitas que alguien te ayude
            a escribirlo.
          </p>
        </div>
      </Container>
    </section>
  )
}
