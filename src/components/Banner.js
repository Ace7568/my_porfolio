import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons'

export const Banner = () => {

    const [loop_number,setloopnumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loop_number % toRotate.length;
        let fulltext = toRotate[i];
        let updatedtext = isDeleting ? fulltext.substring(0, text.length-1):fulltext.substring(0, text.length+1);
        
        setText(updatedtext);

        if(isDeleting){   
            setDelta(prevDelta => prevDelta/2)
        }
        
        if(!isDeleting && updatedtext===fulltext){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedtext===''){
            setIsDeleting(false)
            setloopnumber(loop_number+1);
            setDelta(500);
        }
    }



  return (
    <section className='banner' id='Home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={5} md={5} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I am webcoded`}<span className='wrap'> {text}</span></h1>
                    <p>The Col breakpoint props also have a more complicated object prop form for specifying offsets and ordering effects for specifying offsets and ordering effects.</p>
                    <button  className='lg' onClick={() => {console.log("RAM")}}>Let's Connecret <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='Header_Image'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
