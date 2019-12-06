import React from 'react';
import styled from 'styled-components';
import Button from './shared/Button';

import PropTypes from 'prop-types';

import { connect } from 'react-redux'; //redux
import * as actions from './redux/actions';  //redux

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ expenses, onRemove }) => (

  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {expenses.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" name={id} onClick={() => onRemove(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const mapStateToProps = state => ({
  expenses: state.expenses,
})

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.removeExpense(id)),
})

ExpensesTable.propTypes = {
  expeses: PropTypes.array,
  onRemove: PropTypes.func,
}

ExpensesTable.defaultProps = {
  expenses: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
