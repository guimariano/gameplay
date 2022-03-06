import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

export function SmallImput({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="number-pad"
      {...rest}
    />
  );
} 
