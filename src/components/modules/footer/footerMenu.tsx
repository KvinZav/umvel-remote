import Link from 'next/link';
import React from 'react';

const MENU_ITEMS = [
  {
    title: 'Our work',
    ref: '',
    items: [{
      label: 'Case studies',
      ref: ''
    }]
  },
  {
    title: 'Our offering',
    ref: '',
    items: [{
      label: 'How we can help',
      ref: ''
    },{
      label: 'The Umvel Way',
      ref: ''
    },{
      label: 'Our approach',
      ref: ''
    }]
  },
  {
    title: 'Our capabilities',
    ref: '',
    items: [{
      label: 'Creative',
      ref: ''
    },{
      label: 'Technology',
      ref: ''
    },{
      label: 'Research',
      ref: ''
    }]
  },{
    title: 'About Us',
    ref: '',
    items: [{
      label: 'What we do',
      ref: ''
    },{
      label: 'Philosophy',
      ref: ''
    },{
      label: 'Process',
      ref: ''
    },{
      label: 'Our team',
      ref: ''
    }]
  },{
    title: 'Resources',
    ref: '',
    items: [{
      label: 'Insights by Umvellers',
      ref: ''
    },{
      label: 'Tools',
      ref: ''
    },{
      label: 'Frameworks',
      ref: ''
    }]
  }
]

export const FooterMenu = () => {
  return(
    <section className="py-[104px] px-[72px] md:p-36 lg:p-32">
      <div className="grid md:flex md:max-h-[80vh] md:flex-wrap md:flex-col md:content-around lg:place-content-around lg:grid lg:grid-cols-5">
        {
          MENU_ITEMS.map((i, n) => 
            <div key={n + ''} className={`lg:order-1 ${n % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="mb-8">
                <Link href={i.ref}>
                  <a className="text-xl leading-tight font-bold">{i.title}</a>
                </Link>
              </div>
              <ul className="hidden md:block md:mb-16 lg:mb-0">
                {i.items.map((j, n) => (
                  <li className={n !== i.items.length - 1 ? 'mb-6' : 'mb-0'} key={n+''}>
                    <Link href={j.ref}>
                      <a>{j.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
      <div className="flex justify-end mt-32">
        <p>© 2022 Umvel Inc.</p>
      </div>
    </section>
  )
}
