'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    cream: '#fef5e7',
    darkBorder: '#151617',
    accent: '#204C8E',
  },
  styles: {
    global: {
      body: {
        bg: 'cream',
        color: 'black',
      },
    },
  },
  fonts: {
    heading: `var(--font-montserrat), sans-serif`,
    body: `var(--font-inconsolata), monospace`,
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
