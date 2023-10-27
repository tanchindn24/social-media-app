import { TypeRouter } from "../types/Types";
import MainScreen from "../components/MainScreen/Component";

export const Routes = <TypeRouter[]>[
  {
    component: MainScreen,
    name: "main-screen",
    auth: true,
    options: {
      headerShown: true
    },
  }
];
