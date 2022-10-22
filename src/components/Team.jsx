const people = [
    {
      name: 'David Eghelshi',
      role: 'Owner',
      imageUrl:
        'https://i.imgur.com/TVthI7l.jpg',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
    name: 'Remberto Baires',
    role: 'Owner',
    imageUrl:
      'https://i.imgur.com/xxiHPzV.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Junior Baires',
    role: 'Sales Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'David Eghelshi Jr',
    role: 'Sales Manager',
    imageUrl:
      'https://i.imgur.com/pXWQQhp.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  ]
  
  export default function Team() {
    return (
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
              <p className="text-xl text-gray-300">
                We truly care about your project and want you to have the best Pool finish with customer service feel free to reach out to any members of our team. 
              </p>
            </div>
            <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {people.map((person) => (
                <li key={person.name} className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                  <div className="space-y-6 xl:space-y-10">
                    <img className="mx-auto h-40 w-40 rounded-full xl:h-1/4 xl:w-1/2" src={person.imageUrl} alt="" />
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-white">{person.name}</h3>
                        <p className="text-indigo-400">{person.role}</p>
                      </div>
  
                      <ul role="list" className="flex justify-center space-x-5">
                    
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Email</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  