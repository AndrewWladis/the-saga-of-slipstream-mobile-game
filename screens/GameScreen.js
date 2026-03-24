import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DialogueIcon from '../components/DialogueIcon';
import { LEVEL_DATA } from '../constants/levels';
import { styles } from '../styles';

const TYPING_MS_PER_CHAR = 26;

export default function GameScreen({ level, onLeave }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const typingIntervalRef = useRef(null);

  const levelData = LEVEL_DATA[level - 1] ?? [];
  const step = levelData[stepIndex];
  const fullText =
    step?.type === 'dialogue' && typeof step.dialogue === 'string'
      ? step.dialogue
      : '';

  useEffect(() => {
    setStepIndex(0);
  }, [level]);

  useEffect(() => {
    if (typingIntervalRef.current != null) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }

    if (!fullText) {
      setTypedLength(0);
      return;
    }

    setTypedLength(0);
    let len = 0;
    typingIntervalRef.current = setInterval(() => {
      len += 1;
      if (len >= fullText.length) {
        if (typingIntervalRef.current != null) {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
        setTypedLength(fullText.length);
        return;
      }
      setTypedLength(len);
    }, TYPING_MS_PER_CHAR);

    return () => {
      if (typingIntervalRef.current != null) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    };
  }, [stepIndex, fullText]);

  const advanceDialogue = useCallback(() => {
    if (stepIndex < levelData.length - 1) {
      setStepIndex((i) => i + 1);
    }
  }, [levelData.length, stepIndex]);

  const isTypingComplete = fullText.length === 0 || typedLength >= fullText.length;


  const handleDialoguePress = useCallback(() => {
    if (!fullText) return;
    if (!isTypingComplete) {
      setTypedLength(fullText.length);
      if (typingIntervalRef.current != null) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
      return;
    }
    advanceDialogue();
  }, [advanceDialogue, fullText, isTypingComplete]);

  const visibleText = fullText.slice(0, typedLength);

  return (
    <SafeAreaView style={styles.gameShell} edges={['top', 'left', 'right']}>
      <StatusBar style="dark" />
      <View style={styles.gameFrame}>
        <View style={styles.gameCharacterPanel}>
          <View style={styles.gameCharacterViewport} />
        </View>
        <View style={styles.gameConsoleRow}>
          {step?.type === 'dialogue' ? (
            <>
              <View style={styles.gameConsoleIconSlot}>
                <DialogueIcon icon={step.icon} />
              </View>
              <Pressable
                onPress={handleDialoguePress}
                style={({ pressed }) => [
                  styles.gameConsoleDialogue,
                  pressed && styles.gameConsoleDialoguePressed,
                ]}
              >
                <Text style={styles.gameConsoleDialogueText}>
                  {visibleText}
                </Text>
              </Pressable>
            </>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}
