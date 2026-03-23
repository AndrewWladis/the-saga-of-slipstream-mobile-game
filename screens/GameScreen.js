import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Starfield from '../components/Starfield';
import { styles } from '../styles';

export default function GameScreen({ activeLevel, onLeave }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.gameRoot}>
        <Starfield />
        <StatusBar style="light" />
        <Pressable onPress={onLeave} style={styles.backBtn} hitSlop={12}>
          <Text style={styles.backBtnText}>← Levels</Text>
        </Pressable>
        <View style={styles.gameBody}>
          <Text style={styles.gameTitle}>Level {activeLevel}</Text>
          <Text style={styles.gameHint}>Gameplay goes here.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
