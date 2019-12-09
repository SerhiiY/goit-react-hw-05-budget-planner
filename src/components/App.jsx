import React from "react";
import styled from "styled-components";
import BudgetForm from "./BudgetForm";
import ExpenseForm from "./ExpenseForm";
import ExpensesTable from "./ExpensesTable";
import Values from "./Values";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; //redux


const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expenses }) => (
  
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    {expenses.length > 0 && (
      <ExpensesTable />
    )}
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
    />
  </Container>
);

const mapStateToProps = state => ({
  expenses: state.expenses,
})

App.propTypes = {
  expenses: PropTypes.array,
}

App.defaultProps = {
  expenses: [],
}

export default connect(mapStateToProps)(App);