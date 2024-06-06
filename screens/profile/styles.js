import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,  // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Add shadow for iOS
    shadowOpacity: 0.8, // Add shadow for iOS
    shadowRadius: 2, // Add shadow for iOS
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  headerBoldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubText: {
    fontSize: 14,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#FF7700',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;