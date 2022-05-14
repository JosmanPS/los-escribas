import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Alert from '../Alert'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mdobylve')

  return (
    <div>
      {state.succeeded && (
        <Alert type="success">
          ✅ Tu mensaje ha sido enviado. Pronto nos pondremos en contacto contigo
          😁.
        </Alert>
      )}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="_subject"
            value="Nuevo contacto desde losescribas.com"
          />
          <div className="mb-4 grid md:grid-cols-2 gap-x-4 gap-y-4">
            <div>
              <label htmlFor="name" className="text-base text-gray-900">
                Nombre:
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full rounded border border-neutral-300 text-gray-500 p-3 mt-2"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="lastname" className="text-base text-gray-900">
                Apellidos:
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                className="w-full rounded border border-neutral-300 text-gray-500 p-3 mt-2"
              />
              <ValidationError
                prefix="Lastname"
                field="lastname"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-base text-gray-900">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="_replyto"
              className="w-full rounded border border-neutral-300 text-gray-500 p-3 mt-2"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="text-base text-gray-900">
              Teléfono:
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              className="w-full rounded border border-neutral-300 text-gray-500 p-3 mt-2"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="plan" className="text-base text-gray-900">
              Selecciona tu plan:
            </label>
            <select
              id="plan"
              name="plan"
              className="w-full rounded border border-neutral-300 text-gray-500 p-3 mt-2"
            >
              <option value="starter">Plan Starter</option>
              <option value="pro">Plan Pro</option>
              <option value="growth">Plan growth</option>
              <option value="custom">Plan personalizado</option>
            </select>
            <ValidationError prefix="Plan" field="plan" errors={state.errors} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-base text-gray-900">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded border border-neutral-300 text-gray-500 p-3 mt-2"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 text-white py-3 text-base font-medium"
            disabled={state.submitting}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
