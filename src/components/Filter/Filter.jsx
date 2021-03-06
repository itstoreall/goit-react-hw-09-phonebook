import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => {
  return {
    search: {
      paddingLeft: 5,
      height: 50,
      position: 'relative',
      backgroundColor: fade(theme.palette.common.white, 0.0),

      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',

      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
    },

    // div
    searchIconWrap: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fill: 'red',

      // icon
      '& > svg': {
        fill: 'white',
      },
    },

    inputRoot: {
      width: '100%',
      color: 'white',
    },

    inputInput: {
      height: 34,
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      '&:focus': {
        width: '100%',
      },

      [theme.breakpoints.up('sm')]: {
        width: '18ch',
        '&:focus': {
          width: '27.4ch',
        },
      },
    },
  };
});

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChangeFilter = (e) => {
    dispatch(contactsActions.contactFilter(e.target.value));
  };

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIconWrap}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search by name…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          value={value}
          onChange={handleChangeFilter}
        />
      </div>
    </>
  );
}
