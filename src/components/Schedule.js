import React from "react";
import Speaker from "./Speaker";

const Schedule = () => {

  const speakers = [{
    name: 'Prof H S Chawla',
    designation: 'Retired Professor',
    location: 'GBPUAT, Pantnagar, Uttarakhand.',
    specialisation : 'Plant Biotechnology, Genetics and Plant Breeding, IPRs',
    image: 'chief.jpg'
  },
  {
    name: 'Dr. Alok Kalra',
    designation: 'Ex-Director',
    location: 'CSIR-CIMAP',
    specialisation : 'Mycology, Microbiology and Molecular Biology',
    image: 'guest.jpg'
  },
  {
    name: 'Prof. Vikash Kumar Dubey',
    designation: 'Professor',
    location: 'IIT(BHU)',
    specialisation : 'Cell Death Pathways and Diseases; Protein Biochemistry; Protein Engineering, Biochemical Parasitology; Isolation and Purification of Commercially Important Enzymes.',
    image: 'k1.jpg'
  },
  {
    name: 'Prof. Chandan Goswami',
    designation: 'Professor',
    location: 'NISER Bhubaneshwar',
    specialisation : 'Cell-biology, Neurobiology, Biochemistry, Microscopy, TRP Ion channels, Cytoskeleton, Mitochondria, Vesicle Recycling, Pain, Chemotherapeutics, Drugs',
    image: 'k2.png'
  },
  {
    name: 'Dr. Mohammed Saleem',
    designation: 'Reader-F',
    location: 'NISER Bhubaneshwar',
    specialisation : 'Reconstitution of biologically relevant protein interaction at membrane-interface, Mechanisms of membrane deformation, Neurodegeneration, Host-pathogen interactions',
    image: 'k3.png'
  },
  {
    name: 'Dr. Shri Ram Yadav',
    designation: 'Associate Professor',
    location: 'IIT Roorkee',
    specialisation : 'Plant Developmental Biology; Functional genomics of plant root organogenesis; Transcriptional regulation of cell fate determination and tissue trans-differentiation; Epigenetic control of gene expression',
    image: 'k4.jpg'
  },
  {
    name: 'Dr. Gunjan Prakash',
    designation: 'Associate Professor',
    location: 'Dr. Gunjan Prakash',
    specialisation : 'Genetic manipulation of algal species for increasing the photosynthetic efficiency and development of robust algal strains by manipulation of stress responsive genes, Secondary metabolite production, Industrial Fermentation',
    image: 'k5.jpg'
  },
  {
    name: 'Dr. Akanksha Singh',
    designation: 'Scientist B',
    location: 'CSIR CIMAP',
    specialisation : 'Medicinal plant, genetics & genomics, Plant Microbe Interactions',
    image: 'k6.png'
  },
  {
    name: 'Dr. MVRK Sarma',
    designation: 'Senior Scientist',
    location: 'CSIR CFTRI',
    specialisation : 'Fermentation Technology, Process Design, Modelling and Optimization, Metabolic Engineering, Molecular Biology.',
    image: 'k7.jpg'
  },
  {
    name: 'Dr. Prakash Saudagar',
    designation: 'Associate Professor',
    location: 'NIT Warangal',
    specialisation : 'Protein Biochemistry, Molecular Approach to Infectious Diseases, Molecular & Biochemical Parasitology',
    image: 'k8.jpg'
  },
  {
    name: 'Dr. Sushant Singh',
    designation: 'Associate Professor',
    location: 'Amity University Raipur',
    specialisation : 'Nano Biotechnology, Biomaterials, Redox Active Biomaterials, Biopolymers',
    image: 'k9.jpg'
  },
  {
    name: 'Dr. Asim Bikas Das',
    designation: 'Associate Professor',
    location: 'NIT Warangal',
    specialisation : 'Network system biology; Cancer genomics',
    image: 'k10.jpg'
  },
  {
    name: 'Dr. Urmila Saxena',
    designation: 'Associate Professor',
    location: 'NIT Warangal',
    specialisation : 'Statistical Analysis of Biological Data for Biomarker Identification; Medical Biosensors; Nanobiotechnology',
    image: 'k11.jpg'
  },
  {
    name: 'Dr. Achlesh Daverey',
    designation: 'Associate Professor',
    location: 'Doon University',
    specialisation : 'Biological wastewater treatment, Biological nitrogen removal (Anammox Process) • Bioremediation, Phytoremediation/Constructed Wetlands • Waste valorization for value-added products (Biosurfactants, Biochar, Bioenergy) • Bioprocess Design, Optimization & Kinetics',
    image: 'k12.jpg'
  },
];

  return (
    <>
      <section
        id="schedule-section"
        className="schedule-section section active"
      >
        <div className="container">
          <h3 className="section-heading text-center mb-5">Speakers</h3>
          {/* Nav tabs */}
          <ul
            className="schedule-nav nav nav-pills nav-fill"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item me-2" role="presentation">
              <a
                className="nav-link active"
                id="tab-1"
                data-bs-toggle="tab"
                href="#tab-1-content"
                role="tab"
                aria-controls="tab-1-content"
                aria-selected="true"
              >
                <span className="heading">Chief Guest &</span>
                <span className="heading">Guest of Honour</span>
              </a>
            </li>
            <li className="nav-item me-2" role="presentation">
              <a
                className="nav-link"
                id="tab-2"
                data-bs-toggle="tab"
                href="#tab-2-content"
                role="tab"
                aria-controls="tab-2-content"
                aria-selected="false"
                tabIndex={-1}
              >
                <span className="heading">Keynote</span>
                <span className="heading">Speakers</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="tab-3"
                data-bs-toggle="tab"
                href="#tab-3-content"
                role="tab"
                aria-controls="tab-3-content"
                aria-selected="false"
                tabIndex={-1}
              >
                <span className="heading">Invited</span>
                <span className="heading">Speakers</span>
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="schedule-tab-content tab-content">
            <div
              className="tab-pane active"
              id="tab-1-content"
              role="tabpanel"
              aria-labelledby="tab-1"
            >
              <div
                className="flex-md-row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >

              <Speaker name = {speakers[0].name} designation ={speakers[0].designation} location = {speakers[0].location} image = {speakers[0].image} specialisation = {speakers[0].specialisation}   />
              <Speaker name = {speakers[1].name} designation ={speakers[1].designation} location = {speakers[1].location} image = {speakers[1].image} specialisation = {speakers[1].specialisation}   />
             
              </div>
            </div>

            {/*//tab-1-content*/}
            <div
              className="tab-pane no-timeline"
              id="tab-2-content"
              role="tabpanel"
              aria-labelledby="tab-2"
            >
              <div
                className="flex-lg-row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              > 

<Speaker name = {speakers[2].name} designation ={speakers[2].designation} location = {speakers[2].location} image = {speakers[2].image} specialisation = {speakers[2].specialisation}   />
<Speaker name = {speakers[3].name} designation ={speakers[3].designation} location = {speakers[3].location} image = {speakers[3].image} specialisation = {speakers[3].specialisation}   />
<Speaker name = {speakers[4].name} designation ={speakers[4].designation} location = {speakers[4].location} image = {speakers[4].image} specialisation = {speakers[4].specialisation}   />

                </div>

                <div
                className="flex-lg-row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              > 

<Speaker name = {speakers[5].name} designation ={speakers[5].designation} location = {speakers[5].location} image = {speakers[5].image} specialisation = {speakers[5].specialisation}   />
<Speaker name = {speakers[6].name} designation ={speakers[6].designation} location = {speakers[6].location} image = {speakers[6].image} specialisation = {speakers[6].specialisation}   />
<Speaker name = {speakers[7].name} designation ={speakers[7].designation} location = {speakers[7].location} image = {speakers[7].image} specialisation = {speakers[7].specialisation}   />
                </div>

                <div
                className="flex-lg-row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >

  <Speaker name = {speakers[8].name} designation ={speakers[8].designation} location = {speakers[8].location} image = {speakers[8].image} specialisation = {speakers[8].specialisation}   />

                </div>
              
            </div>
            {/*//tab-2-content*/}
            <div
              className="tab-pane no-timeline"
              id="tab-3-content"
              role="tabpanel"
              aria-labelledby="tab-3"
            >
            <div
                className="flex-lg-row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              > 
              <Speaker name = {speakers[9].name} designation ={speakers[9].designation} location = {speakers[9].location} image = {speakers[9].image} specialisation = {speakers[9].specialisation}   />
              <Speaker name = {speakers[10].name} designation ={speakers[10].designation} location = {speakers[10].location} image = {speakers[10].image} specialisation = {speakers[10].specialisation}   />
              <Speaker name = {speakers[11].name} designation ={speakers[11].designation} location = {speakers[11].location} image = {speakers[11].image} specialisation = {speakers[11].specialisation}   />
0
                </div>

                <div
                className="flex-lg-row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              > 



<Speaker name = {speakers[12].name} designation ={speakers[12].designation} location = {speakers[12].location} image = {speakers[12].image} specialisation = {speakers[12].specialisation}   />
<Speaker name = {speakers[13].name} designation ={speakers[13].designation} location = {speakers[13].location} image = {speakers[13].image} specialisation = {speakers[13].specialisation}   />

                </div>
            </div>
            {/*//tab-3-content*/}
          </div>
          {/*//schedule-tab-content*/}
          <div className="schedule-cta text-center mx-auto">
            <a
              href="/assets/brochure.pdf"
              download="NBC 2023"
              className="btn btn-primary btn-lg me-md-2 d-block d-md-inline-block mb-3 mb-md-0"
              target="_blank"
            >
              Download Brochure
            </a>
          </div>
        </div>
        {/*//container*/}
      </section>
    </>
  );
};

export default Schedule;
