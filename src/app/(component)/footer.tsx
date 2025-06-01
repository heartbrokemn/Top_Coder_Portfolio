import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-[#000116]  w-full md:px-16 text-white py-2 px-6">
          <hr />
  <div className="mt-3 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* <!-- Left Side: Logo --> */}
    <div>
      <Image src="/images/logopng.png" alt="Logo" width={120} height={32} />
    </div>

    {/* <!-- Right Side: Resources & Legal --> */}
    <div className="grid grid-cols-2 gap-6">
      {/* <!-- Resources --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-gray-400">Documentation</a></li>
          <li><a href="#" className="hover:text-gray-400">Blog</a></li>
          <li><a href="#" className="hover:text-gray-400">Tutorials</a></li>
          <li><a href="#" className="hover:text-gray-400">Community</a></li>
        </ul>
      </div>

      {/* <!-- Legal --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-gray-400">Cookies</a></li>
                      </ul>
                                       <div className='flex mt-8 gap-4 opacity-50'>
                      <Image src={"/images/f.png"} alt="Logo" width={30} height={30}/>
                      <Image src={"/images/i.png"} alt="Logo" width={30} height={30}/>
                      <Image src={"/images/w.png"} alt="Logo" width={30} height={30}/>
          
</div>
      </div>
 
    </div>
  </div>

 
</footer>

  )
}

export default Footer