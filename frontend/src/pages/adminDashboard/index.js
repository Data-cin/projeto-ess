import React, { useState } from 'react'
import styles from './styles'
import ModalContentAdd from '../../components/ContentComponents/ModalContentAdd'
import CarouselMoviesAdm from '../../components/ContentComponents/CarrouselMovies'
import Header from '../../components/ContentComponents/Header'

const AdminDashboard = () => {
  const [showContent, setShowContent] = useState(false)
  function handleContent() {
    setShowContent(!showContent)
  }
  function ModalAddMovie(props) {
    return <>{props.showContent && <ModalContentAdd showContent={showContent} handleContent={handleContent} />}</>
  }

  return (
    <div style={styles.background}>
      <Header />
      <div>
        <CarouselMoviesAdm handleContent={handleContent} />
        {showContent && <ModalAddMovie showContent={showContent} />}
      </div>
    </div>
  )
}

export default AdminDashboard
