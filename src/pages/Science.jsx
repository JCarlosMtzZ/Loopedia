import React from "react"
import '../css/Science.css'
import NavBar from "../Components/NavBar.jsx"
import Macrophages_covid19 from '../img/Macrophages_covid19.jpg'

function Science(){
    return(
        <>
        <NavBar/>
        <div className='science-background'>
             <div classname='science'>
                <div style={{
                    backgroundColor: 'green',
                    }}/>
                    <div className="Title">
                        <h1>Macrophages against Covid-19</h1>
                        <h2>From: Peiris, T., Prasetya, A., Zhang, B., Mao, K., Chen, C., Chen, E., … Wells, C.</h2>
                        <h2>2020-08-30</h2>
                    </div>
                    <img src={Macrophages_covid19} className="Poster"></img>/
                    <div className="Contenido">
                        <p>The SP1 protein on SARS-CoV-2 binds to the body’s ACE2 receptor to gain entry into human cells, causing the infectious diseaseCOVID-19. Delivering soluble human ACE2 (sACE2) as decoy receptors to treat COVID-19 is being tested in Phase II clinical trials after demonstrating a dose-dependent reduction in SARS-CoV-2 growth in vitro and safely in humans. However, due to its short serum half-life of 2-10hrs, continuous administration in a hospital setting is required. Engineered macrophages have a half-life around 3 days. Thereforeacellular therapy using macrophages that have been genetically engineered to produce sACE2would allowdeliveryof the drug over an extended period with a single administration, while contributing to an effective immune response. It is predicted that the sACE2 would act as a decoy receptor and prevent SP1 binding to host cells, resulting in a reduction in infectivity of SARS-CoV-2. This study aims to develop this cellular therapy as proof of concept treatment for COVID-19. A T2A-sACE2-HAtag-P2A-tdTomplasmid construct would be inserted into the GAPDH geneof mammalian induced pluripotent stem cells (iPSCs) via the GAPTrap system. The iPSCs would then be terminally differentiated into macrophages that secrete a recombinant protein. The presence of the sACE2 would be confirmed via an ELISA assay using anti-ACE 2 antibodies conjugated to a fluorophore. The resulting protein’s ability to form ACE2-SP1 complexes will be assessed by immunoprecipitation and Western blot analyses and compared to that of native ACE2. The efficacy of decoy ACE2 receptors is expected to reduce the number of infected alveolar cells. In vivo, the secreted ACE2 is expected to be catalytically active and convert vasoconstrictor angiotensin II to vasodilators angiotensin 1-7 to alleviate acute respiratory distress and cardiac events.</p>
                        </div>
                        
            </div>
        </div>
        </>
    )
}

export default Science

