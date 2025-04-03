// "use client";

// import { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';

// const FramerFAQ = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [middlePanelWidth, setMiddlePanelWidth] = useState(0);
//   const middlePanelRef = useRef<HTMLDivElement>(null);
  
//   // Measure the width of the middle panel
//   useEffect(() => {
//     const updateWidth = () => {
//       if (middlePanelRef.current) {
//         setMiddlePanelWidth(middlePanelRef.current.offsetWidth);
//       }
//     };
    
//     // Initial measurement
//     updateWidth();
    
//     // Update on window resize
//     window.addEventListener('resize', updateWidth);
    
//     return () => {
//       window.removeEventListener('resize', updateWidth);
//     };
//   }, []);
  
//   const faqItems = [
//     {
//       id: 1,
//       title: "What is the Roamyo plan?",
//       content: (
//         <>
//           <p>Roamyo is a personalized travel planning service that uses AI to create custom travel itineraries based on your preferences and budget.</p>
//           <p className="mt-2">We help you explore destinations, craft the perfect plan, and organize all your travel details in one place.</p>
//         </>
//       ),
//     },
//     {
//       id: 2,
//       title: "How does it work?",
//       content: (
//         <>
//           <p>Tell us your travel preferences, budget, and dates. Our AI will generate a personalized itinerary with accommodations, activities, and transportation options.</p>
//           <p className="mt-2">You can customize the plan until it's perfect, then use our tools to manage bookings and stay organized during your trip.</p>
//         </>
//       ),
//     },
//     {
//       id: 3,
//       title: "Do I need to download an app?",
//       content: (
//         <>
//           <p>No! Roamyo is completely web-based and works perfectly on both mobile and desktop browsers.</p>
//           <p className="mt-2">There's no need to download anything or take up space on your device.</p>
//         </>
//       ),
//     },
//     {
//       id: 4,
//       title: "How is Roamyo different from other trip planning tools?",
//       content: (
//         <>
//           <p>Unlike other platforms, Roamyo combines AI intelligence with customization options that put you in control.</p>
//           <p className="mt-2">We focus on creating truly personalized plans that match your travel style, not generic recommendations.</p>
//         </>
//       ),
//     },
//     {
//       id: 5,
//       title: "Can Roamyo handle last-minute travel changes?",
//       content: (
//         <>
//           <p>Absolutely! Our platform is designed to be flexible and responsive to changes.</p>
//           <p className="mt-2">You can adjust your plans anytime, and our system will help you find alternatives and update your itinerary accordingly.</p>
//         </>
//       ),
//     },
//     {
//       id: 6,
//       title: "What are the benefits of early access?",
//       content: (
//         <>
//           <p>Early access members get premium features at no cost during our launch phase, priority support, and will have a direct influence on product development.</p>
//           <p className="mt-2">You'll also receive exclusive discounts when we officially launch.</p>
//         </>
//       ),
//     },
//     {
//       id: 7,
//       title: "Is Roamyo free to use?",
//       content: (
//         <>
//           <p>During our early access period, all features are available at no cost to our members.</p>
//           <p className="mt-2">After launch, we'll offer both free and premium tiers, but early supporters will receive special rates and benefits.</p>
//         </>
//       ),
//     },
//   ];

//   // Calculate which questions go on which side based on active tab
//   const calculateQuestionSides = () => {
//     const leftQuestions = [];
//     const rightQuestions = [];
    
//     for (let i = 0; i < faqItems.length; i++) {
//       // Current question and questions before go to the left
//       if (i <= activeTab) {
//         leftQuestions.push(i);
//       } 
//       // Questions after the current one go to the right
//       else {
//         rightQuestions.push(i);
//       }
//     }
    
//     return { leftQuestions, rightQuestions };
//   };
  
//   const { leftQuestions, rightQuestions } = calculateQuestionSides();
  
//   // Determine layout based on which tab is active
//   const hasRightQuestions = rightQuestions.length > 0;
//   const showLeftPanel = activeTab > 0; // Only show left panel if we're not on the first question

//   // Handle tab change
//   const handleTabChange = (index: number) => {
//     if (index === activeTab || animating) return;
//     setActiveTab(index);
//   };

//   // Track animation state
//   const [animating, setAnimating] = useState(false);
  
//   // Effect to prevent clicking during animation
//   useEffect(() => {
//     setAnimating(true);
//     const timer = setTimeout(() => {
//       setAnimating(false);
//     }, 600);
    
//     return () => clearTimeout(timer);
//   }, [activeTab]);

//   // Variants for animations
//   const middleContentVariants = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
//     exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }
//   };

