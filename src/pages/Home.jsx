/* This example requires Tailwind CSS v2.0+ */
import Testimonials from '../components/Testimonials'
import { PhoneIcon, WrenchScrewdriverIcon, UsersIcon } from '@heroicons/react/24/outline'
import Team from '../components/Team'
const supportLinks = [
  {
    name: 'Sales',
    href: 'tel:9082222803',
    description:
      'Click on this link to contact our sales team',
    icon: PhoneIcon,
    buttonName: "Contact Us"
  },

  {
    name: 'Services',
    href: 'https://pebbletec.com/products/pool-finishes/',
    description:
      'Click this link to get a full list of our offered services.  ',
    icon: WrenchScrewdriverIcon,
    buttonName: 'Services'
  },
  {
    name: 'Gallery',
    href: '/pics',
    description:
      'See our completed projects with other pebbletec clients.  ',
    icon: WrenchScrewdriverIcon,
    buttonName: 'Gallery'
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            alt="couple swimming in pool "
            
            src="https://i.imgur.com/2XwvFTv.jpg"
          />
     
          <div className="absolute inset-0 bg-blue-400 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Baires Pools and Plastering </h1>
          <div className='flex justify-center'>          
          <p className="mt-6 max-w-3xl text-xl  text-gray-300">
            Pool plastering with the amazing finishes of Pebbletec that look and feel like nothing else on the market. 
          </p>
          </div>       
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading" >
          <a href="tel:9082222803">

          Contact us
          </a>
        </h2>
        <div className="grid grid-cols-2 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className='flex justify-center'>
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  {link.buttonName}<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
<Team/>
<Testimonials/>
        
      </section>
    </div>
  )
}
