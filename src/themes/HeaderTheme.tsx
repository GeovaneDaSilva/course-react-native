import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  header: {
    backgroundColor: '#000',
    color: '#fff',
    height: 200,
    fontSize: 40,
    paddingTop: 50,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputFild: {
    color: 'white',
    fontSize: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  titleButton: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  newContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});