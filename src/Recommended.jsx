const Recommended = () => {
  return (
    <div
      className="paragraph-container overflow-y-auto
   md:w-[93%] lg:w-[95%] ml-auto text-[#969696] pl-2 pr-3 lg:pr-5 flex-1 md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] lg:leading-[21px]"
    >
      <p>
        I’m always looking for opportunities to build interactive and clean UIs.
        I enjoy experimenting with React, Tailwind, and modern frontend tools to
        bring ideas to life in a visually polished way.
      </p>

      <p>
        I like working on projects that teach me something new each time — from
        optimizing responsiveness to adding subtle animations that make the UI
        feel smooth and engaging. I’m always improving how I structure and
        organize my code for better scalability and readability.
      </p>

      <p>
        If you’d like to explore more of my work, you can check out my{" "}
        <a
          href="https://react-portfolio-ask.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          portfolio
        </a>{" "}
        or reach out! I’m always up for discussing creative ideas and
        experimenting with new technologies.
      </p>
    </div>
  );
};

export default Recommended;
