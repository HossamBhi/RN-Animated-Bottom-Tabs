import {useMemo} from 'react';
import {curveBasis, line} from 'd3-shape';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN_WIDTH} from '../utils/helper';
import {parse} from 'react-native-redash';

const NUM_TABS = 4;
const SCALE = 0.7;
const TAB_BAR_HEIGHT = 64;
const generateTabShapePath: (
  position: number,
  adjustHeight: number,
) => string = (position, adjustHeight) => {
  const adjustWidth = SCREEN_WIDTH / NUM_TABS;
  const tabX = adjustWidth * position;

  const lineGenerator = line().curve(curveBasis);
  const tab = lineGenerator([
    // start
    [tabX - 100 * SCALE, 0],
    [tabX - (65 + 35) * SCALE, 0],
    [tabX - (50 - 10) * SCALE, -6 * SCALE],
    [tabX - (50 - 15) * SCALE, (adjustHeight - 14) * SCALE],
    // end
    [tabX - (50 - 15) * SCALE, (adjustHeight - 14) * SCALE],
    [tabX - (50 - 10) * SCALE, -6 * SCALE],
    [tabX - (65 + 35) * SCALE, 0],
    [tabX - 100 * SCALE, 0],
  ]);

  return `${tab}`;
};

const usePath = () => {
  const insets = useSafeAreaInsets();
  const tHeight = TAB_BAR_HEIGHT + insets.bottom;
  const adjustHeight = tHeight - insets.bottom;

  const containerPath = useMemo(
    () =>
      `M0,0L${SCREEN_WIDTH},0L${SCREEN_WIDTH},0L${SCREEN_WIDTH},${tHeight}L0`,
    [tHeight],
  );

  const curvedPath = useMemo(
    () =>
      Array.from({length: NUM_TABS}, (_, index) => {
        const tabShapePath = generateTabShapePath(index + 0.5, adjustHeight);
        return parse(`${tabShapePath}`);
      }),
    [adjustHeight],
  );

  return {containerPath, curvedPath, tHeight};
};

export default usePath;
