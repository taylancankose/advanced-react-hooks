import {useContext, useEffect} from 'react'
import CocktailContext from '../../context/CocktailContext'
import Loading from '../pages/Loading'
import Cocktail from './Cocktail'
import NotFound from './NotFound'

import { Container, Row, Col } from 'reactstrap';



function Cocktails() {
  const {cocktails, fetchCocktails, loading} = useContext(CocktailContext)

  useEffect(() => {
    fetchCocktails()
  }, [])

  console.log("cocktails: ", !cocktails)

  if (loading) {
    return <Loading />
  }


  return (
    !cocktails ? <NotFound />  :
    <Container fluid>
        <Row>
        {cocktails.map((cocktail, id) => {
      return (
      <Col key={id} sm="3" className='cocktail'>
          <Cocktail key={cocktail.idDrink} {...cocktail} />
      </Col>
      );
    })} 
        </Row>
    </Container>
  )
}

export default Cocktails