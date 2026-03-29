import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Spacing } from '@/theme/Colors';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Typography variant="body" color={Colors.textSecondary}>
            Bienvenido de nuevo
          </Typography>
          <Typography variant="h1">
            Andrés
          </Typography>
        </View>

        {/* Balance Card Section */}
        <Card variant="highlight" style={styles.balanceCard}>
          <Typography variant="caption" color={Colors.textSecondary} style={{ marginBottom: Spacing.sm }}>
            Saldo Total Disponible (Thin API)
          </Typography>
          <Typography variant="h1" style={styles.balanceText}>
            $12,450.00
          </Typography>
          
          <View style={styles.actionRow}>
            <Button title="Ingresar" variant="primary" style={styles.flexButton} />
            <Button title="Retirar" variant="secondary" style={styles.flexButton} />
          </View>
        </Card>

        {/* Savings Goals Section */}
        <View style={styles.section}>
          <Typography variant="h3" style={{ marginBottom: Spacing.md }}>
            Metas de Ahorro
          </Typography>
          
          <Card style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <Typography variant="body" weight="600">Viaje a Japón</Typography>
              <Typography variant="body" color={Colors.primary}>65%</Typography>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '65%' }]} />
            </View>
            <Typography variant="caption" color={Colors.textSecondary} style={{ marginTop: Spacing.sm }}>
              Faltan $1,250.00 para la meta
            </Typography>
          </Card>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: Spacing.xl,
    paddingBottom: Spacing.xxl * 2,
  },
  header: {
    marginBottom: Spacing.xl,
  },
  balanceCard: {
    marginBottom: Spacing.xl,
    paddingVertical: Spacing.xxl,
  },
  balanceText: {
    fontSize: 42,
    marginBottom: Spacing.xl,
  },
  actionRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  flexButton: {
    flex: 1,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  goalCard: {
    marginBottom: Spacing.md,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: Colors.surfaceHighlight,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
});
