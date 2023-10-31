import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Mahabalipuram = () => {
  return (
    <>
    
      <ScrollCarousel
        autoplay
        autoplaySpeed={3}
        speed={3}
        onReady={() => console.log('I am ready')}
      >
        {[
          {
            src: 'https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2021/8/2/mahabalipuram.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://media.istockphoto.com/id/911256172/photo/shore-temple-at-mahabalipuram-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=QyIlEGm62zU_ZEoMEZyvGD7ij3ei33aRrjayEazg9pk=',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://media.istockphoto.com/id/494925444/photo/shore-temple-in-mahabalipuram-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=sv3qg1voFRDMzsuhB-18XQIiLbwEp2tbpa60aK8wyDo=',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://media.istockphoto.com/id/1294461254/photo/mahabalipuram-beach-chennai.jpg?s=612x612&w=0&k=20&c=wq4U7lJcBdLW583vMluSVttZJNHRFmunxQkBC2jm9lU=',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://www.shutterstock.com/shutterstock/videos/1062585358/thumb/1.jpg?ip=x480',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://www.shutterstock.com/shutterstock/videos/1108235899/thumb/1.jpg?ip=x480',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiH6wt9wUu1BLOA8UUr9kP7XYzIKVW3yu2CjwKQrG6UkE3OHjqHnwZwC3Ug04-MZicHkk&usqp=CAU',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/mahabalipuram-1654870108_c538505993052d39e713.webp',
            width: '500px',  
            height: '300px', 
          },
          
        ].map((image, index) => (
          <div key={index} className='bg-blue-100/20 border-1 border-blue-800/50 rounded'>
            <img
              src={image.src}
              alt={`Image ${index}`}
              style={{ width: image.width, height: image.height }}
            />
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default Mahabalipuram;