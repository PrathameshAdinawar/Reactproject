import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { colors } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Product', width: 130 },
  { field: 'lastName', headerName: 'Customer', width: 130 },
  {
    field: 'age',
    headerName: 'Amount',
    type: 'number',
    width: 90,
  },
  

  {
    field: 'fullName',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 543463, lastName: 'Courtney Henry', firstName: 'Denim Shirt', age: 62.99},
  { id: 543459, lastName: 'Arlene McCoy', firstName: 'Boy Denim', age: 62.99 },
  { id: 543455, lastName: 'Arlene McCoy', firstName: 'Denim Shirt', age: 62.99 },
  { id: 543464, lastName: 'Jerome Bell', firstName: 'Denim Shirt', age: 62.99 },
  { id: 543460 , lastName: 'Arlene McCoy', firstName: 'Boy Denim', age: 62.99 },
  { id: 543456, lastName: 'Jerome Bell', firstName: 'Denim Shirt', age: 62.99 },
  { id: 543465, lastName: 'Clifford', firstName: 'Boy Denim', age: 62.99 },
  { id: 543461, lastName: 'Frances', firstName: 'Denim Shirt', age: 62.99 },
  { id: 543463, lastName: 'Courtney Henry', firstName: 'Denim Shirt', age: 62.99 },
];

export default function Comp6() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
