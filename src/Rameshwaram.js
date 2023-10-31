import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Rameshwaram = () => {
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
            src: 'https://whatwomenlov.files.wordpress.com/2019/03/1.jpg?w=626',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://tours.sacredyatra.com/images/rameshwaram/how-to-reach-rameshwaram.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://www.fabhotels.com/blog/wp-content/uploads/2023/05/Agni-Theertham-min.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://bluebirdtravels.in/wp-content/uploads/rameshwaram/Gandhamadhana-Parvatham-599x350.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://shivshankartirthyatra.com/blog/wp-content/uploads/2021/02/1497514393_dscn9254-1080x675.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://www.mistay.in/travel-blog/content/images/2023/01/2022-07-08.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://hblimg.mmtcdn.com/content/hubble/img/rameshwaram/mmt/destination/t_trp/m_Rameshwaram_activity_beach_l_388_631.jpg?im=Resize=(576,324)',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://wallpapercave.com/wp/wp9920403.jpg',
            width: '350px',  
            height: '300px', 
          },
          {
            src: 'https://www.backpacknxplore.com/wp-content/uploads/2019/11/dhanushkodi-beach.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://tours.sacredyatra.com/images/rameshwaram/former-president-apj-abdul-kalam-house.jpg',
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

export default Rameshwaram;