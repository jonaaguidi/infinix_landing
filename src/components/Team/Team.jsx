import "./Team.css"




const Team = () => {

  const teamData = [
    {
      name: "Nombre 1",
      position: "Cargo 1",
      social: "Redes 1",
      image: "../../../public/imgs/Team/ale.png",
    },
    {
      name: "Nombre 2",
      position: "Cargo 2",
      social: "Redes 2",
      image: "../../../public/imgs/Team/aye.png",
    },
    {
      name: "Nombre 3",
      position: "Cargo 3",
      social: "Redes 3",
      image: "../../../public/imgs/Team/fer.png",
    },
    {
      name: "Nombre 4",
      position: "Cargo 4",
      social: "Redes 4",
      image: "../../../public/imgs/Team/hernan.png",
    },
    {
      name: "Nombre 5",
      position: "Cargo 5",
      social: "Redes 5",
      image: "../../../public/imgs/Team/Ivan.png",
    },
    {
      name: "Nombre 6",
      position: "Cargo 6",
      social: "Redes 6",
      image: "../../../public/imgs/Team/jero.png",
    },
    {
      name: "Nombre 7",
      position: "Cargo 7",
      social: "Redes 7",
      image: "../../../public/imgs/Team/Lisiane.png",
    },
    {
      name: "Nombre 8",
      position: "Cargo 8",
      social: "Redes 8",
      image: "../../../public/imgs/Team/luis.png",
    },
    {
      name: "Nombre 9",
      position: "Cargo 9",
      social: "Redes 9",
      image: "../../../public/imgs/Team/marce.png",
    },
    {
      name: "Nombre 10",
      position: "Cargo 10",
      social: "Redes 10",
      image: "../../../public/imgs/Team/martin.png",
    },
    {
      name: "Nombre 11",
      position: "Cargo 11",
      social: "Redes 11",
      image: "../../../public/imgs/Team/Tommy.png",
    },
    {
      name: "Nombre 12",
      position: "Cargo 12",
      social: "Redes 12",
      image: "../../../public/imgs/Team/vale.png",
    },
    {
      name: "Nombre 13",
      position: "Cargo 13",
      social: "Redes 13",
      image: "../../../public/imgs/Team/Vittorio.png",
    },
  ];
  
  
  return (
    <div className="container-xl">
      {/* Title */}
      <section className="content-space-0 content-space-b-lg-1 pt-8">
        <div className="container content-space-b-1">
          <div className="row">
            <div className="col-lg-12">
              <h1 id="team_title" className="title-bold-1 infinix-title-black text-center mb-lg-5 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".2s"> Our <span className="selected-whitebg">Team</span></h1>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel */}
      <section className="team_card">
        <img src="../../../public/imgs/Team/jero.png" alt="Luis" />
        <div>
          <h3>Luis Paez</h3>
          <p>Business Development</p>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <img className="linkedin" src="../../../public/imgs/Icons/icons8-linkedin.svg"/>
          </a>
        </div>
      </section>
      

    </div>
  );
};

export default Team