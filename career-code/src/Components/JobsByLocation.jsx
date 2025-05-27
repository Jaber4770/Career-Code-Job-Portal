import React from 'react';




const cities = [
    {
        name: "Paris, France",
        vacancies: 5,
        companies: 120,
        badge: "Hot",
        image: "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/location1.png", // Replace with actual image URLs
    },
    {
        name: "London, England",
        vacancies: 7,
        companies: 68,
        badge: "Trending",
        image: "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/location2.png",
    },
    {
        name: "New York, USA",
        vacancies: 9,
        companies: 80,
        badge: "Hot",
        image: "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/location3.png",
    },
    {
        name: "Amsterdam, Holland",
        vacancies: 16,
        companies: 86,
        image: "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/location4.png",
    },
    {
        name: "Copenhagen, Denmark",
        vacancies: 39,
        companies: 186,
        image: "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/location5.png",
    },
    {
        name: "Berlin, Germany",
        vacancies: 15,
        companies: 632,
        image: "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/location6.png",
    },
];

const CityCard = ({ city }) => (
    <div className="bg-white rounded-xl shadow-md p-2 w-full">
        <div className="relative">
            <img
                src={city.image}
                alt={city.name}
                className="rounded-lg w-full object-center"
            />
            {city.badge && (
                <span className="absolute top-2 left-2 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                    {city.badge}
                </span>
            )}
        </div>
        <h3 className="mt-4 font-semibold text-lg">{city.name}</h3>
        <p className="text-sm text-gray-600">{city.vacancies} Vacancy</p>
        <p className="text-sm text-gray-500">{city.companies} companies</p>
    </div>
  );

const JobsByLocation = () => {
    return (
        <div className='mb-20'>
            <div className='text-center'>
                <h1 className='text-4xl  font-semibold'>Jobs by Location</h1>
                <p className='text-2xl'>Find your favourite jobs and get the benefits of yourself</p>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {cities.map((city, index) => (
                        <CityCard key={index} city={city} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobsByLocation;