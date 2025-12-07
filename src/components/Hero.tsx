const Hero = () => {
  return (
    <section
      className="
        w-full pt-32 pb-20 
        bg-gradient-to-br 
        from-primary-light/20 via-background to-secondary-light/30
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-text leading-tight">
            Experience Shopping <br />
            <span
              className="
                bg-gradient-to-r from-primary to-secondary 
                bg-clip-text text-transparent
              "
            >
              Like Never Before.
            </span>
          </h2>

          <p className="text-lg text-text-light max-w-lg">
            OmegaStore brings premium products, lightning-fast delivery, and
            seamless checkout—powered by a scalable microservice architecture.
          </p>

          <div className="flex gap-4">
            <button
              className="
                px-6 py-3 
                bg-primary text-white 
                rounded-xl shadow-lg 
                hover:bg-primary-dark 
                transition
              "
            >
              Shop Now
            </button>

            <button
              className="
                px-6 py-3 
                border border-text-light 
                rounded-xl shadow 
                hover:bg-card hover:shadow-md 
                transition
              "
            >
              Explore Deals
            </button>
          </div>
        </div>

        {/* Right Product Card */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div
            className="
              w-72 h-96 bg-card rounded-3xl shadow-2xl p-6 
              border border-card/50 
              hover:scale-105 transform transition duration-300 
              relative overflow-hidden
            "
          >
            {/* Glow highlights */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-light/40 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-light/40 blur-3xl rounded-full"></div>

            {/* Image placeholder */}
            <div className="w-full h-52 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-text-light">Product Image</span>
            </div>

            <h3 className="text-xl font-semibold text-text">
              Featured Product
            </h3>
            <p className="text-text-light mt-1">Starting at $199</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
