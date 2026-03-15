function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="pt-4 grid gap-4 sm:grid-cols-2 md:gap-5">
      <article className="relative rounded-xl bg-gradient-to-r from-[#5a30d9] to-[#8b59f3] p-6 text-white">
        <img
          src="/vectors/vector1.png"
          alt=""
          className=" absolute -left-1 -top-1"
        />
        <img
          src="/vectors/vector1.png"
          alt=""
          className=" absolute -right-8 -bottom-8 rotate-180"
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p className="text-4xl font-semibold">
            In-Progress
          </p>
          <p className="pt-3 text-5xl font-black">
            {inProgressCount}
          </p>
        </div>
      </article>

      <article className="relative rounded-xl bg-gradient-to-r from-[#53d36d] to-[#007f8d] p-6 text-white">
        <img
          src="/vectors/vector1.png"
          alt=""
          className="absolute -left-6 -top-10"
        />
        <img
          src="/vectors/vector1.png"
          alt=""
          className=" absolute -right-8 -bottom-8 rotate-180"
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p className="text-4xl font-semibold">Resolved</p>
          <p className="pt-3 text-5xl font-black ">{resolvedCount}</p>
        </div>
      </article>
    </section>
  );
}

export default Banner;
