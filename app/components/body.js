import Link from 'next/link';
const Body1 = () => {
    return (
        <>
            <main>
                <h1 className="text-2xl ml-[16%] mt-[2%]"><b>Select your address</b></h1>
                <div className= 'bg-slate-50 h-52 w-[45%] flex text-center ml-[16%] mt-[1%] gap-5'>
                    <div className='h-[85%] bg-gray-700 w-[45%] mt-[2.5%] ml-[3.5%]'>
                       <div className='w-9 ml-[45%] mt-[15%]'><img src='https://png.pngtree.com/png-vector/20230106/ourmid/pngtree-flat-red-location-sign-png-image_6553065.png'></img></div>
                        <div><Link href="/" className='text-red-600'>+ Add New Address</Link></div>
                    </div>
                    <div className='bg-red-400 w-[45%] mt-[2.5%] h-[85%]'>
sedrftgyhu
                    </div>
                </div>
            </main>
        </>
    )
}

export default Body1;