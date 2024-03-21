import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface EventCardProps {
  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventImage?: string;
  onPress?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  eventName,
  eventDate,
  eventLocation,
  eventImage,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        {eventImage && (
          <Image source={{uri: eventImage}} style={styles.image} />
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.eventName}>{eventName}</Text>
        <Text style={styles.eventDateLocation}>
          {eventDate} - {eventLocation}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  eventName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  eventDateLocation: {
    fontSize: 14,
  },
});

export default EventCard;
