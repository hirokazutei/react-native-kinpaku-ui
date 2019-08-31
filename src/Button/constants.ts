import { FlexAlignType } from "react-native";
import { ButtonSizeKeys } from "./types";

const DEFAULT_BUTTON_PADDING_SIZES: { [key in ButtonSizeKeys]: number } = {
  tiny: 1,
  small: 2,
  medium: 4,
  default: 4,
  large: 6,
  huge: 8,
  massive: 8
};

const DEFAULT_BUTTON_FONT_SIZES: { [key in ButtonSizeKeys]: number } = {
  tiny: 8,
  small: 10,
  medium: 12,
  default: 12,
  large: 16,
  huge: 20,
  massive: 24
};

const DEFAULT_BUTTON_ALIGN: FlexAlignType = "center";

export {
  DEFAULT_BUTTON_PADDING_SIZES,
  DEFAULT_BUTTON_FONT_SIZES,
  DEFAULT_BUTTON_ALIGN
};
