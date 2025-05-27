import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 15,
    justifyContent: 'space-between',
  },
  time: {
    color: 'white',
  },
  foodImage: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    marginLeft: 5,
    color: '#666',
  },
  description: {
    marginTop: 10,
    color: '#666',
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  author: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  role: {
    color: '#666',
  },
  tabRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#F5A623',
    borderRadius: 8,
    alignItems: 'center',
  },
  tabButtonActive: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5A623',
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 5,
  },
  tabText: {
    color: '#F5A623',
  },
  tabTextActive: {
    color: 'white',
  },
  step: {
    marginTop: 15,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepText: {
    marginTop: 5,
    color: '#666',
  },
  videoButton: {
    backgroundColor: '#F5A623',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  videoButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  commentSection: {
    marginTop: 25,
  },
  commentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  comment: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatarComment: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentName: {
    fontWeight: 'bold',
  },
  commentText: {
    color: '#666',
  },
});
