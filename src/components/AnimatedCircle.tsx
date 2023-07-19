import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
type CircleProps = {
  circleX: Animated.SharedValue<number>;
};
const circleContainerSize = 50;

const AnimatedCircle = ({circleX}: CircleProps) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: circleX.value - circleContainerSize / 2}]};
  });
  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -circleContainerSize / 1.1,
    width: circleContainerSize,
    height: circleContainerSize,
    borderRadius: circleContainerSize,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedCircle;
