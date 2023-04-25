import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import ReviewData from './ReviewData';
import './ReviewStyles.css';
function Review() {
    const [reviewer, setReviewData] = useState(ReviewData)
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = reviewer.length -1;
        if (index <0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);

        }
    }, [index, reviewer])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 3000);
        return () => clearInterval(slider)
    }, [index]);

    return <section className='section'>
        <div className='title'>
            <h1>
                REVIEWS
            </h1>
        </div>

        <div className='section-center'>
            {reviewer.map((person, personIndex) => {
                const {id, image, title, quote, name} = person;
                let posision = 'nextSlide';
                if(personIndex === index) {
                    posision = 'activeSlide';
                }
                if(personIndex === index - 1 || (index === 0 && personIndex === reviewer.length -1)) {
                    posision = 'lastSlide';
                }

                return <article className={posision} key={id}>
                    <img src={image} alt={name} className='person-img' />
                    <h4>{name}</h4>
                    {/* <p className='title'>{title}</p> */}
                    <p className='text'>{quote}</p>
                    
                </article>
            })}
            <button className='prev' onClick={() => setIndex(index -1)}>
                <FiChevronLeft/>
            </button>
            <button className='next' onClick={() => setIndex(index +1)}>
                <FiChevronRight/>
            </button>

        </div>
    </section>
}

export default Review;