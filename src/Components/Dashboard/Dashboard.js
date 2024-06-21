import React, { useEffect } from 'react';
import "../Dashboard/Dashboard.css";
import { Fragment } from 'react';
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Outlet } from 'react-router-dom';

const user = {
name: 'Tom Cook',
email: 'Sales manager',
imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png',
};

const navigation = [
{ name: 'Dashboard', href: '/panel', current: true ,  },
{ name: 'Settings', href: '/panel/settings', current: false },
{ name: 'Brands', href: '/panel/brends', current: false },
{ name: 'Models', href: '/panel/models', current: false },
{ name: 'Cities', href: '/panel/cities', current: false },
{ name: 'Cars', href: '/panel/cars', current: false },
];

const userNavigation = [
{ name: 'Your Profile', href: '#' },
{ name: 'Settings', href: '#' },
{ name: 'Sign out', href: '#' },
];

function classNames(...classes) {
return classes.filter(Boolean).join(' ');
}

export const Dashboarda = () => {
return (
<div className="min-h-full flex dashbac">
<Disclosure as="nav" className="bg-gray-800 w-48">
{({ open }) => (
<>
<div className="flex flex-col h-full  bnz">
<div className="flex items-center justify-center bg-gray-900 h-16 dashwith">
<img
               className="h-8 w-8"
               src="https://autozoomrental.com/static/media/logo1.cd0ee2ea64bdb4e351d6eb2c72171d12.svg"
               alt="Your Company"
             />
</div>


          <div className="flex-grow profil-mn">
            <div className="px-2 pt-5 pb-3 space-y-1 bacraund">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
    )}
  </Disclosure>

  <div className="flex-1 flex flex-col">
    <header className="bg-white shadow profil-m">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Avtozoom Admin</h1>
        <div className="flex items-center">
          <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-gray-900">{user.name}</div>
            <div className="text-sm font-medium leading-none text-gray-500">{user.email}</div>
          </div>
          <button
            type="button"
            className="ml-4 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
		
      </div>
    </header>
    <main className="flex-1">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  </div>
</div>
);
};