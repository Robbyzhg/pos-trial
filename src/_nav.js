/* eslint-disable */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cil3d,
  cilCart,
  cilNewspaper
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Product',
    to: '/base/product',
    icon: <CIcon icon={cil3d} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sales',
    to: '/base/sales',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Report',
    to: '/base/report',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
  },
]

export default _nav
