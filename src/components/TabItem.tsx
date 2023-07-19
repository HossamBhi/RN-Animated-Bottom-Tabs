import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../utils/helper';
import Feather from 'react-native-vector-icons/Feather';
import usePath from '../hooks/usePath';
import {getPathXCenter, getPathXCenterByIndex} from '../utils/path';
import {useEffect} from 'react';
export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};
const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 4;
const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const TabItem = ({label, icon, index, activeIndex, onTabPress}: TabProps) => {
  const {curvedPath} = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPath, index);
  const labelPosition = getPathXCenterByIndex(curvedPath, index);

  const tabStyle = useAnimatedStyle(() => {
    const transalteY = animatedActiveIndex.value - 1 === index ? -35 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;

    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        {translateY: withTiming(transalteY)},
        {translateX: iconPositionX - ICON_SIZE / 2},
      ],
    };
  });

  const labelContainerStyle = useAnimatedStyle(() => {
    const transalteY = animatedActiveIndex.value - 1 === index ? -35 : 20;

    return {
      transform: [
        {translateY: withTiming(transalteY)},
        {translateX: labelPosition - LABEL_WIDTH / 2},
      ],
    };
  });

  const iconColor = useSharedValue(
    activeIndex === index + 1 ? 'white' : 'rgba(128, 128, 128,0.8)',
  );

  //   Adjust Icon color for first render
  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming('white');
    } else {
      iconColor.value = withTiming('rgba(128, 128, 128,0.8)');
    }
  }, [activeIndex]);
};
