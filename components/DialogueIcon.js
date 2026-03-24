import { View, Text } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';

export default function DialogueIcon({ icon }) {
  switch (icon) {
    case "The Shield": 
      return <Octicons name="shield" size={70} color="black" />
    default:
      return null;
  }
}