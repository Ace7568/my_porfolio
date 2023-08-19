import React from 'react'
import proimg1 from '../assets/img/project-img1.png'
import proimg2 from '../assets/img/project-img2.png'
import proimg3 from '../assets/img/project-img3.png'
import { Col, Container, Row, Nav,Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'

export const Projects = () => {

    const projects = [
        {
            title: "PathVisualizer",
            description: "It's a react js based project which can help in visualising various path finding algorithms",
            imgUrl: proimg1,
        },
        {
            title: "Dijkstra Algorithm",
            description: "We can visualize dijkstra algorithm",
            imgUrl: proimg2,
        },
        {
            title: "A* search algorithm",
            description: "A* Search algorithm is one of the best and popular technique used in path-finding and graph traversals.",
            imgUrl: proimg3,
        },
        {
            title: "BFS",
            description: "The Breadth First Search (BFS) algorithm is used to search a graph data structure for a node that meets a set of criteria.",
            imgUrl: proimg1,
        },
        {
            title: "DFS",
            description: "Depth-first search is an algorithm for traversing or searching tree or graph data structures",
            imgUrl: proimg1,
        },
        {
            title: "Walls and Weights",
            description: "For weighted algorithms we can add weights and can also introduce walls",
            imgUrl: proimg1,
        }
    ]
  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Depth-first search is an algorithm for traversing or searching tree or graph data structures</p>
                    <Tab.Container id='project-tabs' defaultActiveKey='first'>
                        <Nav variant="pills" className="nav-pills mb-5">
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Project 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Project 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>Project 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                <h4>PathVisualizer</h4>
                                    {
                                        projects.map((projects, index) => {
                                            return(
                                                <ProjectCard key={index} {...projects}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <Row>
                                    {
                                        projects.map((projects, index) => {
                                            return(
                                                <ProjectCard key={index} {...projects}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <Row>
                                    {
                                        projects.map((projects, index) => {
                                            return(
                                                <ProjectCard key={index} {...projects}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}
