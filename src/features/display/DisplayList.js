import { Col, Row } from 'reactstrap';
import { selectedFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';

const DisplayList = () => {
    const items = [selectedFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];
    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};    


export default DisplayList;