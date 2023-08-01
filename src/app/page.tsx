export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="text-center my-auto ">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          DAO Cookbook
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Learn about how to launch a decentralized autonomous organization.
        </p>
        <p className="mt-6 text-md font-thin leading-8 text-gray-600">
          Powered by the Internet Computer
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md mx-auto bg-indigo-600 p-4 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>
      </div>
    </main>
  )
}
