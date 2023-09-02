import React from 'react'
import visualizer from '../assets/img/Visualizer.png'
import dijkstra from '../assets/img/Dijkstra.png'
import Asearch from '../assets/img/Asearch.png'
import BFS from '../assets/img/BFS.png'
import DFS from '../assets/img/DFS.png'
import Walls from '../assets/img/Walls.png'
import Weights from '../assets/img/Weights.png'
import Dash from '../assets/img/Dashboard.png'
import Apply from '../assets/img/Apply.png'
import Profile from '../assets/img/Profile.png'
import Posted from '../assets/img/Postedjob.png'
import Login from '../assets/img/Login.png'
import create from '../assets/img/Createjob.png'
import { Col, Container, Row, Nav,Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import { App } from 'react-bootstrap-icons'

export const Projects = () => {

    const project1 = [
        {
            title: "PathVisualizer",
            description: "It's a react js based project which can help in visualising various path finding algorithms",
            imgUrl: visualizer,
        },
        {
            title: "Dijkstra Algorithm",
            description: "We can visualize dijkstra algorithm",
            imgUrl: dijkstra,
        },
        {
            title: "A* search algorithm",
            description: "A* Search algorithm is one of the best and popular technique used in path-finding and graph traversals.",
            imgUrl: Asearch,
        },
        {
            title: "BFS",
            description: "The Breadth First Search (BFS) algorithm is used to search a graph data structure for a node that meets a set of criteria.",
            imgUrl: BFS,
        },
        {
            title: "DFS",
            description: "Depth-first search is an algorithm for traversing or searching tree or graph data structures",
            imgUrl: DFS,
        },
        {
            title: "Walls and Weights",
            description: "For weighted algorithms we can add weights and can also introduce walls",
            imgUrl: Walls,
        }
    ]
    const project2 = [
        {
            title: "Job Portal",
            description: "Created a personal portfolio website showcasing my work, skills, and achievements, enhancing my online presence professional branding",
            imgUrl: Dash,
        },
        {
            title: "Login/Registration",
            description: "Login/Registration facility for Recruiter/Seeker",
            imgUrl: Login,
        },
        {
            title: "Posted Job",
            description: "A section which fetch all the posted job by Recruiter from Database",
            imgUrl: Posted,
        },
        {
            title: "Create Jobs",
            description: "Recruiter can directly create a job which will then save in Database",
            imgUrl: create,
        },
        {
            title: "Profile",
            description: "A profile section where user can change their name and uplode their CV's which then dynamically saves in Database",
            imgUrl: Profile,
        },
        {
            title: "Apply job",
            description: "Seeker can apply for jobs uploded by recruiter",
            imgUrl: Apply,
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
                                        project1.map((projects, index) => {
                                            return(
                                                <ProjectCard key={index} {...projects}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <h4>Job Portal</h4>
                                <Row>
                                    {
                                        project2.map((projects, index) => {
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
                                        project1.map((projects, index) => {
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
