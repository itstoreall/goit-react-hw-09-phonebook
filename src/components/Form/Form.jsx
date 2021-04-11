import { connect } from 'react-redux';
import { useState } from 'react';
import { contactsOperations } from '../../redux/contacts';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import s from './Form.module.scss';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',

    '& label': {
      transform: 'translate(14px, 17px)',
    },

    '& input': {
      padding: 15,
    },
  },
});

const ContactForm = ({ state, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const ms = useStyles();

  // Записывает значение инпута в стейт
  const handleInputForm = (e) => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  // Creates contact
  const handleAddContact = (e) => {
    e.preventDefault();

    // Checking the correctness of input
    state.contacts.items.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : name !== '' && number !== ''
      ? formSubmit(name, number)
      : alert(`Fill out the form correctly.`);

    // Checking the match with the template
    function formSubmit(name, number) {
      const nameRegexp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
      const numberRegexp = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
      nameRegexp.test(name) && numberRegexp.test(number)
        ? newContact(name, number)
        : alert(`Fill out the form correctly.`);
    }

    // Sending a new contact
    function newContact(name, number) {
      onSubmit({
        name: name,
        number: number,
      });

      setName('');
      setNumber('');
    }
  };

  return (
    <form className={s.form}>
      <TextField
        id='name-outlined-basic'
        className={ms.root}
        label='Name'
        variant='outlined'
        type='text'
        name='name'
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name} // *
        onChange={handleInputForm}
      />

      <TextField
        id='number-outlined-basic'
        className={ms.root}
        label='Number'
        variant='outlined'
        type='tel'
        name='number'
        // pattern='\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'
        // title='Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +'
        required
        value={number} // *
        onChange={handleInputForm}
        placeholder='+38 067 6543210'
      />

      <Button
        variant='contained'
        className={s.formBtn}
        type='submit'
        onClick={handleAddContact}
      >
        Add contact
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {
  onSubmit: contactsOperations.ADD,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
