import commonStyles from '@/app/styles/Common.module.scss';
import homeStyles from '@/app/styles/Home.module.scss';
import CustomButton from './common/CustomButton';
import { LuRefreshCw } from 'react-icons/lu';
import { CiLock } from 'react-icons/ci';
import { IoUmbrellaOutline } from 'react-icons/io5';

export default function Home() {
  return (
    <>
      <div className={commonStyles.container}>
        {/* Hero Container */}
        <div className={homeStyles.heroContainer}>
          <div className={homeStyles.heroContent}>
            <h1>
              New Outwear <br /> Collection
            </h1>
            <CustomButton label='Shop Now' size='lg' variant='solid' />
          </div>
        </div>

        {/* Story container */}
        <div className={homeStyles.storyContainer}>
          <div className={`flex-1 ${homeStyles.story}`}>
            <div className={homeStyles.overlay}>
              <h2>Our Story</h2>
            </div>
          </div>
          <div className={`flex-1 ${homeStyles.blog}`}>
            <div className={homeStyles.overlay}>
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={homeStyles.fullContainer}>
        <div className={homeStyles.featuredProducts}>
          <h2>Featured Products</h2>
        </div>
        <div className={homeStyles.featuredProducts}>
          <h2>Instagram</h2>
        </div>
        <div className={homeStyles.services}>
          <div className={homeStyles.service}>
            <div>
              <LuRefreshCw className='text-4xl text-[#6a6c6f]' />
            </div>
            <p>Free Shipping and Returns</p>
          </div>
          <div className={homeStyles.service}>
            <CiLock className='text-4xl text-[#6a6c6f]' />

            <p>Secured Payments</p>
          </div>
          <div className={homeStyles.service}>
            <IoUmbrellaOutline className='text-4xl text-[#6a6c6f]' />
            <p>Customer Service</p>
          </div>
        </div>
      </div>
    </>
  );
}
