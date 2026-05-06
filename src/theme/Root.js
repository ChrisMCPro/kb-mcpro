import React from 'react';
import MobileBottomNav from '@site/src/components/MobileBottomNav';

export default function Root({ children }) {
  return (
    <>
      {children}
      <MobileBottomNav />
    </>

    
  );
}