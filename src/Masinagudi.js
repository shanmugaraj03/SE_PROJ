import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Masinagudi = () => {
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
            src: 'https://www.outlookindia.com/traveller/wp-content/uploads/files/2014/05/171014114130-AIRPORT-PHONE-Article.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://www.holidify.com/images/bgImages/MASINAGUDI.jpg',
            width: '440px',  
            height: '300px', 
          },
          {
            src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/68/a8/1b/masinagudi.jpg?w=700&h=500&s=1',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://www.karthitravels.com/images/new/others/masinagudi2.jpg',
            width: '420px',  
            height: '300px', 
          },
          {
            src: 'https://static.javatpoint.com/tourist-places/images/tourist-places-in-masinagudi1.png',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://www.trodly.com/pictures/destination/3327.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://imgcld.yatra.com/ytimages/image/upload/v1470378011/Masinagudi_Best_Time.jpg',
            width: '430px',  
            height: '300px', 
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Mudumalai_forest.jpg',
            width: '350px',  
            height: '300px', 
          },
          {
            src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/9d/27/b3/fb-img-1536833683869.jpg?w=600&h=400&s=1',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/masinagudi-1657513731_6e94f6eac79e39c1b480.webp',
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

export default Masinagudi;