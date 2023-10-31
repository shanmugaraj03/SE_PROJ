import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Courtralam = () => {
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
            src: 'https://pix10.agoda.net/hotelImages/2369194/-1/8aa888d2134f8e899b68f98741bf2ae0.jpg?ca=6&ce=1&s=702x392',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://devotionalyatra.com/wp-content/uploads/2022/08/Courtallam-five-waterfalls.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Main_Falls_From_Thalavai_House_Hotel.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/coutrallam-waterfalls-1656144334_5e3cdfa92613c5bf1699.webp',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://casualwalker.com/wp-content/uploads/2020/04/Courtallam_Kutralam-1.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/be/ff/8f/thirumalaikovil-full.jpg?w=400&h=-1&s=1',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ff/39/f1/chithira-sabai-temple.jpg?w=500&h=-1&s=1',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://www.tourmyindia.com/states/tamilnadu/images/karaiyar-dam.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://www.tourmyindia.com/states/tamilnadu/images/agathiyar-waterfalls.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://assets.telegraphindia.com/telegraph/2022/Aug/1660132403_courtallam-main-falls-1.jpg',
            width: '480px',  
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

export default Courtralam;