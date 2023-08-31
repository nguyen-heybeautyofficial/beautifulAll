import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('screen');
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const statusBarHeight = Constants.statusBarHeight;
const isIPhoneX = (Platform.OS == 'ios' && statusBarHeight > 20) ? true : false;

//scale px theo design
const guidelineBaseWidth = Number('360');
const guidelineBaseHeight = Number('592');

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const horizontalScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const settingApp ={
    statusBarHeight,
    isIPhoneX,

    space_8:8,
    space_10:10,
    space_12:12,
    space_14:14,
    space_16:16,

    txt_8: scale(8),
    txt_10: scale(10),
    txt_12: scale(12),
    txt_14: scale(14),
    txt_16: scale(16),
    txt_18: scale(18),
    txt_20: scale(20),
    txt_24: scale(24),
    txt_28: scale(28),

    scale,
    verticalScale,
    horizontalScale,

    windowWidth,
    windowHeight,
    width,
    height,
}

export default settingApp