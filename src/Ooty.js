import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Ooty = () => {
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
            src: 'https://www.trawell.in/admin/images/upload/728877966Needle_Rock_Viewpoint.jpg',
            width: '390px',  
            height: '300px', 
          },
          {
            src: 'https://askruchi.in/wp-content/uploads/2022/12/Needle-View-Hillpoint.webp',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://res.cloudinary.com/chasset/hbimages/desktop/1501245023135-Ketti%20Valley%20View%20Point.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://content.r9cdn.net/rimg/dimg/70/c1/b448d083-city-49664-16953cdf0c2.jpg?width=1366&height=768&xhint=1381&yhint=1207&crop=true',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://images.saymedia-content.com/.image/t_share/MTc0NDg3Nzc5NDUzOTcwMDU0/offbeat-things-to-do-at-ooty.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://content.jdmagicbox.com/comp/malappuram/w9/9999px483.x483.170607182105.r2w9/catalogue/mini-ooty-view-point-arimbra-malappuram-tourist-attraction-polndqycv9.jpg?clr=',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://www.keralatourism.org/images/picture/large/Arimbra_Hills_or_Mini_Ooty_Malappuram_2591.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://images.unsplash.com/photo-1583700467685-4748a521c284?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDExMn0',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://assets-news.housing.com/news/wp-content/uploads/2022/07/18195311/Top-Ooty-tourist-sightseeing-places-and-things-to-do-shutterstock_1410474926.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://holidayszone.in/images/sightseeing-places/ooty/ooty-rose-garden-ooty-tour-header-small.jpg',
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

export default Ooty;