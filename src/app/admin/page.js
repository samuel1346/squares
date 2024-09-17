'use client'
import React, { useEffect, useState } from 'react';
import ProductsComponent from '../components/admin/ProductsComponent';
import LogInComponent from '../components/admin/Log/LogInComponent';
import { auth } from '../../../firebaseConfig';
import ProductsTableComponent from '../components/admin/ProductsTableComponent';

const AdminPage = () => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null); 
      }
    });

    return () => unsubscribe();
  }, []);

  const renderLog = () => {
    if (user) {
      return <ProductsTableComponent />;
    } else {
      return <LogInComponent />;
    }
  };

  return (
    <>
      {renderLog()}
    </>
  );
};

export default AdminPage;
