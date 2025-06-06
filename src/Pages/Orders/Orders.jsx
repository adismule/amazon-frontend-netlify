import React, { useContext, useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout';
import classes from './Order.module.css';
import { db } from '../../Utility/firebase';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

function Orders() {
  const context = useContext(DataContext);
  const user = context?.state?.user;
  const dispatch = context?.dispatch;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    const ordersRef = collection(db, 'users', user.uid, 'orders');
    const q = query(ordersRef, orderBy('created', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setOrders(data);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your orders</h2>
          {orders.length === 0 && (
            <div style={{ padding: '20px' }}>You don't have orders yet.</div>
          )}
          <div>
            {orders.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((orderItem) => (
                  <ProductCard
                    flex={true}
                    product={orderItem}
                    key={orderItem.id}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
