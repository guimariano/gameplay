import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './Auth.routes';
import { SignIn } from '../screens/SignIn';
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}