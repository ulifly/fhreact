import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import {Welcome} from './Welcome'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Welcome name = "Ulises"/>
    <Welcome />
  </StrictMode>,
)
