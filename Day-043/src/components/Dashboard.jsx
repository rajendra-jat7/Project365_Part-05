import { useState, useEffect } from 'react';
import { db, auth } from '../firebaseConfig';
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [location, setLocation] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [date, setDate] = useState('');
  const [receivedPayments, setReceivedPayments] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'jcbEntries'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let data = [];
      snapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
      setEntries(data);
      console.log(data);
    });
    return () => unsubscribe();
  }, []);

  const addEntry = async () => {
    if (!customerName || !location || !hours || !minutes || !date) {
      alert('Please fill all fields!');
      return;
    }
    const totalAmount = hours * 1200 + minutes * 20;
    await addDoc(collection(db, 'jcbEntries'), {
      date,
      customerName,
      location,
      hours,
      minutes,
      totalAmount,
      receivedAmount: 0,
    });
    setCustomerName('');
    setLocation('');
    setHours('');
    setMinutes('');
    setDate('');
  };

  const updatePayment = async (id, receivedAmount) => {
    const entryRef = doc(db, 'jcbEntries', id);
    await updateDoc(entryRef, { receivedAmount });
    setReceivedPayments({ ...receivedPayments, [id]: receivedAmount });
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this entry?'
    );
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'jcbEntries', id));
        console.log(`Deleted entry with ID: ${id}`);
      } catch (error) {
        console.error('Error deleting entry:', error);
      }
    }
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  const saveEdit = async () => {
    if (!editingEntry) return;

    try {
      const entryRef = doc(db, 'jcbEntries', editingEntry.id);

      await updateDoc(entryRef, {
        customerName: editingEntry.customerName || '',
        location: editingEntry.location || '',
        hours: Number(editingEntry.hours) || 0,
        minutes: Number(editingEntry.minutes) || 0,
        amount: Number(editingEntry.amount) || 0,
        received: Number(editingEntry.received) || 0,
        date: editingEntry.date || new Date().toISOString().split('T')[0],
      });

      console.log('Entry updated successfully!');

      setEditingEntry(null);
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  const totalPayment = entries.reduce(
    (acc, entry) => acc + entry.totalAmount,
    0
  );
  const totalReceived = entries.reduce(
    (acc, entry) => acc + entry.receivedAmount,
    0
  );
  const totalDue = totalPayment - totalReceived;

  return (
    <div className='dashboard'>
      <button
        className='hamburger-menu'
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h2>Admin Details</h2>
        <p>👤 Rajendra Jat</p>
        <p>📍 Nandsi, Bhinay, Ajmer, Rajasthan</p>
        <p>✉️ rajendrajat.work@gmail.com</p>
        <p>📞 8875781413</p>
        <button className='logout-btn' onClick={handleLogout}>
          Logout
        </button>
      </div>

      <h1>JCB Work Management</h1>
      <div className='summary-boxes'>
        <div className='summary-box total'>
          <h3>Total Earnings</h3>
          <p>₹{totalPayment}</p>
        </div>
        <div className='summary-box received'>
          <h3>Received Payments</h3>
          <p>₹{totalReceived}</p>
        </div>
        <div className='summary-box due'>
          <h3>Total Due Payments</h3>
          <p>₹{totalDue}</p>
        </div>
      </div>

      <div className='form'>
      <h2>Add Customer Details</h2>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type='text'
          placeholder='Customer Name'
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type='number'
          placeholder='Hours'
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <input
          type='number'
          placeholder='Minutes'
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <button onClick={addEntry}>Add Entry</button>
      </div>

      {editingEntry && (
        <div className='edit-modal'>
          <h2>Edit Entry</h2>
          <input
            type='text'
            value={editingEntry.customerName}
            onChange={(e) =>
              setEditingEntry({ ...editingEntry, customerName: e.target.value })
            }
          />
          <input
            type='text'
            value={editingEntry.location}
            onChange={(e) =>
              setEditingEntry({ ...editingEntry, location: e.target.value })
            }
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={() => setEditingEntry(null)}>Cancel</button>
        </div>
      )}

      <h3>📜 Work Entries</h3>
      <div className='entries-container'>
        {entries.length === 0 ? (
          <p className='no-entries'>Update your entries...</p>
        ) : (
          entries
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((entry) => (
              <div key={entry.id} className='entry'>
                {/* ❌ Delete Button */}
                <button
                  className='delete-btn'
                  onClick={() => handleDelete(entry.id)}
                ></button>
                {/* 📝 Edit Button */}
                <button
                  className='edit-btn'
                  onClick={() => handleEdit(entry)}
                ></button>
                <h3>👤 {entry.customerName}</h3>
                <p>📅 {entry.date}</p>
                <p>
                  📍 {entry.location}
                </p>
                <p>
                  ⏳ {entry.hours} hr {entry.minutes} min
                </p>
                <p>💰 Total: <span className='total-amt'>₹{entry.totalAmount}</span></p>
                <p>✅ Received: <span className='recieved-amt'>₹{entry.receivedAmount}</span></p>
                <p>📌 Pending: <span className='pending-amt'>₹{entry.totalAmount-entry.receivedAmount}</span></p>
                <input
                  type='number'
                  placeholder='Enter Payment'
                  value={receivedPayments[entry.id] || ''}
                  onChange={(e) =>
                    setReceivedPayments({
                      ...receivedPayments,
                      [entry.id]: e.target.value,
                    })
                  }
                />
                <button
                  onClick={() =>
                    updatePayment(
                      entry.id,
                      Number(receivedPayments[entry.id] || 0)
                    )
                  }
                >
                  Update Payment
                </button>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
