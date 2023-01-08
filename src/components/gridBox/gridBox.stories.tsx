import GridBox from "./gridBox";

export default {
    title: 'Grid Box',
    component: GridBox,
}

const Template = (args) => <GridBox {...args} />;

export const Red =  Template.bind({})
Red.args = {
    backgroundColor: 'red',
    label: 'X'
}