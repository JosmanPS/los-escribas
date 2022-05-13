/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline'
import Container from '~/components/Container'

const features = [
  {
    name: 'Construye un legado espiritual',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Alcanza a una mayor audiencia',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Conviértete en un autor reconocido',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Genera nuevas fuentes de ingresos',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]

export default function Features() {
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
              Jeremías le dictaba todas las profecías que el Señor le había dado,
              Baruc las escribía en un rollo."<br />
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

        <div className="mt-24">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-24 md:gap-y-12">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-green-500 to-lime-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
