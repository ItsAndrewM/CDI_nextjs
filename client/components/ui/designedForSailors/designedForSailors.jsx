import Image from "next/image";

const DesignedForSailors = () => {
  return (
    <div key="1" className="flex flex-col min-h-[100vh] align-center">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  A Must-Have for a Smooth Sailing Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                  Not all sailboats come with a furling system when they are
                  manufactured. In many cases, older sailboats are not equipped
                  with a furling system for either their headsail or mainsail,
                  or both, which creates a tedious and lengthy process of
                  setting up and taking down your sails frequently. If your boat
                  was manufactured with a furling system, there is a good chance
                  that it is greatly out-dated and possibly worn-out. Resulting
                  in a process that becomes a hassle while sailing due it being
                  clunky. Unfortunately, in both of these scenarios, a lot of
                  sailors are finding that the hassle is taking some of the
                  enjoyment out of sailing and limiting the amount of time that
                  they spend on the water.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center mt-8"
              height="600"
              src="/designedForSailors/Inspecting-your-furler-calico-skies-edited.png"
              width="1200"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/designedForSailors/Sailing-Uma-Checking-Sails.webp"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                    {/* Collaboration */}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Time Consuming.
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    If your sailboat does not have a furling system, or an
                    outdated one, the time spent dealing with your sails during
                    setup and take-down, or during changing wind conditions is
                    exponentially longer that you would with a furling system.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="#"
                  >
                    Find your Furler
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                    {/* Collaboration */}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Safety Concerns.
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    During wet and windy conditions, going forward on your boat
                    can be very dangerous to your crew, no matter the
                    experience. When you are equipped with furling systems, the
                    furler can be used to both furl and reef your sail in any
                    wind condition, from the safety of the cabin. This makes it
                    a safer and more convenient option for sailors.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="#"
                  >
                    Find your Furler
                  </a>
                </div>
              </div>
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/designedForSailors/sailing-uma-rough-waters-wide-1024x546.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/designedForSailors/headsail.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                    {/* Collaboration */}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Is There A Furler For You?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    The CDI Furlers are suitable for use on daysailers, offshore
                    passage makers, monohulls, and multihulls. It is used by
                    production boat builders and is great as a retrofit. The
                    flexible luff extrusion makes it the best choice for
                    trailerables. This makes it a versatile furling system that
                    can be used on different types of boats.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 da"
                    href="#"
                  >
                    Find your Furler
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready To Sail With CDI?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                  Have any questions or concerns? Feel free to reach out.
                </p>
              </div>
              <div className="w-full max-w-md">
                <form className="grid gap-4">
                  <input
                    className="w-full"
                    placeholder="Your Name"
                    type="text"
                  />
                  <input
                    className="w-full"
                    placeholder="Your Email"
                    type="email"
                  />
                  <input
                    className="w-full"
                    placeholder="Boat Model/Make"
                    type="text"
                  />
                  <input
                    className="w-full"
                    placeholder="Furler Selection – UNSURE"
                    type="text"
                  />

                  <textarea
                    className="w-full h-32 p-2 rounded-md border border-gray-200 "
                    placeholder="Additional Notes"
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignedForSailors;
