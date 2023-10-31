import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Hasanur = () => {
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
            src: 'https://t3.ftcdn.net/jpg/04/04/49/16/360_F_404491693_HHw16umX7QhRQWT626q8zrhnmDwnjSZr.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://i.ytimg.com/vi/HSBDvDUeW-0/maxresdefault.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://t4.ftcdn.net/jpg/04/04/49/13/360_F_404491335_smhacyRK5mjAX6HMdNqNva1XuXvbVy4D.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/c0/6e/28/honeydew-resorts.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://images.indulgexpress.com/uploads/user/imagelibrary/2017/8/11/original/Parambikulam_4.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://3.bp.blogspot.com/-dwBlultfwU8/UpSOlH6lXnI/AAAAAAAACNc/CRMUv48t--Q/s1600/IMG_8823_copy.jpg',
            width: '420px',  
            height: '300px', 
          },
          {
            src: 'https://2.bp.blogspot.com/-xCe78UuV5-Y/UpR388MeCLI/AAAAAAAACKc/QkmI3sQ2ORU/s1600/IMG_8668+copy.jpg',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://i.ytimg.com/vi/SZ0wi8ziUtA/maxresdefault.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://i.pinimg.com/1200x/90/25/05/9025057689c19a0f92f2421bd0ae1e58.jpg',
            width: '250px',  
            height: '300px', 
          },
          {
            src: 'https://irfanclicks.com/wp-content/uploads/2021/01/hasanur-view-point-8643.jpg',
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

export default Hasanur;