import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Button, Text, View } from 'react-native';

const Page = () => {
  const navigation = useNavigation();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button title="Open drawer" onPress={onToggle} />
    </View>
  );
};

export default Page;
