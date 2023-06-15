import styles from './loaderspinner.module.css'

const LoaderSpinner = () => {
  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const innerSpinnerStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    borderTop: '3px solid #ccc',
    borderRight: '3px solid transparent',
    animation: 'spin 1s infinite linear',
  };

  return (
    <div className={styles['lds-spinner']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
};

export default LoaderSpinner;
