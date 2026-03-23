import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, StyleSheet, useWindowDimensions, View } from 'react-native';

const STAR_COUNT = 60;

function TwinkleStar({ left, top, size, color, delay, minO, maxO, duration }) {
  const opacity = useRef(
    new Animated.Value(minO + Math.random() * (maxO - minO)),
  ).current;

  useEffect(() => {
    let anim;
    let cancelled = false;
    const t = setTimeout(() => {
      if (cancelled) return;
      anim = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: maxO,
            duration,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: minO,
            duration,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
      );
      anim.start();
    }, delay);
    return () => {
      cancelled = true;
      clearTimeout(t);
      anim?.stop();
    };
  }, [delay, duration, maxO, minO, opacity]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.star,
        {
          left,
          top,
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
          opacity,
        },
      ]}
    />
  );
}

export default function Starfield() {
  const { width, height } = useWindowDimensions();

  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, i) => {
      const roll = Math.random();
      const color =
        roll < 0.68
          ? '#ffffff'
          : roll < 0.88
            ? '#b4d4ff'
            : '#fff4cc';
      return {
        id: i,
        left: Math.random() * width,
        top: Math.random() * height,
        size: Math.random() < 0.82 ? 1 + Math.floor(Math.random() * 2) : 3 + Math.floor(Math.random() * 2),
        color,
        delay: Math.random() * 3500,
        minO: 0.1 + Math.random() * 0.22,
        maxO: 0.5 + Math.random() * 0.5,
        duration: 900 + Math.random() * 2400,
      };
    });
  }, [width, height]);

  return (
    <View style={styles.layer} pointerEvents="none">
      {stars.map((s) => (
        <TwinkleStar key={s.id} {...s} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  star: {
    position: 'absolute',
  },
});
