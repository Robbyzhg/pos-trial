/* eslint-disable */

import React, { useState } from 'react'
import {
  CTable,
  CButton,
  CForm,
  CFormInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCard,
  CCardBody,
} from '@coreui/react'

export default function Product() {
  const [modalVisible, setModalVisible] = useState(false)

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
      key: 'costprice',
      label: 'Cost Price',
      _props: { scope: 'col' },
    },
    {
      key: 'sellingprice',
      label: 'Selling Price',
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
      costprice: '500',
      sellingprice: '1000',
      qty: '1000',
      action: (
        <td className="text-center">
          <CButton color="primary" size="sm">
            Edit
          </CButton>
          <CButton color="danger" size="sm">
            Delete
          </CButton>
        </td>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <div>
      <CCard className='mb-2'>
        <CCardBody>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CForm>
          <CFormInput type="text" placeholder="Search Product" />
        </CForm>
        <CButton onClick={() => setModalVisible(!modalVisible)} color="info">
          Add New Product
        </CButton>
      </div>
        </CCardBody>
      </CCard>
      <CTable columns={columns} items={items} />

      <CModal
        alignment="center"
        visible={modalVisible}
        size="lg"
        onClose={() => setModalVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredExample">Add New Product</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              type="text"
              floatingClassName="mb-3"
              floatingLabel="Product Name"
              placeholder="Input Product Name"
            />
            <CFormInput
              type="text"
              floatingClassName="mb-3"
              floatingLabel="Product Category"
              placeholder="Input Product Ctaegory"
            />
            <CFormInput
              type="number"
              floatingClassName="mb-3"
              floatingLabel="Cost Price"
              placeholder="Input Cost Price"
            />
            <CFormInput
              type="number"
              floatingClassName="mb-3"
              floatingLabel="Selling Price"
              placeholder="Input Selling Price"
            />
            <CFormInput
              type="number"
              floatingClassName="mb-3"
              floatingLabel="Qty"
              placeholder="Input Qty"
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Add Product</CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}
