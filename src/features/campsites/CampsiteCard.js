import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
  const { id, image, name } = campsite;
  return (
    <div>
      <Link to={`${id}`}>
        <Card>
          <CardImg width='100%' src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
          </CardBody>
          <CardImgOverlay>
            <CardTitle>{name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </Link>
    </div>
  );
};

export default CampsiteCard;