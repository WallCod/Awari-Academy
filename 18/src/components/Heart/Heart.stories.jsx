import Heart from "./Heart";

export default {
  title: "Components/Heart",
  component: Heart,
  tags: ['autodocs'],  //Criação do Componente Docs. 
  argTypes: {
    onClick: {
      action: "onClick",
    },
    selected: {
      control: "boolean",
      defaultValue: false,
      description: 'Selecionado',
    },
    testId: {
      control: "text",
      defaultValue: "heart-1",
    },
  },
};

const Template = (args) => (
  <div className="heart-storybook-wrapper">
    <Heart {...args} />
  </div>
);

export const Default = Template.bind({});
