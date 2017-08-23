const BRANDING = {
  none: 'none',
  logo: 'logo',
  name: 'name',
  nameAndLogo: 'nameAndLogo',
};

const TEXTSTACKING = {
  top: 'top',
  center: 'center',
  bottom: 'bottom',
};

const TEXTALIGN = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const TEXTSTYLE = {
  caption: 'caption',
  body: 'body',
  base: 'base',
  subtitle: 'subtitle',
  title: 'title',
  subheader: 'subheader',
  header: 'header',
  titleNumeral: 'titleNumeral',
  subheaderNumeral: 'subheaderNumeral',
  headerNumeral: 'headerNumeral',
  captionSubtle: 'captionSubtle',
  bodySubtle: 'bodySubtle',
  baseSubtle: 'baseSubtle',
  subtitleSubtle: 'subtitleSubtle',
  titleSubtle: 'titleSubtle',
  titleNumeralSubtle: 'titleNumeralSubtle',
  subheaderSubtle: 'subheaderSubtle',
  subheaderNumeralSubtle: 'subheaderNumeralSubtle',
  headerSubtle: 'headerSubtle',
  headerNumeralSubtle: 'headerNumeralSubtle',
};

const IMAGEALIGN = {
  stretch: 'stretch',
  left: 'left',
  center: 'center',
  right: 'right',
};

const IMAGEPLACEMENT = {
  inline: 'inline',
  background: 'background',
  peek: 'peek',
};

const IMAGECROP = {
  none: 'none',
  circle: 'circle',
};

const TILETEMPLATENAMEV1 = {
  TileSquareBlock: 'TileSquareBlock',
  TileSquareImage: 'TileSquareImage',
  TileSquarePeekImageAndText01: 'TileSquarePeekImageAndText01',
  TileSquarePeekImageAndText02: 'TileSquarePeekImageAndText02',
  TileSquarePeekImageAndText03: 'TileSquarePeekImageAndText03',
  TileSquarePeekImageAndText04: 'TileSquarePeekImageAndText04',
  TileSquareText01: 'TileSquareText01',
  TileSquareText02: 'TileSquareText02',
  TileSquareText03: 'TileSquareText03',
  TileSquareText04: 'TileSquareText04',
  TileWideBlockAndText01: 'TileWideBlockAndText01',
  TileWideBlockAndText02: 'TileWideBlockAndText02',
  TileWideImage: 'TileWideImage',
  TileWideImageAndText01: 'TileWideImageAndText01',
  TileWideImageAndText02: 'TileWideImageAndText02',
  TileWideImageCollection: 'TileWideImageCollection',
  TileWidePeekImage01: 'TileWidePeekImage01',
  TileWidePeekImage02: 'TileWidePeekImage02',
  TileWidePeekImage03: 'TileWidePeekImage03',
  TileWidePeekImage04: 'TileWidePeekImage04',
  TileWidePeekImage05: 'TileWidePeekImage05',
  TileWidePeekImage06: 'TileWidePeekImage06',
  TileWidePeekImageAndText01: 'TileWidePeekImageAndText01',
  TileWidePeekImageAndText02: 'TileWidePeekImageAndText02',
  TileWidePeekImageCollection01: 'TileWidePeekImageCollection01',
  TileWidePeekImageCollection02: 'TileWidePeekImageCollection02',
  TileWidePeekImageCollection03: 'TileWidePeekImageCollection03',
  TileWidePeekImageCollection04: 'TileWidePeekImageCollection04',
  TileWidePeekImageCollection05: 'TileWidePeekImageCollection05',
  TileWidePeekImageCollection06: 'TileWidePeekImageCollection06',
  TileWideSmallImageAndText01: 'TileWideSmallImageAndText01',
  TileWideSmallImageAndText02: 'TileWideSmallImageAndText02',
  TileWideSmallImageAndText03: 'TileWideSmallImageAndText03',
  TileWideSmallImageAndText04: 'TileWideSmallImageAndText04',
  TileWideSmallImageAndText05: 'TileWideSmallImageAndText05',
  TileWideText01: 'TileWideText01',
  TileWideText02: 'TileWideText02',
  TileWideText03: 'TileWideText03',
  TileWideText04: 'TileWideText04',
  TileWideText05: 'TileWideText05',
  TileWideText06: 'TileWideText06',
  TileWideText07: 'TileWideText07',
  TileWideText08: 'TileWideText08',
  TileWideText09: 'TileWideText09',
  TileWideText10: 'TileWideText10',
  TileWideText11: 'TileWideText11',
};

