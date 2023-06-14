const sizes = {
  // iphone 12 pro max
  mobile: '428px',
  // ipad mini
  tablet: '768px',
  laptop: '1024px',
  desktop: '1560px',
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(max-width: ${sizes.desktop})`,
};
