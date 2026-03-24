import { Pressable, ScrollView, Text, View } from 'react-native';

import { LEVELS } from '../constants/levels';
import { styles } from '../styles';

export default function LevelSelectScreen({
  maxUnlockedLevel,
  onGoHome,
  onSelectLevel,
}) {
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
          {LEVELS.map((title, i) => {
            const n = i + 1;
            const unlocked = n <= maxUnlockedLevel;
            return (
              <Pressable
                key={title}
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
                    styles.levelSelectChapterTitle,
                    !unlocked && styles.levelSelectChapterTitleLocked,
                  ]}
                >
                  {title}
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
