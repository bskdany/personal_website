export const AboutSection = () => {
  return (
    <section className="mb-26 mt-30">
      <h1 className="text-4xl text-black font-bold mb-4">Daniel Byshkin</h1>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-700 text-lg mb-4">
          I love building stuff
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/bskdany" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/danielbyshkin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
