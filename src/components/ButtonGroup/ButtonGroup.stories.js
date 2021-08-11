import * as ButtonStories from "../Button/Button.stories";
import ButtonGroup from "./ButtonGroup";
export default {
  title: "Form/ButtonGroup",
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const Pair = Template.bind({});

Pair.args = {
  BtnComponent: [{ ...ButtonStories.PrimaryA.args }],
};
