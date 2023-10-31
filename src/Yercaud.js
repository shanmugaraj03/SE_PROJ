import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const Yercaud = () => {
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
            src: 'https://pix10.agoda.net/hotelImages/271686/-1/316849922b8010849aced09df05b185f.jpg?ce=0&s=702x392',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/08/39/e2/a8/32-km-loop-road.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Yercaud_lake.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://www.thetoptours.com/wp-content/uploads/yercaud-lake.jpg',
            width: '400px',  
            height: '300px', 
          },
          {
            src: 'https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v2666844025/Hotel/Yercaud/00002429/Room_Blocks_View_Night_JC37eW.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190211023223_Screen%20Shot%202018-12-10%20at%202.11.12%20PM.jpg&w=700&q=90&c=1',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://static.toiimg.com/photo/59593467.cms',
            width: '450px',  
            height: '300px', 
          },
          {
            src: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/6a/8d/c4/the-pagoda-point-viewing.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://www.trawell.in/admin/images/upload/118127422Yercaud_Tipperary_View_Point_Main.jpg',
            width: '500px',  
            height: '300px', 
          },
          {
            src: 'https://ancientterminus.com/wp-content/uploads/2022/08/Yercaud-Feature-Img.webp',
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

export default Yercaud;