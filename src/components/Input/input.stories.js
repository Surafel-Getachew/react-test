import Input from "./Input";
export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => (
  <Input size="inputSmall" placeholder="Input your name" />
);
export const Medium = () => (
  <Input size="inputMedium" placeholder="Input your name" />
);
export const Large = () => (
  <Input size="inputLarge" placeholder="Input your name" />
);

// Small.storyName = "small input"

const Template = (args) => <Input placeholder="Input your name" {...args} />;

export const SmallInput = Template.bind({});
export const MediumInput = Template.bind({});
export const LargeInput = Template.bind({});

SmallInput.args = {
  size: "inputSmall",
};

MediumInput.args = { 
  size: "inputMedium",
};

LargeInput.args = {
  size: "inputLarge",
};


