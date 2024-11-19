import EmailForm from "../../components/EmailForm"

export default function Page() {
  return (
    <div>
      <div className='flex flex-col justify-center max-w-screen-sm mx-auto pt-12 sm:pt-24 px-8'>
        <h1 className='text-4xl mb-12 font-bold text-center bg-heading-gradient bg-clip-text text-transparent'>Moin!</h1>
        <p className='leading-relaxed mb-8 text-center'>Du möchtest bei SISTAHH mitsingen oder unseren Chor für dein nächstes Event buchen? Fülle einfach das Formular aus und wir melden uns so schnell wie möglich bei dir zurück. Wir freuen uns darauf, von dir zu hören!</p>
        <EmailForm />
      </div>
    </div>
  )
}
