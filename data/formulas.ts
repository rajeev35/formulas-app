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