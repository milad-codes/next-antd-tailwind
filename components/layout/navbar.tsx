import Link from 'next/link'
import LogoutIcon from '../svg/LogoutIcon'
import NotificationIcon from '../svg/NotificationIcon'
import SettingsIcon from '../svg/SettingsIcon'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex space-x-2 pl-2">
        <h1 className="text-red-700 font-bold">Milad Akbari</h1>
      </div>

      <ul className="flex items-center text-sm font-medium space-x-2">
        <div className={`flex relative items-center rounded-lg mx-2 cursor-pointer hover:bg-gray-100 `}>
          <div className="absolute -top-1.5 right-0 text-xs font-bold text-white px-1 rounded-md bg-red-500">4</div>
          <Link href={'notifications'}>
            <a className="px-2 py-2 text-gray-500 hover:text-gray-700">Notifications</a>
          </Link>
          <NotificationIcon />
        </div>

        <div
          className={`flex items-center rounded-lg text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-700`}
        >
          <div className="px-2 py-2 ">Settings</div>
          <SettingsIcon />
        </div>

        <div
          className={`flex items-center rounded-lg text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-700`}
        >
          <div className="px-2 py-2 ">Sign out</div>
          <LogoutIcon />
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
