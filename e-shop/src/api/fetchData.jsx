/* eslint-disable no-console */
import { useEffect } from 'react';
import productApi from './productApi';

function FetchData() {
  useEffect(() => {
    productApi.getAll().then((res) => console.log(res.data));
  }, []);
  return (
    <>
      <h1>welcome to jsx</h1>
    </>
  );
}

export default FetchData;
