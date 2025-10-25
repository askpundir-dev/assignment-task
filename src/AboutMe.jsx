import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div
      className="paragraph-container overflow-y-auto
   md:w-[93%] lg:w-[95%] ml-auto text-[#969696] pl-2 pr-3 lg:pr-5 flex-1 md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] lg:leading-[21px]"
    >
      <p>
        Hey there! I’m Abhishek — a frontend developer passionate about crafting
        clean, responsive, and visually engaging web interfaces. I love turning
        creative ideas into smooth user experiences using technologies like
        React, Tailwind CSS, and JavaScript.
      </p>
      <p>
        I’m someone who enjoys exploring the design side of development as much
        as the logic behind it. Whether it’s fine-tuning animations, structuring
        components, or optimizing performance, I’m always looking for ways to
        make every interaction feel just right.
      </p>
      <p>
        Outside of coding, I like reading about UI/UX trends, experimenting with
        new frameworks, and occasionally diving into backend concepts to become
        a more complete full-stack developer. I believe growth comes from
        curiosity — and I’m always curious to learn more.
      </p>
    </div>
  );
};

export default AboutMe;
