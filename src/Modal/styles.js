import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    maxHeight: 500,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
