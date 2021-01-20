import React from 'react'

import { Formik, Form, Field } from 'formik'
import Lottie from 'react-lottie'
import { useDispatch } from 'react-redux'

import icon from '~/assets/lottie/bar-chart'
import { Button, TextField } from '~/components'
import { Box } from '~/components/Box/Box'
import { load } from '~/store/company/actions'
import { load as loadStock } from '~/store/stock/actions'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: icon,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

export function StockForm() {
  const dispatch = useDispatch()

  function submit(stoke: string) {
    dispatch(load(stoke))
    dispatch(loadStock(stoke))
  }

  return (
    <Box column>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={false}
        style={{ margin: 'auto' }}
      />

      <Formik
        initialValues={{ stock: '' }}
        onSubmit={values => submit(values.stock)}
      >
        <Form className='row center-xs'>
          <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
            <Field
              id='stock'
              name='stock'
              placeholder='Insert stock code. Example: AAPL / TWTR'
              component={TextField}
            />
          </div>

          <div className='col-xs-12 col-sm-2 col-md-1 col-lg-1'>
            <Button text='Search stock' htmlType='submit' />
          </div>
        </Form>
      </Formik>
    </Box>
  )
}
