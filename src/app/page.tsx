import Home from './Home/page';
import About from './About/page';
import Projects from './Projects/page';
import PortfolioFooter from './PortfolioFooter/page';
import Contact from './Contact/page';

import { NavBar } from '@/components/NavBar';

export default function Page() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <PortfolioFooter />
    </>
  );
}
