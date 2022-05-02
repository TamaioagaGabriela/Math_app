import React, { useState } from 'react';
import { useFormik } from 'formik';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import { ProductCartWidget } from '../sections/@dashboard/products';

import TesteDB from '../_mocks_/TesteDB';

// ----------------------------------------------------------------------

export default function Capitol() {
  return (
    <Page title="Dashboard: Teste | Math app">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Teste
        </Typography>

        <TesteDB />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}