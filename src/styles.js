import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
  },
  heading: {
    // color: 'rgba(0,183,255, 1)',
    color: 'black',
    
  },
  image: {
    marginLeft: '15px',
  },
}));