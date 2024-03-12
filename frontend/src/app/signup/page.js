

export default function Signup() {
  return (
    <div className="flex justify-center mt-20 w-full">
        <div className="bg-gray-300 py-10 px-5 rounded">
            <h2 className="text-2xl text-center pb-4">
                Sign Up
            </h2>
            <form>
                <div className="mb-5">
                    <label className="block mb-2">
                        Email*
                    </label>
                    <input type="email" className="block border-2 border-black bg-gray-300 w-full" placeholder="Sample@gmail.com"/>
                </div>
                <div className="mb-5">
                    <label className="block mb-2">
                        password
                    </label>
                    <input type="password" className="block border-2 border-black bg-gray-300 w-full" placeholder="*******"/>
                </div>
                <div className="flex justify-center">
                    <button>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
}