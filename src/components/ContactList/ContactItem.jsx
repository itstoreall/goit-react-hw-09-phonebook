import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
// import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import CancelIcon from '@material-ui/icons/Cancel';

import s from './Contacts.module.scss';

const useStyles = makeStyles((theme) => ({
  contactItemDivider: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 8,
    paddingLeft: 15,
  },
  phoneIcon: {
    fontSize: 28,
    marginRight: 20,
    fill: '#546086',
  },
  deleteBtn: {
    padding: 7,
    margin: 0,
  },
  deleteIcon: {
    fontSize: 26,
    opacity: 0.7,
    fill: 'palevioletred',
    '&:hover': {
      fill: 'palevioletred',
    },
  },
}));

const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  const ms = useStyles();

  return (
    <ListItem button divider className={ms.contactItemDivider}>
      <div className={s.contactItemInfoWrap}>
        <PhoneIcon className={ms.phoneIcon} />
        <ul>
          <li>{`${name}`}</li>
          <li>{`${number}`}</li>
        </ul>
      </div>
      <IconButton
        aria-label='delete contact'
        className={ms.deleteBtn}
        onClick={() => onDeleteContact(id)}
      >
        <CancelIcon fontSize='small' className={ms.deleteIcon} />
      </IconButton>
    </ListItem>
  );
};

export default ContactItem;
