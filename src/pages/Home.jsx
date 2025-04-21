function Home() {
    return (
      <section className="py-16 bg-gray-100" id="home">
        <div className="container mx-auto px-4 text-center" data-aos="zoom-in">
          <h3 className="text-xl">Build Your</h3>
          <h1 className="text-4xl md:text-6xl font-bold">Dream Physique</h1>
          <h3 className="text-xl mt-2">
            <span className="text-blue-600">Bodybuilding</span>
          </h3>
          <p className="mt-4 max-w-2xl mx-auto">
            Unlock your best self with expert-led workouts, personalized nutrition, and holistic
            wellness—because fitness is more than a routine, it's a lifestyle.
            <br />
            It's Day one not One Day!!
          </p>
          <a href="/join" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Join Us
          </a>
        </div>
      </section>
    );
  }
  
  export default Home;