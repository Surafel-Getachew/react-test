import Button from "./Button";
import Center from "../Center/Center";

export default {
  title: "Form/Button",
  component: Button,
  // args: {
  //   children: "Button",
  // },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "danger"],
      control: { type: "radio", label: "choose" },
      labels: {
        P: "primary",
        secondary: "Se",
        success: "Su",
        danger: "D",
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    onClick:{
      action:"clicked"
    }
  },
  // decorators: [(storyFn) => <Center>{storyFn()}</Center>],
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],
  parameters: {
    controls:{sort:"requiredFirst"}
  }
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
export const Log = () => (
  <Button
    variant="primary"
    onClick={() => console.log("clicked", process.env.STORYBOOK_THEME)}
  >
    Primary
  </Button>
);

// const Template = (args, { loaded: { todo } }) => <Button {...args} {...todo} />;
// Template.loaders = [
//   async () => ({
//     todo: (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json(),
//   }),
// ];
const Template = (args) => <Button {...args} />;
export const PrimaryA = Template.bind({});
console.log(Template);
PrimaryA.args = {
  variant: "primary",
  children: "child",
  // children: Template.todo.title,
};

export const SecondaryA = Template.bind({});

SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};

export const InheritedA = Template.bind({});

InheritedA.args = {
  ...PrimaryA.args,
  children: "Inherited from PrimaryA Button",
};

export const ColorButton = Template.bind({});

ColorButton.args = {
  ...PrimaryA.args,
};

ColorButton.parameters = {
  backgrounds: {
    values: [
      { name: "white", value: "#FFFFFF" },
      { name: "gray", value: "#F5F5F5" },
      { name: "dark", value: "#000000" },
      { name: "red", value: "#ff0000" },
      { name: "green", value: "#00ff00" },
    ],
  },
};

ColorButton.decorators = [
  (Story) => (
    <div style={{ border: "2px solid red" }}>
      <Story />
    </div>
  ),
];
