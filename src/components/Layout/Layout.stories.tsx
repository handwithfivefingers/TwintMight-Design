import { Meta, StoryFn } from '@storybook/react';
import Col from './Col';
import Layout from './Layout';
import Row from './Row';

export default {
	title: 'Layout/Layout',
	component: Layout,
} as Meta<typeof Layout>;

const Template: StoryFn<typeof Layout> = (args) => {
	return (
		<Layout styles={{ border: '1px solid red' }}>
			<Row>
				<Col
					lg={4}
					md={6}
					sm={12}
					xs={12}
					styles={{ border: '1px solid #333' }}
				>
					Col-lg-4 col-md-6
				</Col>
				<Col
					lg={2}
					md={6}
					sm={12}
					xs={12}
					styles={{ border: '1px solid #333' }}
				>
					Col-lg-2 col-md-6
				</Col>
				<Col
					lg={4}
					md={12}
					sm={8}
					xs={12}
					styles={{ border: '1px solid #333' }}
				>
					Col-lg-4 col-md-12
				</Col>
			</Row>
		</Layout>
	);
};

export const Primary = Template.bind({});

Primary.args = {};
