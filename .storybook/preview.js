import Center from "../src/components/Center/Center";
import { ChakraProvider } from "@chakra-ui/react";
import "@storybook/addon-console";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (story) => <ChakraProvider>{story()}</ChakraProvider>,
  (Story) => (
    <Center>
      <Story />
    </Center>
  ),
];

// addDecorator((story,context) => withConsole()(story, context));
