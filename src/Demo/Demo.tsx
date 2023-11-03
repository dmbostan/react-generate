import React from 'react';
import styles from './Demo.module.css';

type DemoProps = {
  text: string;
};

const Demo: React.FC<DemoProps> = ({ text }) => {
  return (
    <div className={styles.component}>
      {text}
    </div>
  );
};

export default Demo;
