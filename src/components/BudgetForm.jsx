import React from 'react';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

import { toast } from 'react-toastify';
import { connect } from 'react-redux';  //redux
import * as actions from './redux/actions';  //redux

const labelStyles = `
  margin-bottom: 16px;  
`;

const BudgetForm = ({ onSave }) => {
  
  let inputValue = 0;

  const handleChange = ({ target: { value } }) => {
    inputValue = value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue <= 0) return toast.error("Enter correct number!");
    onSave(inputValue);
    e.target.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter your total budget
      <Input
          type="number"
          onChange={handleChange}
        />
      </Label>

      <Button label="Save" type="submit" />
    </Form>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(actions.setBudget(value)),
})

  export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);
