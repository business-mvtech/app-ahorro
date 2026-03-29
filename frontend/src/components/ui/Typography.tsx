import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';

interface TypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: string;
  weight?: 'normal' | 'bold' | '500' | '600' | '700';
  align?: 'left' | 'center' | 'right';
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = Colors.textPrimary,
  weight,
  align = 'left',
  style,
  children,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        { color, textAlign: align },
        weight && { fontWeight: weight },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: 'System', // Cambiar por una fuente custom más adelante si se desea
  },
  h1: {
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: -1,
  },
  h2: {
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 22,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.textSecondary,
  },
});