//   const leftQuestionVariants = {
//     initial: (custom: number) => ({ 
//       x: -100, 
//       opacity: 0,
//       position: 'absolute' as const,
//       top: 0,
//       zIndex: 10,
//       background: '#A7CAED',
//       height: '100%',
//       width: '75px',
//       left: `${custom * 75}px` 
//     }),
//     animate: (custom: number) => ({ 
//       x: 0, 
//       opacity: 1,
//       position: 'relative' as const,
//       left: 0,
//       transition: { 
//         duration: 0.4, 
//         delay: custom * 0.03, 
//         ease: "easeOut"
//       }
//     }),
//     exit: (custom: number) => ({ 
//       x: middlePanelWidth, 
//       opacity: 1,
//       position: 'absolute' as const,
//       zIndex: 10,
//       transition: { 
//         duration: 0.5, 
//         delay: (leftQuestions.length - custom - 1) * 0.03,
//         ease: "easeIn"
//       }
//     }),
//   };

//   const rightQuestionVariants = {
//     initial: (custom: number) => ({ 
//       x: 100, 
//       opacity: 0,
//       position: 'absolute' as const,
//       top: 0,
//       zIndex: 10,
//       background: '#A7CAED',
//       height: '100%',
//       width: '75px',
//       right: `${custom * 75}px` 
//     }),
//     animate: (custom: number) => ({ 
//       x: 0, 
//       opacity: 1,
//       position: 'relative' as const,
//       right: 0,
//       transition: { 
//         duration: 0.4,
//         delay: custom * 0.03, 
//         ease: "easeOut"
//       }
//     }),
//     exit: (custom: number) => ({ 
//       x: -middlePanelWidth, 
//       opacity: 1,
//       position: 'absolute' as const,
//       zIndex: 10,
//       transition: { 
//         duration: 0.5,
//         delay: (rightQuestions.length - custom - 1) * 0.03,
//         ease: "easeIn"
//       }
//     }),
//   };

//   return (
//     <div className="bg-[#F6F7FF] py-16 md:py-56">
//       <div className="faq-main-container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="faq-head">
//           Lost? We've Got Answers!
//         </h2>
        
//         {/* FAQ Container */}
//         <div className="bg-white rounded-xl overflow-hidden shadow-lg border-[#8EBAE3] border-[1px]">
//           {/* Mobile Layout */}
//           <div className="md:hidden flex flex-col">
//             <div className="p-6 bg-white">
//               <div className="faded-num1 text-[#13263E1A] mb-6">
//                 {activeTab + 1 < 10 ? `0${activeTab + 1}` : activeTab + 1}
//               </div>
              
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeTab}
//                   variants={middleContentVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                 >
//                   <h3 className="text-xl font-bold text-[#13263E] mb-4 pr-16">
//                     {faqItems[activeTab].title}
//                   </h3>
                  
//                   <div className="space-y-3 text-gray-600">
//                     {faqItems[activeTab].content}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
              
//               {/* Mascot image */}
//               <div className="absolute top-4 right-0 md:top-6 w-20 h-20">
//                 <Image 
//                   src="/images/faq-img-mobile.png" 
//                   alt="Roamyo Mascot" 
//                   width={80} 
//                   height={80}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
            
//             {/* Mobile Question Navigation */}
//             <div className="flex overflow-x-auto bg-[#A7CAED] p-4">
//               {faqItems.map((item, index) => (
//                 <div 
//                   key={item.id}
//                   className={`flex-shrink-0 mx-2 px-4 py-2 rounded cursor-pointer ${
//                     index === activeTab ? 'bg-white text-[#13263E]' : 'text-white'
//                   }`}
//                   onClick={() => handleTabChange(index)}
//                 >
//                   <div className="whitespace-nowrap">
//                     {item.title}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Desktop Layout */}
//           <div className="hidden md:flex md:flex-row relative overflow-hidden">
//             {/* Left Side - Blue Panel with Tabs */}
//             {showLeftPanel && (
//               <div className="w-auto bg-[#A7CAED] relative">
//                 <div className="h-full min-h-[300px] md:min-h-[700px] lg:min-h-[800px]">
//                   <div className="flex flex-row h-full relative">
//                     <AnimatePresence mode="popLayout">
//                       {leftQuestions.slice(0, leftQuestions.length - 1).map((index, i) => (
//                         <motion.div 
//                           key={faqItems[index].id}
//                           className={`relative border-r border-[#8EBAE3] cursor-pointer overflow-hidden text-white hover:bg-[#88B5E1]/70 lg:w-[75px] sm:w-[50px] faq-width-set ${
//                             index === 0 ? 'rounded-l-xl' : ''
//                           }`}
//                           onClick={() => !animating && handleTabChange(index)}
//                           custom={i}
//                           variants={leftQuestionVariants}
//                           initial="initial"
//                           animate="animate"
//                           exit="exit"
//                         >
//                           {/* Plus sign at top */}
//                           <div className="w-full flex justify-center pt-5 pb-3">
//                             <span className="text-2xl md:text-3xl font-light">+</span>
//                           </div>
                          
