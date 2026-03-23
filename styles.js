import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },
  shellInner: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#000',
  },
  backBtn: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    marginBottom: 8,
  },
  backBtnText: {
    color: '#4a9eff',
    fontSize: 17,
    fontWeight: '600',
  },

  homeRoot: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
  },
  homeCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 48,
  },
  homeLogo: {
    fontSize: 89,
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 32,
    paddingHorizontal: 16,
    textShadowOffset: { width: 0, height: 0 },
  },
  homeLogoFallback: {
    fontWeight: '700',
    fontSize: 26,
  },
  homePrimaryBtn: {
    backgroundColor: '#060a12',
    borderWidth: 2,
    borderColor: '#c9a227',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#f0d060',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.45,
        shadowRadius: 5,
      },
      android: {
        elevation: 14,
      },
    }),
  },
  homePrimaryBtnPressed: {
    backgroundColor: '#0c1528',
    borderColor: '#8f7a2e',
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  homePrimaryBtnText: {
    color: '#fff9e6',
    fontSize: 30,
    letterSpacing: 5,
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadowColor: '#2a7fd4',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    ...Platform.select({
      android: { includeFontPadding: false },
    }),
  },

  levelSelectRoot: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  levelSelectTitle: {
    color: '#f5f5f5',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  levelSelectScroll: {
    paddingBottom: 32,
  },
  levelSelectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 14,
  },
  levelSelectCell: {
    width: '28%',
    minWidth: 96,
    aspectRatio: 1,
    maxWidth: 120,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelSelectUnlocked: {
    backgroundColor: '#1a1a1a',
    borderColor: '#4a9eff',
  },
  levelSelectLocked: {
    backgroundColor: '#0d0d0d',
    borderColor: '#2a2a2a',
    opacity: 0.65,
  },
  levelSelectPressed: {
    backgroundColor: '#252525',
  },
  levelSelectNumber: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
  levelSelectNumberLocked: {
    color: '#555',
  },
  levelSelectLockLabel: {
    color: '#666',
    fontSize: 11,
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  gameRoot: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  gameBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameTitle: {
    color: '#f5f5f5',
    fontSize: 22,
    fontWeight: '600',
  },
  gameHint: {
    color: '#777',
    fontSize: 15,
    marginTop: 12,
    textAlign: 'center',
  },
});
