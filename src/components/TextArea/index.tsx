import React from 'react';
import { TextInput, TextInputBase, TextInputProps } from 'react-native';
import { styles } from './styles';

export function TextArea({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      {...rest}
    />
  );
} 
