import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function ProfileScreen({ userName, setUserName }) {
  const [name, setName] = useState(userName);

  return (
    <View style={styles.container}>
      <Text>Edit Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => {
          setName(text);
          setUserName(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginTop: 10, paddingHorizontal: 10 }
});
