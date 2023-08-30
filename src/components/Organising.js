import React from "react";

const Organising = () => {
  return (
    <>
      <h3
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          display: "flex",
          alignItems: "center",
          background: "darkseagreen",
          justifyContent: "center",
        }}
        id="organizing" className="section-heading text-center mt-5 mb-5"
      >
        Organizing Committee
      </h3>
      <div className="elite-org">
        <div class="oc-card">
          <div class="oc-card-header">
            <div class="oc-avatar">
              <img
                src="https://icsimp2023.nitrkl.ac.in/static/media/dir.cb96f37f2b5df40c04a7.jpg"
                alt="user-image"
              />
            </div>
            <div class="oc-profile-name">
              <h1>Prof. K.Umamaheshwar Rao</h1>
            </div>
            <div class="oc-profile-role">Director, NIT Rourkela</div>
            <h3 className="oc-profile-cat">Patron</h3>
          </div>
        </div>

        <div class="oc-card">
          <div class="oc-card-header">
            <div class="oc-avatar">
              <img
                src="https://nitrkl.ac.in//docs/Faculty/Photo/1090904.png"
                alt="user-image"
              />
            </div>
            <div class="oc-profile-name">
              <h1>Prof. Kunal Pal</h1>
            </div>
            <div class="oc-profile-role">
              Head, Department of Biotechnology and Medical Engineering, NIT
              Rourkela
            </div>
            <h3 className="oc-profile-cat">Chairman</h3>
          </div>
        </div>

        <div class="oc-card">
          <div class="oc-card-header">
            <div class="oc-avatar">
              <img
                src="https://nitrkl.irins.org/assets/profile_images/62011.PNG"
                alt="user-image"
              />
            </div>
            <div class="oc-profile-name">
              <h1>Prof. Krishna Pramanik</h1>
            </div>
            <div class="oc-profile-role">
              Department of Biotechnology and Medical Engineering, NIT Rourkela
            </div>
            <h3 className="oc-profile-cat">Advisor</h3>
          </div>
        </div>
      </div>

      <div className="con-org">
        <div class="oc-card">
          <div class="oc-card-header">
            <div class="oc-avatar">
              <img
                src="https://nitrkl.ac.in//docs/Faculty/Photo/1110977.jpg"
                alt="user-image"
              />
            </div>
            <div class="oc-profile-name">
              <h1>Dr. Nandini Sarkar</h1>
            </div>
            <div class="oc-profile-role">
              Department of Biotechnology and Medical Engineering, NIT Rourkela
            </div>
            <h3 className="oc-profile-cat">Convener</h3>
          </div>
        </div>

        <div class="oc-card">
          <div class="oc-card-header">
            <div class="oc-avatar">
              <img
                src="https://nitrkl.ac.in//docs/Faculty/Photo/1141124.jpg"
                alt="user-image"
              />
            </div>
            <div class="oc-profile-name">
              <h1>Dr. Nivedita Patra</h1>
            </div>
            <div class="oc-profile-role">
              Department of Biotechnology and Medical Engineering, NIT Rourkela
            </div>
            <h3 className="oc-profile-cat">Convener</h3>
          </div>
        </div>
      </div>

      <div
        class=" text-center"
        style={{ display: 'flex', flexDirection : 'column', fontSize: "1.3rem"  , color: 'black' , justifyContent : 'center' , alignItems : 'center'}}
      >
        All Faculties of Department of Biotechnology and Medical Engineering,
        NIT Rourkela. <br /> Student Co-ordinators:{" "}
            <ul className="std-co">
                <li>Amit Mitra</li>
                <li>Debasmita Chakraborty</li>
                <li>Abhiraj Chakraborty</li>
                <li>Jayashree Nanda</li>
                <li>Nethra Venkatesh</li>
                <li>Srijita Chowdhury</li>
                <li>Anushka Ghosh</li>
            </ul>
        
      </div>
    </>
  );
};

export default Organising;
