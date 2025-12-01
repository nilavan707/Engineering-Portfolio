import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ExternalLink, Github, Folder, ArrowLeft, Layers, RotateCw, GitMerge, FileText, Sliders, TrendingDown, Shield, Scale, Users, AlertTriangle, ChevronLeft, ChevronRight, BookOpen, Activity, Wind, Zap, Thermometer, Layout } from 'lucide-react';
import { PROJECTS, BIO, SKILLS, REFERRALS } from '../constants';
import { ProjectItem, ProjectCategory } from '../types';

const ALL_TAGS = [
  "Thermal Analysis",
  "Thermal Test",
  "Machine Learning",
  "Blue Origin",
  "University of Washington",
  "University of Maryland",
  "Computational Fluid Dynamics",
  "Personal Projects"
];

const CATEGORY_COLORS: Record<string, string> = {
  'UW': '#b172e0',         // Purple
  'Blue Origin': '#386cfc', // Blue
  'UMD': '#e84361',        // Red
  'USDA': '#44a12a',       // Green
  'Personal': '#e86f43',   // Orange
  'Other': '#e5e7eb'       // Gray
};

const IN_PROGRESS_IDS = ['uw2', 'uw3', 'pers1'];

// --- TEMPLATE COMPONENTS ---

const CryoBoilingDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const IMAGES = ['assets/onemm_photo_1.png', 'assets/onemm_photo_2.png', 'assets/onemm_photo_3.png'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length), 30000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="w-full font-sans text-slate-800">
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-purple-700 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Optimizing surfaces to enhance cryogenic boiling for space applications</h1>
            <p className="text-purple-100 max-w-2xl text-lg">Researching and testing micro-finned surface geometries to improve heat transfer efficiency in cryogenic propellant systems.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Machining', 'LabView', 'Cryogenic Systems', 'Thermal Analysis'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-purple-700">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Role: Research Engineer • Lab: UW Thermal Lab</p>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-2 mb-6">Project Overview</h3>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Premise</h4>
            <p className="mb-4">I conducted an experimental study on <strong>nucleate pool boiling in liquid nitrogen</strong> to evaluate how surface geometric modifications influence heat transfer in cryogenic propellants. Using a <strong>1 mm grooved aluminum cylinder</strong> with embedded thermocouples and a cartridge heater, I developed a radial thermal model to estimate surface heat flux and boiling behavior under steady-state conditions.</p>
            <p className="mb-4">This project is a continuation of work done by Professor Jim Hermanson, Andrew Jacob and Shuba Murthy at the University of Washington in partnership with <strong>Blue Origin</strong>. Our findings will enable more efficient cryogenic cooling of critical components for both terrestrial and space applications. It will also allow more efficient boiling of other cryogenic liquids, namely liquid oxygen, which can be used to supply breathable air to space missions. Both applications will result in significant weight and power savings.</p>
            
            <h4 className="font-bold text-slate-900 text-lg mb-2">Challenges</h4>
            <ul className="list-disc pl-4 space-y-1 mb-4">
              <li><strong>1 mm fin configuration</strong> requires precise and highly accurate lathe work</li>
              <li>To ensure consistency with previous experiments, all data and experimental methods had to be <strong>cross-checked with previous data collection methods</strong></li>
            </ul>

            <div className="my-10 relative bg-slate-100 rounded-lg overflow-hidden shadow-sm border border-slate-200 aspect-video group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                <img src={IMAGES[currentSlide]} alt="Visual" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="absolute z-0 text-sm font-medium">Image Placeholder: {IMAGES[currentSlide]}</span>
              </div>
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronLeft size={20} /></button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronRight size={20} /></button>
            </div>

            <h4 className="font-bold text-slate-900 text-lg mb-2">Action</h4>
            <p className="mb-2">
              Using a lathe and 3-axis mill, I <strong>designed and machined an aluminum test cylinder</strong> with 1mm grooves and precise thermocouple placement.
            </p>
            <p className="mb-2">
              I created a <strong>custom VI in LabVIEW</strong> and calibrated cryogenic thermocouples with redundancies for accurate data collection. I performed multiple tests with LN2, and implemented a <strong>MATLAB-based thermal resistance model</strong> to compute convective heat transfer coefficients using Fourier conduction through the cylinder wall based on the raw temperature data. I collected inner/outer wall temperature data during controlled heating to map the <strong>nucleate boiling curve</strong>, comparing fin width (1 mm, 2 mm, 3 mm) to evaluate their impact on bubble formation.
            </p>

            <h4 className="font-bold text-slate-900 text-lg mb-2">Results</h4>
            <p className="mb-2">Successfully demonstrated that <strong>micro-scale surface features can measurably alter boiling behavior</strong> and that an optimum fin width exists, proving evidence of an <strong>ideal surface geometry for maximum heat transfer efficiency</strong>.</p>
            <p>Our work will be presented at the <strong>American Society for Gravitational and Space Research</strong> this December 2025.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LADDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const IMAGES = ['assets/LAD_1.png', 'assets/LAD_2.png', 'assets/LAD_3.png'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length), 30000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="w-full font-sans text-slate-800">
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-purple-700 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Designing a Liquid Acquisition Device for improved cryogenic propellant transfer</h1>
            <p className="text-purple-100 max-w-2xl text-lg">Developing and testing LAD prototypes to ensure reliable fuel delivery in microgravity environments.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Machining', 'LabView', 'Cryogenic Systems', 'Thermal Test'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-purple-700">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Role: Research Assistant (In Progress) • Partners: University of Washington & Blue Origin</p>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-2 mb-6">Project Overview</h3>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Context</h4>
            <p className="mb-4">This ongoing project aims to improve the reliability of Liquid Acquisition Devices (LADs), hardware used to move cryogenic propellants—such as liquid oxygen, hydrogen, and methane—inside spacecraft under microgravity. LADs must deliver vapor-free liquid to engines and propulsion systems, but heat leaks and pressure differences can cause vapor bubbles to form inside the device, degrading performance.</p>
            <p className="mb-4">While LADs have been used with storable propellants, their behavior with cryogenic fluids is poorly understood, creating uncertainty in propulsion system design for long-duration or in-space refueling missions.</p>

            <div className="my-10 relative bg-slate-100 rounded-lg overflow-hidden shadow-sm border border-slate-200 aspect-video group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                <img src={IMAGES[currentSlide]} alt="Visual" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="absolute z-0 text-sm font-medium">Image Placeholder: {IMAGES[currentSlide]}</span>
              </div>
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronLeft size={20} /></button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronRight size={20} /></button>
            </div>

            <h4 className="font-bold text-slate-900 text-lg mb-2">Project Goals</h4>
            <ul className="list-disc pl-4 space-y-1 mb-4">
              <li>Characterize how heat leaks generate vapor bubbles inside a cryogenic LAD.</li>
              <li>Study how bubble motion, collapse, and re-absorption affect liquid delivery.</li>
              <li>Evaluate how wall surface texture influences bubble formation and rewetting.</li>
              <li>Identify pressure and operating limits that prevent vapor intrusion through the LAD screen.</li>
              <li>Use insights to guide the design of next-generation cryogenic LADs for Blue Origin.</li>
            </ul>
            
            <h4 className="font-bold text-slate-900 text-lg mb-2">Approach</h4>
            <p className="mb-4">I support the development of a cryogenic test platform that enables high-speed visualization, thermal modeling, and controlled testing with liquid nitrogen as an oxygen analog. The effort includes designing test articles with various surface finishes and integrating sensors, heating elements, and pressure control hardware. Bubble dynamics, heat transfer behavior, and LAD flow stability will feed into a thermal resistance model and inform future LAD surface geometries.</p>
            
            <h4 className="font-bold text-slate-900 text-lg mb-2">Potential Impact</h4>
            <p className="mb-4">This work will help reduce risks in cryogenic propulsion, in-space refueling, and long-duration propellant storage. Improved LAD performance can directly benefit NASA and commercial missions, including Blue Origin’s launch vehicles and lunar systems. The project also supports the advancement of LAD technology toward higher Technology Readiness Levels (TRLs), with future opportunities for microgravity testing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LaplacianDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const IMAGES = ['assets/cardio_photo_1.png', 'assets/cardio_photo_2.png', 'assets/cardio_photo_3.png'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length), 30000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="w-full font-sans text-slate-800">
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-purple-700 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Laplacian Dynamic Smoothing Algorithm for improved CFD runtime and fidelity</h1>
            <p className="text-purple-100 max-w-2xl text-lg">Developing algorithms to optimize mesh quality for computational fluid dynamics simulations.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['MATLAB', 'Bash', 'Linux', 'CFD', 'Machine Learning'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-purple-700">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Role: Researcher • Organization: UW Medicine</p>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-2 mb-6">Project Overview</h3>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Premise</h4>
            <p className="mb-4">CFD simulations often suffer from poor mesh quality in complex geometries. This project applies Laplacian smoothing techniques dynamically.</p>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Challenges</h4>
            <ul className="list-disc pl-4 space-y-1 mb-4">
              <li>Computational cost of <strong>remeshing</strong>.</li>
              <li>Maintaining <strong>geometric fidelity</strong>.</li>
            </ul>
            <div className="my-10 relative bg-slate-100 rounded-lg overflow-hidden shadow-sm border border-slate-200 aspect-video group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                <img src={IMAGES[currentSlide]} alt="Visual" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="absolute z-0 text-sm font-medium">Image Placeholder: {IMAGES[currentSlide]}</span>
              </div>
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronLeft size={20} /></button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronRight size={20} /></button>
            </div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Action</h4>
            <p className="mb-2">Developed scripts in <strong>MATLAB</strong> and <strong>Bash</strong> to automate the smoothing process.</p>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Results</h4>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RocketNozzleDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const IMAGES = ['assets/SEDS_photo1.png', 'assets/SEDS_photo2.png', 'assets/SEDS_photo3.png'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length), 30000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="w-full font-sans text-slate-800">
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-red-600 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Rocket Nozzle Thermal Analysis</h1>
            <p className="text-red-100 max-w-2xl text-lg">Simulating thermal loads and cooling strategies for bipropellant rocket nozzles.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['MATLAB', 'Thermal Analysis', 'Propulsion'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-red-600">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Role: Student Engineer • Organization: SEDS</p>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-2 mb-6">Project Overview</h3>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Premise</h4>
            <p className="mb-4">As part of the SEDS propulsion team, I contributed to the design and testing of a 350 lbf bipropellant liquid rocket engine, with a focus on the thermal performance of the combustion chamber and nozzle during hot-fire operations.</p>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Challenges</h4>
            <p className="mb-4">A particular challenge was calculating the convective heat transfer coefficient of the film cooling layer. To do so, I referenced literature such as Sutton's Rocket Propulsion Elements and Huzel & Huang to determine appropriate formulae that used the Prandtl and Nusselt for calculations. I tried multiple methods and came to HTC that closely matched Rocket Propulsion Analysis (RPA)'s calculations.</p>
            <div className="my-10 relative bg-slate-100 rounded-lg overflow-hidden shadow-sm border border-slate-200 aspect-video group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                <img src={IMAGES[currentSlide]} alt="Visual" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="absolute z-0 text-sm font-medium">Image Placeholder: {IMAGES[currentSlide]}</span>
              </div>
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronLeft size={20} /></button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronRight size={20} /></button>
            </div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Action</h4>
            <p className="mb-2">I performed a <strong>detailed thermal analysis</strong> to estimate combustion temperature, wall heat flux, and material temperature gradients throughout the engine cycle.</p>
            <p className="mb-2">I created a <strong>2-D thermal resistance network in MATLAB</strong> to model combustion temps via NASA CEA data, convective heat transfer, film layer cooling, and conduction through the ablative and metal outer wall. I programmed a script to <strong>determine the convective heat transfer coefficient</strong> and account for carbon sediment buildup due to the ablative.</p>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Results</h4>
            <p>By comparing a non-ablative case to a phenolic resin ablative case, we were able to verify that our system would survive hot fire with the use of a phenolic resin ablative.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CropYieldDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const IMAGES = ['assets/usda_photo_1.png', 'assets/usda_photo_2.png', 'assets/usda_photo_3.png'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length), 30000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="w-full font-sans text-slate-800">
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-green-600 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Machine Learning Pipeline to Predict Crop Yield based on Soil Nitrogen Levels</h1>
            <p className="text-green-100 max-w-2xl text-lg">A data-driven approach to precision agriculture using neural networks to optimize fertilizer usage.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Python', 'Pytorch', 'Sci-Kit Learn', 'Machine Learning'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-green-600">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Role: ML Intern • Organization: USDA</p>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-2 mb-6">Project Overview</h3>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Premise</h4>
            <p className="mb-4">Developed a <strong>neural network regression model using PyTorch</strong> to predict corn and soybean yields based on soil nitrogen concentrations and weather data, enabling data-driven fertilizer application recommendations.</p>
            
            <h4 className="font-bold text-slate-900 text-lg mb-2">Challenges</h4>
            <p className="mb-4">The primary challenge was handling unstructured data. Agronomic data existed in <strong>200+ PDF farm reports</strong>, requiring significant cleaning and standardization to create a unified database for training.</p>
            
            <div className="my-10 relative bg-slate-100 rounded-lg overflow-hidden shadow-sm border border-slate-200 aspect-video group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                <img src={IMAGES[currentSlide]} alt="Visual" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="absolute z-0 text-sm font-medium">Image Placeholder: {IMAGES[currentSlide]}</span>
              </div>
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronLeft size={20} /></button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronRight size={20} /></button>
            </div>
            
            <h4 className="font-bold text-slate-900 text-lg mb-2">Action</h4>
            <p className="mb-2">I engineered an <strong>automated data pipeline using Python and Pandas</strong> to extract, clean, and standardize this data, reducing data entry time by <strong>85%</strong>.</p>
            <p className="mb-2">I developed the regression model using <strong>PyTorch</strong>, and created <strong>interactive data visualizations using Matplotlib</strong> to communicate nitrogen-yield response curves and cost-benefit analyses to USDA Agricultural Research scientists.</p>
            
            <h4 className="font-bold text-slate-900 text-lg mb-2">Results</h4>
            <p className="mb-2">The model achieved an <strong>R² = 0.72 across 500+ Nebraska farm plots</strong>.</p>
            <p>The solution was incorporated into a production-ready <strong>decision support system (DSS)</strong> for precision agriculture techniques.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AfibDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const IMAGES = ['assets/af_project_photo1.png', 'assets/af_project_photo2.png', 'assets/af_project_photo3.png'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length), 30000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="w-full font-sans text-slate-800">
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-orange-600 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Atrial Fibrillation Prediction from Wearable ECG Data</h1>
            <p className="text-orange-100 max-w-2xl text-lg">Developing ML models to detect early signs of Afib using consumer-grade wearable sensors.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Machine Learning', 'Python', 'Healthcare'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-orange-600">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Role: Independent Developer • Category: Personal Project</p>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-2 mb-6">Project Overview</h3>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Premise</h4>
            <p className="mb-4">The goal of this project is to familiarize with industry-standard machine learning pipelines, including data preparation and validation, machine learning models, fine-tuning, and interpretation of results.</p>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Challenges</h4>
            <p className="mb-4">I'll use two PhysioNet databases containing ECG data specifically collected from patients with AF and compare different machine learning models and strategies.</p>
            <p className="mb-4 italic">I'm still working on it, check back later for updates!</p>
            <div className="my-10 relative bg-slate-100 rounded-lg overflow-hidden shadow-sm border border-slate-200 aspect-video group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                <img src={IMAGES[currentSlide]} alt="Visual" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="absolute z-0 text-sm font-medium">Image Placeholder: {IMAGES[currentSlide]}</span>
              </div>
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronLeft size={20} /></button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LunarDatabaseDetail: React.FC = () => {
    return (
      <div className="w-full font-sans text-slate-800">
        
        {/* Main Container */}
        <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
          
          {/* Header Section */}
          <div className="bg-[#386cfc] p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Lunar Thermal Properties Database
              </h1>
              <p className="text-blue-100 max-w-2xl text-lg">
                Created a centralized, validated 'one stop shop' database for thermal properties, eliminating data discrepancies and establishing a single source of truth for the entire business unit.
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Python', 'Pandas', 'Blue Origin'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-[#386cfc]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
  
          {/* Project Info Bar */}
          <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
            <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
              Role: Thermal Engineer • Organization: Blue Origin
            </p>
          </div>
  
          {/* Content Body */}
          <div className="p-6 md:p-8 space-y-8">
            
            {/* Challenge & Action Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  The Challenge
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Blue Origin lacked a unified system for thermal properties. Engineers consulted disparate sources (Thermal Desktop files, internal Excel sheets, NASA lists), leading to duplicate properties with conflicting values.
                </p>
                <p className="text-slate-600 leading-relaxed mt-2">
                  When new properties were sourced, there was no communication across teams and no standardized validation process, resulting in model discrepancies and reliability risks.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  The Outcome
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  I created a centralized <strong>"one stop shop" database</strong> that consolidated over 2000 property sets.
                </p>
                <p className="text-slate-600 leading-relaxed mt-2">
                  The database was adopted across the entire business unit, becoming the mandatory basis for all future thermal models. This eliminated data mix-ups and significantly increased the reliability and accuracy of our thermal analysis.
                </p>
              </div>
            </div>
  
            <hr className="border-slate-100" />
  
            {/* Technical Deep Dive */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Technical Implementation
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#386cfc] transition-colors">
                  <div className="flex items-start mb-3">
                    <FileText className="w-5 h-5 text-[#386cfc] mt-1 mr-3" />
                    <div>
                      <h4 className="font-bold text-slate-800">Automated Data Aggregation</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Programmed a Python script using Pandas to parse disparate Thermal Desktop and Excel files. It scraped over 2000 sets of numerical data, automatically scrubbing duplicates and merging entries into a unified structure.
                      </p>
                    </div>
                  </div>
                </div>
  
                {/* Card 2 */}
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#386cfc] transition-colors">
                  <div className="flex items-start mb-3">
                    <Activity className="w-5 h-5 text-[#386cfc] mt-1 mr-3" />
                    <div>
                      <h4 className="font-bold text-slate-800">Data Gap Interpolation</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Addressed incomplete data sets (critical for cryogenic modeling) by implementing a linear regression algorithm within the script to interpolate property values between known temperature points, flagging derived data for transparency.
                      </p>
                    </div>
                  </div>
                </div>
  
                {/* Card 3 */}
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#386cfc] transition-colors">
                  <div className="flex items-start mb-3">
                    <GitMerge className="w-5 h-5 text-[#386cfc] mt-1 mr-3" />
                    <div>
                      <h4 className="font-bold text-slate-800">Robust Version Control</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Packaged the generated database files and uploaded them to Windchill, establishing a strict version control system that eliminated the risk of engineers using outdated or unverified property files.
                      </p>
                    </div>
                  </div>
                </div>
  
                {/* Card 4 */}
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#386cfc] transition-colors">
                  <div className="flex items-start mb-3">
                    <Users className="w-5 h-5 text-[#386cfc] mt-1 mr-3" />
                    <div>
                      <h4 className="font-bold text-slate-800">Process Governance</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        To resolve the "liaison bottleneck," I established a formal Change Control Board of senior engineers and a standardized request sheet. This democratized the update process and shifted validation responsibility to subject matter experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Validation Section */}
            <div className="bg-[#E6F0FF] border border-[#CCE0FF] rounded-lg p-6">
              <h4 className="font-bold text-[#0044CC] mb-2">System Validation</h4>
              <p className="text-[#0055EE] text-sm leading-relaxed">
                The script outputted identical Excel and Thermal Desktop files to ensure consistency across analysis tools. Clear source citations were embedded for every property, allowing engineers to independently cross-check and verify data against original NASA or internal test reports.
              </p>
            </div>
  
          </div>
        </div>
      </div>
    );
};

// --- END TEMPLATES ---

const LunarLanderDetail: React.FC = () => {
  return (
    <div className="w-full font-sans text-slate-800">
      
      {/* Main Container */}
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header Section */}
        <div className="bg-[#3366FF] p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Surface Access System Thermal Model for Crewed MK2 Lunar Lander
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg">
              Developed a high-fidelity, validated Thermal Desktop Model in under a week to accommodate critical design pivots on the crewed MK2 Lunar Lander for the NASA Artemis V mission.
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Thermal Desktop', 'AutoCAD', 'SINDA/FLUINT', 'Orbital Mechanics', 'Nodalization'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-[#3366FF]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Info Bar (Moved from Footer) */}
        <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
            Project Duration: 1 Week • Role: Lead Thermal Modeler
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Challenge & Action Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                The Challenge
              </h3>
              <p className="text-slate-600 leading-relaxed">
                One week prior to a critical presentation, the partner engineering firm (Honeybee Robotics) pivoted the design from a staircase to an elevator surface access system. 
              </p>
              <p className="text-slate-600 leading-relaxed mt-2">
                The existing thermal data (heat leaks, optical coatings, min/max temps) was rendered obsolete. I had to <strong>build a new validated model, integrate it into the full system</strong>, and generate updated results before the deadline.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                The Outcome
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Completed the fully validated model in <strong>under one week</strong>. The team successfully reran the system analysis in time for the presentation. 
              </p>
              <p className="text-slate-600 leading-relaxed mt-2">
                This model became the foundation for all future thermal trade studies on the access system, ensuring subsequent design iterations were built on accurate, validated data.
              </p>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Technical Deep Dive */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Technical Implementation
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#6666FF] transition-colors">
                <div className="mb-3">
                  <div>
                    <h4 className="font-bold text-slate-800">Optimized Nodalization</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Maintained a strict node count of &lt;500 to preserve runtime speed without sacrificing fidelity on critical components. Reconstructed CAD geometry using polygonal shapes to allow for merged nodes, ensuring reliable gradients and cleaner data than edge-to-edge contactors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#6666FF] transition-colors">
                <div className="mb-3">
                  <div>
                    <h4 className="font-bold text-slate-800">Kinematics & Articulation</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Implemented articulators and logic symbols (<code>configuration_state</code>) to cycle between Stowed, Partially Stowed, and Deployed states. Utilized exact numerical angles from CAD rather than visual approximation to eliminate model discrepancies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#6666FF] transition-colors">
                <div className="mb-3">
                  <div>
                    <h4 className="font-bold text-slate-800">System Integration Strategy</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Created specific domain tags for interface nodes. Collaborated with the system model owner to map connection points (LCM), ensuring the elevator model could be XREF'd into the parent assembly seamlessly by the integration lead.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#6666FF] transition-colors">
                <div className="mb-3">
                  <div>
                    <h4 className="font-bold text-slate-800">Property Aliasing</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Due to the volatile nature of the design trade, I established unique aliases for optical and thermophysical properties. This allowed for rapid global modifications as materials were down-selected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Validation Section */}
          <div className="bg-[#E6E6FF] border border-[#CCCCFF] rounded-lg p-6">
            <h4 className="font-bold text-[#000099] mb-2">Validation Methodology</h4>
            <p className="text-[#0000CC] text-sm leading-relaxed">
              To validate the model before integration, I ran the isolated elevator assembly in the mission-specific NRHO (Near-Rectilinear Halo Orbit). I performed a gradient analysis to identify potential connection faults and analyzed min/max temperatures to flag anomalies, ensuring the model was mission accurate before hand-off.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

const ThermalOptimizationDetail: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const PAGES = [
    {
      title: "Slow Thermal Spreading Trade",
      description: "Streamlined a complex thermal trade study by developing an automated master spreadsheet, reducing analysis turnaround from 1 week to <1 day.",
      tags: ['Process Optimization', 'Data Automation', 'Thermal Analysis', 'Cross-Functional Leadership'],
      info: "Impact: 80% Time Reduction • Role: Thermal Analyst",
      challenge: {
        title: "The Challenge",
        text: (
          <>
            <p className="text-slate-600 leading-relaxed">
              I was assigned to reconfigure the active cooling system for the avionics ring of over 100 electronics boxes onboard our MK2 lunar lander. The data (configurations, heat dissipations, dimensions) was scattered across subteams.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
              A simple baseline analysis required 3-4 meetings over weeks, often resulting in out-of-date or incorrect data, causing missed deadlines.
            </p>
          </>
        )
      },
      outcome: {
        title: "The Solution",
        text: (
          <>
            <p className="text-slate-600 leading-relaxed">
              To automate data entry and enable version control, I created a <strong>master spreadsheet tool</strong> rather than a complex code-based solution.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
              This intuitive tool included automated tallying, drop-down menus, and an embedded 1D thermal resistance network, allowing immediate verification of component temperatures against limits.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
              This solution allowed for easy adoption across all subteams and was extremely scalable as more units were added to our analyses.
            </p>
          </>
        )
      },
      tech: [
        { title: "Stakeholder Discovery", text: "Set up meetings with subteams to understand their design process and data storage, ensuring the solution addressed the root cause of the bottleneck." },
        { title: "Master Spreadsheet", text: "Implemented version control and automated tallying of box counts and thermal mass. Used drop-downs to minimize data entry errors." },
        { title: "Embedded 1D Thermal Model", text: "Programmed a 1D thermal resistance network directly into Excel. It calculated temperatures based on TIM and cold plate selection, instantly flagging failing components." },
        { title: "Visual Communication", text: "Created robust diagrams displaying proposed configurations, allowing the design team to immediately conduct structural analysis without further translation." }
      ],
      validation: {
        title: "The Result",
        text: "Analysis turnaround dropped from over a week to less than a day. The tool served as the 'one stop shop' for the trade, eliminating misleading data and allowing subteams to trust the results. We moved from constant firefighting to focusing solely on critically failing components."
      }
    },
    // Page 2: Safety Factor Optimization
    {
      title: "Safety Factor Optimization: Cold Plate Consolidation",
      description: "Achieved a 30% reduction in cold plate count to mitigate heat leak paths, directly supporting the vehicle's flight safety rating upgrade from 15 to 98.",
      tags: ['Ansys Icepak', 'Thermal Spreading', 'Safety Factor Analysis', 'Flight Readiness'],
      info: "Impact: 30% Count Reduction • Role: Thermal Analyst",
      challenge: {
        title: "The Challenge",
        text: (
          <>
             <p className="text-slate-600 leading-relaxed">
                This trade focused on a critical safety vulnerability: our existing system of over 100 electronics boxes used a 1:1 cold plate ratio, creating numerous potential heat leak paths.
             </p>
             <p className="text-slate-600 leading-relaxed mt-2">
                As a crewed mission, we required a safety rating of 98, but the current design sat at ~15. I needed to drastically reduce the number of individual cold plates to minimize leak paths without compromising thermal performance or mass.
             </p>
          </>
        )
      },
      outcome: {
        title: "The Outcome",
        text: (
          <>
             <p className="text-slate-600 leading-relaxed">
                I successfully <strong>reduced the overall cold plate count by 30%</strong> by engineering a 3:1 box-to-cold plate ratio configuration.
             </p>
             <p className="text-slate-600 leading-relaxed mt-2">
                This consolidation directly addressed the primary driver for the low safety rating, moving the vehicle significantly closer to the flight-readiness target of 98 and ensuring astronaut safety.
             </p>
          </>
        )
      },
      tech: [
        { title: "High-Fidelity Icepak Modeling", text: "Constructed comprehensive thermal spreading models (Box → TIM → Adapter → TIM → Coldplate) accounting for variable TIM conductance, inlet temperatures, and contact resistance." },
        { title: "Fidelity Optimization", text: "Identified that standard surface-averaged conductance was insufficient. I refined the model to focus conductance only over the fluid channel area (~25% of surface), significantly improving accuracy with negligible runtime impact." },
        { title: "Configuration Logic", text: "Creatively iterated through box-to-plate groupings, optimizing for a target 3:1 ratio. This required balancing thermal spreading penalties against the reliability gains of fewer fluid connections." },
        { title: "Standardization", text: "The high-fidelity spreading models established during this trade became the standard for all future electronic box performance iterations across the Lunar teams." }
      ],
      validation: {
        title: "The Result",
        text: "Beyond the 30% hardware reduction, this analysis provided other subteams with a clear scope of operations and identified critical boxes requiring further development. The validation of this reduced-count architecture was the key enabler for the vehicle's safety certification strategy."
      }
    },
    {
      title: "Mass Optimization: Thermal Spreading Trade Study",
      description: "Salvaged a critical thermal design trade by engineering a 53kg mass reduction through parametric analysis and hybrid configuration strategies, preserving vehicle safety margins.",
      tags: ['Parametric Analysis', 'Mass Optimization', 'Thermal Trade Studies', 'Structural Integration', 'Data Visualization'],
      info: "Impact: 53kg Mass Reduction • Role: Thermal Analyst",
      challenge: {
        title: "The Challenge",
        text: (
          <>
            <p className="text-slate-600 leading-relaxed">
                Near the end of my thermal spreading trade, it was revealed that our improved design was 50 kg heavier than baseline.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
                Leadership viewed this inefficiency as a failure and prepared to scrap the trade entirely. I needed to find a solution that reduced mass without increasing cold plate count significantly or sacrificing thermal performance, effectively saving the design direction.
            </p>
          </>
        )
      },
      outcome: {
        title: "The Outcome",
        text: (
          <>
            <p className="text-slate-600 leading-relaxed">
                Used Ansys Icepak to identify a configuration that <strong>reduced system mass by 53kg</strong> with an increase of fewer than 5 cold plates.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
                The data-driven proposal reversed the decision to fail the trade. The configuration was integrated into the final design, preserving the mass budget and contributing to the vehicle's flight safety factor targets.
            </p>
          </>
        )
      },
      tech: [
        { title: "Parametric Thickness Sizing", text: "Conducted sensitivity analysis on adapter plate thickness, parameterizing runs from 0.25” down to 0.1” in 0.025” increments. Collaborated with structural teams to validate the feasibility of thinner profiles, yielding immediate mass reductions." },
        { title: "Hybrid Configuration Strategy", text: "Moved away from a pure 'maximize grouping' philosophy. I identified surface-area-intensive units and decoupled them to 1:1 cold plate mappings, significantly reducing heavy adapter plate material at the cost of minimal added complexity." },
        { title: "Data-Driven Advocacy", text: "Compiled a comparative analysis of Baseline vs. Heavy vs. Optimized designs. Demonstrated to leadership that a minor increase in cold plate count (<5) was a viable trade-off for a massive 53kg weight saving." },
        { title: "Mission Safety Impact", text: "By preserving the trade, we maintained the vehicle's mass budget while ensuring thermal reliability. This effort directly contributed to increasing the vehicle's safety factor from ~15 closer to the flight-readiness target of ~98." }
      ],
      validation: {
        title: "Trade Validation",
        text: "Validation was achieved through iterative mass vs. performance analysis and cross-functional verification with the structural team. The final proposal was not just a theoretical thermal model, but a feasible structural design that satisfied strict flight-weight constraints."
      }
    },
    {
      title: "Reducing Cold Plate Variety to Decrease Qual and Test Time",
      description: "Optimized cold plate sizing lineup to cut manufacturing qualification time by 50% while maintaining thermal performance targets.",
      tags: ['Ansys Icepak', 'Parametric Analysis', 'Manufacturing Optimization', 'Cost Reduction'],
      info: "Impact: 50% Qual Time Reduction • Role: Thermal Analyst",
      challenge: {
        title: "The Challenge",
        text: (
          <>
            <p className="text-slate-600 leading-relaxed">
              Our baseline design utilized 6 different cold plate sizes. Each size required its own qualification cycle (approx. 4 weeks), totaling <strong>24 weeks of testing</strong>—a massive project bottleneck.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
              I needed to derive an alternative lineup that slashed this timeline without causing a spike in mass (due to "overkill" sizing) or failing thermal requirements.
            </p>
          </>
        )
      },
      outcome: {
        title: "The Outcome",
        text: (
          <>
            <p className="text-slate-600 leading-relaxed">
              Proposed a consolidated lineup of just three sizes (9x6, 12x6, 15x6). The manufacturing team confirmed this would reduce the timeline to <strong>12 weeks (50% reduction)</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
              Presented data proving this reduction came with negligible thermal performance loss and minimal mass increase, establishing the new baseline for future analysis.
            </p>
          </>
        )
      },
      tech: [
        { title: "Parametric Automation", text: "Set up Icepak case runs to parametrically cycle through variable cold plate sizes and HTC values, automating the search for viable thermal solutions across thousands of combinations." },
        { title: "Optimization Logic", text: "Balanced the trade-off: Higher variety offers tailored weight savings but slow testing. Lower variety speeds up testing but risks over-sizing. Found the mathematical 'sweet spot'." },
        { title: "Decision Matrix", text: "Created a comprehensive mapping of Electronics Unit vs. Cold Plate Size vs. Count vs. Pass/Fail criteria to visualize the impact of consolidation." },
        { title: "Manufacturing Alignment", text: "Directly collaborated with the manufacturing team to quantify the time savings (4 weeks per variant), converting technical thermal decisions into project schedule value." }
      ],
      validation: {
        title: "Strategic Validation",
        text: "The reduction in variety was validated against thermal margins (showing negligible drop) and verified by manufacturing stakeholders to confirm the 12-week schedule saving."
      }
    },
  ];

  const currentPage = PAGES[pageIndex];

  const nextPage = () => setPageIndex((prev) => (prev + 1) % PAGES.length);
  const prevPage = () => setPageIndex((prev) => (prev - 1 + PAGES.length) % PAGES.length);

  return (
    <div className="w-full font-sans text-slate-800">
      
      {/* Main Container */}
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header Section */}
        <div className="bg-[#3366FF] p-8 text-white relative overflow-hidden">
           {/* Navigation Arrows */}
          <div className="absolute top-6 right-6 flex flex-col items-center gap-2 z-20">
            <div className="flex gap-2">
                <button onClick={prevPage} className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-white">
                <ChevronLeft size={24} />
                </button>
                <button onClick={nextPage} className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-white">
                <ChevronRight size={24} />
                </button>
            </div>
            <span className="text-white/80 text-xs font-mono font-medium tracking-widest">
                {pageIndex + 1}/{PAGES.length}
            </span>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
               <h1 className="text-3xl md:text-4xl font-bold">
                 {currentPage.title}
               </h1>
            </div>
            
            <p className="text-slate-300 max-w-2xl text-lg">
              {currentPage.description}
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {currentPage.tags.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-[#3366FF]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Info Bar */}
        <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
            {currentPage.info}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8 animate-fade-in key={pageIndex}">
          
          {/* Challenge & Action Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {currentPage.challenge.title}
              </h3>
              {currentPage.challenge.text}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {currentPage.outcome.title}
              </h3>
              {currentPage.outcome.text}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Technical Deep Dive */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Technical Implementation
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {currentPage.tech.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-[#6666FF] transition-colors">
                    <div className="mb-3">
                    <div>
                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">
                        {item.text}
                        </p>
                    </div>
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Validation Section */}
          <div className="bg-[#E6E6FF] border border-[#CCCCFF] rounded-lg p-6">
            <h4 className="font-bold text-[#000099] mb-2">{currentPage.validation.title}</h4>
            <p className="text-[#0000CC] text-sm leading-relaxed">
              {currentPage.validation.text}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

const LunarRoverDetail: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const IMAGES = ['assets/rover_photo_1.png', 'assets/rover_photo_2.png', 'assets/rover_photo_3.png'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length), 30000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="w-full font-sans text-slate-800">
      
      {/* Main Container */}
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header Section */}
        <div className="bg-[#DC2626] p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Lunar South Pole Rover design with NASA Goddard
            </h1>
            <p className="text-red-100 max-w-2xl text-lg">
              Developing the thermal architecture for a compact lunar rover to survive a 14-day mission in the extreme environment of the Lunar South Pole.
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Spacecraft Thermal Analysis', 'Thermal Desktop', 'Systems Engineering', 'Crossteam Collaboration'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-white rounded-full text-xs font-medium text-[#DC2626]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Info Bar */}
        <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
            Role: Thermal Systems Lead • Partner: NASA Goddard
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8">
            
          {/* Project Overview Title */}
          <h3 className="text-xl font-bold text-slate-900 border-b border-gray-100 pb-2">
            Project Overview
          </h3>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
            
            <h4 className="font-bold text-slate-900 text-lg mb-2">Premise</h4>
            <p className="mb-4">This project was a University of Maryland & NASA Goddard collaborative project to design a rover capable of surviving and operating in the extreme environment of the Lunar South Pole. The rover was tasked with supporting a 14-day mission, including excursions into permanently shadowed regions (PSRs) to search for water-ice using NASA’s VIPER payload.</p>
            <p className="mb-4">I served as the <strong>Thermal Systems Lead</strong>, responsible for designing the rover’s complete thermal control architecture. I worked closely with Seth Abramczyk (Thermal Engineer, GSFC) and Vivek Dwivedi (Mechanical Division Lead, GSFC) throughout the system design process.</p>
            <p className="mb-4">As the thermal systems lead, I was responsible for thermal architecture, analysis, sizing, and simulation of all active and passive thermal control elements for our rover. I worked closely with the power and mission subteams to ensure our vehicle’s thermal architecture met our limitations in energy.</p>

            <h4 className="font-bold text-slate-900 text-lg mb-2">Challenges</h4>
            <ul className="list-disc pl-4 space-y-1 mb-4">
               <li><strong>Extreme temperature swings</strong> at the Lunar South Pole</li>
               <li>Extended mission duration with periods of direct sunlight and deep shadow</li>
               <li>Strict component temperature limits for avionics and VIPER-derived science instruments</li>
               <li>Tight mass and power budgets typical of small planetary rovers</li>
               <li>Necessity to survive operation inside PSRs, where temperatures can drop below 40 K</li>
            </ul>

            {/* Slideshow */}
            <div className="my-10 relative bg-slate-100 rounded-lg overflow-hidden shadow-sm border border-slate-200 aspect-video group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                <img 
                  src={IMAGES[currentSlide]} 
                  alt="Visual" 
                  className="w-full h-full object-cover"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
                <span className="absolute z-0 text-sm font-medium">Image Placeholder: {IMAGES[currentSlide]}</span>
              </div>
              
              {/* Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <h4 className="font-bold text-slate-900 text-lg mb-2">Action</h4>
            <p className="mb-4">I took this project from cradle to grave, starting with a robust system-level requirements list and Concept of Operations based on real temperature data pulled from the LRO Diviner mission to generate accurate hot and cold case environmental profiles.</p>
            <p className="mb-4">I researched thermal architecture options from the Spacecraft Thermal Control Handbook (Gilmore), and proposed an active-passive thermal system that included:</p>
            <ul className="list-disc pl-4 space-y-1 mb-4">
                <li>Dedicated radiators</li>
                <li>Thermoelectric heaters</li>
                <li>High Conductivity copper heat straps for heat transport</li>
            </ul>
            <p className="mb-4">I also investigated the feasibility of foldable radiator systems and radioisotopoe heater units (RHUs). These were ultimately ruled out due to cost, low TRL levels, and complexity.</p>
            <p className="mb-4">I used hand calculations and my knowledge of heat transfer and thermodynamics to size radiator surface area and required heater power based on our hot-case (peak solar flux) and cold case (PSR operation). I used a <strong>thermal balance equation</strong> to ensure that all of our components were within their temperature limits.</p>
            <p className="mb-4">To validate these findings, I created a full thermal model of the rover in <strong>Thermal Desktop</strong> and ran it through a Lunar South Pole sortie, ensuring all of our temperatures stayed within limits.</p>

            <h4 className="font-bold text-slate-900 text-lg mb-2">Results</h4>
            <p className="mb-4">I successfully defended my design at PDR and CDR with NASA Goddard engineers and UMD aerospace faculty. Both analytically and through simulation, I demonstrated that the rover would <strong>survive a 13-day South Pole mission, including PSR operations</strong>, and delivered a validated thermal architecture integrating with mechanical, electrical, and science subsystems.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem; onClick: (id: string) => void }> = ({ project, onClick }) => {
  const borderColor = CATEGORY_COLORS[project.category] || CATEGORY_COLORS['Other'];
  const isInProgress = IN_PROGRESS_IDS.includes(project.id);

  return (
    <div 
      onClick={() => onClick(project.id)}
      className="group bg-surface rounded-lg p-6 cursor-pointer border hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col h-full"
      style={{ 
        borderColor: borderColor,
        backgroundColor: `${borderColor}10` // 10% opacity hex
      }}
    >
      <div className="flex items-center justify-between mb-2">
         <div className="flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">{project.subheader}</p>
            {isInProgress && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 py-0.5 rounded border border-gray-200">
                In Progress
                </span>
            )}
         </div>
        
        <div className="flex items-center gap-2">
            {project.github && <Github size={18} className="text-secondary hover:text-primary" />}
            {project.link && <ExternalLink size={18} className="text-secondary hover:text-primary" />}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
      
      {project.description && (
        <p className="text-secondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
      )}
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="text-xs font-mono bg-white px-2 py-1 rounded border border-gray-100" style={{ color: borderColor }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

// Bio Component Inline (Replaces About import to fix duplication)
const BioSection: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary tracking-tight leading-tight">
      {BIO.tagline}
    </h2>
    <div className="prose prose-neutral max-w-none text-secondary">
      <p className="mb-4 text-base sm:text-lg leading-relaxed">{BIO.shortBio}</p>
      {BIO.longBio && <p className="text-sm sm:text-base leading-relaxed">{BIO.longBio}</p>}
    </div>
  </section>
);

const Projects: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const detailViewRef = useRef<HTMLDivElement>(null);

  // Filter projects based on selection (ALL selected tags must be present)
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return PROJECTS;
    return PROJECTS.filter(p => selectedTags.every(tag => p.tags.includes(tag)));
  }, [selectedTags]);

  // Derive available tags from CURRENTLY filtered projects
  const visibleTags = useMemo(() => {
     const tags = new Set<string>();
     filteredProjects.forEach(p => p.tags.forEach(t => tags.add(t)));
     return Array.from(tags);
  }, [filteredProjects]);

  // Sort tags: Selected tags first, then others from ALL_TAGS that are visible
  const sortedTags = useMemo(() => {
    const availableUnselected = ALL_TAGS.filter(t => !selectedTags.includes(t) && visibleTags.includes(t));
    return [...selectedTags, ...availableUnselected];
  }, [selectedTags, visibleTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
  };
  
  // Scroll to top of detail view when a project is selected
  useEffect(() => {
    if (selectedProjectId && detailViewRef.current) {
      detailViewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedProjectId]);

  const renderDetailView = () => {
    switch (selectedProjectId) {
      case 'bo1': return <LunarLanderDetail />;
      case 'bo2': return <ThermalOptimizationDetail />;
      case 'bo3': return <LunarDatabaseDetail />;
      case 'uw1': return <CryoBoilingDetail />;
      case 'uw2': return <LADDetail />;
      case 'uw3': return <LaplacianDetail />;
      case 'umd1': return <LunarRoverDetail />;
      case 'umd2': return <RocketNozzleDetail />;
      case 'usda1': return <CropYieldDetail />;
      case 'pers1': return <AfibDetail />;
      default: return <div className="p-10 text-center">Project information under construction</div>;
    }
  };

  if (selectedProjectId) {
    return (
      <div className="animate-slide-up min-h-screen pb-10" ref={detailViewRef}>
        <button 
          onClick={() => setSelectedProjectId(null)}
          className="flex items-center gap-2 text-secondary hover:text-primary mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>
        {renderDetailView()}
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      
      {/* 1. Bio Section */}
      <BioSection />

      {/* 2. Projects Section (Selected Work) */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-8">
           <h2 className="text-xl font-bold text-primary">Selected Work</h2>
           <p className="text-sm text-secondary">A collection of projects spanning thermal analysis, CFD, and ML pipelines.</p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sortedTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                selectedTags.includes(tag)
                  ? 'bg-green-600 text-white border-green-600 shadow-sm'
                  : 'bg-white text-secondary border-gray-200 hover:border-gray-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-secondary">
            No projects found with the selected filter.
          </div>
        )}
      </section>

      {/* 3. Referrals Section */}
      <ReferralsSection />

      {/* 4. Skills Section */}
      <SkillsSection />

    </div>
  );
};

// Sub-components to keep Projects.tsx clean after decompositing About.tsx
const SkillsSection: React.FC = () => (
  <section className="mb-16">
    <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4 border-b border-gray-100 pb-2">Technical Skills</h3>
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-slate-800 text-xs sm:text-sm font-medium rounded-md hover:border-gray-400 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

const ReferralsSection: React.FC = () => {
  const [currentReferralIndex, setCurrentReferralIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReferralIndex((prevIndex) => (prevIndex + 1) % REFERRALS.length);
    }, 30000); 

    return () => clearInterval(interval);
  }, []);

  const currentReferral = REFERRALS[currentReferralIndex];

  return (
      <section className="mb-16">
        <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-6 border-b border-gray-100 pb-2">Coworker Referrals</h3>
        
        <div className="relative bg-gray-50 border border-gray-100 rounded-lg p-8 min-h-[200px] flex flex-col justify-between">
           <div key={currentReferralIndex} className="animate-fade-in">
              <div className="relative text-slate-600 text-base leading-relaxed italic mb-6">
                 <span className="text-4xl text-gray-200 absolute -top-4 -left-3 font-serif">"</span>
                 <p className="relative z-10">{currentReferral.quote}</p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                <p className="text-slate-900 text-xs font-semibold">{currentReferral.author}</p>
              </div>
           </div>

           <div className="flex justify-center gap-2 mt-4 absolute bottom-4 right-6">
              {REFERRALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReferralIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentReferralIndex ? 'bg-slate-800 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Show referral ${idx + 1}`}
                />
              ))}
           </div>
        </div>
      </section>
  );
};

export default Projects;