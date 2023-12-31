import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, ResumeButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()

 const resumebtn = ()=>{
 const pdfPath = 'Sagar-Kadam-Resume.pdf';
 window.open(pdfPath,'_blank');
 const downloadLink = document.createElement('a');
 downloadLink.href = pdfPath;
 downloadLink.download = 'Sagar-Kadam-Resume.pdf';
 downloadLink.click();
 }

  return (
    <Nav id='#nav-menu'>
      <NavbarContainer id='nav-menu'>
        <NavLogo to='/'>
          <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home" className='nav-link home'>Home</NavLink>
          <NavLink href="#about" className='nav-link about'>About</NavLink>
          <NavLink href='#skills' className='nav-link skills'>Skills</NavLink>
          <NavLink href='#projects' className='nav-link projects'>Projects</NavLink>
          <NavLink href='#contact' className='nav-link contact'>Contacts</NavLink>
          <ButtonContainer>
          <ResumeButton id="resume-button-1" onClick={()=>{resumebtn()}} href="https://drive.google.com/uc?export=download&id=1Q2k9_AQcybpoV05d8a8IZXMlrXYjKhf0" target="_blank" className='nav-link resume'>Resume</ResumeButton>
          </ButtonContainer>
        </NavItems>

        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#home" onClick={() => {
              setIsOpen(!isOpen)
            }}>Home</MobileLink>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Project</MobileLink>
            <ResumeButton id="resume-button-1" style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={""} target="_blank" >Resume</ResumeButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar