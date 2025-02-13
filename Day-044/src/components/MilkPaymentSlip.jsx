import { useState } from 'react';
import './MilkPaymentSlip.css';

function MilkPaymentSlip() {
  const [name, setName] = useState('');
  const [totalMilk, setTotalMilk] = useState('');
  const [fat, setFat] = useState('');

  const rate = fat ? (7.5 * parseFloat(fat)).toFixed(2) : '0.00';
  const milkPrice = totalMilk
    ? (rate * parseFloat(totalMilk)).toFixed(2)
    : '0.00';
  const subsidy = totalMilk ? (5 * parseFloat(totalMilk)).toFixed(2) : '0.00';
  const totalPrice = (parseFloat(milkPrice) + parseFloat(subsidy)).toFixed(2);

  return (
    <div className='milk-slip-container'>
      <h2>Milk Payment Slip Generator</h2>

      <div className='separator'></div>

      <div className='milk-slip'>
        <p className='milk-slip-header'>001 - AJMER</p>
        <p>सिमिति : 000209 - NANDSI</p>
        <p>Print Date : {new Date().toLocaleString()}</p>
        <div className='separator'></div>

        <p>
          <strong>Member :</strong>{' '}
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <strong>Total Milk :</strong>{' '}
          <input
            type='number'
            value={totalMilk}
            onChange={(e) => setTotalMilk(e.target.value)}
          />
        </p>
        <p>
          <strong>FAT :</strong>{' '}
          <input
            type='number'
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
        </p>

        <div className='separator'></div>

        <p className='row'>
          <span>SNF :</span> <span>8.60 M</span>
        </p>
        <p className='row'>
          <span>Rate :</span> <span>₹{rate}</span>
        </p>
        <p className='row'>
          <span>Milk Price :</span> <span>₹{milkPrice}</span>
        </p>
        <p className='row'>
          <span>Subsidy :</span> <span>₹{subsidy}</span>
        </p>
        <p className='row'>
          <span>Total Price :</span> <span>₹{totalPrice}</span>
        </p>

        <div className='separator'></div>

        <button>Print Slip</button>
      </div>
    </div>
  );
}

export default MilkPaymentSlip;
