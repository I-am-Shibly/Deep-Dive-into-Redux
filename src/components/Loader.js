import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <Oval
        height={100}
        width={100}
        color="#4fa94d"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
  },
};

export default Loader;
