import React from 'react'
import SectionMiddle from '../../Shared/Layout/SectionMiddle/SectionMiddle'
import Layout from '../../Shared/Layout/Layout'
import SectionTop from '../../Shared/Layout/SectionTop/SectionTop'
import TrandingSection from '../../Shared/Layout/TrandingSection/TrandingSection'
import Subscribe from '../../Shared/Layout/Subscribe/Subscribe'


function Home() {
  return (
    <Layout> <SectionTop/><SectionMiddle/> <TrandingSection/> <Subscribe/>
    </Layout>
  )
}

export default Home