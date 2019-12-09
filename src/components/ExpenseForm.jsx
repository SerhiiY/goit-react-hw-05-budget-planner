import React from 'react';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';  //redux
import * as actions from './redux/actions';  //redux

const labelStyles = `
  margin-bottom: 16px;  
`;

const ExpenseForm = ({ onSave, balance }) => {

  const expense = {
    name: '',
    amount: 0,
  }

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? expense.name = value : expense.amount = value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, amount } = expense;
    if (amount <= 0) return toast.error("Enter correct number!");
    if (!name) return toast.error("Enter correct expense name!");
    if (balance < amount) return toast.error("You don't have anough money");
    onSave(expense);
    e.target.reset();
  }
    
  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter expense name
          <Input
          type="text"
          name="name"
          placeholder='Enter expense name'
          onChange={handleChange}
        />
      </Label>
      <Label customStyles={labelStyles}>
        Enter expense amount
          <Input
          type="number"
          name="amount"
          placeholder='Enter expense amount'
          onChange={handleChange}
        />
      </Label>

      <Button label="Add" type="submit" />
    </Form>
  );
}

const mapStateToProps = state => ({
  balance: state.balance,
});

const mapDispatchToProps = dispatch => ({
  onSave: expense => dispatch(actions.addExpense(expense)),  
})

ExpenseForm.propTypes = {
  onSave: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
  