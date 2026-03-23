import { Pressable, ScrollView, Text, View } from 'react-native';

import { styles } from '../styles';

const LEVEL_COUNT = 8;

export default function LevelSelectScreen({ onGoHome, onSelectLevel }) {
  return (
    <View style={styles.levelSelectRoot}>
      <Pressable onPress={onGoHome} style={styles.backBtn} hitSlop={12}>
        <Text style={styles.backBtnText}>← Home</Text>
      </Pressable>
      <Text style={styles.levelSelectTitle}>Select a level</Text>
      <ScrollView
        contentContainerStyle={styles.levelSelectScroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.levelSelectGrid}>
          {Array.from({ length: LEVEL_COUNT }, (_, i) => {
            const n = i + 1;
            const unlocked = n === 1;
            return (
              <Pressable
                key={n}
                onPress={() => onSelectLevel(n)}
                style={({ pressed }) => [
                  styles.levelSelectCell,
                  unlocked
                    ? styles.levelSelectUnlocked
                    : styles.levelSelectLocked,
                  unlocked && pressed && styles.levelSelectPressed,
                ]}
                disabled={!unlocked}
              >
                <Text
                  style={[
                    styles.levelSelectNumber,
                    !unlocked && styles.levelSelectNumberLocked,
                  ]}
                >
                  {n}
                </Text>
                {!unlocked && (
                  <Text style={styles.levelSelectLockLabel}>Locked</Text>
                )}
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
