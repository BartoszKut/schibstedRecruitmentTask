import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MovieThumbnail } from './MovieThumbnail';
import { ProgramDetails } from './ProgramDetails';
import { ProgramRating } from './ProgramRating';

export const ProgramItem = ({ item }) =>
    <Container className='my-5'>
        <Row>
            <Col xs={12} lg={10} className='d-flex'>
                <MovieThumbnail program={item} />
                <ProgramDetails program={item} />
            </Col>
            <Col className='d-none d-lg-block' lg={2}>
                <ProgramRating program={item} />
            </Col>
        </Row>
    </Container>
