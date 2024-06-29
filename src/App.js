import { useEffect, useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import Form from './components/Form';
import Layout from './components/Layout';
import Transactions from './components/Transactions';

function App() {
  const [selectedTransaction, setSelectedTransaction] = useState();

  return (
    <Layout>
      <Balance />
      <Form
        selectedTransaction={selectedTransaction}
        setSelectedTransaction={setSelectedTransaction}
      />
      <Transactions onEdit={setSelectedTransaction} />
    </Layout>
  );
}

export default App;
