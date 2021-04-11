import axios from 'axios';
import { contactsActions } from '../contacts';

/**
 * Операция это функция, вызванная в компоненте,
 * которая возвращает другую функцию, в которой
 * выполняются асинх запросы по паттерну:
 * Request > Success > Error
 */

// GET
export const GET = () => async (dispatch) => {
  dispatch(contactsActions.getContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.getContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.getContactsError(error.message));
  }
};

// ADD
export const ADD = (description) => async (dispatch) => {
  const newContact = { name: description.name, number: description.number };

  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', newContact);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

// DELETE
export const DELETE = (id) => async (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};
