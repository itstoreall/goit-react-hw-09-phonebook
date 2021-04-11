import { connect } from 'react-redux';
import ContactList from './ContactList';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContects(state),
});

// Dispatch в компоненте вызывает операцию

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.DELETE(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
