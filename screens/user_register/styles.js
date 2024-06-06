import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    width: '80%',
  },
  button: {
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: '80%',
  },
  registerButton: {
    backgroundColor: '#FF7700',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkText: {
    color: '#3498db',
    marginTop: 16,
    fontSize: 14,
  },
});

export default styles;