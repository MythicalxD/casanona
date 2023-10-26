const DeveloperPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">
        About <span className="text-teal-500">Abhijay Tiwari</span>
      </h1>
      <p>
        I am a passionate 1st year (2023 at the time of making this website)
        Computer Science student pursuing my BTech degree from Bhopal. My
        journey in the world of programming began with languages like Java and
        C++ and learning several tech stacks and working in domains like web
        dev, android dev, game dev and DBMS. Over time, I&apos;ve developed a deep
        interest in web development and have gained expertise in a variety of
        technologies, including Next.js, Tailwind CSS, TypeScript, Prisma,
        Strapi CMS, MySQL database, Shadcn UI, Material-UI (MUI), Swiper, etc.
      </p>
      <p>
        I believe in continuous learning and staying updated with the latest
        trends in the tech industry. My goal is to leverage my skills to create
        innovative and user-friendly web applications while exploring new
        technologies and contributing to the tech community.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Tech Stack</h2>
      <ul>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript (tsx)</li>
        <li>Prisma</li>
        <li>Strapi CMS</li>
        <li>MySQL database</li>
        <li>Shadcn UI</li>
        <li>Material-UI (MUI)</li>
        <li>Swiper</li>
        <li>Hot Toast</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Passion for Learning</h2>
      <p>
        Beyond my academic pursuits, I am passionate about learning new things,
        exploring emerging technologies, and collaborating with like-minded
        individuals. My journey in computer science has been driven by curiosity
        and a desire to create impactful solutions that improve people&apos;s lives.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Policy</h2>
      <p>
        Your privacy is important to me. I do not collect or store any personal
        information on this website. If you have any concerns or questions about
        your privacy while using this website, please don&apos;t hesitate to contact
        me.
      </p>
      <ul>
        <li className="mb-2">
          Email:{" "}
          <a href={`mailto:creators462023@gmail.com`}>
            creators462023@gmail.com
          </a>
        </li>
        {/* ... other contact details */}
      </ul>
    </div>
  );
};

export default DeveloperPage;
