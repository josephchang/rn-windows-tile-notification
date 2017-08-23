import { NativeModules } from 'react-native';

export default function TileNotification() {
  const {
    showTileNotification,
    clearTileNotification,
  } = NativeModules.TileNotification;

  return {
    showTileNotification,
    clearTileNotification,
  };
}
