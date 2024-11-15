export default function Page() {
  return (
    <div className='relative z-10 flex flex-col items-center justify-center h-full m-auto max-w-[860px] text-center px-4'>
      <div className='py-8'>
        <h1 className='text-4xl mb-8 font-bold'>Impressum</h1>
        <div className='leading-loose'>
          <p>V.i.S.d.P.: Anne Niemann, anne(at)sistahh.de </p>
          <p>Adresse: Leo-Leistikow-Allee 62, 22081 Hamburg, Deutschland</p>
          <p>
            Bildnachweis:{" "}
            <a href='https://www.annemonetaake.de/' className='hover:underline'>
              Annemone Taake
            </a>
          </p>
          <p>
            Web Development:{" "}
            <a href='https://mitsch01.eu/' className='hover:underline'>
              Miriam Schwartz
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
