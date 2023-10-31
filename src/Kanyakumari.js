import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const KanyaKumari = () => {
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
            src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/bb/cf/09/thiruvalluvar-statue.jpg?w=700&h=500&s=1',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://www.tripsavvy.com/thmb/800pRns-A8BC5JLB1kc9WvYUx2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1171590321-366ab14d9da048158c2a52e1b851d8f0.jpg',
            width: '420px',  
            height: '300px', 
          },
          {
            src: 'https://hikerwolf.com/wp-content/uploads/2020/09/vivekananda-rock-memorial.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://static2.tripoto.com/media/filter/tst/img/44563/TripDocument/1588913816_img_20180227_091828_hdr.jpg.webp',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://www.kanyakumarians.com/data/catalog/kanyakumari/kanyakumari_pier.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://bangalorewheels.com/wp-content/uploads/bangalore-to-kanyakumari-car-rental-bangalore-wheels.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://static.toiimg.com/thumb/53632899/Kanyakumari.jpg?width=1200&height=900',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://kanyakumaritourism.in/images/places-to-visit/headers/view-tower-kanyakumari-tourism-entry-fee-timings-holidays-reviews-header.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://kanyakumaritourism.in/images//tourist-places/sunset-point-kanyakumari/sunset-point-kanyakumari-india-tourism-history.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/thiruvalluvar-statue-kanyakumari-1655196623_b2c20ff64e13e74324d6.webp',
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

export default KanyaKumari;