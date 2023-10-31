import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Bargur = () => {
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
            src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d2/66/39/view-from-dam-top.jpg?w=600&h=400&s=1',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://www.instanews.city/h-upload/2021/10/30/1600x960_1383893-202110300226065926fallssecvpf-1.gif',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://www.indiawilds.com/forums/attachment.php?attachmentid=7859&stc=1&d=1316715501',
            width: '420px',  
            height: '300px', 
          },
          {
            src: 'https://www.iastoppers.com/uploads/articles/Ancient-rock-in-Bargur.jpg',
            width: '430px',  
            height: '300px', 
          },
          {
            src: 'https://media.vrbo.com/lodging/35000000/34700000/34699900/34699846/93d353fd.c9.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://bargurhillsideresort.com/wp-content/uploads/2023/04/summer-morning-mountain-village-outskirts-tatra-range-1920x1349.jpg',
            width: '420px',  
            height: '300px', 
          },
          {
            src: 'https://s.w-x.co/util/image/w/in-elephant_5.jpg?crop=16:9&width=480&format=pjpg&auto=webp&quality=60',
            width: '420px',  
            height: '300px', 
          },
          {
            src: 'https://live.staticflickr.com/3192/2454428382_515da98404_b.jpg',
            width: '350px',  
            height: '300px', 
          },
          {
            src: 'https://live.staticflickr.com/3079/2454348988_c2c2bf9380_b.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://bargurhillsideresort.com/wp-content/uploads/2023/02/village-pyrenees-noales-aragon-950x634.jpg',
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

export default Bargur;