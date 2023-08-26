import { Meta, StoryFn } from '@storybook/react'
import Col from './Col'
import Container from './Container'
import Row from './Row'
import './Container.stories.scss'
import Nav from './Nav'
import { useState, useMemo } from 'react'
export default {
    title: 'Layout/Grid System',
    component: Container,
} as Meta<typeof Container>

const ContainerBlock: StoryFn<typeof Container> = args => {
    return (
        <Container className="shadow br-4 box">
            <p style={{ padding: 8 }}> Container, with multi breakpoint base on Bootstrap</p>
        </Container>
    )
}

const GridRow: StoryFn<typeof Row> = args => {
    return (
        <Container className="shadow br-4 box">
            <Row {...args}>
                <Col lg={4} md={6} sm={12} xs={12} className="box-blue">
                    Col-lg-4 col-md-6
                </Col>
                <Col lg={2} md={6} sm={12} xs={12} className="box-blue">
                    Col-lg-2 col-md-6
                </Col>
                <Col lg={4} md={12} sm={8} xs={12} className="box-blue">
                    Col-lg-4 col-md-12
                </Col>
            </Row>
        </Container>
    )
}

const NavTemplate: StoryFn<typeof Nav> = args => {
    const [active, setActive] = useState<string | number>('/1')
    const innerNavbar = useMemo(() => {
        return (
            <>
                <Nav.Brand>
                    <svg
                        width="188.38181457519534"
                        height="37.453649334148196"
                        viewBox="0 0 406 80.72000826594862"
                        className="css-1j8o68f"
                    >
                        <defs id="SvgjsDefs1013">
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: 'rgb(107, 201, 213)', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: 'rgb(220, 135, 247)', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <g
                            id="SvgjsG1014"
                            transform="matrix(1.0129125506937615,0,0,1.0129125506937615,-12.554038207393846,-10.545432820293763)"
                            fill="url(#grad1)"
                        >
                            <g xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <polygon points="54.644,56.782 35.043,56.782 29.789,76.381 49.394,76.381   "></polygon>
                                </g>
                                <g>
                                    <polygon points="29.789,76.381 16.071,76.381 12.394,90.102 26.115,90.102   "></polygon>
                                </g>
                                <g>
                                    <polygon points="72.04,43.063 58.319,43.063 54.644,56.782 68.363,56.782   "></polygon>
                                </g>
                                <g>
                                    <polygon points="60.892,33.458 51.288,33.458 48.716,43.063 58.319,43.063   "></polygon>
                                </g>
                                <g>
                                    <polygon points="78.988,17.134 69.384,17.134 66.81,26.739 76.416,26.739   "></polygon>
                                </g>
                                <g>
                                    <polygon points="37.616,47.18 28.013,47.18 25.438,56.782 35.043,56.782   "></polygon>
                                </g>
                                <g>
                                    <polygon points="87.511,10.411 80.79,10.411 78.988,17.134 85.71,17.134   "></polygon>
                                </g>
                                <g>
                                    <polygon points="80.562,36.341 73.842,36.341 72.04,43.063 78.762,43.063   "></polygon>
                                </g>
                                <g>
                                    <polygon points="53.089,26.735 46.37,26.735 44.565,33.458 51.288,33.458   "></polygon>
                                </g>
                            </g>
                        </g>
                        <g id="SvgjsG1015" transform="matrix(1,0,0,1,405,5)" fill="url(#grad1)">
                            <rect xmlns="http://www.w3.org/2000/svg" y="0" height="1" width="1" opacity="0"></rect>
                            <rect xmlns="http://www.w3.org/2000/svg" y="0" x="-309" width="3" height="72"></rect>
                        </g>
                        <g
                            id="SvgjsG1016"
                            transform="matrix(2.5826233271699164,0,0,2.5826233271699164,113.845042440276,7.039389512917362)"
                            fill="url(#grad1)"
                        >
                            <path d="M6.7 8.98 l0.02 1.48 l0 9.54 q-0.68 0.12 -1.62 0.12 t-1.58 -0.12 l0 -11.02 l-1.28 0.02 l-2.06 0 q-0.12 -0.58 -0.12 -1.33 t0.12 -1.33 l9.9 0 q0.16 0.52 0.16 1.26 t-0.4 1.07 t-1.28 0.33 l-0.58 0 l-1.26 -0.02 l-0.02 0 z M21.520000000000003 10.56 q0 0.66 -0.2 1.25 t-0.53 1.06 t-0.78 0.82 t-0.93 0.53 q1.04 0.38 1.54 1.84 l0.6 1.7 q0.34 1 1 1.48 q-0.3 0.4 -0.9 0.67 t-1.32 0.27 t-1.12 -0.41 t-0.74 -1.43 l-0.72 -2.1 q-0.22 -0.6 -0.59 -0.92 t-1.11 -0.32 l-0.82 0 l0 5 q-0.64 0.12 -1.6 0.12 t-1.58 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.93 -0.06 t1.87 -0.02 q1.1 0 2 0.27 t1.53 0.81 t0.98 1.36 t0.35 1.9 z M14.900000000000002 8.62 l0 3.92 q0.9 0 1.54 -0.03 t1.03 -0.24 t0.59 -0.59 t0.2 -1.1 q0 -1.94 -1.88 -1.94 l-0.83 0 t-0.65 -0.02 z M34.379999999999995 6.34 l0 8.62 q0 2.56 -1.4 3.95 t-4 1.39 t-4.01 -1.39 t-1.41 -3.95 l0 -8.62 l0.14 -0.14 l1.18 0 q1.9 0 1.9 2.04 l0 6.76 q0 1.4 0.5 2.08 t1.7 0.68 t1.7 -0.68 t0.5 -2.08 l0 -8.66 q0.62 -0.12 1.6 -0.12 q0.96 0 1.6 0.12 z M42.260000000000005 9.72 l1.34 -3.38 q0.52 -0.12 1.34 -0.12 q0.88 0 1.52 0.24 l0.14 0.16 l-3.88 9.18 l0 4.2 q-0.62 0.12 -1.6 0.12 t-1.6 -0.12 l0 -4.28 l-3.86 -9 q0.92 -0.54 1.76 -0.54 t1.21 0.29 t0.65 0.99 l0.96 2.38 q0.52 1.28 0.9 2.86 l0.12 0 q0.32 -1.26 1 -2.98 z M51.2 15.96 l-0.02 1.44 l0 0.02 q0.92 -0.04 1.48 -0.04 l4.64 0 q0 0.74 -0.06 1.14 q-0.24 1.54 -2.04 1.54 l-5.32 0 q-0.86 0 -1.35 -0.5 t-0.49 -1.36 l0 -11.72 l0.14 -0.14 l8.62 0 q0.12 0.58 0.12 1.26 t-0.28 1.42 l-5.46 0 l0.02 1.44 l0 1.4 q0.52 -0.02 1.36 -0.02 l3.06 0 q0.18 0.56 0.18 1.28 t-0.18 1.32 l-4.42 0 l0 1.52 z M70.28 6.199999999999999 l0.14 0.14 l0 13.6 q-0.8 0.18 -1.89 0.18 t-1.93 -0.12 l-3.14 -7.16 q-0.56 -1.22 -1.14 -2.82 l-0.06 0.02 q0.24 2.92 0.24 5.98 l0 3.98 q-0.62 0.12 -1.5 0.12 t-1.48 -0.12 l0 -13.6 q0.76 -0.18 1.83 -0.18 t1.91 0.12 l3.1 7.14 q0.84 1.98 1.24 3.04 l0.08 -0.04 q-0.24 -2.78 -0.24 -5.9 l0 -2.44 q0 -1.04 0.42 -1.49 t1.36 -0.45 l1.06 0 z M73.02 19.96 l1.06 -13.6 q0.88 -0.16 2.08 -0.16 t2.1 0.16 l1.18 4.9 q0.7 3.32 0.74 3.62 l0.14 0 q0.08 -0.5 0.74 -3.62 l1.2 -4.9 q0.88 -0.16 2.08 -0.16 t2.1 0.16 l1.06 13.6 q-0.62 0.16 -1.53 0.16 t-1.49 -0.1 l-0.32 -5.56 q-0.14 -3.32 -0.16 -4.62 l-0.12 0 l-1.98 8.14 q-0.72 0.12 -1.65 0.12 t-1.65 -0.12 l-1.96 -8.14 l-0.14 0 q0 1.78 -0.16 4.62 l-0.3 5.56 q-0.58 0.1 -1.49 0.1 t-1.53 -0.16 z M93.42 17.14 q-0.54 0 -0.8 -0.02 l-0.86 2.9 q-0.48 0.12 -1.34 0.12 q-0.96 0 -1.56 -0.22 l-0.1 -0.16 l4.4 -13.42 q0.78 -0.12 1.82 -0.12 q1.18 0 1.88 0.14 l4.32 13.44 q-0.7 0.38 -1.58 0.38 q-1.04 0 -1.46 -0.36 t-0.72 -1.38 l-0.38 -1.32 q-0.26 0.02 -0.78 0.02 l-2.84 0 z M93.36 14.620000000000001 l0.8 -0.02 l1.46 0 q0.1 0 0.35 0.01 t0.37 0.01 l-0.34 -1.24 q-0.48 -1.68 -1.1 -4.12 l-0.12 0 q-0.16 0.86 -0.96 3.82 z M102.9 20 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.62 0.12 l0 13.66 q-0.64 0.12 -1.62 0.12 t-1.6 -0.12 z"></path>
                        </g>
                    </svg>
                </Nav.Brand>
                <Nav.List activeItem={active} onSelect={(value: string | number) => setActive(value)}>
                    <Nav.Item value="/1" onClick={() => console.log('menu 1 clicked')}>
                        Menu 1
                    </Nav.Item>
                    <Nav.Item value="/2">Menu 2</Nav.Item>
                    <Nav.Item value="/3">Menu 3</Nav.Item>
                    <Nav.Item value="/4">Menu 4</Nav.Item>
                </Nav.List>
            </>
        )
    }, [active])
    return (
        <div>
            <p>Default</p>
            <Nav className="shadow">{innerNavbar}</Nav>

            <p>Fluid Header</p>
            <Nav className="shadow" fluid>
                {innerNavbar}
            </Nav>
        </div>
    )
}

export const Block = ContainerBlock.bind({})

export const RowBlock = GridRow.bind({})

export const NavBlock = NavTemplate.bind({})

Block.storyName = 'Container'
RowBlock.storyName = 'Row/Column'
NavBlock.storyName = 'Nav'

RowBlock.args = {
    gutter: [8],
}
