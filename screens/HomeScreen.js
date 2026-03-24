import { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, Text, View } from 'react-native';

import { styles } from '../styles';

const GLOW_MIN = 10;
const GLOW_MAX = 30;

const BLUE_FILL = '#c8e8ff';
const GOLD_FILL = '#f2cf6a';
const BLUE_GLOW = '#5cadff';
const GOLD_GLOW = '#e6a818';

export default function HomeScreen({ fontError, onGoToLevels }) {
  const glow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 2200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
        Animated.timing(glow, {
          toValue: 0,
          duration: 2200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [glow]);

  const glowStyle = {
    color: glow.interpolate({
      inputRange: [0, 1],
      outputRange: [BLUE_FILL, GOLD_FILL],
    }),
    textShadowColor: glow.interpolate({
      inputRange: [0, 1],
      outputRange: [BLUE_GLOW, GOLD_GLOW],
    }),
    textShadowRadius: glow.interpolate({
      inputRange: [0, 1],
      outputRange: [GLOW_MIN, GLOW_MAX],
    }),
  };

  return (
    <View style={styles.homeRoot}>
      <View style={styles.homeCenter}>
        <Animated.Text
          style={[
            styles.homeLogo,
            glowStyle,
            !fontError && { fontFamily: 'Silverandes' },
            fontError && styles.homeLogoFallback,
          ]}
        >
          The Saga of Slipstream
        </Animated.Text>
        <Text style={styles.homeSubtitle}>Intergalactic Superhero</Text>
        <Pressable
          onPress={onGoToLevels}
          style={({ pressed }) => [
            styles.homePrimaryBtn,
            pressed && styles.homePrimaryBtnPressed,
          ]}
        >
          <Text
            style={[
              styles.homePrimaryBtnText,
              !fontError && { fontFamily: 'Silverandes' },
            ]}
          >
            Level select
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
