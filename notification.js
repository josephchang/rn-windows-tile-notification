import { NativeModules } from 'react-native';

export default function TileNotification() {
  const {
    showTileNotification,
    clearTileNotification,
  } = NativeModules.TileNotification;

  return {
    update: (tile) => {
      showTileNotification(tile.getXml());
    },
    clear: clearTileNotification,
  };
}
