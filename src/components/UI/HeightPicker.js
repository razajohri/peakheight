import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { COLORS, HEIGHT_UNITS, DEFAULT_VALUES } from '../../utils/constants';

export default function HeightPicker({
  value,
  onChange,
  unit = HEIGHT_UNITS.FEET_INCHES,
  style
}) {
  const [currentUnit, setCurrentUnit] = useState(unit);

  const handleUnitChange = (newUnit) => {
    setCurrentUnit(newUnit);
    if (newUnit !== unit && onChange) {
      // Convert value to new unit
      const convertedValue = newUnit === HEIGHT_UNITS.CENTIMETERS
        ? convertFeetToCm(value)
        : convertCmToFeet(value);
      onChange(convertedValue, newUnit);
    }
  };

  const convertFeetToCm = (feetValue) => {
    if (typeof feetValue === 'object' && feetValue.feet !== undefined) {
      return Math.round((feetValue.feet * 12 + (feetValue.inches || 0)) * 2.54);
    }
    return DEFAULT_VALUES.HEIGHT_CM;
  };

  const convertCmToFeet = (cmValue) => {
    const totalInches = cmValue / 2.54;
    return {
      feet: Math.floor(totalInches / 12),
      inches: Math.round(totalInches % 12)
    };
  };

  const handleFeetChange = (feet) => {
    const newValue = { 
      feet: Math.max(3, Math.min(8, feet)),
      inches: (value?.inches || 0)
    };
    onChange && onChange(newValue, currentUnit);
  };

  const handleInchesChange = (inches) => {
    const newValue = { 
      feet: (value?.feet || 5),
      inches: Math.max(0, Math.min(11, inches))
    };
    onChange && onChange(newValue, currentUnit);
  };

  const handleCmChange = (cm) => {
    const newValue = Math.max(120, Math.min(220, cm));
    onChange && onChange(newValue, currentUnit);
  };

  const renderUnitToggle = () => (
    <View style={styles.unitToggle}>
      <TouchableOpacity
        style={[
          styles.unitButton,
          currentUnit === HEIGHT_UNITS.FEET_INCHES && styles.unitButtonActive
        ]}
        onPress={() => handleUnitChange(HEIGHT_UNITS.FEET_INCHES)}
      >
        <Text style={[
          styles.unitButtonText,
          currentUnit === HEIGHT_UNITS.FEET_INCHES && styles.unitButtonTextActive
        ]}>
          Ft/In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.unitButton,
          currentUnit === HEIGHT_UNITS.CENTIMETERS && styles.unitButtonActive
        ]}
        onPress={() => handleUnitChange(HEIGHT_UNITS.CENTIMETERS)}
      >
        <Text style={[
          styles.unitButtonText,
          currentUnit === HEIGHT_UNITS.CENTIMETERS && styles.unitButtonTextActive
        ]}>
          CM
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeightDisplay = () => {
    if (currentUnit === HEIGHT_UNITS.FEET_INCHES) {
      const feet = value?.feet || DEFAULT_VALUES.HEIGHT_FT.feet;
      const inches = value?.inches || DEFAULT_VALUES.HEIGHT_FT.inches;
      
      return (
        <View style={styles.heightDisplay}>
          <View style={styles.heightCircle}>
            <Text style={styles.heightValue}>
              <Text style={styles.feet}>{feet}</Text>
              <Text style={styles.unit}>FT </Text>
              <Text style={styles.inches}>{inches}</Text>
              <Text style={styles.unit}>IN</Text>
            </Text>
          </View>
        </View>
      );
    } else {
      const cm = typeof value === 'number' ? value : DEFAULT_VALUES.HEIGHT_CM;
      
      return (
        <View style={styles.heightDisplay}>
          <View style={styles.heightCircle}>
            <Text style={styles.heightValue}>
              <Text style={styles.cm}>{cm}</Text>
              <Text style={styles.unit}>CM</Text>
            </Text>
          </View>
        </View>
      );
    }
  };

  const renderControls = () => {
    if (currentUnit === HEIGHT_UNITS.FEET_INCHES) {
      const feet = value?.feet || DEFAULT_VALUES.HEIGHT_FT.feet;
      const inches = value?.inches || DEFAULT_VALUES.HEIGHT_FT.inches;
      
      return (
        <View style={styles.controls}>
          <View style={styles.controlGroup}>
            <Text style={styles.controlLabel}>Feet</Text>
            <View style={styles.controlButtons}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleFeetChange(feet - 1)}
              >
                <Text style={styles.controlButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.controlValue}>{feet}</Text>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleFeetChange(feet + 1)}
              >
                <Text style={styles.controlButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.controlGroup}>
            <Text style={styles.controlLabel}>Inches</Text>
            <View style={styles.controlButtons}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleInchesChange(inches - 1)}
              >
                <Text style={styles.controlButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.controlValue}>{inches}</Text>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleInchesChange(inches + 1)}
              >
                <Text style={styles.controlButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      const cm = typeof value === 'number' ? value : DEFAULT_VALUES.HEIGHT_CM;
      
      return (
        <View style={styles.controls}>
          <View style={styles.controlGroup}>
            <Text style={styles.controlLabel}>Centimeters</Text>
            <View style={styles.controlButtons}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleCmChange(cm - 1)}
              >
                <Text style={styles.controlButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.controlValue}>{cm}</Text>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => handleCmChange(cm + 1)}
              >
                <Text style={styles.controlButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={[styles.container, style]}>
      {renderUnitToggle()}
      {renderHeightDisplay()}
      {renderControls()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  unitToggle: {
    flexDirection: 'row',
    backgroundColor: COLORS.SURFACE,
    borderRadius: 20,
    padding: 4,
    marginBottom: 30,
  },
  unitButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
  },
  unitButtonActive: {
    backgroundColor: COLORS.PRIMARY,
  },
  unitButtonText: {
    color: COLORS.TEXT_SECONDARY,
    fontWeight: '600',
  },
  unitButtonTextActive: {
    color: COLORS.BACKGROUND,
  },
  heightDisplay: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heightCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.SURFACE,
    borderWidth: 3,
    borderColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heightValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
  },
  feet: {
    fontSize: 36,
  },
  inches: {
    fontSize: 36,
  },
  cm: {
    fontSize: 42,
  },
  unit: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
  },
  controls: {
    width: '100%',
  },
  controlGroup: {
    alignItems: 'center',
    marginBottom: 20,
  },
  controlLabel: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 10,
  },
  controlButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.SURFACE,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  controlButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  controlValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    minWidth: 40,
    textAlign: 'center',
  },
});