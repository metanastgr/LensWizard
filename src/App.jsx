import { useState } from 'react'

import lensData from './data/lensData';

//components
import Welcome from './components/Welcome';
import Header from './components/Header';
import Results from './components/Results'
import Footer from './components/Footer'

function App() {

  const [selectedCategory, setSelectedCategory] = useState('');

  const allLenses = Object.values(lensData.photography).flat();

  const filteredLenses = selectedCategory
    ? lensData.photography[selectedCategory] || []
    : allLenses;


  const handleOption = (e) => {
    setSelectedCategory(e.target.value)
  }



  return (
    <>
      <Welcome />
      <Header
        lensData={lensData}
        category={selectedCategory}
        results={filteredLenses.length}
        update={handleOption} />


      <Results data={filteredLenses}/>

      <Footer />

    </>
  )
}

export default App
