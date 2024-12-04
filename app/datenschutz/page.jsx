"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  
  return (
    <div className='relative z-10 px-8 mx-auto max-w-[600px] text-sm sm:text-left'>
      <h1 className=' text-2xl mb-12 mt-12 font-bold text-center'>Datenschutzerklärung</h1>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>1. Geltungsbereich</h2>
        <p className='leading-relaxed'>Die vorliegende Datenschutzerklärung dient gemäß den gesetzlichen Bestimmungen Ihrer Information über die Verarbeitung personenbezogener Daten durch die Anbieterin als Verantwortliche bei Ihrer Nutzung dieser Webseite (nachfolgend „Webseite“). Der Inhalt dieser Datenschutzerklärung ist für Sie jederzeit auf der Webseite abrufbar.</p>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>2. Verantwortliche Stelle</h2>
        <p className='leading-relaxed '>Verantwortliche Stelle im Sinne der Datenschutzgesetze ist die im Impressum der Webseite genannte Anbieterin („Anbieterin“ oder „wir“).</p>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>3. Art und Umfang der Erhebung von Daten</h2>
        <ul className='list-disc list-outside pl-4 leading-relaxed space-y-2'>
          <li>Automatisch anfallende Daten: Personenbezogene Daten über Sie, welche bei der Nutzung der Webseite automatisch anfallen (z. B. IP-Adresse des zugreifenden Computers, Browserdaten, Betriebssystem usw.).</li>
          <li>Daten aus Anfragen: Personenbezogene Daten, welche Sie uns im Zuge einer Anfrage (z. B. per E-Mail oder Kontaktformular) übermitteln.</li>
          <li>Cookies: Cookies, welche von Ihrem Browser auf Ihrem Computer gespeichert werden, um bestimmte Funktionen zu ermöglichen.</li>
        </ul>
        <p className='leading-relaxed mt-4 '>
          Weitere Informationen zu Cookies und Drittanbietern wie YouTube und Google finden Sie in den entsprechenden Richtlinien:{" "}
          <a href='https://policies.google.com/technologies/types?hl=de' className='underline' target='_blank' rel='noopener noreferrer'>
            Google Cookies
          </a>{" "}
          <a href='https://www.youtube.com/intl/ALL_de/howyoutubeworks/user-settings/privacy/' className='underline' target='_blank' rel='noopener noreferrer'>
            YouTube Cookies
          </a>{" "}
        </p>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>4. Zwecke und Speicherdauer</h2>
        <p className='leading-relaxed mb-2'>Die personenbezogenen Daten werden zu den folgenden Zwecken verarbeitet:</p>
        <ul className='list-disc list-outside pl-4 leading-relaxed space-y-2'>
          <li>Anzeige der Webseite und deren Funktionen.</li>
          <li>Webanalyse zur Verbesserung der Webseite und Behebung von Fehlern.</li>
          <li>Bearbeitung von Anfragen, die Sie an uns richten.</li>
          <li>Ermöglichung von Social-Media-Funktionen (z. B. Teilen von Inhalten).</li>
        </ul>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>5. Freiwilligkeit</h2>
        <p className='leading-relaxed '>Die Bereitstellung der personenbezogenen Daten erfolgt freiwillig. Ohne die Übermittlung bestimmter Daten können jedoch bestimmte Funktionen der Webseite nicht genutzt werden.</p>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>6. Rechtsgrundlage der Verarbeitung</h2>
        <p className='leading-relaxed '>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 S. 1 lit. f DS-GVO. Weitere Details finden Sie oben in den entsprechenden Abschnitten.</p>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>7. Auftragsverarbeitung</h2>
        <p className='leading-relaxed '>Die Daten werden an Auftragsverarbeiter weitergegeben, die ausschließlich nach unseren Weisungen handeln.</p>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>8. Externe Links</h2>
        <p className='leading-relaxed '>Externe Links öffnen sich in einem neuen Tab oder Fenster. Wir sind nicht verantwortlich für die Inhalte der verlinkten Seiten.</p>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>9. Ihre Rechte</h2>
        <p className='leading-relaxed '>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie das Recht auf Widerspruch und Datenübertragbarkeit. Bei Beschwerden können Sie sich an die zuständige Aufsichtsbehörde wenden.</p>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>10. Anpassungen der Datenschutzerklärung</h2>
        <p className='leading-relaxed '>Diese Datenschutzerklärung kann angepasst werden, um Änderungen im Angebot oder gesetzliche Vorgaben zu berücksichtigen.</p>
      </section>

      <section className='mb-8 sm:mb-12'>
        <h2 className='text-lg font-semibold mb-2'>11. Urheberrechte</h2>
        <p className='leading-relaxed '>Alle Inhalte dieser Webseite, wie Texte, Bilder, Musik oder Grafiken, sind urheberrechtlich geschützt. Eine Nutzung oder Vervielfältigung ist nur mit Zustimmung der Urheber:innen erlaubt. Auf Anfrage helfen wir gerne, Kontakt zu den jeweiligen Rechteinhaber:innen herzustellen.</p>
      </section>

      <footer className='mb-8 sm:mb-12'>
        <p className=' text-[0.8em]'>Stand: 04.12.2024</p>
      </footer>
    </div>
  )
}
