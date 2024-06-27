
import { View, Text, StyleSheet, ListRenderItem, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { Listing } from '@/interfaces/listings';

interface Props {
    listing: Listing;
  
  }

const ListingItem = ({ listing : item}: Props) => {

  return (
    <Link href={`/listing/${item.id}`} asChild>
    <TouchableOpacity>
      <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
        <Image source={{ uri: item.medium_url }} style={styles.image} />
        <View style={styles.infoContainer}>
          
          <View style={styles.details}>
            <View style={styles.header}>
              <Text style={styles.title}>{item.name}</Text>
  
            </View>
            <Text style={styles.roomType}>{item.room_type}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>MAD {item.price * 10}</Text>
              <Text style={styles.night}>night</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  </Link>
  );
};

const styles = StyleSheet.create({
  listing: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  heartIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  details: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontFamily: 'mon-sb',
  },
  roomType: {
    fontFamily: 'mon-sb',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  price: {
    fontFamily: 'mon-sb',
  },
  night: {
    fontFamily: 'mon',
  },
});

export default ListingItem;
