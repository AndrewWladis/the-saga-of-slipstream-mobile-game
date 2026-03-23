import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Starfield from './components/Starfield';
import GameScreen from './screens/GameScreen';
import HomeScreen from './screens/HomeScreen';
import LevelSelectScreen from './screens/LevelSelectScreen';
import { styles } from './styles';

SplashScreen.preventAutoHideAsync();

const SLIDE_PAD = 56;
const DURATION_SLIDE = 520;
const DURATION_FADE = 560;

export default function App() {
  const { height: windowHeight } = useWindowDimensions();
  const [fontsLoaded, fontError] = useFonts({
    Silverandes: require('./assets/Silverandes.otf'),
  });
  const [screen, setScreen] = useState('home');
  const [transition, setTransition] = useState(null);
  const [activeLevel, setActiveLevel] = useState(null);

  const homeY = useRef(new Animated.Value(0)).current;
  const levelsOpacity = useRef(new Animated.Value(0)).current;
  const busyRef = useRef(false);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <View style={styles.safe} />;
  }

  const slideUp = -(windowHeight + SLIDE_PAD);

  const showHome =
    screen === 'home' || transition === 'back';
  const showLevels =
    screen === 'levels' ||
    transition === 'forward' ||
    transition === 'back';

  const homeZIndex = !showLevels ? 1 : transition === 'back' ? 1 : 2;
  const levelsZIndex = !showHome ? 1 : transition === 'back' ? 2 : 1;

  const goToLevels = () => {
    if (busyRef.current || screen !== 'home') return;
    busyRef.current = true;
    setTransition('forward');
    levelsOpacity.setValue(0);
    homeY.setValue(0);
    Animated.parallel([
      Animated.timing(homeY, {
        toValue: slideUp,
        duration: DURATION_SLIDE,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(levelsOpacity, {
        toValue: 1,
        duration: DURATION_FADE,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setScreen('levels');
      setTransition(null);
      homeY.setValue(0);
      busyRef.current = false;
    });
  };

  const goHome = () => {
    if (busyRef.current || screen !== 'levels') return;
    busyRef.current = true;
    setTransition('back');
    homeY.setValue(slideUp);
    levelsOpacity.setValue(1);
    Animated.parallel([
      Animated.timing(homeY, {
        toValue: 0,
        duration: DURATION_SLIDE,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(levelsOpacity, {
        toValue: 0,
        duration: DURATION_FADE,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setScreen('home');
      setTransition(null);
      levelsOpacity.setValue(0);
      busyRef.current = false;
    });
  };

  const leaveGame = () => {
    setActiveLevel(null);
    setScreen('levels');
    levelsOpacity.setValue(1);
  };

  const startLevel = (level) => {
    if (level !== 1) return;
    setActiveLevel(level);
    setScreen('game');
  };

  if (screen === 'game') {
    return (
      <GameScreen activeLevel={activeLevel} onLeave={leaveGame} />
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View
        style={styles.shellInner}
        pointerEvents={transition ? 'none' : 'auto'}
      >
        <StatusBar style="light" />
        <View
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, { zIndex: 0 }]}
        >
          <Starfield />
        </View>
        {showLevels && (
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              { opacity: levelsOpacity, zIndex: levelsZIndex + 1 },
            ]}
          >
            <LevelSelectScreen
              onGoHome={goHome}
              onSelectLevel={startLevel}
            />
          </Animated.View>
        )}
        {showHome && (
          <Animated.View
            style={{
              flex: 1,
              zIndex: homeZIndex + 1,
              transform: [{ translateY: homeY }],
            }}
          >
            <HomeScreen
              fontError={!!fontError}
              onGoToLevels={goToLevels}
            />
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
}
