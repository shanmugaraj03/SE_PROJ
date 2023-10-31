import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Kolli = () => {
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
                src: 'https://static.javatpoint.com/tourist-places/images/tourist-places-in-kolli-hills3.png',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2017/10/65.jpg',
                width: '350px',  
                height: '300px', 
              },
              {
                src: 'https://static.javatpoint.com/tourist-places/images/tourist-places-in-kolli-hills.png',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://www.adotrip.com/public/images/areas/5c63baa55038d-Kolli%20Hills%20Travel.jpg',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2017/10/105.jpg',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://www.theeraulaa.in/wp-content/uploads/2020/07/rj-grand-resort-kollihills-1024x596.jpg',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/11/8/w1200X800/dandeli1.jpg',
                width: '450px',  
                height: '300px', 
              },
              {
                src: 'https://4.bp.blogspot.com/-243xXbiYYSk/Vnvr1dTqYMI/AAAAAAAAVgI/ylJrSriM4N0/s1600/DSC04116.JPG',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Kolli_hills_forest_JEG3197_.jpg',
                width: '400px',  
                height: '300px', 
              },
              {
                src: 'https://www.holidify.com/images/bgImages/KOLLI-HILLS.jpg',
                width: '520px',  
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

export default Kolli;