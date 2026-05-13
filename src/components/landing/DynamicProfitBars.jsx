import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DynamicProfitBars = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Initial data setup
    const generateData = () => {
      let currentProfit = 100; // Base value
      const yearlyData = [];
      
      for (let year = 2022; year <= 2026; year++) {
        yearlyData.push({ year, value: currentProfit });
        const increase = 1 + (Math.random() * (0.5 - 0.2) + 0.2); // 20-50%
        currentProfit *= increase;
      }
      setData(yearlyData);
    };

    generateData();

    // Regenerate data every 6 seconds for continuous animation
    const interval = setInterval(generateData, 6000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      backgroundColor: '#ffffff',
      padding: '1rem',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '350px'
    },
    chartArea: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      gap: '20px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
    },
    barWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: 1,
      height: '100%'
    },
    bar: {
      width: '100%',
      backgroundColor: 'var(--color-steel)',
      position: 'relative',
      borderRadius: '4px 4px 0 0',
      boxShadow: '0px 0px 8px rgba(81, 161, 192, 0.25), inset 0px 1px 4px rgba(255, 255, 255, 0.55)',
      animation: 'barGlowSoft 3s ease-in-out infinite alternate',
    },
    label: {
      marginTop: '15px',
      color: 'var(--color-steel)',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chartArea}>
        {data.map((item, index) => (
          <div key={item.year} style={styles.barWrapper}>
            {/* The Dynamic Bar */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `${(item.value / data[data.length - 1].value) * 100}%`, opacity: 1 }}
              transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
              style={styles.bar}
            >
            </motion.div>
            <span style={styles.label}>{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicProfitBars;
