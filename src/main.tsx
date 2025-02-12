import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"

import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

import { Provider } from 'react-redux'
import { store } from './store'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
