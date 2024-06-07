import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  category: {
    padding: 10,
  },
  selectedCategory: {
    backgroundColor: 'white',
  },
  categoryText: {
    color: '#000',
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailContact: {
    fontSize: 14,
    marginBottom: 8,
    color: '#FF7700',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 15,
    paddingLeft: 8,
  },
  donateButton: {
    color: '#FF7700',
    marginTop: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },  
});

