import React from 'react';
import Image from 'next/image';

const News = () => {
  return (
<div>
    <p className="text-center font-bold text-2xl text-blue-800 p-6 mt-8"> МЭДЭЭ МЭДЭЭЛЭЛ </p>
    <div className="flex items-center justify-between px-72">
        
        <div className="flex">
          <div className="rounded-lg shadow-lg bg-white max-w-xs">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <Image className="rounded-t-3xl h-52 w-full" src="/assets/img/spartikad.jpg" alt="" />
            </a>
          <div className="p-3">
              <h5 className="text-blue-600 text-md font-semibold mb-2 uppercase h-16 ">Олонлог эгзэ сургуулийн намрын спартиакад боллоо</h5>
                  <p className="text-gray-700 text-base mb-4 text-justify h-24">
              2022-2023 оны хичээлийн &quot;Намрын спартиакад&ldquo; Чингэлтэй дүүргийн Спорт цогцолборт амжилттай болж өндөрлөлөө. Спартакиадад 3-12 ангийн нийт 320 ...
                  </p>
          </div>
        </div>      
      </div>

      <div className="flex">
          <div className="rounded-lg shadow-2xl bg-white max-w-xs">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <Image className="rounded-t-3xl h-52 w-full" src="/assets/img/india.jpg" alt="" />
            </a>
          <div className="p-3">
              <h5 className="text-blue-600 text-md font-semibold mb-2 uppercase h-16 ">Энэтхэг улсын элчин сайд зочиллоо</h5>
                  <p className="text-gray-700 text-base mb-4 text-justify h-24">
              Олонлог эгзэ сургууль Гадаад харилцаа хамтын ажиллагаагаа өргөжүүлэн тэлсээр байна. Энэ удаад Энэтхэг улсын Элчин сайд эрхэмсэг ноён Сингх манай сургууль дээр...
                  </p>
          </div>
        </div>      
      </div>

      <div className="flex">
          <div className="rounded-lg shadow-lg bg-white max-w-xs">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <Image className="rounded-t-3xl h-52 w-full" src="/assets/img/spartikad.jpg" alt="" />
            </a>
          <div className="p-3">
              <h5 className="text-blue-600 text-md font-semibold mb-2 uppercase h-16 ">Нийслэлийн мэдээлэлзүйн олимпиадын аварга сурагчтай боллоо.</h5>
                  <p className="text-gray-700 text-base mb-4 text-justify h-24">
              2022-2023 оны хичээлийн &quot;Намрын спартиакад&ldquo; Чингэлтэй дүүргийн Спорт цогцолборт амжилттай болж өндөрлөлөө. Спартакиадад 3-12 ангийн нийт 320 ...
                  </p>
          </div>
        </div>      
      </div>


      <div className="flex">
          <div className="rounded-lg shadow-lg bg-white max-w-xs">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <Image className="rounded-t-3xl h-52 w-full" src="/assets/img/spartikad.jpg" alt="" />
            </a>
          <div className="p-3">
              <h5 className="text-blue-600 text-md font-semibold mb-2 uppercase h-12 ">Олонлог эгзэ сургуулийн намрын спартиакад боллоо</h5>
                  <p className="text-gray-700 text-base mb-4 text-justify h-24">
              2022-2023 оны хичээлийн &quot;Намрын спартиакад&ldquo; Чингэлтэй дүүргийн Спорт цогцолборт амжилттай болж өндөрлөлөө. Спартакиадад 3-12 ангийн нийт 320 ...
                  </p>
          </div>
        </div>      
      </div>

   
    
    </div>

    
</div>





        

  )
}

export default News