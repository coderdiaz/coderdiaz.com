import { useEffect, useRef, useState } from 'react';
import { useForm } from '@formcarry/react';
import { cn } from '@/lib/utils';
import { CheckCircle2Icon } from 'lucide-react';

export default function FormQuote() {
  const formRef = useRef<HTMLFormElement>(null);
  const [services, setServices] = useState<string[]>([]);
  const { state, submit } = useForm({
    id: 'k8G1dh9vlgI',
  });

  useEffect(() => {
    let timer: any;

    if (state.submitted && formRef.current) {
      formRef.current.reset();
      setServices([]);
      timer = setTimeout(() => {
        state.submitted = false;
      }, 1500)
    }

    return () => {
      clearTimeout(timer);
    }
  }, [state.submitted]);

  const toggleService = (service: string) => {
    if (services.includes(service)) {
      return setServices(services.filter((s) => s !== service));
    }
    return setServices([...services, service]);
  }

  return (
    <form ref={formRef} onSubmit={submit} className="grid grid-cols-4 gap-6">
      <fieldset className="col-span-2 flex flex-col gap-2">
        <label className="block font-semibold">¿Cómo te llamas?</label>
        <input
          className="px-4 py-2.5 bg-white border rounded-xl w-full border-gray-400/50 hover:border-accent-500/50 hover:ring-2 hover:ring-accent-500/20 focus:border-accent-500/75 focus:ring-4 focus:ring-accent-500/20 focus:outline-none peer-focus:border-accent-500 peer-focus:ring-4 peer-focus:ring-outline peer-focus:outline-none checked:bg-outline disabled:opacity-60 disabled:pointer-events-none"
          type="text"
          placeholder="Juan Perez"
          name="fullName"
          required
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-2">
        <label className="block font-semibold">Empresa</label>
        <input
          className="px-4 py-2.5 bg-white border rounded-xl w-full border-gray-400/50 hover:border-accent-500/50 hover:ring-2 hover:ring-accent-500/20 focus:border-accent-500/75 focus:ring-4 focus:ring-accent-500/20 focus:outline-none peer-focus:border-accent-500 peer-focus:ring-4 peer-focus:ring-outline peer-focus:outline-none checked:bg-outline disabled:opacity-60 disabled:pointer-events-none"
          type="text"
          placeholder="Startup Inc."
          name="company"
          required
        />
      </fieldset>
      <fieldset className="col-span-4 flex flex-col gap-2">
        <label className="block font-semibold">Correo Electrónico</label>
        <input
          className="px-4 py-2.5 bg-white border rounded-xl w-full border-gray-400/50 hover:border-accent-500/50 hover:ring-2 hover:ring-accent-500/20 focus:border-accent-500/75 focus:ring-4 focus:ring-accent-500/20 focus:outline-none peer-focus:border-accent-500 peer-focus:ring-4 peer-focus:ring-outline peer-focus:outline-none checked:bg-outline disabled:opacity-60 disabled:pointer-events-none"
          type="email"
          placeholder="ceo@startupinc.com"
          name="email"
          required
        />
      </fieldset>
      <span className="font-semibold text-gray-500 col-span-4 text-lg">Estoy buscando...</span>
      <div className="flex col-span-4 items-center flex-wrap gap-x-3 gap-y-4">
        <input type="hidden" name="service" value={services.join(', ')} />
        <button onClick={() => toggleService('Diseño web')} type="button" className={cn('inline max-w-max px-4 py-1 bg-white backdrop-blur-lg border border-gray-400/50 rounded-full font-semibold', {
          'bg-accent-400 text-accent-1000': services.includes('Diseño web'),
        })}>
          Diseño web
        </button>
        <button onClick={() => toggleService('Landing Pages')} type="button" className={cn('inline max-w-max px-4 py-1 bg-white backdrop-blur-lg border border-gray-400/50 rounded-full font-semibold', {
          'bg-accent-400 text-accent-1000': services.includes('Landing Pages'),
        })}>
          Landing Pages
        </button>
        <button onClick={() => toggleService('Marketing Site')} type="button" className={cn('inline max-w-max px-4 py-1 bg-white backdrop-blur-lg border border-gray-400/50 rounded-full font-semibold', {
          'bg-accent-400 text-accent-1000': services.includes('Marketing Site'),
        })}>
          Marketing Site
        </button>
        <button onClick={() => toggleService('Interface Design')} type="button" className={cn('inline max-w-max px-4 py-1 bg-white backdrop-blur-lg border border-gray-400/50 rounded-full font-semibold', {
          'bg-accent-400 text-accent-1000': services.includes('Interface Design'),
        })}>
          Interface Design
        </button>
        <button onClick={() => toggleService('E-commerce')} type="button" className={cn('inline max-w-max px-4 py-1 bg-white backdrop-blur-lg border border-gray-400/50 rounded-full font-semibold', {
          'bg-accent-400 text-accent-1000': services.includes('E-commerce'),
        })}>
          E-commerce
        </button>
        <button onClick={() => toggleService('Aplicación Web')} type="button" className={cn('inline max-w-max px-4 py-1 bg-white backdrop-blur-lg border border-gray-400/50 rounded-full font-semibold', {
          'bg-accent-400 text-accent-1000': services.includes('Aplicación Web'),
        })}>
          Aplicación Web
        </button>
        <button onClick={() => toggleService('Aplicación móvil')} type="button" className={cn('inline max-w-max px-4 py-1 bg-white backdrop-blur-lg border border-gray-400/50 rounded-full font-semibold', {
          'bg-accent-400 text-accent-1000': services.includes('Aplicación móvil'),
        })}>
          Aplicación móvil
        </button>
        <button onClick={() => toggleService('Otro')} type="button" className={cn('inline max-w-max px-4 py-1 bg-white backdrop-blur-lg border border-gray-400/50 rounded-full font-semibold', {
          'bg-accent-400 text-accent-1000': services.includes('Otro'),
        })}>
          Otro
        </button>
      </div>
      <span className="font-semibold text-gray-500 col-span-4 text-lg">Información del proyecto</span>
      <fieldset className="inline-flex flex-col md:flex-row md:items-center gap-2 md:gap-4 col-span-4 md:col-span-2">
        <label className="font-semibold flex-shrink-0">Presupuesto</label>
        <select
          className="appearance-none flex-1 w-full md:w-max px-4 py-2.5 py-whitegray-100 rounded-xl border border-gray-400/50 hover:border-accent-500/50 hover:ring-2 hover:ring-accent-500/20 focus:border-accent-500/75 focus:ring-4 focus:ring-accent-500/20 focus:outline-none peer-focus:border-accent-500 peer-focus:ring-4 peer-focus:ring-outline peer-focus:outline-none checked:bg-outline disabled:opacity-60 disabled:pointer-events-none"
          name="budget"
          required
        >
          <option value="De US$800 a US$1200">De US$800 a US$1200</option>
          <option value="De US$1200 a US$2000">De US$1200 a US$2000</option>
          <option value="De US$2000 a US$4000">De US$2000 a US$4000</option>
          <option value="De US$4000 a US$8000">De US$4000 a US$8000</option>
          <option value="Más de US$8000">Más de US$8000</option>
          <option value="Sin definir">Sin definir</option>
        </select>
      </fieldset>
      <fieldset className="col-span-4 flex flex-col gap-2">
        <label className="block font-semibold">Mensaje</label>
        <textarea
          className="px-4 py-2.5 bg-white border rounded-xl w-full border-gray-400/50 hover:border-accent-500/50 hover:ring-2 hover:ring-accent-500/20 focus:border-accent-500/75 focus:ring-4 focus:ring-accent-500/20 focus:outline-none peer-focus:border-accent-500 peer-focus:ring-4 peer-focus:ring-outline peer-focus:outline-none checked:bg-outline disabled:opacity-60 disabled:pointer-events-none"
          rows={4}
          placeholder="Describe tu proyecto en algunos párrafos..."
          name="message"
          required
        />
      </fieldset>
      <button
        type="submit"
        className="col-span-4 md:col-span-auto w-full md:w-max inline-flex justify-center px-6 py-3.5 md:py-2.5 bg-black text-white rounded-full font-semibold"
        disabled={state.submitting || state.submitted}
      >
        <span className={cn({
          'inline': !state.submitting,
          'hidden': state.submitting || state.submitted,
        })}>Enviar detalles</span>
        <span className={cn({
          'hidden': !state.submitting || state.submitted,
          'inline': state.submitting,
        })}>Enviando información...</span>
        <div className={cn('flex items-center gap-2', {
          'hidden': !state.submitted,
        })}>
          <CheckCircle2Icon size={18} strokeWidth={2.5} />
          <span>Mensaje enviado. Nos vemos pronto.</span>
        </div>
      </button>
    </form>
  )
}