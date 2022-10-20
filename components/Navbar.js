import React,{useState} from 'react';

const Navbar = () => {
  //const [nv, setNv] = useState(true);


  

  return (
    
          <nav className="flex flex-wrap items-center justify-between bg-blue-800 w-full p-3 z-10 top-0 ">
            <div className="flex flex-row items-center flex-shrink-0 text-white">
              <a href="#"> <img className="h-8 w-40" src="/assets/img/logo.png" alt="Олонлог эгзэ сургууль"/></a>
              {/* <a className="uppercase pl-3 font-medium text-2xl" ></a> */}
            </div>
            {/* Menu toggle button */}
            <div className="block lg:hidden">
              <button  id="nav-toggle"  className="p-2 border rounded rounded-full text-gray-400 border-gray-500 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> </svg>
              </button>
            </div>
            {/* Menu items */}
            <div id="nav-content" className="sm:hidden w-full pt-6 lg:flex lg:items-center lg:w-auto lg:block lg:pt-0">
                <ul className="uppercase text-white lg:flex flex-1">
                 <li> <a href="#" className="inline-block py-2 px-2 text-gray-100 hover:text-white">НҮҮР ХУУДАС</a></li>
                 {/* <li> <a href="#" className="inline-block py-2 px-2 text-gray-100 hover:text-white">БИДНИЙ ТУХАЙ</a></li> */}


                 <li className="nav-item dropdown static">
                   <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-amber-300 focus:text-amber-100 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown" aria-expanded="false">БИДНИЙ ТУХАЙ
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                        </svg>
                    </a>
            <div className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full" aria-labelledby="dropdownMenuButtonX">
                <div className="px-6 lg:px-8 py-5">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white text-gray-600">
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Сургуулийн танилцуулга</a>
                  <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Захирлын мэндчилгээ</a>
                  <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Удирдлагын баг</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Багш нар</a>
                   </div>
                   <div className="bg-white text-gray-600">
                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Байгалийн ухааны заах аргын нэгдэл</a>
                    <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Нийгмийн ухааны заах аргын нэгдэл</a>
                    <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Бага ангийн заах аргын нэгдэл</a>
                  <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Дүрэм журам</a>
                   </div>
                    <div className="bg-white text-gray-600">
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Амжилтын буухиа</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Дүрэмт хувцас</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Бахархал төгсөгчид</a>
                  <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Лавлах товчоо</a>
                   </div>
                  <div className="bg-white text-gray-600">
                            
                   </div>
              </div>
              </div>
          </div>
              </li>





                 <li className="nav-item dropdown static">
           <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-amber-300 focus:text-amber-200 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown" aria-expanded="false">СУРГАЛТЫН ХӨТӨЛБӨР
             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
               <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
             </svg>
           </a>
           <div className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full" aria-labelledby="dropdownMenuButtonX">
             <div className="px-6 lg:px-8 py-5">
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <div className="bg-white text-gray-600">
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Бага ангийн сургалтын хөтөлбөр</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Дунд ангийн сургалтын хөтөлбөр</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Ахлах ангийн сургалтын хөтөлбөр</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Сонгон суралцах хөтөлбөр</a>
                 </div>
                 <div className="bg-white text-gray-600">
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Секц</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Дугуйлан</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Олимпиадын бэлтгэл</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Багш хөгжлийн хөтөлбөр</a>
                 </div>
                 <div className="bg-white text-gray-600">
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Англи хэлний олон улсын хөтөлбөр</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Математикийн олон улсын хөтөлбөр</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Мэдээлэлзүйн олон улсын хөтөлбөр</a>
                   <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">ЭЕШ-ын бэлтгэл хөтөлбөр</a>
                 </div>
                 <div className="bg-white text-gray-600">
                  
                 </div>
               </div>
             </div>
           </div>
                 </li>








                 <li> <a href="#" className="inline-block py-2 px-2 text-gray-100 hover:text-white">МЭДЭЭ МЭДЭЭЛЭЛ</a></li>
                 <li> <a href="#" className="inline-block py-2 px-2 text-gray-100 hover:text-white">ЭЛСЭЛТ</a></li>
                 <li> <a href="#" className="inline-block py-2 px-2 text-gray-100 hover:text-white">ЗУРГИЙН ЦОМОГ</a></li>
                 <li> <a href="#" className="inline-block py-2 px-2 text-gray-100 hover:text-white">ХОЛБОО БАРИХ</a></li>
                </ul>
                

            </div>
            
          
         
            
          </nav>            
     








    // <nav className="navbar navbar-expand-lg shadow-lg py-2 flex items-center w-full justify-between bg-blue-800 relative">
    //     <div className="px-6">
    //         <button className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentX" aria-controls="navbarSupportedContentX" aria-expanded="false" aria-label="Toggle navigation">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    //                 <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
    //             </svg>
    //         </button>
    //         <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">
    //         <ul className="navbar-nav mr-auto flex flex-row">
    //             <li className="nav-item">
    //                 <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-amber-300 focus:text-amber-100 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">НҮҮР ХУУДАС</a>
    //             </li>        
    //             <li className="nav-item dropdown static">
    //                 <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-amber-300 focus:text-amber-100 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown" aria-expanded="false">БИДНИЙ ТУХАЙ
    //                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    //                         <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
    //                     </svg>
    //                 </a>
    //         <div className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full" aria-labelledby="dropdownMenuButtonX">
    //             <div className="px-6 lg:px-8 py-5">
    //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    //                 <div className="bg-white text-gray-600">
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Сургуулийн танилцуулга</a>
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Захирлын мэндчилгээ</a>
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Удирдлагын баг</a>
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Багш нар</a>
    //                 </div>
    //                 <div className="bg-white text-gray-600">
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Байгалийн ухааны заах аргын нэгдэл</a>
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Нийгмийн ухааны заах аргын нэгдэл</a>
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Бага ангийн заах аргын нэгдэл</a>
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Дүрэм журам</a>
    //                 </div>
    //                 <div className="bg-white text-gray-600">
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Амжилтын буухиа</a>
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Дүрэмт хувцас</a>
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Бахархал төгсөгчид</a>
    //                 <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Лавлах товчоо</a>
    //                 </div>
    //                 <div className="bg-white text-gray-600">
                            
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //             </li>
    //             <li className="nav-item dropdown static">
    //       <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-amber-300 focus:text-amber-200 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown" aria-expanded="false">СУРГАЛТЫН ХӨТӨЛБӨР
    //         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    //           <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
    //         </svg>
    //       </a>
    //       <div className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full" aria-labelledby="dropdownMenuButtonX">
    //         <div className="px-6 lg:px-8 py-5">
    //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    //             <div className="bg-white text-gray-600">
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Бага ангийн сургалтын хөтөлбөр</a>
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Дунд ангийн сургалтын хөтөлбөр</a>
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Ахлах ангийн сургалтын хөтөлбөр</a>
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Сонгон суралцах хөтөлбөр</a>
    //             </div>
    //             <div className="bg-white text-gray-600">
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Секц</a>
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Дугуйлан</a>
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Олимпиадын бэлтгэл</a>
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-64 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Багш хөгжлийн хөтөлбөр</a>
    //             </div>
    //             <div className="bg-white text-gray-600">
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Англи хэлний олон улсын хөтөлбөр</a>
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Математикийн олон улсын хөтөлбөр</a>
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Мэдээлэлзүйн олон улсын хөтөлбөр</a>
    //               <a href="#!" aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-96 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">ЭЕШ-ын бэлтгэл хөтөлбөр</a>
    //             </div>
    //             <div className="bg-white text-gray-600">
                  
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-amber-300 focus:text-amber-100 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">ЭЛСЭЛТ, ТӨГСӨЛТ</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-amber-300 focus:text-amber-100 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">МЭДЭЭ МЭДЭЭЛЭЛ</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-amber-300 focus:text-amber-100 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">ЗУРГИЙН ЦОМОГ</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-amber-300 focus:text-amber-100 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">ХОЛБОО БАРИХ</a>
    //             </li>
    //         </ul>
    //         </div>
    //     </div>
    // </nav>

  )
}

export default Navbar