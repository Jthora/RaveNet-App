import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface UserProfileProps {
  username: string;
  bio: string;
  profileImage: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  username,
  bio,
  profileImage,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: profileImage}} style={styles.profileImage} />
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UserProfile;
