import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { QRCode, Space } from 'antd';
function Try() {
  return (
    <div>
        Agriculture <AgricultureIcon ></AgricultureIcon>
      <BasicPagination></BasicPagination>
      <QR></QR>
    </div>
  )
}



function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
  );
}


const QR = () => {
  const [text] = React.useState('https://www.flipkart.com/');
  return (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />

    </Space>
  );
};


export default Try
