import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Thanjavur = () => {
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
            src: 'https://blogs.revv.co.in/blogs/wp-content/uploads/2021/11/Thanjavur-Waterfalls.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://i0.wp.com/www.anasiantraveller.com/wp-content/uploads/2021/02/IMG_20190821_180921-scaled.jpg?fit=2560%2C1920',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://www.trawell.in/admin/images/upload/868291681Thanjavur_Thiruvarur_Main.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://thanjavur.info/wp-content/uploads/2019/05/manora-fort-tanjore-1024x509.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://www.sangamhotels.com/wp-content/uploads/2018/11/sivaganga-park-thanjavur.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://dynamic.tourtravelworld.com/package-images/photo-small/dir_15/442185/165812.jpg',
            width: '300px',  
            height: '300px', 
          },
          {
            src: 'https://www.holidify.com/images/cmsuploads/compressed/8035_20200804142314.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://asimustsee.nic.in/assets/img/slider/chola-temple-4.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://www.savaari.com/blog/wp-content/uploads/2021/07/Thanjavur_Maratha_Palace_Darbar_Hall.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/thanjavur-1655294212_8d67c2fdaa46899ddda7.webp',
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

export default Thanjavur;