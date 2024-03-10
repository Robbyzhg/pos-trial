/* eslint-disable */
import React from 'react'
import {
  CButton,
  CForm,
  CFormInput,
  CCard,
  CCardBody,
  CContainer,
  CRow,
  CCol,
  CTable,
  CCardTitle,
  CCardText,
} from '@coreui/react'

export default function Sales() {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'name',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'serialnumber',
      label: 'Serial Number',
      _props: { scope: 'col' },
    },
    {
      key: 'category',
      label: 'Category',
      _props: { scope: 'col' },
    },
    {
      key: 'sellingprice',
      label: 'Price',
      _props: { scope: 'col' },
    },
    {
      key: 'qty',
      label: 'Qty',
      _props: { scope: 'col' },
    },
    {
      key: 'action',
      label: 'Action',
      _style: { width: '20%' },
      _classes: 'text-center',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      name: 'Momogi',
      serialnumber: 'A2199AWQ',
      category: 'Snack',
      sellingprice: '1000',
      qty: '1',
      action: (
        <td className="text-center">
          <CButton color="danger" size="sm">
            X
          </CButton>
        </td>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <div>
      <CCard className="mb-2">
        <CCardBody>
          <CForm>
            <CFormInput style={{ width: '100%' }} type="text" placeholder="Scan Product" />
          </CForm>
        </CCardBody>
      </CCard>
      <CContainer>
        <CRow>
          <CCol xs={8}>
            <CCard className="mb-2">
              <CCardBody>
                <CTable columns={columns} items={items} />
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs={4}>
            <CCard className="mb-2 text-center">
              <CCardBody>
                <CCardTitle>Total</CCardTitle>
                <CCardText>Rp. 1000</CCardText>
                <div style={{ display: 'flex' }}>
                  <CForm>
                    <CFormInput type="number" placeholder="Cash" />
                  </CForm>
                  <CButton size="sm" color="success">
                    Complete Payment
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
