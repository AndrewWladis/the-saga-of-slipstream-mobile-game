import AsyncStorage from '@react-native-async-storage/async-storage';

import { LEVEL_COUNT, STORAGE_KEY_MAX_UNLOCKED } from '../constants/levels';

export async function loadMaxUnlockedLevel() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY_MAX_UNLOCKED);
    if (raw == null || raw === '') {
      return 1;
    }
    const n = parseInt(raw, 10);
    if (!Number.isFinite(n)) {
      return 1;
    }
    const clamped = Math.min(Math.max(1, Math.floor(n)), LEVEL_COUNT);
    return clamped;
  } catch {
    return 1;
  }
}

export async function saveMaxUnlockedLevel(level) {
  try {
    const clamped = Math.min(Math.max(1, Math.floor(level)), LEVEL_COUNT);
    await AsyncStorage.setItem(STORAGE_KEY_MAX_UNLOCKED, String(clamped));
  } catch {
    // ignore persist errors
  }
}
