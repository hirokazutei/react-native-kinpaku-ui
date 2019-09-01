type SpacingKeys = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'massive';

type Spacing = Readonly<{[key in SpacingKeys]: number}>;

const spacing: Spacing = {
  tiny: 4,
  small: 8,
  medium: 12,
  large: 16,
  huge: 24,
  massive: 32,
};

export {SpacingKeys, spacing};
