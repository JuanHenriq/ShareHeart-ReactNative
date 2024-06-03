import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  banner: {
    width: '100%',
    height: 200,
    backgroundColor: '#ccc',
    marginBottom: 30,
  },
  bannerButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 4,
  },
  bannerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  categorySection: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 14,
    marginTop: 10,
  },
  highlightSection: {
    marginBottom: 20,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  highlight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  highlightItem: {
    alignItems: 'center',
  },
  highlightImage: {
    width: 180,
    height: 100,
    borderRadius: 8,
  },
  highlightText: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default styles;
