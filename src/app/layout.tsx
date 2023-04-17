'use client'

import { useTranslation } from 'react-i18next'

import '../lib/i18n'

function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const { t } = useTranslation()

  return (
    <html lang="en">
      <head></head>
      <body>
        <h2>{t('helloNext')}</h2>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
