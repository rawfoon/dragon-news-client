import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({news}) => {
    const {title, author, details, _id, image_url, rating, total_view,} = news
    return (
        <div>

            <Card  className='mb-5'>
              <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                    roundedCircle
                    className='me-3'
                    src={author?.img}
                    style={{height: '60px'}}></Image>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                 {
                 details.length > 250 ?
                 <>{details.slice(0,250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
                 :
                 details
                 }
                </Card.Text>
                
              </Card.Body>
              <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye>
                    <span>{total_view}</span>
                </div>
              </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsSummaryCard;