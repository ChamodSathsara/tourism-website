import React from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-tropical-950 text-tropical-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">Magical Paradise</h3>
            <p className="text-tropical-200 mb-6 leading-relaxed">
              Crafting luxury travel experiences and unforgettable memories across the beautiful
              island of Sri Lanka and the Maldives.
            </p>
            <div className="flex space-x-4">
              {[FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-tropical-900 flex items-center justify-center hover:bg-tropical-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 tracking-wide">Destinations</h4>
            <ul className="space-y-3 text-tropical-200">
              {[
                'Sigiriya & Cultural Triangle',
                'Kandy & Hill Country',
                'Ella & Nuwara Eliya',
                'Galle & South Coast',
                'Yala National Park',
                'Maldives Extensions',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sand-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3 text-tropical-200">
              {[
                'Luxury Tour Packages',
                'Popular Day Tours',
                'Boutique Hotels',
                'Corporate Events',
                'Airport Transfers',
                'Travel Insurance',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sand-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-tropical-200">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-sand-400 shrink-0 mt-1" />
                <span>
                  123 Galle Road, Colombo 03,
                  <br />
                  Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-sand-400 shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-sand-400 shrink-0" />
                <span>hello@magicalparadise.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tropical-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-tropical-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Magical Paradise. All rights reserved.{' '}
            <br className="md:hidden" />
            <span className="text-tropical-500 mt-1 block md:inline">
              Licensed by Sri Lanka Tourism Development Authority — License No: SLTDA/2024/0847
            </span>
          </p>
          <div className="flex gap-4 opacity-70">
            {['VISA', 'MasterCard', 'AMEX'].map((card) => (
              <div
                key={card}
                className="px-3 py-1 bg-white rounded text-tropical-950 font-bold text-xs"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}