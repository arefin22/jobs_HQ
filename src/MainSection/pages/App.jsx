import { Helmet } from 'react-helmet-async'
import AboutUs from '../components/AboutUs'
import Ads from '../components/Ads'
// import FeedBack from '../components/FeedBack'
import Hero from '../components/Hero'
import JobsSectionHomePage from '../components/JobsSectionHomePage'


function App() {

  return (
    <div className='bg-white dark:bg-slate-900'>
      <Helmet>
        <title>JOBsHQ</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      <Hero></Hero>
      <JobsSectionHomePage></JobsSectionHomePage>
      <AboutUs></AboutUs>
      {/* <FeedBack></FeedBack> */}
      <Ads></Ads>
    </div>
  )
}

export default App
