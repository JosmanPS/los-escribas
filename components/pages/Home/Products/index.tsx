import React from 'react'
import Container from '~/components/Container'
import { FaTwitter, FaFacebook, FaInstagram, FaMedium } from 'react-icons/fa'
import { HiBookmarkAlt, HiBookOpen, HiDocumentText, HiGlobeAlt, HiNewspaper, } from 'react-icons/hi'
import CTAButton from '../CTAButton'

const PRODUCTS = [
  {
    name: 'Micro-ensayos',
    description: '250-500 palabras',
    media: [
      {
        title: 'Hilos de Twitter',
        description:
          'Lodre anskd i asdalkjl ah  hasiid ahsha shaskkh  eu hsh asdhk askdh ue',
        icon: FaTwitter,
      },
      {
        title: 'Posts de Facebook',
        description:
          'Lodre anskd i asdalkjl ah  hasiid ahsha shaskkh  eu hsh asdhk askdh ue',
        icon: FaFacebook,
      },
      {
        title: 'Carrusel de Instagram',
        description:
          'Lodre anskd i asdalkjl ah  hasiid ahsha shaskkh  eu hsh asdhk askdh ue',
        icon: FaInstagram,
      },
    ],
  },
  {
    name: 'Blog posts',
    description: '800-1200 palabras',
    media: [
      {
        title: 'Sitio web personal',
        description:
          'Lodre anskd i asdalkjl ah  hasiid ahsha shaskkh  eu hsh asdhk askdh ue',
        icon: HiGlobeAlt,
      },
      {
        title: 'Medium',
        description:
          'Lodre anskd i asdalkjl ah  hasiid ahsha shaskkh  eu hsh asdhk askdh ue',
        icon: FaMedium,
      },
      {
        title: 'Newsletter',
        description:
          'Lodre anskd i asdalkjl ah  hasiid ahsha shaskkh  eu hsh asdhk askdh ue',
        icon: HiNewspaper,
      },
    ],
  },
  {
    name: 'Artículos',
    description: '2500-5000 palabras',
    media: [
      {
        title: 'eBooks',
        description:
          'Lodre anskd i asdalkjl ah  hasiid ahsha shaskkh  eu hsh asdhk askdh ue',
        icon: HiBookmarkAlt,
      },
      {
        title: 'Capítulos de libros',
        description:
          'Lodre anskd i asdalkjl ah  hasiid ahsha shaskkh  eu hsh asdhk askdh ue',
        icon: HiBookOpen,
      },
      {
        title: 'Blog posts pilares',
        description:
          'Lodre anskd i asdalkjl ah  hasiid ahsha shaskkh  eu hsh asdhk askdh ue',
        icon: HiDocumentText,
      },
    ],
  },
]

export default function Products() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-lg mx-auto">
          <h2 className="text-center text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-20">
            Podrás publicar tu contenido en todos estos medios
          </h2>
        </div>
        <div className="grid md:grid-cols-3 md:gap-x-12">
          {PRODUCTS.map((product) => (
            <div className='mb-16'>
              <div className="text-center">
                <p className="text-base text-green-600 font-semibold tracking-wide uppercase">
                  {product.description}
                </p>
                <h3 className="text-gray-900 text-2xl font-medium">
                  {product.name}
                </h3>
              </div>
              {product.media.map((media) => (
                <div className="flex flex-row md:flex-col mt-12">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-green-500 to-lime-500 text-white mb-4 mr-4">
                    <media.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {media.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {media.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <CTAButton />
        </div>
      </Container>
    </section>
  )
}
