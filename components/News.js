import React from 'react'

const News = () => {
  return (
   
<div className="container my-8 px-6 mx-auto">
  {/* Section: Design Block */}
  <section >
  <p className="text-center font-bold text-2xl text-blue-800 pt-2"> МЭДЭЭ МЭДЭЭЛЭЛ </p> 
  <div className="text-right px-4 pb-2 text-blue-600 xs:hidden text-light"><a href="#"><span><u>БҮХ МЭДЭЭГ ХАРАХ</u></span></a> </div>
    
    
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 uppercase font-light">
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img src="/assets/img/news/spartikad.jpg" className="w-full h-56" />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
                <h5 className="text-md mb-3 uppercase">Олонлог эгзэ сургуулийн намрын спартакиад амжилттай болж өндөрлөлөө.</h5>
                <p>
                  <small> <u>13.01.2022</u> &emsp; МЭДЭЭ МЭДЭЭЛЭЛ</small>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img src="/assets/img/news/haruulzangi.jpg" className="w-full h-56" />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
                <h5 className="text-md mb-3">"Харуул занги-2022" тэмцээнд манай сургуулийн хоёр баг амжилттай оролцож дараагийн шатанд шалгарлаа. </h5>
                <p>
                  <small> <u>12.01.2022</u> &emsp; ОЛИМПИАД УРАЛДААН ТЭМЦЭЭН</small>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img src="/assets/img/news/child.jpg" className="w-full h-56" />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 20, 0.4)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
                <h5 className="text-md mb-3">Хүүхэд хамгааллын төвөөс сургалт зохион байгууллаа</h5>
                <p>
                  <small> <u>10.01.2022</u> &emsp; ЗАР МЭДЭЭ</small>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img src="/assets/img/news/top15.jpg" className="w-full h-56" />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
                <h5 className="text-md mb-3">Олонлог эгзэ сургууль 2021-2022 оны хичээлийн жилийн амжилтаараа ТОП-15 сургуулийн нэгээр шалгарлаа.</h5>
                <p>
                  <small> <u>09.01.2022</u> &emsp; БШУСЯ-НЫ МЭДЭЭ</small>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>      
    </div>
  </section>  
</div>
  )
}

export default News