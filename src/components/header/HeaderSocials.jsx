import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rodolfo-gutierrez-3b9113167/" target='_blank'><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/rudy-gm" target='_blank'><FaGithub></FaGithub></a>
        
    </div>
  )
}

export default HeaderSocials