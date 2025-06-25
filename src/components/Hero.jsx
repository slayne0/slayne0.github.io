function Component() {
  return (
    <div className="hero flex flex-col items-center text-center">
      <img src="src/assets/profil.png" alt="" />
      <h2 className=" text-[40px] mb-4">
        Nice to meet you! I’m <span>Adam Keyes.</span>
      </h2>
      <p className=" text-[16px]">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <p>
        {" "}
        <span className=" pb-2 ...">CONTACT ME</span>{" "}
      </p>
    </div>
  );
}

export default Component;
