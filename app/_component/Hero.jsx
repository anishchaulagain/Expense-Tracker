import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl pb-1">
        Manange Your Expense
        <strong className="font-extrabold text-primary sm:block pt-3"> Control Your Money.</strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Start Creating your budget and save ton of money.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-primary sm:w-auto"
          href="#"
        >
          Get Started
        </Link>

        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero