import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';
import {
  SearchBar,
  ExploreView,
  AnonymousFeedView,
  FollowView,
  RegularFeedView,
  LoadMoreView,
} from './components';

//change scrollview to flatlist? - RESEARCH
export default () => {
  const ref = React.useRef(null);
  useScrollToTop(ref);
  return (
    <ScrollView
      ref={ref}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <SearchBar />
      <ExploreView />
      <AnonymousFeedView />
      <FollowView />
      <RegularFeedView />
      <LoadMoreView />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: wdp('5%'),
    paddingRight: wdp('5%'),
  },
});
