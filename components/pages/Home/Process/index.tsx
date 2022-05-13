import React from 'react'
import Container from '~/components/Container'
import {
  PaperClipIcon,
  PencilIcon,
  DocumentTextIcon,
  CheckIcon,
} from '@heroicons/react/outline'
import CTAButton from '../CTAButton'

const STEPS = [
  {
    title: 'Recopilación',
    description:
      'Puedes enviar notas, videos de predicaciones, audios o cualquier otro recurso para tomar como base para escribir tu contenido.',
    icon: PaperClipIcon,
  },
  {
    title: 'Redacción',
    description: 'Tomando los recursos recopilados redactaremos profesionalmente los artículos en diferentes formatos para publicación.',
    icon: PencilIcon,
  },
  {
    title: 'Revisión',
    description: 'Antes de publicar tu contenido te lo compartiremos para que puedas validar que concuerda con tu voz y finalmente aprobarlo.',
    icon: CheckIcon,
  },
  {
    title: 'Publicación',
    description: 'Publicaremos tu contenido en redes sociales, tu sitio web, Amazon y los distintos medios que tú selecciones.',
    icon: DocumentTextIcon,
  },
]

export default function Process() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-center text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-20">
          ¿Cómo funciona?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-20 gap-y-12 md:gap-x-12 lg:gap-x-4">
          {STEPS.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center mb-8">
                <div className="absolute h-12 w-12 rounded-full bg-gradient-to-r from-green-300 to-lime-300"></div>
                <step.icon
                  className="relative h-16 w-16 text-green-800"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-gray-900 font-extrabold text-xl lg:text-2xl mb-4">
                {index + 1}. {step.title}
              </h3>
              <p className="text-base text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <CTAButton />
        </div>
      </Container>
    </section>
  )
}
