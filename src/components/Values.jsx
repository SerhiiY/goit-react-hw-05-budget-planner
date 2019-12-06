import React from 'react';
import styled from 'styled-components';
import Value from './Value';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';  //redux

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const calculateTotalExpenses = expenses => 
  expenses.reduce((total, expense) => total + expense.amount, 0);


const Values = ({ budget, expenses }) => {
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = budget - totalExpenses;

return (
    <Container>
      <Value label="Budget" value={budget} isPositive />
      <Value label="Expenses" value={totalExpenses} />
      <Value label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
}

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: state.expenses,
  balance: state.balance
})

Values.propTypes = {
  budget: PropTypes.number,
  expenses: PropTypes.array,
}

Values.defaultProps = {
  budget: 0,
  expences: [],
}
  export default connect(mapStateToProps)(Values);