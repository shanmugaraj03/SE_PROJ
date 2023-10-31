import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Kotagiri = () => {
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
            src: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/06/cover-Places-To-Visit-In-Kotagiri_17th-June.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://lushbergskotagiri.com/assets/img/Kotagiri-Road.png',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://www.trawell.in/blog/wp-content/uploads/2021/04/Kotagiri.jpg',
            width: '430px',  
            height: '300px', 
          },
          {
            src: 'https://assets-news.housing.com/news/wp-content/uploads/2022/09/14174929/KOTAGIRI-FEATURE-compressed.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/53/27/2c/rangaswamy-peak-and-pillar.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://irfanclicks.com/wp-content/uploads/2021/01/kodanad-view-point-ooty-9756.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://live-core-api.travalour.com/common/v1/thumbnail/b4f973da-32e1-11ea-a2af-0ec82d6f8976?format=webp&width=960',
            width: '430px',  
            height: '300px', 
          },
          {
            src: 'https://1.bp.blogspot.com/-TEnDqvlwJDc/XJCN5iKBA7I/AAAAAAABU2g/dYdLDRkylosT46iDRcwwgR8K5tBOVke6gCEwYBhgL/s1600/IMG_20180701_083256-EFFECTS.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://1.bp.blogspot.com/-q3QJZd9T4Jo/UqSfLdytE_I/AAAAAAAAANc/h9JIgfkkjl4/s1600/kotagiri+2.jpg',
            width: '430px',  
            height: '300px', 
          },
          {
            src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kil-kotagiri-1657617452_714368acffbd7c8cb11b.webp',
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

export default Kotagiri;