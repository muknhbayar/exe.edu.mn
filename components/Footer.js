import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center bg-blue-800 text-white" style={{ backgroundImage:`url(${"/assets/img/hee.png"})` }}>
  <div className="container px-6 pt-6">
    <div className="flex justify-center lg:items-stretch mb-6">
      <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="w-2 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      </a>
      <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-3 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
      </a>
      <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" className="w-3 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
          <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      </a>
      <a href="#!" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="w-3 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>      
    </div>
    <div>
      <form action>
        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
          <div className="md:ml-auto md:mb-6">
            <p className>
              <strong>Шинэ мэдээллийг и-мэйлээр авах</strong>
            </p>
          </div>
          <div className="md:mb-6">
            <input type="text" className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        " id="exampleFormControlInput1" placeholder="Email address" />
          </div>
          <div className="md:mr-auto mb-6">
            <button type="submit" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              БҮРТГҮҮЛЭХ
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="mb-6 text-yellow-300 uppercase text-lg font-bold">
      <p>
        Манай хаяг: Улаанбаатар хот, Чингэлтэй дүүрэг, 5-р хороо, Төмөрчний гудамж 7/1
      </p>
    </div>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 list-none text-left font-light">
      <div className="mb-6">      
            <h2 className="text-yellow-300 uppercase font-normal">Боловсролын цахим мэдээллийн систем</h2>
            <li><a href="https://www.meds.gov.mn/" target="_blank" rel="noopener noreferrer">Боловсролын яамны албан ёсны вэб сайт</a></li>
            <li><a href="http://eec.mn/" target="_blank" rel="noopener noreferrer">Боловсролын үнэлгээний төв</a></li>
            <li><a href="https://econtent.edu.mn/" target="_blank" rel="noopener noreferrer">E-CONTENT Цахим сургалтын сан</a></li>
            <li><a href="http://itembank.eec.mn/" target="_blank" rel="noopener noreferrer">Даалгаврын сангийн систем</a></li>
            <li><a href="http://www.edub.edu.mn/" target="_blank" rel="noopener noreferrer">Нийслэлийн боловсролын газар</a></li>
            <li><a href="https://chdedu.blogspot.com/" target="_blank" rel="noopener noreferrer">Чингэлтэй дүүргийн боловсролын хэлтэс</a></li>
            <li><a href="http://www.fcy.gov.mn/" target="_blank" rel="noopener noreferrer"> Гэр бүл, хүүхэд, залуучуудын хөгжлийн газар</a></li>
             <br />
            <h2 className="text-yellow-300 uppercase font-normal">ОНЛАЙН БАНК</h2>            
            <li><a href="https://www.mongolbank.mn/" target="_blank" rel="noopener noreferrer">Монгол банк</a></li>
            <li><a href="https://www.khanbank.com/mn/" target="_blank" rel="noopener noreferrer">ХААН банк</a></li>
            <li><a href="https://www.golomtbank.com/" target="_blank" rel="noopener noreferrer">Голомт банк</a></li>
            <li><a href="https://egolomt.mn/login/" target="_blank" rel="noopener noreferrer">Е-Голомт</a></li>
            <li><a href="https://www.statebank.mn/w/mn/" target="_blank" rel="noopener noreferrer">Төрийн банк</a></li>
            <li><a href="https://www.xacbank.mn/" target="_blank" rel="noopener noreferrer">ХАС банк</a></li>
            <li><a href="https://www.tdbm.mn/mn/" target="_blank" rel="noopener noreferrer">Худалдаа хөгжлийн банк</a></li>
            <li><a href="https://www.bogdbank.com/" target="_blank" rel="noopener noreferrer">Богд банк</a></li>
            <li><a href="https://www.arigbank.mn/mn" target="_blank" rel="noopener noreferrer">Ариг банк</a></li>
      </div>
      <div className="mb-6  ">      
            <h2 className="text-yellow-300 uppercase font-normal">Төрийн өмчийн их сургуулиуд</h2>
            <li><a href="http://www.num.edu.mn/" target="_blank" rel="noopener noreferrer">Монгол улсын их сургууль</a></li>
            <li><a href="http://www.must.edu.mn/mn/" target="_blank" rel="noopener noreferrer">Шинжлэх ухаан, технологийн их сургууль</a></li>
            <li><a href="http://www.msue.edu.mn/" target="_blank" rel="noopener noreferrer">Монгол улсын боловсролын их сургууль</a></li>
            <li><a href="http://www.mnums.edu.mn/" target="_blank" rel="noopener noreferrer">Анагаахын шинжлэх ухааны үндэсний их сургууль</a></li>
            <li><a href="http://www.muls.edu.mn/" target="_blank" rel="noopener noreferrer">Хөдөө аж ахуйн их сургууль</a></li>
            <li><a href="http://www.mndu.gov.mn/" target="_blank" rel="noopener noreferrer">Үндэсний батлан хамгаалах их сургууль</a></li>
            <li><a href="https://www.uia.gov.mn/" target="_blank" rel="noopener noreferrer">Дотоод хэргийн их сургууль</a></li>
            <li><a href="https://mnuac.edu.mn/main/421666" target="_blank" rel="noopener noreferrer">Соёл урлагийн их сургууль</a></li>
            <li><a href="http://www.naog.gov.mn/" target="_blank" rel="noopener noreferrer">Удирдлагын академи</a></li>
            <br />
            <h2 className="text-yellow-300 uppercase font-normal">Хэрэгцээт холбоосууд</h2>
            <li><a href="https://e-mongolia.mn/home" target="_blank" rel="noopener noreferrer">E-MONGOLIA</a></li>   
            <li><a href="https://ebarimt.mn/" target="_blank" rel="noopener noreferrer">E-Баримт</a></li>
            <li><a href="https://www.airmarket.mn/" target="_blank" rel="noopener noreferrer">Нислэгийн тийз захиалга</a></li>
            <li><a href="https://eticket.ubtz.mn/" target="_blank" rel="noopener noreferrer">Галт тэрэгний билет захиалга</a></li>
            <li><a href="https://eticket.transdep.mn/index.php" target="_blank" rel="noopener noreferrer">Орон нутгийн автобусны билет захиалга</a></li>
            <li><a href="https://smartcar.mn/#/" target="_blank" rel="noopener noreferrer">Тээврийн хэрэгслийн нэгдсэн систем</a></li>        
      </div>
      <div className="mb-6 ">      
      <h2 className="text-yellow-300 uppercase font-normal">Толь бичиг</h2>
            <li><a href="https://mongoltoli.mn/" target="_blank" rel="noopener noreferrer">Монгол толь</a></li>
            <li><a href="http://dict.num.edu.mn/" target="_blank" rel="noopener noreferrer">Хэлзүйн толь</a></li>
            <li><a href="http://www.bolor-toli.com/" target="_blank" rel="noopener noreferrer">Болор толь</a></li>
            <li><a href="http://toli.query.mn/" target="_blank" rel="noopener noreferrer">Цэвэлийн толь</a></li>
            <li><a href="http://spellcheck.gov.mn/" target="_blank" rel="noopener noreferrer">Үгийн алдаа шалгах</a></li>
            <br />
            <h2 className="text-yellow-300 uppercase font-normal">МЭДЭЭ МЭДЭЭЛЭЛ</h2>
            <li><a href="https://www.news.mn/" target="_blank" rel="noopener noreferrer">news.mn</a></li>
            <li><a href="http://gogo.mn/" target="_blank" rel="noopener noreferrer">gogo.mn</a></li>
            <li><a href="https://zarig.mn/" target="_blank" rel="noopener noreferrer">zarig.mn</a></li>
            <li><a href="http://zindaa.mn/" target="_blank" rel="noopener noreferrer">zindaa.mn</a></li>
            <li><a href="http://ikon.mn/" target="_blank" rel="noopener noreferrer">ikon.mn</a></li>
            <li><a href="http://trends.mn/" target="_blank" rel="noopener noreferrer">trends.mn</a></li> 
            <li><a href="http://www.unread.today" target="_blank" rel="noopener noreferrer">unread.today</a></li>
            <li><a href="http://www.itoim.mn/" target="_blank" rel="noopener noreferrer">itoim.mn</a></li>
            <li><a href="https://newspress.mn/v1/p/1/home/" target="_blank" rel="noopener noreferrer">newspress.mn</a></li>
            <li><a href="https://yolo.mn/" target="_blank" rel="noopener noreferrer">yolo.mn</a></li>
            <li><a href="http://www.baabar.mn/" target="_blank" rel="noopener noreferrer">baabar.mn</a></li>

      </div>
      

      <div className="mb-6 h-100 w-full"  style={{ backgroundImage:`url(${"/assets/img/map.png"})` }}  >     
                    
      </div>

    </div>     
  </div>
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
    © 2022 Copyright&emsp;
    <a className="text-white font-light" href="https://exe.edu.mn/">ОЛОНЛОГ ЭГЗЭ СУРГУУЛЬ</a>
  </div>
</footer>

  )
}

export default Footer