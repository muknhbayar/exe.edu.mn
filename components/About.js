import React from 'react'

const About = () => {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-orange-50">
  <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 className="mt-1 text-lg font-semibold text-white sm:text-blue-900 md:text-2xl dark:sm:text-white ">ОЛОНЛОГ ЭГЗЭ СУРГУУЛИЙН ТАНИЛЦУУЛГА</h1>
      {/* <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p> */}
    </div>
    <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src="/assets/img/schoolbuilding.jpg" alt className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
      <img src="/assets/img/exe2.jpg" alt className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
      <img src="/assets/img/exe1.jpg" alt className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
    </div>
    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
      
      <dt className="sr-only">Location</dt>
      <dd className="flex items-center">
        <svg width={2} height={2} aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
          <circle cx={1} cy={1} r={1} />
        </svg>
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
        ЧИНГЭЛТЭЙ ДҮҮРЭГ, УЛААНБААТАР ХОТ, МОНГОЛ УЛС
      </dd>
    </dl>
    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">ДЭЛГЭРЭНГҮЙ...</button>
    </div>
    <p className="mt-4 text-md text-justify leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
    Олонлог Эгзэ Сургууль нь 2017 онд үүсгэн байгуулагдаж, мэргэжлээс үл хамааран хүн бүрийн зайлшгүй эзэмших шаардлагатай мэдээллийн технологийн салбарын ур чадвар, боловсрол, мэдлэгийг дунд сургуулийн сурагчдад олгож, эзэмшүүлэхийг тэргүүн зорилгоо болгон хүүхдийн төлөө сэтгэлтэй хамт олныг бүрдүүлэн ажиллаж байна.
    </p>
  </div>
</main>


  )
}

export default About