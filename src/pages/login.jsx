function Login () {
    return (
        <>
            <div className="grid grid-cols-2 " style={{fontFamily: "Roboto"}}>
                <div className="brightness-50">
                    <img src="src/assets/fotbar.jpg" className="object-cover w-full h-screen resize-x" />
                </div>
                <div className="flex flex-col my-auto">
                    <div>
                        <img src="src/assets/logo_idn.png" className="float-left scale-50 h-40" />
                    </div>
                    <div className="mx-[120px]">
                        <div className="flex justify-between items-center">
                            <p className="text-[20px] font-bold" href="">Sign in</p>
                            <a className="text-[14px] hover:text-blue-400" href="">Create an Account</a>
                        </div>
                        <div className="flex items-center mt-6">
                            <img src="src/assets/user.svg" className="w-6 h-6 m-2 absolute z-10" />
                            <input type="email" placeholder="Email Address" className="outline-none border border-gray-300 rounded-md w-full pl-10 py-2 relative" />
                        </div>
                        <div className="flex items-center mt-5">
                            <img src="src/assets/key.svg" className="w-6 h-6 m-2 absolute z-10" />
                            <input type="password" placeholder="Password" className="outline-none border border-gray-300 rounded-md w-full pl-10 py-2 relative" />
                        </div>
                        <div className="flex justify-between mt-5">
                            <label className="flex items-center">
                                <input type="checkbox" className="appearance-none checked:bg-[#EB4E4F] rounded-md border-2 border-[#EB4E4F] h-5 w-5 text-gray-600" />
                                <p className="ml-2 text-gray-700 text-[14px]">Remember Me</p>
                            </label>
                            <a className="text-[14px] hover:text-blue-400" href="">Forgot Password</a>
                        </div>
                        <div className="flex items-center mt-5 bg-blue-500 rounded-full">
                            <button className="outline-none text-center w-full py-2 text-sm text-white font-bold">Log In</button>
                        </div>
                        <p className="mt-5 text-center hover:text-blue-400 cursor-pointer font-semibold text-sm text-[#9B9B9C]">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const CartProduct = () => {
  return (
    <div className="overflow-hidden mt-20">
       <div className="w-screen flex-row h-28 flex justify-center px-12 p-20">
         <h1 className="titlehero text-xl font-extrabold">CART</h1>
       </div>
       <div className="flex flex-col justify-center md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white p-6 mb-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left text-sm font-semibold">PRODUCT</th>
                            <th className="text-sm font-semibold">QUANTITY</th>
                            <th className="text-sm text-left font-semibold">TOTAL</th>
                        </tr>
                    </thead>
                    <hr class="h-px mb-2 mt-2 bg-gray-200 border-0"></hr>
                    <tbody>
                        <tr>
                            <td className="py-4">
                                <div className="flex items-center">
                                    <img className="h-24 w-24 mr-4" src="src/assets/F9model.webp"/>
                                    <span className="p-2 text-sm font-semibold">SPACEX F9 MODEL
                                      <p className="pt-3 text-sm">$150.00</p>
                                    </span>
                                </div>
                            </td>
                            <td className="py-4">
                                <div className="flex items-center">
                                    <button className="border py-2 px-4">-</button>
                                    <span className="text-center w-8">1</span>
                                    <button className="border py-2 px-4">+</button>
                                </div>
                            </td>
                            <td className="py-4">$150.00</td>
                        </tr>
                    </tbody>
                </table>
                <hr class="h-px mb-2 mt-2 bg-gray-200 border-0"></hr>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Login;

