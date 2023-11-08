import AboutUs from '../components/AboutUs'
import Hero from '../components/Hero'
import JobsSectionHomePage from '../components/JobsSectionHomePage'


function App() {

  return (
    <div className='bg-white dark:bg-slate-900'>
      <Hero></Hero>
      <JobsSectionHomePage></JobsSectionHomePage>
      <AboutUs></AboutUs>
    </div>
  )
}

export default App
