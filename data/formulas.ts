import { Formula } from '@/components/FormulaCard';

export const formulas: Formula[] = [
  // Mathematics - Grade 1-3
  {
    id: 'math_addition',
    title: 'Addition',
    titleHindi: 'जोड़',
    formula: 'a + b = c',
    description: 'Adding two numbers together to get their sum.',
    descriptionHindi: 'दो संख्याओं को एक साथ जोड़कर उनका योग प्राप्त करना।',
    subjectId: 'math',
    grade: 1,
  },
  {
    id: 'math_subtraction',
    title: 'Subtraction',
    titleHindi: 'घटाव',
    formula: 'a - b = c',
    description: 'Subtracting one number from another to find the difference.',
    descriptionHindi: 'एक संख्या से दूसरी संख्या को घटाकर अंतर निकालना।',
    subjectId: 'math',
    grade: 1,
  },
  {
    id: 'math_multiplication',
    title: 'Multiplication',
    titleHindi: 'गुणा',
    formula: 'a × b = c',
    description: 'Multiplying two numbers to find their product.',
    descriptionHindi: 'दो संख्याओं को गुणा करके उनका गुणनफल प्राप्त करना।',
    subjectId: 'math',
    grade: 2,
  },
  {
    id: 'math_division',
    title: 'Division',
    titleHindi: 'भाग',
    formula: 'a ÷ b = c',
    description: 'Dividing one number by another to find the quotient.',
    descriptionHindi: 'एक संख्या को दूसरी संख्या से विभाजित करके भागफल प्राप्त करना।',
    subjectId: 'math',
    grade: 3,
  },
  
  // Mathematics - Grade 4-5
  {
    id: 'math_perimeter_rectangle',
    title: 'Perimeter of Rectangle',
    titleHindi: 'आयत का परिमाप',
    formula: 'P = 2(l + w)',
    description: 'The perimeter of a rectangle is the sum of all its sides.',
    descriptionHindi: 'आयत का परिमाप उसकी सभी भुजाओं का योग होता है।',
    subjectId: 'math',
    grade: 4,
  },
  {
    id: 'math_area_rectangle',
    title: 'Area of Rectangle',
    titleHindi: 'आयत का क्षेत्रफल',
    formula: 'A = l × w',
    description: 'The area of a rectangle is the product of its length and width.',
    descriptionHindi: 'आयत का क्षेत्रफल उसकी लंबाई और चौड़ाई का गुणनफल होता है।',
    subjectId: 'math',
    grade: 4,
  },
  {
    id: 'math_area_triangle',
    title: 'Area of Triangle',
    titleHindi: 'त्रिभुज का क्षेत्रफल',
    formula: 'A = (1/2) × b × h',
    description: 'The area of a triangle is half the product of its base and height.',
    descriptionHindi: 'त्रिभुज का क्षेत्रफल उसके आधार और ऊंचाई के गुणनफल का आधा होता है।',
    subjectId: 'math',
    grade: 5,
  },
  
  // Mathematics - Grade 6-8
  {
    id: 'math_pythagorean_theorem',
    title: 'Pythagorean Theorem',
    titleHindi: 'पाइथागोरस प्रमेय',
    formula: 'a² + b² = c²',
    description: 'In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides.',
    descriptionHindi: 'एक समकोण त्रिभुज में, कर्ण का वर्ग अन्य दो भुजाओं के वर्गों के योग के बराबर होता है।',
    subjectId: 'math',
    grade: 6,
  },
  {
    id: 'math_area_circle',
    title: 'Area of Circle',
    titleHindi: 'वृत्त का क्षेत्रफल',
    formula: 'A = πr²',
    description: 'The area of a circle is pi times the square of its radius.',
    descriptionHindi: 'वृत्त का क्षेत्रफल पाई गुणा त्रिज्या के वर्ग के बराबर होता है।',
    subjectId: 'math',
    grade: 7,
  },
  {
    id: 'math_volume_cube',
    title: 'Volume of Cube',
    titleHindi: 'घन का आयतन',
    formula: 'V = a³',
    description: 'The volume of a cube is the cube of the length of its side.',
    descriptionHindi: 'घन का आयतन उसकी भुजा के घन के बराबर होता है।',
    subjectId: 'math',
    grade: 8,
  },
  
  // Mathematics - Grade 9-10
  {
    id: 'math_quadratic_formula',
    title: 'Quadratic Formula',
    titleHindi: 'द्विघात सूत्र',
    formula: 'x = (-b ± √(b² - 4ac)) / 2a',
    description: 'The quadratic formula is used to solve quadratic equations of the form ax² + bx + c = 0.',
    descriptionHindi: 'द्विघात सूत्र का उपयोग ax² + bx + c = 0 प्रकार के द्विघात समीकरणों को हल करने के लिए किया जाता है।',
    subjectId: 'math',
    grade: 9,
  },
  {
    id: 'math_distance_formula',
    title: 'Distance Formula',
    titleHindi: 'दूरी का सूत्र',
    formula: 'd = √((x₂ - x₁)² + (y₂ - y₁)²)',
    description: 'The distance formula calculates the distance between two points in a coordinate plane.',
    descriptionHindi: 'दूरी का सूत्र निर्देशांक तल में दो बिंदुओं के बीच की दूरी की गणना करता है।',
    subjectId: 'math',
    grade: 10,
  },

  // Physics - Grade 6-8
  {
    id: 'physics_speed',
    title: 'Speed',
    titleHindi: 'चाल',
    formula: 'v = d / t',
    description: 'Speed is the distance traveled divided by the time taken.',
    descriptionHindi: 'चाल तय की गई दूरी को लगे समय से विभाजित करने पर प्राप्त होती है।',
    subjectId: 'physics',
    grade: 6,
  },
  {
    id: 'physics_density',
    title: 'Density',
    titleHindi: 'घनत्व',
    formula: 'ρ = m / V',
    description: 'Density is the mass of a substance per unit volume.',
    descriptionHindi: 'घनत्व प्रति इकाई आयतन में पदार्थ का द्रव्यमान होता है।',
    subjectId: 'physics',
    grade: 7,
  },
  
  // Physics - Grade 9-10
  {
    id: 'physics_newtons_second_law',
    title: "Newton's Second Law",
    titleHindi: 'न्यूटन का दूसरा नियम',
    formula: 'F = m × a',
    description: 'The acceleration of an object is directly proportional to the force applied and inversely proportional to its mass.',
    descriptionHindi: 'किसी वस्तु का त्वरण लगाए गए बल के सीधे आनुपातिक और उसके द्रव्यमान के व्युत्क्रमानुपाती होता है।',
    subjectId: 'physics',
    grade: 9,
  },
  {
    id: 'physics_ohms_law',
    title: "Ohm's Law",
    titleHindi: 'ओम का नियम',
    formula: 'V = I × R',
    description: 'The current flowing through a conductor is directly proportional to the voltage and inversely proportional to the resistance.',
    descriptionHindi: 'किसी चालक से प्रवाहित धारा वोल्टेज के सीधे आनुपातिक और प्रतिरोध के व्युत्क्रमानुपाती होती है।',
    subjectId: 'physics',
    grade: 10,
  },
  
  // Chemistry - Grade 8-10
  {
    id: 'chemistry_ph_scale',
    title: 'pH Scale',
    titleHindi: 'पीएच मापक',
    formula: 'pH = -log[H⁺]',
    description: 'The pH scale measures how acidic or basic a substance is, ranging from 0 to 14.',
    descriptionHindi: 'पीएच मापक यह मापता है कि कोई पदार्थ कितना अम्लीय या क्षारीय है, जिसकी सीमा 0 से 14 तक होती है।',
    subjectId: 'chemistry',
    grade: 8,
  },
  {
    id: 'chemistry_molarity',
    title: 'Molarity',
    titleHindi: 'मोलरता',
    formula: 'M = n / V',
    description: 'Molarity is the number of moles of solute per liter of solution.',
    descriptionHindi: 'मोलरता विलयन के प्रति लीटर में विलेय के मोल की संख्या होती है।',
    subjectId: 'chemistry',
    grade: 10,
  },
  {
    id: 'math_sequence_arithmetic',
    title: 'Arithmetic Sequence',
    titleHindi: 'एरिथमेटिक श्रेणी',
    formula: 'a_n = a_1 + (n - 1)d',
    description: 'The nth term of an arithmetic sequence.',
    descriptionHindi: 'एरिथमेटिक श्रेणी का nवां पद।',
    subjectId: 'math',
    grade: 11,
  },
  {
    id: 'math_sequence_geometric',
    title: 'Geometric Sequence',
    titleHindi: 'ज्यामितीय श्रेणी',
    formula: 'a_n = a_1 × r^{n-1}',
    description: 'The nth term of a geometric sequence.',
    descriptionHindi: 'ज्यामितीय श्रेणी का nवां पद।',
    subjectId: 'math',
    grade: 11,
  },
  {
    id: 'math_binomial_theorem',
    title: 'Binomial Theorem',
    titleHindi: 'द्विपद प्रमेय',
    formula: '(a + b)^n = Σ_{k=0}^{n} C(n,k) a^{n-k} b^{k}',
    description: 'Expansion of powers of a binomial expression.',
    descriptionHindi: 'द्विपद व्यंजक की शक्तियों का विस्तार।',
    subjectId: 'math',
    grade: 12,
  },
  {
    id: 'math_derivative_basic',
    title: 'Derivative of x^n',
    titleHindi: 'xⁿ का अवकलज',
    formula: 'd/dx (x^n) = n x^{n-1}',
    description: 'Derivative of a power function.',
    descriptionHindi: 'शक्ति फलन का अवकलज।',
    subjectId: 'math',
    grade: 12,
  },
  {
    id: 'math_integral_basic',
    title: 'Integral of x^n',
    titleHindi: 'xⁿ का समाकलन',
    formula: '∫ x^n dx = (x^{n+1})/(n+1) + C',
    description: 'Integral of a power function.',
    descriptionHindi: 'शक्ति फलन का समाकलन।',
    subjectId: 'math',
    grade: 12,
  },

  // Physics - Grade 11-12
  {
    id: 'physics_kinematics_equation',
    title: 'Equation of Motion',
    titleHindi: 'गति के समीकरण',
    formula: 'v = u + at',
    description: 'Final velocity after time t with acceleration a.',
    descriptionHindi: 'दिए गए त्वरण a के साथ समय t के बाद अंतिम वेग।',
    subjectId: 'physics',
    grade: 11,
  },
  {
    id: 'physics_kinematics_equation_2',
    title: 'Equation of Motion',
    titleHindi: 'गति के समीकरण',
    formula: 's = ut + (1/2)at^2',
    description: 'Displacement after time t.',
    descriptionHindi: 'समय t के बाद विस्थापन।',
    subjectId: 'physics',
    grade: 11,
  },
  {
    id: 'physics_kinematics_equation_3',
    title: 'Equation of Motion',
    titleHindi: 'गति के समीकरण',
    formula: 'v^2 = u^2 + 2as',
    description: 'Relation between velocity and displacement.',
    descriptionHindi: 'वेग और विस्थापन के बीच संबंध।',
    subjectId: 'physics',
    grade: 11,
  },
  {
    id: 'physics_work_energy',
    title: 'Work Done',
    titleHindi: 'कार्य',
    formula: 'W = F × d × cosθ',
    description: 'Work done by a force F over distance d at angle θ.',
    descriptionHindi: 'कोण θ पर दूरी d में बल F द्वारा किया गया कार्य।',
    subjectId: 'physics',
    grade: 11,
  },
  {
    id: 'physics_power',
    title: 'Power',
    titleHindi: 'शक्ति',
    formula: 'P = W / t',
    description: 'Power is work done per unit time.',
    descriptionHindi: 'शक्ति समय प्रति इकाई कार्य होती है।',
    subjectId: 'physics',
    grade: 11,
  },
  {
    id: 'physics_coulombs_law',
    title: "Coulomb's Law",
    titleHindi: 'कूलॉम्ब का नियम',
    formula: 'F = k (q_1 q_2) / r^2',
    description: 'Force between two charges.',
    descriptionHindi: 'दो आवेशों के बीच बल।',
    subjectId: 'physics',
    grade: 12,
  },
  {
    id: 'physics_electric_field',
    title: 'Electric Field',
    titleHindi: 'विद्युत क्षेत्र',
    formula: 'E = F / q',
    description: 'Electric field strength.',
    descriptionHindi: 'विद्युत क्षेत्र की तीव्रता।',
    subjectId: 'physics',
    grade: 12,
  },
  {
    id: 'physics_magnetic_force',
    title: 'Magnetic Force on Moving Charge',
    titleHindi: 'गतिमान आवेश पर चुंबकीय बल',
    formula: 'F = qvB sinθ',
    description: 'Force on charge q moving with velocity v in magnetic field B.',
    descriptionHindi: 'चुंबकीय क्षेत्र B में वेग v से चल रहे आवेश q पर बल।',
    subjectId: 'physics',
    grade: 12,
  },

  // Chemistry - Grade 11-12
  {
    id: 'chemistry_ideal_gas_law',
    title: 'Ideal Gas Law',
    titleHindi: 'आदर्श गैस समीकरण',
    formula: 'PV = nRT',
    description: 'Relation between pressure, volume, temperature and moles of a gas.',
    descriptionHindi: 'गैस के दाब, आयतन, तापमान और मोल की गणना।',
    subjectId: 'chemistry',
    grade: 11,
  },
  {
    id: 'chemistry_rate_of_reaction',
    title: 'Rate of Reaction',
    titleHindi: 'प्रतिक्रिया की दर',
    formula: 'Rate = k [A]^m [B]^n',
    description: 'Rate law expression for reaction.',
    descriptionHindi: 'प्रतिक्रिया की दर के लिए नियम।',
    subjectId: 'chemistry',
    grade: 12,
  },
  {
    id: 'chemistry_equilibrium_constant',
    title: 'Equilibrium Constant',
    titleHindi: 'संतुलन स्थिरांक',
    formula: 'K_c = [products]^{coefficients} / [reactants]^{coefficients}',
    description: 'Ratio of product to reactant concentrations at equilibrium.',
    descriptionHindi: 'संतुलन पर उत्पाद और अभिक्रिया द्रव्यों का अनुपात।',
    subjectId: 'chemistry',
    grade: 12,
  },
  {
    id: 'chemistry_ph',
    title: 'pH Calculation',
    titleHindi: 'पीएच गणना',
    formula: 'pH = -log[H^+]',
    description: 'Measure of acidity.',
    descriptionHindi: 'अम्लता की माप।',
    subjectId: 'chemistry',
    grade: 11,
  },
  {
    id: 'chemistry_mole_concept',
    title: 'Mole Concept',
    titleHindi: 'मोल अवधारणा',
    formula: 'n = m / M',
    description: 'Number of moles from mass and molar mass.',
    descriptionHindi: 'द्रव्यमान और मोलर द्रव्यमान से मोल की संख्या।',
    subjectId: 'chemistry',
    grade: 11,
  },

  // Biology - Grade 11-12
  {
    id: 'biology_photosynthesis',
    title: 'Photosynthesis',
    titleHindi: 'प्रकाश-संश्लेषण',
    formula: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
    description: 'Process by which plants make glucose using sunlight.',
    descriptionHindi: 'पेड़ प्रकाश के माध्यम से ग्लूकोज बनाते हैं।',
    subjectId: 'biology',
    grade: 11,
  },
  {
    id: 'biology_cell_respiration',
    title: 'Cellular Respiration',
    titleHindi: 'कोशिका श्वसन',
    formula: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy',
    description: 'Process of breaking down glucose to release energy.',
    descriptionHindi: 'ग्लूकोज को तोड़कर ऊर्जा निकालने की प्रक्रिया।',
    subjectId: 'biology',
    grade: 11,
  },
  {
    id: 'biology_dna_structure',
    title: 'DNA Base Pairing',
    titleHindi: 'डीएनए आधार युग्मन',
    formula: 'A = T, C ≡ G',
    description: 'Base pairing rules in DNA.',
    descriptionHindi: 'डीएनए में आधारों का युग्मन नियम।',
    subjectId: 'biology',
    grade: 12,
  },
  {
    id: 'biology_mendel_law',
    title: "Mendel's Law of Inheritance",
    titleHindi: 'मेंडल का अनुवांशिकी नियम',
    formula: 'Genotype ratios in offspring',
    description: 'Principles of heredity and segregation.',
    descriptionHindi: 'वंशानुक्रम और पृथक्करण के सिद्धांत।',
    subjectId: 'biology',
    grade: 12,
  },
  {
    id: 'biology_enzyme_activity',
    title: 'Enzyme Activity',
    titleHindi: 'एंजाइम गतिविधि',
    formula: 'Rate ∝ [Enzyme][Substrate]',
    description: 'Relationship between enzyme and substrate concentrations.',
    descriptionHindi: 'एंजाइम और उपस्ट्रेट की सांद्रता के बीच संबंध।',
    subjectId: 'biology',
    grade: 12,
  },

];

export const getFormulasBySubject = (subjectId: string): Formula[] => {
  return formulas.filter(formula => formula.subjectId === subjectId);
};

export const getFormulasByGrade = (grade: number): Formula[] => {
  return formulas.filter(formula => formula.grade === grade);
};

export const getFormulasBySubjectAndGrade = (subjectId: string, grade: number): Formula[] => {
  return formulas.filter(formula => formula.subjectId === subjectId && formula.grade === grade);
};

export const getFormula = (id: string): Formula | undefined => {
  return formulas.find(formula => formula.id === id);
};

export const getFormulasByIds = (ids: string[]): Formula[] => {
  return formulas.filter(formula => ids.includes(formula.id));
};

export const searchFormulas = (query: string, language: 'en' | 'hi'): Formula[] => {
  const lowerQuery = query.toLowerCase();
  return formulas.filter(formula => {
    const title = language === 'en' ? formula.title : formula.titleHindi;
    const description = language === 'en' ? formula.description : formula.descriptionHindi;
    return (
      title.toLowerCase().includes(lowerQuery) ||
      description.toLowerCase().includes(lowerQuery) ||
      formula.formula.toLowerCase().includes(lowerQuery)
    );
  });
};