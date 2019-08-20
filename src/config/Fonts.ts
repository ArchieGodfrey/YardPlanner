import { Platform } from 'react-native';

export const Fonts = {
    MontLight: "Montserrat-Light",
    MontMedium: "Montserrat-Medium",
    MontRegular: "Montserrat-Regular",
    MontBold: "Montserrat-Bold",
    MontSemiBold: "Montserrat-SemiBold",
    MontBlack: "Montserrat-Black",
    Book: Platform.OS === 'ios' ? "Avenir-Book" : "AvenirLTStd-Book",
    Light: Platform.OS === 'ios' ? "Avenir-Light" :"AvenirLTStd-Light",
    Medium: Platform.OS === 'ios' ? "Avenir-Medium" : "AvenirLTStd-Medium",
    Bold: Platform.OS === 'ios' ? "Avenir-Heavy" : "AvenirLTStd-Heavy",
    Black: Platform.OS === 'ios' ? "Avenir-Black" : "AvenirLTStd-Black",
}