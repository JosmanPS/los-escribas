import React from 'react'
import Container from '~/components/Container'
import { HiCheck } from 'react-icons/hi'

const PRICING_PLANS = [
  {
    name: 'Starter',
    description: 'Para aquellos que están comenzando.',
    price: 297,
    features: [
      '1 tweet diario',
      '1 micro-ensayo por semana',
      '1 blog post al mes',
    ],
  },
  {
    name: 'Pro',
    description: 'Crea una audiencia conectada con tu mensaje.',
    price: 597,
    features: [
      '2 tweets diarios',
      '2 micro-ensayos por semana',
      '2 blog posts al mes',
      '1 artículo al mes',
    ],
  },
  {
    name: 'Growth+',
    description: 'Conviértete en un autor con tu mensaje.',
    price: 997,
    features: [
      '3 tweets diarios',
      '3 micro-ensayos por semana',
      '4 blog posts al mes',
      '2 artículos al mes',
      'Email marketing',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-center text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Planes y precios
        </h2>
        <p className="text-center mt-8 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Selecciona el plan que más se adecúe a tus necesidades
        </p>
        <div className="grid lg:grid-cols-3 mt-20 mb-12 lg:gap-x-8 gap-y-8">
          {PRICING_PLANS.map((plan) => (
            <div className='border border-neutral-300 rounded-lg p-6'>
              <h3 className='text-gray-900 text-2xl font-medium'>{plan.name}</h3>
              <p className='mt-2 text-base text-gray-500'>{plan.description}</p>
              <p className='text-gray-900 text-4xl font-extrabold mt-8 mb-8'>${plan.price} <span className='text-gray-500 font-medium text-lg'>/mes</span></p>
              <button className='bg-green-600 text-white rounded-md w-full py-2'>Seleccionar {plan.name}</button>
              <hr className='my-8' />
              <h4 className='text-base text-gray-900 font-medium uppercase mb-4'>¿Qué incluye?</h4>
              <ul>
                {plan.features.map((feature) => (
                  <li className='text-base text-gray-500 mb-2'>
                    <HiCheck className='inline-block text-green-600 mr-2' />
                    { feature }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
