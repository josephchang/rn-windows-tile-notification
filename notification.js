import { NativeModules } from 'react-native';

const {
  showTileNotification,
  clearTileNotification,
} = NativeModules.TileNotification;

const TileNotification = {
  update: (tile) => {
    if (tile) {
      showTileNotification(tile.getXml());
    }
  },
  clear: clearTileNotification,
};

export default TileNotification;
