import { PhoneIcon } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const people = [
  {
    name: "David Eghelshi",
    role: "Owner",
    imageUrl: "https://i.imgur.com/TVthI7l.jpg",
    EmailUrl: "#",
    href: "tel:9087872210",
    email: "mailto:david@bairespoolsplastering.com"
  },
  {
    name: "Remberto Baires",
    role: "Owner",
    imageUrl: "https://i.imgur.com/xxiHPzV.jpg",
    href: "tel:9087212464",
    email: "mailto:remberto@bairespoolsplastering.com"
  },
  {
    name: "Junior Baires",
    role: "Sales Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    href: "tel:9087872210",
    email: "mailto:info@bairespoolsplastering.com"

    },
  {
    name: "David Eghelshi Jr",
    role: "Sales Manager",
    imageUrl: "https://i.imgur.com/pXWQQhp.jpg",
    href: "tel:9089178750",
    email: "mailto:eghelshi@gmail.com"

},
];

export default function Team() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet our team
            </h2>
            <p className="text-xl text-gray-300">
              We truly care about your project and want you to have the best
              Pool finish with customer service feel free to reach out to any
              members of our team.
            </p>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {people.map((person) => (
              <li
                key={person.name}
                className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:h-1/4 xl:w-1/2"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3 className="text-white">{person.name}</h3>
                      <p className="text-indigo-400">{person.role}</p>
                    </div>

                    <ul className="flex justify-center space-x-5">
                      {/* Phone Icon Section */}
                      <li>
                        <a
                          href={person.href}
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">Phone</span>
                          <div>
                            <PhoneIcon className="h-6 w-6 text-blue-600" />
                          </div>
                        </a>
                      </li>
                      {/* Email Icon Section  */}
                      <li>
                        <a
                          href={person.email}
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">Email</span>
                          <div>
                            <PaperAirplaneIcon className="h-6 w-6 text-blue-600" />
                          </div>
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
  );
}
