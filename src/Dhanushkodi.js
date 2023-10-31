import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Dhanushkodi = () => {
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
            src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/rameswaram-1655198124_3263febcdc7b8bfffd8c.webp',
            width: '430px',  
            height: '300px', 
          },
          {
            src: 'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/f1/d7/a9/church-of-dhanushkodi.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Final_Dhanush_002.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://i.ytimg.com/vi/Ah7fLBQm1iM/maxresdefault.jpg',
            width: '420px',  
            height: '300px', 
          },
          {
            src: 'https://mediaim.expedia.com/destination/2/0c50f2e2a7422799bd493dcbfd47c678.jpg',
            width: '420px',  
            height: '300px', 
          },
          {
            src: 'https://www.adotrip.com/public/images/city/5d84aa017e10a-Dhanushkodi%20Travel%20Plan.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://t3.ftcdn.net/jpg/05/01/60/58/360_F_501605897_3s3iQMpArPPSu8Dpuh20BoaNfvqJ0ub5.jpg',
            width: '350px',  
            height: '300px', 
          },
          {
            src: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1654171036.webp',
            width: '430px',  
            height: '300px', 
          },
          {
            src: 'https://revolvingcompass.com/wp/wp-content/uploads/2023/03/Dhanushkodi_7.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://static.wixstatic.com/media/afedd9_3e1fa12091ec46fa8deb25a5570f8b35~mv2.jpg/v1/fill/w_600,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/afedd9_3e1fa12091ec46fa8deb25a5570f8b35~mv2.jpg',
            width: '400px',  
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

export default Dhanushkodi;