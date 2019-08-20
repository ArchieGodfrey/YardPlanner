import { Colors, FontSizes } from "./";
import { Fonts } from "./Fonts";

export const DefaultPageTheme = {
  container: {
    flex: 1,
    backgroundColor: Colors.BlackMatte,
    paddingBottom: 0,
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16
  },
  titleContainer: {
    width: '100%',
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    color: Colors.Primary,
    fontSize: FontSizes.TitleSmall,
    fontFamily: Fonts.Bold,
  },
  inputs: {
    flex: 1,
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 20,
    maxWidth: 400,
  },
  button: {
    borderRadius: 8,
    backgroundColor: Colors.GreyB1
  },
  border(width = 1, color = Colors.Primary, radius = 3) {
    return {
      borderWidth: width,
      borderColor: color,
      borderRadius: radius
    }
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
};