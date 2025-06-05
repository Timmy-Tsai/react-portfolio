import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  
    return () => clearTimeout(timeoutId) 
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a fourth-year Computer Science student and co-founder of a start-up, with a strong 
            passion for full-stack web development and problem-solving. I am currently looking for a role 
            in a tech company with the opportunity to work with the latest technologies on 
            challenging and diverse projects.
          </p>
          <p align="LEFT">
            I started Eco Motion to gain real-world experience in negotiation skills and sales.
            The founder and I came up with the idea of "car-to-car sales" where we would promote our 
            Tesla mobile service and detailing at Tesla Supercharging stations. In under a year,
            we have scaled our business over 80,000 CAD and partnering up with the biggest Tesla certified shop in Vancouver.  
            We extended our services to car wraps and tire installation. Through this startup, 
            I’ve developed leadership, team-building, and strategic outreach skills in a fast-paced environment.
          </p>
          <p>
            I'm always eager to take on new challenges and push myself out of the comfort zone. 
            My long-term goal is to build impactful products that can improve people's lives.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#FFD43B" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About