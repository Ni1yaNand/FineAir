import React from 'react';
import { Wind, Thermometer, Shield, Building2, Award } from 'lucide-react';

const Products = () => {
  // Define product categories and their items
  const productCategories = [
    {
      id: 'linear-grills',
      name: 'Linear Grills',
      products: [
        {
          id: 'fa-15',
          name: 'Normal Flow AC Grille - Model : FA-15',
          image: '/images/products/ea-15.png',
          description: 'Duly powder coated extruded aluminium linear horizontal fixed bar grilles, with 15 deg. or 0 degree deflection blade having pitch of 13 mm. Recommended for heating, cooling, and ventilating applications. Typically installed in a sidewall, ceiling or duct.'
        },
        {
          id: 'fa-30',
          name: 'Normal Flow AC Grille - Model : FA-30',
          image: '/images/products/ea-15.png',
          description: 'Duly powder coated extruded aluminium linear horizontal fixed bar grilles, with 30 deg. or 0 degree deflection blade having pitch of 13 mm. Recommended for heating, cooling, and ventilating applications. Typically installed in a sidewall, ceiling or duct.'
        },
        {
          id: 'fa-45',
          name: 'Normal Flow AC Grille - Model : FA-45',
          image: '/images/products/ea-15.png',
          description: 'Duly powder coated extruded aluminium linear horizontal fixed bar grilles, with 45 deg. or 0 degree deflection blade having pitch of 13 mm. Recommended for heating, cooling, and ventilating applications. Typically installed in a sidewall, ceiling or duct.'
        }
      ]
    },
    {
      id: 'curved-square-grills',
      name: 'Curved & Square Grills',
      products: [
        {
          id: 'fa-cg',
          name: 'Curved Grille - Model : FA-CG',
          image: '/images/products/ea-cg.png',
          description: 'Duly powder coated extruded aluminium linear horizontal fixed bar curved grilles, with 15 deg. or 0 degree deflection blade having pitch of 13 mm and 16 mm. Recommended for heating, cooling, and ventilating applications. Typically installed in a sidewall, ceiling or duct. Also available in black spacer.'
        },
        {
          id: 'gl-4w',
          name: 'Four Way Grille - Model : GL-4W',
          image: '/images/products/GL-4W.png',
          description: 'Duly powder coated extruded aluminium linear horizontal fixed bar grilles, with 15 deg. or 0 degree deflection blade having pitch of 13 mm and 16 mm. Recommended for heating, cooling, and ventilating applications. Typically installed in a sidewall, ceiling or duct.'
        },
        {
          id: 'single-deflection',
          name: 'Single Deflection Adjustable Grille',
          image: '/images/products/sd.png',
          description: 'These grills are duly powder coated extruded aluminium single deflection adjustable grilles having front horizontal or vertical blades. These grilles controls the airstream in both the horizontal or vertical planes. It is the most common type grille use as a supply outlet with adjustable vanes to provide unidirectional air flow.'
        }
      ]
    },
    {
      id: 'slots',
      name: 'Slots',
      products: [
        {
          id: 'S6',
          name: 'Slot FA-S4, S6',
          image: '/images/products/s6.png',
          description: 'Linear slot diffuser, mainly intended for air supply in comfort ventilation systems for offices, shops, medical rooms, school classrooms etc. The supply air flow pattern/direction can be formed by adjustable deflectors in vents, air flow volume can be tuned by slider adjustment damper. The diffusers can be installed as individual pieces or in array of multiple segments.'
        },
        {
          id: 'Slot FA-S2',
          name: 'S2',
          image: '/images/products/s2.png',
          description: 'Linear slot diffuser, mainly intended for air supply in comfort ventilation systems for offices, shops, medical rooms, school classrooms etc. The supply air flow pattern/direction can be formed by adjustable deflectors in vents, air flow volume can be tuned by slider adjustment damper. The diffusers can be installed as individual pieces or in array of multiple segments.'
        },
        {
          id: 'Slot FA',
          name: 'Slot',
          image: '/images/products/slot.png',
          description: 'Duly powder coated extruded aluminium linear horizontal fixed bar grilles, with 45 deg. or 0 degree deflection blade having pitch of 13 mm. Recommended for heating,cooling, and ventilating applications. Typically installed in a sidewall, ceiling or duct.'
        }
        ]
    },
    {
      id: 'architectural-louvres',
      name: 'Architectural Louvres',
      products: [ 
        {
          id: 'arch',
          name: 'Architectural Louvres',
          image: '/images/products/arch.png',
          description: 'Grills and slots designed as per architecture design.'
        }
        ]
    },
    {
      id: 'fire-smoke',
      name: 'Fire & Smoke Control',
      products: [
        {
          id: 'fire FA',
          name: 'Fire Damper-- Model No : FA-FD-WM-I',
          image: '/images/products/ea-wm1.png',
          description: 'Fire Dampers are required by all building codes to maintain the required fire resistance ratings of walls, partitions, and floor when they are penetrated by air ducts or other ventilation openings. This is a wall mounted motorised multi-blade fire damper with 3V style blades and spring return electric actuator which is mounted internally.It has also been qualified for dynamic closure in emergency fire situations. It is rated for airflow in either direction.'
        },
        {
          id: 'fire FA-HAD',
          name: 'Access door - Model No : FA-HAD',
          image: '/images/products/ea-had.png',
          description: 'Fire dampers need inspecting and testing, coils need cleaning and controls need adjusting. Eco Air offers a range of duct and plenum access doors that have been designed to allow easy and convenient access to such equipment within HVAC ductwork, without compromising safety or ventilation, to meet different duct styles and application needs, with Double skin construction that meets SMACNA requirement with quick simple installation. The ultra low leakage premium quality that optimizes access area and ease of installation. All models are available in a wide variety of sizes to suit each specific application.'
        },
        {
          id: 'fire FA-FD-WM',
          name: 'Fire Damper - FA-FD-WM',
          image: '/images/products/ea-wm.png',
          description: 'Fire Dampers are required by all building codes to maintain the required fire resistance ratings of walls, partitions, and floor when they are penetrated by air ducts or other ventilation openings. This is a wall mounted motorised fire damper with 2V style blades and spring return electric actuator and has also been qualified for dynamic closure in emergency fire situations. It is rated for airflow in either direction.'
        }
      ]
    },
    {
      id: 'air-treatment',
      name: 'Air Treatment and Ventilation',
      products: [
        {
          id: 'fa-sc-if',
          name: 'Circular Inline Fan - Model No : FA-SC-IF',
        image: '/images/products/ea-sc.png',
          description: 'Supply and exhaust ventilation systems for various premises for external surface mounting behind false ceiling. The impeller with backward blades is powered by the single phase motor with external rotor and over-heating protection with automatic restart. The motor equipped with ball bearings for long service life designed for at least 40000 hours. For precise features, safe operation and low noise, each impeller is dynamically balanced while assembly. Motor protection rating IP 44. Both smooth and step speed control is performed with the thyristor or auto transformer controller. several fans can be connected to one controller in case the total power and operating current do not exceed the rated controller values.'
        },
        {
          id: 'fa-disc',
          name: 'Disc Valve - FA-DISC',
          image: '/images/products/ea-disc.png',
          description: 'Disc valves are used as an alternative to ceiling diffuser. They are most commonly used for the purpose of ventilation. The air flow through the disk valve can be adjusted by rotating the disc clockwise or anticlockwise. The rotation changes the free area between the disc and the frame.'
        }
      ]
    },
    {
      id: 'diffuser',
      name: 'Diffuser',
      products: [
        {
          id: 'FA-EB',
          name: 'Eye Ball Type - Model : FA-EB',
          image: '/images/products/ea-eb.png',
          description: 'These diffusers are duly powder coated aluminium double skin eye-ball type rotatable jet nozzle. This type of supply nozzles are capable of delivering air to spaces where long distance penetration and low noise levels are required. Suitable for cold and warm air supply applications, these versatile adjustable units are ideal for providing focussed ventilation or where precision is required. Where grouped penetration can be considerably enhanced.'
        },
        {
          id: 'GL-SPD',
          name: 'Nozzle - Spot Type - Model : GL-SPD',
          image: '/images/products/gl-spd.png',
          description: 'These Diffusers are of duly powder coated aluminium rotatable jet nozzle/spot diffuser. Spot Diffusers give optimum performance for supply of air via ceiling diffuser is not feasible viz, shopping malls, large halls, assembly shops, etc. The eyeball and socket arrangement provide flexibility of setting the air jet to any desired angle within 40. Its creative design provides excellent compatibility of aesthetic match as well as acoustic characters which are ideal for application in auditoriums, concert halls and conference room etc. Rotating nozzle provides a long throw jet pattern. Field adjustable pattern and direction – from the face of the outlet. Directional control within a 60° arc.'
        },
        {
          id: 'FA-F',
          name: 'Square Diffuser - Model : FA-F',
          image: '/images/products/ea-f.png',
          description: 'These diffusers are duly powder coated extruded/ stamped aluminium multi-cone ceiling diffuser with removable core. Square diffuser is generally used for constant or variable air volume for heating, cooling, or ventilating purpose. It is used to direct air diffusion for space coverage. Also used for return air to maintain matched appearance. Surface mounted or suspended grid systems.'
        },
        {
          id: 'FA-G',
          name: 'Grid Diffuser - Model : FA-G',
          image: '/images/products/ea-g.png',
          description: 'These diffusers are duly powder coated stamped aluminium multi-cone grid type ceiling diffuser with removable centre core helps to facilitate cleaning and damper adjustment. Out to out size: 595 X 595 mm neck size 450 x 450 mm.'
        },
        {
          id: 'FA-LD',
          name: 'Linear Diffuser - Model : FA-LD',
          image: '/images/products/ld.png',
          description: 'These diffusers are duly powder coated extruded aluminium ceiling mounted two way linear diffusers having two way air directional vanes. Engineered air distribution pattern for two way flow in wide range of rectangular neck size'
        },
        {
          id: 'FA-JND',
          name: 'Jet Nozzle Diffuser - Model : FA-JND',
          image: '/images/products/ea-jnd.png',
          description: 'These diffusers are powder coated aluminium rotatable jet nozzle and diffuser which allows both jet/diffusion mode. neck size 250 mm dia, 315 mm and 380 mm. These high flow Jet diffusers are suitable for wall/ceiling mounting application for large volume of air handling and longer throws. These have unique feature of setting the device both for diffusion and air jet. Also the universal joint type setting allows both Jet/Diffusion in any desired angle. The diffusers are versatile in application by virtue of the novel "reversible and rotatable" core design which allows the air jet to be adjusted for both pattern and deflection. Unit may be mounted individually or in banks in bulk head arrangements or directly into stub ducts. Suitable for large rooms/halls,shopping malls, Assembly halls, etc.'
        },
        {
          id: 'EL-P',
          name: 'Plaque Diffuser - Model : EL-P',
          image: '/images/products/el-p.png',
          description: 'These diffusers are duly powder coated stamped aluminium multi-cone plaque type ceiling diffuser with removable core. Most often selected for its clean uniform and performance similar to standard diffuser.'
        },
      ]
    },
    {
      id: 'control-dampers',
      name: 'Control Dampers',
      products: [
        {
          id: 'FA-VCD',
          name: 'Aluminium or GI - Model No : FA-VCD',
          image: '/images/products/ea-vcd.png',
          description: 'Grills and slots designed as per architecture design.'
        },
        {
          id: 'Dumper FA-VCD',
          name: 'Aluminium or GI Dumper - Model No : FA-VCD',
          image: '/images/products/dumper-ea.png',
          description: 'The GI Duct Volume control Dampers having 3-V style blades for applications as manual balancing dampers. A wide range of electric or pneumatic actuators are available for these models. It includes extended shafts for motorised assembly with wide range of electric and pneumatic actuators to choose from. These dampers are typically used in low to medium pressure and velocity systems. The fabricated blades are reinforced with longitudinal designed vee’s.'
        }
      ]
    }
  ];

  return (
      <div className="bg-blue-700 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 text-white">
          {/* Products Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">OUR PRODUCTS</h2>
            <h3 className="text-xl md:text-2xl font-light tracking-wide">COMPLETE PRODUCT CATALOG</h3>
          </div>
          
          {/* Table of Products */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Table of Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productCategories.map((category) => (
                <a 
                  key={category.id} 
                  href={`#${category.id}`} 
                  className="flex justify-between items-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition"
                >
                  <span className="font-medium">{category.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Product Categories with Products */}
          {productCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16">
              <div className="border-b border-white border-opacity-20 pb-2 mb-6">
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>
              
              {category.products.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.products.map((product) => (
                    <div 
                      key={product.id} 
                      className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition cursor-pointer"
                      onClick={() => console.log(`Navigate to ${product.id} details page`)}
                    >
                      <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mb-4" />
                      <h4 className="text-xl font-semibold mb-3 text-blue-100">{product.name}</h4>
                      <p className="text-blue-50 text-sm">{product.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
                  <p>More details about these products will be available soon.</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
                    Contact for Information
                  </button>
                </div>
              )}
            </div>
          ))}
          
          {/* City Silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30">
            <div className="relative h-full">
              <div className="absolute bottom-0 left-3/4 w-20 h-32 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-2/3 w-16 h-24 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-1/2 w-24 h-36 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-1/3 w-14 h-28 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-1/4 w-18 h-20 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-1/6 w-12 h-24 bg-white opacity-20"></div>
              <div className="absolute bottom-0 left-10 w-16 h-28 bg-white opacity-20"></div>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Products;