import Image from 'next/image';
import React from 'react';

import Banner from 'assets/kdz.jpeg';

import 'styles/banner-header.scss';

export default function BannerAboutUs() {
  return (
    <section className='hero' id='hero'>
      <div className='flex justify-center'>
        <div className='w-[80vw] xl:w-[40vw]'>
          <Image
            src={Banner}
            alt='Seo illustration'
            width={800} // Default width
            height={600} // Default height
            sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
            layout='responsive'
          />
        </div>
      </div>

      <section class='bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20'>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 class='text-5xl font-bold mb-4'>About Us</h1>
          <p class='text-xl mb-6'>
            Providing reliable, powerful Facebook ad account rental services to
            help you scale your business.
          </p>
          <a
            href='https://t.me/kdzagency'
            target='_blank'
            class='bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300'
          >
            Learn More
          </a>
        </div>
      </section>

      <section id='learn-more' class='py-16 bg-white'>
        <div class='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 class='text-4xl font-bold text-gray-800 mb-10'>Who We Are</h2>
          <p class='text-lg text-gray-600 mb-12'>
            With the current Facebook ads situation, finding account rental
            services is more necessary than ever for advertisers. We pride
            ourselves on being a trustworthy and reliable service provider,
            working directly with customers and offering custom solutions to
            meet your specific advertising needs.
          </p>

          <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Direct Work, No Intermediaries
              </h3>
              <p class='text-gray-600'>
                Work directly with us, the people who create and provide
                accounts, without intermediaries. Enjoy good fees and better
                communication.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Save Time
              </h3>
              <p class='text-gray-600'>
                Save time by letting us handle account preparation. Get started
                faster with reliable setups.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Personalized Advice
              </h3>
              <p class='text-gray-600'>
                Get expert advice and use the right account based on your
                specific business needs and advertising goals.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Reliable Advertising Accounts
              </h3>
              <p class='text-gray-600'>
                Our accounts are always available and offer unlimited spread for
                your advertising campaigns.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Stable Payment Cards
              </h3>
              <p class='text-gray-600'>
                Payment cards are reliable and always stable, ensuring seamless
                transactions for your campaigns.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Private IPs & 24/7 Access
              </h3>
              <p class='text-gray-600'>
                Private IPs, 24/24 access, and usage via VPS and ADSPOWER ensure
                security and ease of use.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Personalized Fanpages
              </h3>
              <p class='text-gray-600'>
                Fanpages tailored to your needs, strong with many followers and
                interactions.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Verified Profiles
              </h3>
              <p class='text-gray-600'>
                We provide verified, trustworthy Facebook profiles for your
                advertising accounts.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Smart Pixels
              </h3>
              <p class='text-gray-600'>
                Use smart pixels to optimize advertising costs and get the best
                value for your campaigns.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Clear Spending Reports
              </h3>
              <p class='text-gray-600'>
                We provide methodical working processes and clear spending
                reports on a daily basis.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                24/7 Support
              </h3>
              <p class='text-gray-600'>
                Two dedicated employees are always ready to solve your problems
                24/7.
              </p>
            </div>

            <div class='bg-gray-50 p-6 rounded-lg shadow-lg'>
              <div class='mb-4'>
                <span class='text-4xl text-blue-500'>&#10003;</span>
              </div>
              <h3 class='text-2xl font-semibold text-gray-800 mb-2'>
                Transparent Policy
              </h3>
              <p class='text-gray-600'>
                We have a clear and transparent policy with refunds available
                after 24 hours when you stop working with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class='bg-blue-600 py-12'>
        <div class='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 class='text-3xl font-bold text-white mb-6'>
            Ready to Work with Us?
          </h2>
          <a
            href='https://t.me/kdzagency'
            target='_blank'
            class='bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300'
          >
            Contact Us
          </a>
        </div>
      </section>
    </section>
  );
}