const TILETEMPLATENAMEV3 = {
  TileMedium: 'TileMedium',
  TileSmall: 'TileSmall',
  TileWide: 'TileWide',
  TileLarge: 'TileLarge',
  TileSquare150x150Block: 'TileSquare150x150Block',
  TileSquare150x150Image: 'TileSquare150x150Image',
  TileSquare150x150PeekImageAndText01: 'TileSquare150x150PeekImageAndText01',
  TileSquare150x150PeekImageAndText02: 'TileSquare150x150PeekImageAndText02',
  TileSquare150x150PeekImageAndText03: 'TileSquare150x150PeekImageAndText03',
  TileSquare150x150PeekImageAndText04: 'TileSquare150x150PeekImageAndText04',
  TileSquare150x150Text01: 'TileSquare150x150Text01',
  TileSquare150x150Text02: 'TileSquare150x150Text02',
  TileSquare150x150Text03: 'TileSquare150x150Text03',
  TileSquare150x150Text04: 'TileSquare150x150Text04',
  TileSquare310x310BlockAndText01: 'TileSquare310x310BlockAndText01',
  TileSquare310x310BlockAndText02: 'TileSquare310x310BlockAndText02',
  TileSquare310x310Image: 'TileSquare310x310Image',
  TileSquare310x310ImageAndText01: 'TileSquare310x310ImageAndText01',
  TileSquare310x310ImageAndText02: 'TileSquare310x310ImageAndText02',
  TileSquare310x310ImageAndTextOverlay01: 'TileSquare310x310ImageAndTextOverlay01',
  TileSquare310x310ImageAndTextOverlay02: 'TileSquare310x310ImageAndTextOverlay02',
  TileSquare310x310ImageAndTextOverlay03: 'TileSquare310x310ImageAndTextOverlay03',
  TileSquare310x310ImageCollection: 'TileSquare310x310ImageCollection',
  TileSquare310x310ImageCollectionAndText01: 'TileSquare310x310ImageCollectionAndText01',
  TileSquare310x310ImageCollectionAndText02: 'TileSquare310x310ImageCollectionAndText02',
  TileSquare310x310SmallImagesAndTextList01: 'TileSquare310x310SmallImagesAndTextList01',
  TileSquare310x310SmallImagesAndTextList02: 'TileSquare310x310SmallImagesAndTextList02',
  TileSquare310x310SmallImagesAndTextList03: 'TileSquare310x310SmallImagesAndTextList03',
  TileSquare310x310SmallImagesAndTextList04: 'TileSquare310x310SmallImagesAndTextList04',
  TileSquare310x310Text01: 'TileSquare310x310Text01',
  TileSquare310x310Text02: 'TileSquare310x310Text02',
  TileSquare310x310Text03: 'TileSquare310x310Text03',
  TileSquare310x310Text04: 'TileSquare310x310Text04',
  TileSquare310x310Text05: 'TileSquare310x310Text05',
  TileSquare310x310Text06: 'TileSquare310x310Text06',
  TileSquare310x310Text07: 'TileSquare310x310Text07',
  TileSquare310x310Text08: 'TileSquare310x310Text08',
  TileSquare310x310TextList01: 'TileSquare310x310TextList01',
  TileSquare310x310TextList02: 'TileSquare310x310TextList02',
  TileSquare310x310TextList03: 'TileSquare310x310TextList03',
  TileWide310x150BlockAndText01: 'TileWide310x150BlockAndText01',
  TileWide310x150BlockAndText02: 'TileWide310x150BlockAndText02',
  TileWide310x150Image: 'TileWide310x150Image',
  TileWide310x150ImageAndText01: 'TileWide310x150ImageAndText01',
  TileWide310x150ImageAndText02: 'TileWide310x150ImageAndText02',
  TileWide310x150ImageCollection: 'TileWide310x150ImageCollection',
  TileWide310x150PeekImage01: 'TileWide310x150PeekImage01',
  TileWide310x150PeekImage02: 'TileWide310x150PeekImage02',
  TileWide310x150PeekImage03: 'TileWide310x150PeekImage03',
  TileWide310x150PeekImage04: 'TileWide310x150PeekImage04',
  TileWide310x150PeekImage05: 'TileWide310x150PeekImage05',
  TileWide310x150PeekImage06: 'TileWide310x150PeekImage06',
  TileWide310x150PeekImageAndText01: 'TileWide310x150PeekImageAndText01',
  TileWide310x150PeekImageAndText02: 'TileWide310x150PeekImageAndText02',
  TileWide310x150PeekImageCollection01: 'TileWide310x150PeekImageCollection01',
  TileWide310x150PeekImageCollection02: 'TileWide310x150PeekImageCollection02',
  TileWide310x150PeekImageCollection03: 'TileWide310x150PeekImageCollection03',
  TileWide310x150PeekImageCollection04: 'TileWide310x150PeekImageCollection04',
  TileWide310x150PeekImageCollection05: 'TileWide310x150PeekImageCollection05',
  TileWide310x150PeekImageCollection06: 'TileWide310x150PeekImageCollection06',
  TileWide310x150SmallImageAndText01: 'TileWide310x150SmallImageAndText01',
  TileWide310x150SmallImageAndText02: 'TileWide310x150SmallImageAndText02',
  TileWide310x150SmallImageAndText03: 'TileWide310x150SmallImageAndText03',
  TileWide310x150SmallImageAndText04: 'TileWide310x150SmallImageAndText04',
  TileWide310x150SmallImageAndText05: 'TileWide310x150SmallImageAndText05',
  TileWide310x150Text01: 'TileWide310x150Text01',
  TileWide310x150Text02: 'TileWide310x150Text02',
  TileWide310x150Text03: 'TileWide310x150Text03',
  TileWide310x150Text04: 'TileWide310x150Text04',
  TileWide310x150Text05: 'TileWide310x150Text05',
  TileWide310x150Text06: 'TileWide310x150Text06',
  TileWide310x150Text07: 'TileWide310x150Text07',
  TileWide310x150Text08: 'TileWide310x150Text08',
  TileWide310x150Text09: 'TileWide310x150Text09',
  TileWide310x150Text10: 'TileWide310x150Text10',
  TileWide310x150Text11: 'TileWide310x150Text11,',
  TileSquare71x71Image: 'TileSquare71x71Image,',
  TileSquare71x71IconWithBadge: 'TileSquare71x71IconWithBadge',
  TileSquare150x150IconWithBadge: 'TileSquare150x150IconWithBadge',
  TileWide310x150IconWithBadgeAndText: 'TileWide310x150IconWithBadgeAndText',
};

export {
  BRANDING,
  TEXTSTACKING,
  TEXTALIGN,
  TEXTSTYLE,
  IMAGEALIGN,
  IMAGECROP,
  IMAGEPLACEMENT,
  TILETEMPLATENAMEV1,
  TILETEMPLATENAMEV3,
};
