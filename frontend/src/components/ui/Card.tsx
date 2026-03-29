import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../theme/Colors';

interface CardProps extends ViewProps {
  variant?: 'default' | 'highlight';
}

export const Card: React.FC<CardProps> = ({ variant = 'default', style, children, ...props }) => {
  return (
    <View
      style={[
        styles.card,
        variant === 'highlight' && styles.highlight,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  highlight: {
    backgroundColor: Colors.surfaceHighlight,
    borderColor: 'transparent',
  },
});
