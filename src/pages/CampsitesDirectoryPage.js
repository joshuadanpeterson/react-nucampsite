import { Container, Row } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <div>
            <Container>
            <SubHeader current='Directory' />
                <Row>
                    <CampsitesList />
                </Row>
            </Container>
        </div>
    );
};


export default CampsitesDirectoryPage;