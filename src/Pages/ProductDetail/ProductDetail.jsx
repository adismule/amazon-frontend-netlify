import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import classes from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/EndPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, [productId]);

  return (
    <Layout>
      <div className={classes.product_detail_wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          product && (
            <ProductCard
              product={product}
              flex={true}
              renderDesc={true}
              renderAdd={true}
            />
          )
        )}
      </div>
    </Layout>
  );
}

export default ProductDetail;