//                           {/* Faded number in background */}
//                           <div className="absolute pointer-events-none right-faded-num2">
//                             {index + 1 < 10 ? `0${index + 1}` : index + 1}
//                           </div>
                          
//                           {/* Vertical text */}
//                           <div className="absolute w-full bottom-0" style={{ height: '50%' }}>
//                             <div 
//                               className="transform -rotate-90 origin-bottom-left right-title whitespace-normal absolute"
//                               style={{
//                                 width: '500px',
//                                 maxWidth: '500px',
//                                 left: '65px',
//                                 bottom: '50px',
//                               }}
//                             >
//                               {faqItems[index].title}
//                             </div>
//                           </div>
                          
//                           {/* Diamond indicator */}
//                           <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//                             <div className="w-2 h-2 bg-white transform rotate-45 opacity-70"></div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             {/* Middle - FAQ Content - Fixed width */}
//             <div 
//               ref={middlePanelRef}
//               className="flex-1 p-6 md:p-10 bg-white relative overflow-hidden border-[1px] border-[#8EBAE3]"
//             >
//               <div className="faded-num1 text-[#13263E1A] mb-6 md:mb-8">
//                 {activeTab + 1 < 10 ? `0${activeTab + 1}` : activeTab + 1}
//               </div>
              
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeTab}
//                   variants={middleContentVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                 >
//                   <h3 className="active-faq-head mb-4 md:mb-6 max-w-[90%] mt-16">
//                     {faqItems[activeTab].title}
//                   </h3>
                  
//                   <div className="active-faq-content space-y-3 md:space-y-4 max-w-[90%]">
//                     {faqItems[activeTab].content}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
              
//               {/* Mascot image */}
//               <div className="absolute top-4 right-0 md:top-6 w-20 h-20 md:w-32 md:h-32">
//                 <Image 
//                   src="/images/faq-img.png" 
//                   alt="Roamyo Mascot" 
//                   width={130} 
//                   height={130}
//                   className="object-contain hidden md:block"
//                 />
//                 <Image 
//                   src="/images/faq-img-mobile.png" 
//                   alt="Roamyo Mascot" 
//                   width={80} 
//                   height={80}
//                   className="object-contain block md:hidden"
//                 />
//               </div>
//             </div>
            
//             {/* Right Side - Blue Panel with Tabs */}
//             {hasRightQuestions && (
//               <div className="w-auto bg-[#A7CAED] relative">
//                 <div className="h-full min-h-[300px] md:min-h-[700px] lg:min-h-[800px]">
//                   <div className="flex flex-row h-full relative">
//                     <AnimatePresence mode="popLayout">
//                       {rightQuestions.map((index, i) => (
//                         <motion.div 
//                           key={faqItems[index].id}
//                           className={`relative border-r border-[#8EBAE3] cursor-pointer overflow-hidden text-white hover:bg-[#88B5E1]/70 w-[75px] faq-width-set ${
//                             index === faqItems.length - 1 ? 'rounded-r-xl' : ''
//                           }`}
//                           onClick={() => !animating && handleTabChange(index)}
//                           custom={i}
//                           variants={rightQuestionVariants}
//                           initial="initial"
//                           animate="animate"
//                           exit="exit"
//                         >
//                           {/* Plus sign at top */}
//                           <div className="w-full flex justify-center pt-5 pb-3">
//                             <span className="text-2xl md:text-3xl font-light">+</span>
//                           </div>
                          
//                           {/* Faded number in background */}
//                           <div className="absolute pointer-events-none right-faded-num2">
//                             {index + 1 < 10 ? `0${index + 1}` : index + 1}
//                           </div>
                          
//                           {/* Vertical text */}
//                           <div className="absolute w-full bottom-0" style={{ height: '50%' }}>
//                             <div 
//                               className="transform -rotate-90 origin-bottom-left right-title whitespace-normal absolute"
//                               style={{
//                                 width: '500px',
//                                 maxWidth: '500px',
//                                 left: '65px',
//                                 bottom: '50px',
//                               }}
//                             >
//                               {faqItems[index].title}
//                             </div>
//                           </div>
                          
//                           {/* Diamond indicator */}
//                           <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//                             <div className="w-2 h-2 bg-white transform rotate-45 opacity-70"></div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FramerFAQ; 