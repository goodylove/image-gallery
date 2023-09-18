function SignIn() {
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <form
        action=""
        className=" w-96 p-10 rounded shadow-3xl flex flex-col  justify-center gap-4 font-serif"
      >
        <div className="flex flex-col   text-white ">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className=" p-2 outline-none rounded"
          />
        </div>
        <div className="flex flex-col  text-white ">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 outline-none rounded"
          />
        </div>
        <button className="bg-black text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
