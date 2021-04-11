// import { Component } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import ContactForm from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import s from './Views.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    // '& > * + *': {
    //   marginTop: theme.spacing(2),
    // },
  },
}));

const ContactsView = ({ isLoading, getContacts }) => {
  const classes = useStyles();

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <div className={s.contactContainer}>
      <div>{isLoading && <LinearProgress className={classes.root} />}</div>
      <div className={s.filterWrapper}>
        <Filter />
      </div>
      <div className={s.wrap}>
        <div className={s.contactWrapper}>
          <ContactList />
        </div>
        <div className={s.formWrapper}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  getContacts: contactsOperations.GET,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
