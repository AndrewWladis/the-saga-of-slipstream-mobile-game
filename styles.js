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
    paddingHorizontal: 16,
    textShadowOffset: { width: 0, height: 0 },
  },
  homeSubtitle: {
    color: '#9eb6d4',
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: 2.5,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 36,
    paddingHorizontal: 20,
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
    flexGrow: 1,
    alignSelf: 'stretch',
    width: '100%',
  },
  levelSelectGrid: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    width: '100%',
    gap: 12,
  },
  levelSelectCell: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 18,
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
  levelSelectChapterTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
  levelSelectChapterTitleLocked: {
    color: '#555',
  },
  levelSelectLockLabel: {
    color: '#666',
    fontSize: 11,
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  gameShell: {
    flex: 1,
    backgroundColor: '#c8c8c8',
  },
  gameBackBtn: {
    position: 'absolute',
    top: 8,
    left: 10,
    zIndex: 10,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  gameBackBtnText: {
    color: '#333',
    fontSize: 17,
    fontWeight: '600',
  },
  gameFrame: {
    flex: 1,
    marginHorizontal: 14,
    marginTop: 15,
    marginBottom: 14,
    gap: 10,
  },
  gameCharacterPanel: {
    flex: 7,
    minHeight: 120,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#a8a8a8',
  },
  gameCharacterViewport: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  gameCharacterLabel: {
    color: '#9a9a9a',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  gameConsoleRow: {
    flex: 3,
    minHeight: 108,
    maxHeight: 200,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#a8a8a8',
    overflow: 'hidden',
    marginBottom: 30,
  },
  gameConsoleIconSlot: {
    width: 96,
    backgroundColor: '#a5d980',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderColor: '#a8a8a8',
  },
  gameConsoleDialogue: {
    flex: 1,
    backgroundColor: '#a5d980',
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  gameConsoleDialoguePressed: {
    opacity: 0.88,
  },
  gameConsoleDialogueHint: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#0a1608',
    opacity: 0.55,
    ...Platform.select({
      ios: {
        fontFamily: 'Menlo',
      },
      android: {
        fontFamily: 'monospace',
      },
      default: {
        fontFamily: 'monospace',
      },
    }),
  },
  gameConsoleDialogueText: {
    color: '#0a1608',
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: 1.2,
    fontVariant: ['tabular-nums'],
    ...Platform.select({
      ios: {
        fontFamily: 'Menlo',
      },
      android: {
        fontFamily: 'monospace',
      },
      default: {
        fontFamily: 'monospace',
      },
    }),
  },
});
