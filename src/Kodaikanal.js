import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Kodaikanal = () => {
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
                src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kodaikanal-1655279477_0cdce0d4e58596e4fb33.webp',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://3.bp.blogspot.com/-a2MF6z3dFys/Vrjp5T1nkfI/AAAAAAAAZq8/NqZJjYWo9Gs/s1600/Moir-Point-24.jpg',
                width: '350px',  
                height: '300px', 
              },
              {
                src: 'https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/kodaikanal-lake-1657265233_ea496c49625350b53847.webp',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/12/Coakers-Walk-Kodaikanal.jpg',
                width: '400px',  
                height: '300px', 
              },
              {
                src: 'https://img.traveltriangle.com/blog/wp-content/uploads/2017/08/rsz_1kodaikanal_resort_cover_image_kb65928102736.jpg',
                width: '450px',  
                height: '300px', 
              },
              {
                src: 'https://assets.telegraphindia.com/telegraph/2022/Aug/1660899518_kodai-lake-1.jpg',
                width: '500px',  
                height: '300px', 
              },  
              {
                src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/1f/70/32/pine-forest.jpg?w=1200&h=-1&s=1',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://cdn.s3waas.gov.in/s3f74909ace68e51891440e4da0b65a70c/uploads/bfi_thumb/2018061815-olwe8eca861ru2azowkt6lnovqwchtckox91t9j0ju.jpg',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://kodaikanalbookmyrooms.com/images/kodaikanal-forest-tour1.jpg',
                width: '500px',  
                height: '300px', 
              },
              {
                src: 'https://miro.medium.com/v2/resize:fit:1400/1*sbbRbM3Pk1LFdeeK8vYaPA.jpeg',
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

export default Kodaikanal;