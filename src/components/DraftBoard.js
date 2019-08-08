import React from 'react'
import { Row, Col} from 'reactstrap';

const DraftBoard = ({boardImages}) => {
  const renderBoardImages = () => boardImages.map(image =>
  <img
     key={image.id}
     src={image.src}
     alt={image.description}
     name={image}
     // onClick={props.chooseImage}
   />)

   return (
   <Row>
     <Col>
    {renderBoardImages()}
    </Col>
  </Row>
  )
}

export default DraftBoard
