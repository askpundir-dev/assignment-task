import "./Experiences.css";
const Experiences = () => {
  return (
    <div
      className="paragraph-container overflow-y-auto md:w-[93%] lg:w-[95%] ml-auto 
      text-[#969696] pl-2 pr-3 lg:pr-5 flex-1 md:text-[0.7rem] lg:text-[0.9rem] 
      xl:text-[1rem] lg:leading-[21px]"
    >
      <p className="mb-4">
        I’ve been working on several frontend projects focused on clean UI,
        responsiveness, and real-time interactivity. Each project helped me grow
        as a developer — from understanding component architecture and state
        handling to creating smooth, user-friendly experiences.
      </p>

      {/* Portfolio Website */}
      <div className="mb-5">
        <a
          href="https://react-portfolio-ask.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 font-semibold group"
        >
          Portfolio Website
          <span className="link-hover-styles"> 🔗</span>
        </a>
        <p>
          A modern, responsive, and interactive personal portfolio built using{" "}
          <b>React</b> and <b>Tailwind CSS</b>. It features smooth animations,
          dark/light mode toggle, and a clean design showcasing projects and
          skills.
        </p>
        <p className="tech-stack">
          Tech Stack: React • Tailwind CSS • JavaScript • Vite • Netlify
        </p>
      </div>

      {/* Amazon Clone */}
      <div className="mb-5">
        <a
          href="https://askpundir-dev.github.io/amazon-frontend-clone/amazon.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 font-semibold group"
        >
          Amazon Frontend Clone
          <span className="link-hover-styles"> 🔗</span>
        </a>
        <p>
          A multi-page frontend clone of Amazon built using <b>HTML</b>,{" "}
          <b>CSS</b>, and <b>JavaScript</b>. Includes product listings,
          navigation bar, cart interface, and order tracking — all crafted for
          responsiveness.
        </p>
        <p className="tech-stack">Tech Stack: HTML • CSS • JavaScript</p>
      </div>

      {/* E-commerce Clone */}
      <div className="mb-5">
        <a
          href="http://react-proj-ecommerce-cl.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 font-semibold group"
        >
          E-commerce Clone (React)
          <span className="link-hover-styles"> 🔗</span>
        </a>
        <p>
          An interactive e-commerce frontend featuring dynamic cart management,
          order tracking, and clean UI — all powered by <b>React</b> and{" "}
          <b>Vite</b>. Focused on reusability and responsive layout design.
        </p>
        <p className="tech-stack">
          Tech Stack: React • JavaScript • CSS • Vite
        </p>
      </div>

      {/* Chat Bot */}
      <div className="mb-5">
        <a
          href="http://chat-bot-proj.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 font-semibold group"
        >
          Chat Bot <span className="link-hover-styles"> 🔗</span>
        </a>
        <p>
          A simple yet interactive chatbot built with <b>React.js</b> that
          delivers a smooth, conversational experience with a responsive design
          and dynamic responses.
        </p>
        <p className="tech-stack">
          Tech Stack: React • CSS • JavaScript • Vite
        </p>
      </div>

      <p className="mt-6">
        Each of these projects helped me explore different parts of frontend
        development — from pure JavaScript DOM handling to React-based
        component-driven architecture and styling with Tailwind CSS.
      </p>
    </div>
  );
};

export default Experiences;
