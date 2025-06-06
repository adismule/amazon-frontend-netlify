import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

function ProtectedRoute({ children, msg, redirect }) {
  const context = useContext(DataContext);
  const { user } = context?.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user, navigate, msg, redirect]);

  if (!user) return null;
  return children;
}

export default ProtectedRoute;
