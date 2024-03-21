import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface FeedItemProps {
  username: string;
  postText: string;
  imageUri?: string;
  onPress?: () => void;
}

const FeedItem: React.FC<FeedItemProps> = ({
  username,
  postText,
  imageUri,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.postText}>{postText}</Text>
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  content: {},
  postText: {
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default FeedItem;
