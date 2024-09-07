import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import './Header.css';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';

const TopHeader = () => {
  return (
    <div className="lg:flex hidden items-center justify-between py-3">
      <div className="w-auto">
        <div className="flex items-center gap-2 text-white">
          <HiLocationMarker className='size-5' />
          <p className='tracking-wider'>Oak Drive, Plattsburgh, New York</p>
        </div>
      </div>
      <div className="w-auto">
        <div className="flex justify-end gap-12 text-white">
          <div className="flex items-center gap-2">
            <HiPhone className='size-5' />
            <a href="tel:5185643200 tracking-wider">518-564-3200</a>
          </div>
          <div className="flex gap-2">
            <MdEmail className='size-5' />
            <a className='tracking-wider' href="mailto:tecbolt@example.com">tecbolt@example.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;