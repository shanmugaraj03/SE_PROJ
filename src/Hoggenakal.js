import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Hoggenakal = () => {
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
            src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/dharmapuri-1654194392_6e3e3cdfdd3337059dd5.webp',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://images.assettype.com/dtnext/import/Articles/2019/Nov/201911220106228367_Plan-Your-Weekend-Catch-breathtaking-views-of-the-Cauvery_SECVPF.gif',
            width: '350px',  
            height: '300px', 
          },
          {
            src: 'https://bangalore247.in/wp-content/uploads/2021/03/Hogenakkal-Falls-1.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/8/13/w900X450/villages.jpg?w=400&dpr=2.6',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://www.ntraveladvisor.com/wp-content/uploads/2020/08/Hogenakkal-Falls.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://assets-news.housing.com/news/wp-content/uploads/2022/09/23153714/HOGENAKKAL-FEATURE-compressed.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://www.holidify.com/images/cmsuploads/compressed/327_20200618184940.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/07/Hogenakkal-Cover.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://img.nayatrip.com/images/place/big/hogenakkal.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F01%2F29%2Fhogenakal-1-1075790-1643410573.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100',
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

export default Hoggenakal;