import { demand_forecasting } from "constants";
import { predictive_maintainance } from "constants";
import { capgemini } from "constants";
import { adobe } from "constants";
import { accenture } from "constants";
import { pwc } from "constants";
import { Ey } from "constants";
import { ibm } from "constants";
import { wipro } from "constants";
import { tcs } from "constants";
import { document_process_automation } from "constants";
import { connected_smart_products } from "constants";
import { automated_quality_inspection } from "constants";

export const Industry = [
  {
    //  Todo :: Manufacturing and Mobility
    id: crypto.randomUUID(),
    title: "Manufacturing & Mobility",
    link: "manufacturing_&_mobility",
    heading: "Manufacturing & Mobility Overview",
    overview:
      "Microsoft's approach to manufacturing takes into account market insights and competitive landscape, and positions Microsoft's value proposition via the Industry Priority Scenarios. Our Industry Priority Scenarios (IPSs) are the fundamental areas we believe manufacturers should focus their efforts on their digital transformation journey. Microsoft Cloud for Manufacturing is the vehicle to enable manufacturers to execute that digital transformation through Microsoft and partner capabilities aligned to our IPSs. Microsoft Cloud for Manufacturing (MC4M) became available for Preview in FY22 on November 1, 2021, and is expected to be generally available in FY23 H2.",
    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Enable Intelligent Factories",
        link:  `enable_intelligent_factories`,
        content: `
<!--  <p className="font-bold"> Business Application Industry Content</p> -->
          <p>
           To customize products and services for end customers—and innovate at the speed that product-as-a-service requires—manufacturing customers need an agile, responsive production process. They need solutions that can help you enable a “Intelligent Factory”.  The journey to intelligent factories starts with connecting factory assets—adding sensors to machines and equipment to collect data, then monitoring and adjusting operations accordingly.​
          </p>
          <p>
           Ultimately, you’ll want to connect and monitor factory performance across the globe, using data from smart assets to apply operational insights and further optimize your production processes. This is where even the most advanced manufacturing service providers such as Jabil, or the Industrial Automation giants such as Rockwell Automation, Schneider Automation, Siemens etc, are finding new opportunities by augmenting operational technologies (long powered by Windows embedded technologies), with new IT capabilities such as IoT, AI, Mixed Reality and secure and compliant communication and collaboration cloud capabilities.
          </p>
          <p> <a className="text-blue" href="https://industryhub.transform.microsoft.com/enterprise-commercial/manufacturing?tab=overview"> Learn More </a>  about this Solution Play</p>
       `,
        use_cases: [
          
          // Todo :: Automated Quality Inspection
          {
            id: crypto.randomUUID(),
            title: "Automated Quality Inspection",
            // l3 page link
            link: `automated_quality_inspection`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `
                
                <p>Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. </p>
                <p>
                Automated quality inspection typically leverages AI image analysis (vision) and data from IoT sensors to identify product quality issues in real-time on the production line, triggering an alert for further inspection and/or action if problems are detected.
                </p>
                `,

              // Todo L3 Content
              keyHighlights : {

                decision_makers : ['Primary: Chief Executive Officer, Chief Operations Officer', 'Secondary (Influencers): Head of Quality Control'],
                decision_making_factors : ['Ease of setup', 'Ability to leverage' ,'current infrastructure Cost'],
                desired_business_objectives : ['Improve quality assurance pass rates and product yield by automating inspection with higher accuracy and redirecting human labor to value adding tasks.','Increase customer satisfaction and retention by reducing delivery of defective products.','Reduce Operational Costs by catching anomalies faster, reducing amount of inventory that needs to be scrapped.'],
                customer_pain_points : ['Quality control needs improvement.','Product yields are lower than expected.','Inventory scrap costs are high',' Data is siloed and is not leveraged for strategic decision-making.'],
                proposed_technical_solution : ['Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. ','Automated quality inspection typically leverages AI image analysis (vision) and data from IoT sensors to identify product quality issues in real-time on the production line, triggering an alert for further inspection and/or action if problems are detected.'],
                other_notable_attributes:[],
                products : ['Azure Container Registry, Azure DevOps, Azure IoT Hub, Azure KeyVault, Azure Machine Learning,','Cognitive Services: Vision, Azure SQL, Azure Storage, Docker, Power BI.'],
              },

              idealCostomerProfile : {
                industries: 'Manufacturing & Mobility',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : automated_quality_inspection,
                  image_subtitle : 'Business  Architecture: Automated Quality Inspection',
                  image_link : ''
              },

              partners : [
                {
                  image:  tcs,
                  link :'',
                },
                {
                  image:  capgemini,
                  link :'',
                },
                {
                  image:  wipro,
                  link :'',
                },
                {
                  image:  adobe,
                  link :'',
                },
                {
                  image:  ibm,
                  link :'',
                },
                {
                  image:  accenture,
                  link :'',
                },
                {
                  image:  Ey,
                  link :'',
                },
                {
                  image:  pwc,
                  link :'',
                },
              ]
              },
            ],
          },
            // Todo :: Predictive Maintenance
          {
            id: crypto.randomUUID(),
            title: "Predictive Maintenance",
            // l3 page link
            link: `predictive_maintenance`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Predict motor, equipment, and/or asset issues before they happen and trigger real-time alerts for action with field service teams.
              </p>
              `,

              // Todo L3 Content
              keyHighlights : {

                decision_makers: [
                  'Primary: Head of Supply Chain, Chief Operations Office',
                  'Secondary (Influencers): Head of Supply Chain'
                ],
                decision_making_factors: [
                  'Ease of execution (availability of expert and experienced partners)',
                  'Set-up costs; ability to integrate with legacy equipment'
                ],
                desired_business_objectives: [
                  'Increase machinery uptime by predicting problem areas and solving before they become breaks',
                  'Reduce maintenance costs and repair time by proactively addressing problem areas before it becomes a larger failure',
                  'Reduce inventory carrying costs by accurately understanding spare part inventory needs at any given time'
                ],
                customer_pain_points: [
                  'Downtime is high',
                  'Product yields are lower than expected',
                  'Inventory scrap costs are high',
                  'Data is siloed and is not leveraged for strategic decision-making'
                ],
                proposed_technical_solution: [
                  'Predict motor, equipment, and/or asset issues before they happen and trigger real-time alerts for action with field service teams.'
                ],
                other_notable_attributes: [],
                products: [
                  'Azure Container Registry',
                  'Azure DevOps',
                  'Azure IoT Hub',
                  'Azure KeyVault',
                  'Azure Machine Learning',
                  'Cognitive Services: Vision',
                  'Azure SQL',
                  'Azure Storage',
                  'Docker',
                  'Power BI',
                  'Python'
                ]
              },

              idealCostomerProfile : {
                industries: 'Manufacturing & Mobility',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : predictive_maintainance,
                  image_subtitle : 'Business  Architecture: Predictive Maintenance',
                  image_link : ''
              },

              partners : [
                {
                  image: '',
                  link :'',
                },
              ]
              },
            ],
          },
            // Todo :: Remote Asset Monitoring
          {
            id: crypto.randomUUID(),
            title: "Remote Asset Monitoring",
            // l3 page link
            link: `remote_asset_monitoring`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Monitor and optimize health and performance of individual assets on the shop floor with telemetry data collected in real-time. Connect machines, infrastructure, and production assets.
              </p>
              `,

              // Todo L3 Content
              keyHighlights : {

                decision_makers: [
                  'Chief Legal Officer',
                  'Chief Data Officer',
                  'Chief Operations Officer',
                  'Head of Factory Operations',
                  'Chief Information Officer',
                  'Plant Managers',
                  'VP of Digital Transformation',
                  'VP of Manufacturing'
                ],
                decision_making_factors: [
                  'Ease of execution (availability of expert and experienced)',
                  'Set-up costs; ability to integrate with legacy equipment'
                ],
                desired_business_objectives: [
                  'Higher overall equipment utilization and asset productivity',
                  'Improved employee productivity with freeing up of time for performing more value-added tasks',
                  'High app performance and instant efficiency insights worldwide with low latency'
                ],
                customer_pain_points: [
                  'Need to improve equipment effectiveness and asset productivity by capturing and analyzing all connected shopfloor data',
                  'Need to avoid unplanned downtime due to unexpected machine failures',
                  'Deliver real-time platforms that enable factories to closely monitor daily operation and perform real-time diagnostics remotely'
                ],
                proposed_technical_solution: [   'Monitor and optimize health and performance of individual assets on the shop floor with telemetry data collected in real-time',
                'Connect machines, infrastructure, and production assets'],
                other_notable_attributes: [],
                products: [
               
                ]
              },

              idealCostomerProfile : {
                industries: 'Manufacturing & Mobility',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : '',
                  image_subtitle : '',
                  image_link : ''
              },

              partners : [
                {
                  image: '',
                  link :'',
                },
              ]
              },
            ],
          },
              // Todo :: Document process automation
          {
            id: crypto.randomUUID(),
            title: "Document Process Automation",
            // l3 page link
            link: `document_process_automation`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: '<p>Applied AI Services: Form Recognizer, Azure Logic Apps, Azure Cosmos DB, Power BI, Azure Data Explorer, Bot Framework, Luis</p>',

              // Todo L3 Content
              keyHighlights : {

                decision_makers: [
                  'Chief Legal Officer',
                  'Chief Data Officer',
                  'Chief Operations Officer',
                  'Head of Factory Operations',
                  'Chief Information Officer'
                ],
                decision_making_factors: ['Scalability', 'Cost', 'Efficiency'],
                desired_business_objectives: [
                  'Increase speed to value/speed to insight by reducing document processing times',
                  'Reduce operating expenses through automation of manual processes',
                  'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                ],
                customer_pain_points: [
                  'Handles large volumes of documents and is not able to efficiently capture any rich insights from them',
                  'Investing in expensive manual labor to extract data',
                  'Manual data extraction is inefficient and/or error-prone, resulting in low confidence of accuracy',
                  'More time is spent on extracting data than on analysis, insights, and action'
                ],
                other_notable_attributes: [],
                proposed_technical_solution: ['Applied AI Services: Form Recognizer, Azure Logic Apps, Azure Cosmos DB, Power BI, Azure Data Explorer, Bot Framework, Luis'],
                products: [
                  'Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points'
                ]
              },

              idealCostomerProfile : {
                industries: 'Manufacturing & Mobility',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : document_process_automation,
                  image_subtitle : 'Business  Architecture: Document Process Automation',
                  image_link : ''
              },

              partners : [
                {
                  image: '',
                  link :'',
                },
              ]
              },
            ],
          },
              // Todo :: Factory & Worker Safety
          {
            id: crypto.randomUUID(),
            title: "Factory & Worker Safety",
            // l3 page link
            link: `factory_&_worker_safety`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc:  `
                <p>
                The Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. </p>
                <p>AI can be used to transform IoT data into useful information for improved decision making processes, thus creating a foundation for newer technology such as IoT Data as a Service (IoTDaaS). A growing industry trend is the use of AI and ML in Azure and at the edge to automate quality inspection. </p>
                <p>At a high level, the solutions typically leverage AI image analysis and data from IoT sensors to detect product quality issues in real-time on the production line. By implementing AI-based product quality inspection through AI image analysis, manufacturers not only reduce defects and increase factory yield but also have a direct positive impact on customer satisfaction.</p>
                `,

              // Todo L3 Content
              keyHighlights : {

                decision_makers: [
                  'Primary: Chief Operations Officer, Chief Technology Officer, Chief Supply Chain Officer',
                  'Secondary: Safety Director, VP of Customer Service, VP of Experience, Process and Manufacturing Floor Engineers, Plant Managers, VP of Digital Transformation, VP of Engineering, VP of Manufacturing'
                ],
                decision_making_factors: ['Scalability', 'Cost', 'Efficiency'],
                desired_business_objectives: [
                  'Faster workplace risk detection and response',
                  'Opportunities to redirect human labor to higher value tasks by automating surveillance',
                  'Decreased process disruptions, leading to greater productivity and product yields',
                  'Reduced costs associated with workplace accidents'
                ],
                customer_pain_points: [
                  'Latent visual image analysis delays responses to safety risks and incidents',
                  'Lower worker utility and greater errors in human visual monitoring',
                  'Growing complexity of compliance requirements, especially PPE',
                  'Siloed data and incomplete incident documentation',
                  'Velocity of developing at the edge is slowed by iterative coding and testing in a live environment, increasing costs and delaying time to value'
                ],
                proposed_technical_solution: ['The Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics.','AI can be used to transform IoT data into useful information for improved decision making processes, thus creating a foundation for newer technology such as IoT Data as a Service (IoTDaaS). A growing industry trend is the use of AI and ML in Azure and at the edge to automate quality inspection. ','At a high level, the solutions typically leverage AI image analysis and data from IoT sensors to detect product quality issues in real-time on the production line. By implementing AI-based product quality inspection through AI image analysis, manufacturers not only reduce defects and increase factory yield but also have a direct positive impact on customer satisfaction.'],
                other_notable_attributes: [],
                products: [
                  'Azure Container Registry',
                  'Azure DevOps',
                  'Azure IoT Hub',
                  'Azure KeyVault',
                  'Azure Machine Learning',
                  'Azure SQL',
                  'Azure Storage',
                  'Cognitive Services',
                  'Docker',
                  'Power BI',
                  'Python'
                ]
              },

              idealCostomerProfile : {
                industries: 'Manufacturing & Mobility',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : '',
                  image_subtitle : '',
                  image_link : ''
              },

              partners : [
                {
                  image: '',
                  link :'',
                },
              ]
              },
            ],
          },
            
       
         
        ],
      },

      // 2nd use cases
      {
        id: crypto.randomUUID(),
        title: "Modernize Manufacturing Customer Experience",
        link:  `modernize_manufacturing_customer_experience`,
        content: `<p className="font-bold"> Connected Field Service</p>
            <p>
              An ideal first step in moving toward product-as-a-service is proactively engaging with your customer throughout your product’s lifecycle. With connected field service solutions, you can remotely monitor the smart product you’ve sold to your customer. That way, you can get the insights you need to do predictive maintenance—and minimize your customer’s downtime.
            </p>
<p>
For both predicted and unexpected maintenance issues, you can speed up repair time by getting alerts and dispatching technicians using skills-based assignments—and by empowering service technicians with complete customer insight, real-time guidance, and cross-team collaboration.
</p>
<p className="font-bold"> Connected Sales & Service​
</p>
<p>Delivering your product-as-a-service also means you need to take a new, collaborative approach to the sales process to help sellers navigate your increasingly complex portfolio of products and services, and to build long-term relationships and ongoing customer loyalty.​ With connected sales and service solutions, you can empower your sellers to see the full spectrum of a customer’s needs. Sellers can analyze previous product usage and performance, and then predict potential needs using intelligent tools.​ Sellers can also collaborate with customers to customize product purchases and efficiently execute contracts using configure-price-quote, quote-to-cash, and contract lifecycle management tools.</p>
<p>These tools can shorten the buying cycle and help the customer get precisely what’s needed. And there’s the call center of the future, where you can tap into the insights gleaned from your smart connected products to improve the effectiveness of your customer service agents using virtual agents or bots, like HP is doing to handle the 600 million service inquires they get annually.​</p>
<p> <a href="https://industryhub.transform.microsoft.com/enterprise-commercial/manufacturing?tab=overview">Learn More</a>about this Solution Play</p>
`


        ,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: "",

              // Todo L3 Content
              keyHighlights : {

                decision_makers : ['Primary: Chief Executive Officer, Chief Operations Officer', 'Secondary (Influencers): Head of Quality Control'],
                decision_making_factors : ['Ease of setup', 'Ability to leverage' ,'current infrastructure Cost'],
                desired_business_objectives : ['Improve quality assurance pass rates and product yield by automating inspection with higher accuracy and redirecting human labor to value adding tasks.','Increase customer satisfaction and retention by reducing delivery of defective products.','Reduce Operational Costs by catching anomalies faster, reducing amount of inventory that needs to be scrapped.'],
                customer_pain_points : ['Quality control needs improvement.','Product yields are lower than expected.','Inventory scrap costs are high',' Data is siloed and is not leveraged for strategic decision-making.'],
                proposed_technical_solution : [],
                other_notable_attributes:[],
                products : ['Azure Container Registry, Azure DevOps, Azure IoT Hub, Azure KeyVault, Azure Machine Learning,','Cognitive Services: Vision, Azure SQL, Azure Storage, Docker, Power BI.'],
              },

              idealCostomerProfile : {
                industries: 'Manufacturing & Mobility',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : '',
                  image_subtitle : '',
                  image_link : ''
              },

              partners : [
                {
                  image: '',
                  link :'',
                },
              ]
              },
            ],
          },
        ],
      },

      //  3rd use cases
      {
        id: crypto.randomUUID(),
        title: "Resilient Manufacturing Supply Chain",
        link:  `resilient_manufacturing_supply_chain`,
        content: `
<!--<p className="font-bold"> Business Application Industry Content</p>-->
            <p>
              Transform your manufacturing and supply chain operations using predictive insights and intelligence from AI and Internet of Things (IoT) across planning, production, maintenance, inventory, warehouse, and transportation management to maximize operational efficiency, product quality, and profitability.
            </p>
<p>Microsoft understands that collaboration is required for manufacturers to achieve a truly intelligent supply chain. Our portfolio of supply chain solutions leverages the power, scalability and security of Azure, enabling manufacturers to transform business processes and operate as “mission control,” orchestrating with agility across the value network.</p>
<p> <a href="https://industryhub.transform.microsoft.com/enterprise-commercial/manufacturing?tab=overview">Learn More</a>about this Solution Play</p>
`,

       // Todo :: Demand Forecasting
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Demand Forecasting",
            // l3 page link
            link: `demand_forecasting`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `
                <p>
                Determine future demand to optimize inventory, material and product orders.</p>
                `,

              // Todo L3 Content
              keyHighlights : {

                decision_makers: [
                  'Primary: Head of Supply Chain, Chief Operations Officer, Chief Marketing Officer',
                  'Secondary: Head of Supply Chain'
                ],
                decision_making_factors: [
                  'Expected accuracy and efficiency improvements; ability to quickly adapt solution building blocks',
                  'Ease of execution (availability of development partners); data availability/readiness'
                ],
                desired_business_objectives: [
                  'Improve time to value through increased forecast speed (reducing project time)',
                  'Reduce inventory carrying costs by predicting necessary stock levels at any given time',
                  'Grow revenue by increasing in-stock percentage through stronger forecast accuracy'
                ],
                customer_pain_points: [
                  'Inability to meet customer demand anywhere, on any channel, due to disconnected processes',
                  'Unplanned shortages or surplus',
                  'Organization has limited visibility of key data generated throughout the supply chain (lack of 360 view from materials > production > last mile) resulting in no feedback loop',
                  'Departments operating in silos and restricted data flow among them prevents rapid response to customer demand for fast fulfillment, flexible delivery, and easy returns',
                  'Lack of infrastructure to ensure better inventory management and cost savings'
                ],
                proposed_technical_solution: ['Determine future demand to optimize inventory, material and product orders.'],
                other_notable_attributes: [],
                products: [
                  'Azure Cosmos DB',
                  'Power BI',
                  'Azure Machine Learning',
                  'Azure Synapse Analytics',
                  'Azure Storage'
                ]
              },

              idealCostomerProfile : {
                industries: 'Manufacturing & Mobility',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : demand_forecasting,
                  image_subtitle : 'Business  Architecture: Demand Forecasting',
                  image_link : ''
              },

              partners : [
                {
                  image: '',
                  link :'',
                },
              ]
              },
            ],
          },
        ],
      },

      //  4th use cases
      {
        id: crypto.randomUUID(),
        title: "Unlock Innovation & Introduce New Products",
        link:  `unlock_innovation_&_introduce_new_products`,
        content: `
<!--<p className="font-bold"> Business Application Industry Content</p>-->
            <p>
             You can use all this data coming in from IoT sensors, field service, sales, factories, and the supply chain to speed innovation.
            </p>
<p>With connected product innovation solutions, you can get real-time insight into which products and features customers are using without waiting for customer survey results. And with big computing capacity available on demand, you can iterate the next version of your product much more rapidly using digital twins, as well as simulation and analysis tools. The Automotive industry is doing this on a massive scale with the data coming in from their connected vehicles, and fleets of specially instrumented autonomous vehicles. EFS is doing using this data to teach the next generation of vehicles how to see the real world. But any IoT connected machine provides this opportunity for a digital feedback loop to improve the product innovation process. You can also get more accurate, timely data on which parts failed and what the best problem resolutions were so you can improve product and service performance. These are just a few ways you can analyze data to realize a faster speed-to-market and improve the quality of your products and services, or product-as-a-service!.</p>
<p> <a href="https://industryhub.transform.microsoft.com/enterprise-commercial/manufacturing?tab=overview">Learn More</a>about this Solution Play</p>
`,
        use_cases: [
          // Todo :: Connected Smart Product
          {
            id: crypto.randomUUID(),
            title: "Connected Smart Product",
            // l3 page link
            link: `
            connected_smart_product`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>
                Generate vast stores of data by connecting products in field, creating a repository for manufacturers to innovate in real-time.
                </p>
              `,

              // Todo L3 Content
              keyHighlights : {
                decision_makers: [
                  'Primary: Chief Executive Officer, Chief Operations Officer, Chief Product Officer',
                  'Secondary: VP of Product, Head of Engineering'
                ],
                decision_making_factors: [
                  'Expected accuracy and efficiency improvements',
                  'Ability to quickly adapt solution building blocks',
                  'Ease of execution (availability of development partners)',
                  'Data availability/readiness'
                ],
                desired_business_objectives: [
                  'Shorten the time to market',
                  'Become nimbler in competitive responsiveness',
                  'Prevent bottlenecks and production challenges',
                  'Improve operational efficiencies'
                ],
                customer_pain_points: [
                  'Product lifecycles continue to grow in complexity, causing manufacturers to find new ways gain data-driven visibility into processes and make continual improvements',
                  'Ubiquitous connectivity, dynamic customer demands, and volatile procurement behavior are causing long-term changes in the way products are designed and managed throughout their life cycles',
                  'Need ways to keep pace with rapid product design changes to improve customer satisfaction and retention'
                ],
                proposed_technical_solution: ['Generate vast stores of data by connecting products in field, creating a repository for manufacturers to innovate in real-time.'],
                other_notable_attributes: [],
                products: [
                  'Azure Cosmos DB',
                  'Power BI',
                  'Azure Machine Learning',
                  'Azure Synapse Analytics',
                  'Azure Storage'
                ]
              },

              idealCostomerProfile : {
                industries: 'Manufacturing & Mobility',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : connected_smart_products,
                  image_subtitle : 'Business  Architecture: Connected Smart Products',
                  image_link : ''
              },

              partners : [
                {
                  image: '',
                  link :'',
                },
              ]
              },
            ],
          },
        ],
      },

      // 4th use case
      //
      // {
      //   id: crypto.randomUUID(),
      //   title: "Resilient Operations",
      //   content: ` <div className="flex flex-col gap-4">
      //         <p className="font-bold"> Overview </p>
      //         <p>
      //           Realize the true value of your data by unifying disparate data
      //           sources across the shopper journey, discovering insights that
      //           enable better experiences
      //         </p>
      //       </div>
      //       <div className="flex flex-col gap-4">
      //         <p className="font-bold">Roles </p>
      //         <ul className="list-disc ">
      //           <li className="mx-4">CIO/VP</li>
      //           <li className="mx-4">CDO/VP</li>
      //           <li className="mx-4">COO/VP</li>
      //           <li className="mx-4">CMO/VP (required by all)</li>
      //         </ul>
      //       </div>
      //       <div className="flex flex-col gap-4">
      //         <p className="font-bold">Customer Challenges </p>
      //         <ul className="list-disc ">
      //           <li className="mx-4">
      //             Vast amounts of data in many places makes it hard to make
      //             sense of it or know what's important and what's not
      //           </li>
      //           <li className="mx-4">360-degree view of the customer</li>
      //           <li className="mx-4">
      //             New shopping journeys creating fraud vulnerabilities across
      //             digital and voice channels
      //           </li>
      //         </ul>
      //       </div>
      //       <div className="flex flex-col gap-4">
      //         <p className="font-bold">Desiried Business Outcomes </p>
      //        <p>
      //           Realize the true value of your data by unifying disparate data
      //           sources across the shopper journey, discovering insights that
      //           enable better experiences
      //         </p>
      //         <ul className="list-disc ">
      //           <li className="mx-4">
      //             Gain insights across the complete view of a shopper's journey
      //           </li>
      //           <li className="mx-4">
      //             Unlock omnichannel insights with advanced analytics
      //           </li>
      //           <li className="mx-4">
      //             Protect your revenue from fraud using AI to id patterns and
      //             multi-modal biometrics stop fraudsters
      //           </li>
      //           <li className="mx-4">
      //             Unlock ad revenue using your 1st party shopper data
      //           </li>
      //           <li className="mx-4">
      //             Reduce costs by optimizing shopper journeys and streamlining
      //             automation
      //           </li>
      //         </ul>
      //         <p>
      //
      //           <a
      //             className="text-blue"
      //             target={"_blank"}
      //             href=
      //               "https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview"
      //
      //           >
      //             Learn more
      //           </a>
      //
      //           about this Solution Play
      //         </p>
      //       </div>`,
      //   use_cases: [
      //     {
      //       id: crypto.randomUUID(),
      //       title: "Connected Factories/Digital Twins",
      //       // l3 page link
      //       link: "",
      //       use_cases_content: [
      //         {
      //           subtitle: "Overview",
      //           link: "",
      //           desc: ` <p>
      //         Every industry is facing transformational change and we have a
      //         strategic opportunity in Business Applications to drive long
      //         lasting impact and change for our customers. Industry customers
      //         are facing more challenges than ever before and need a partner to
      //         help them use technology as their key to success. To engage
      //         effectively, we need to leverage the industry value propositions
      //         we have at Microsoft and pair them with a Business Applications
      //         point of view, The assets in this section will help you
      //         demonstrate to customers that you understand their challenges and
      //         how to address them with industry-specific solutions.
      //       </p>
      //       <p>
      //         To learn more about all public and commercial sector industries
      //         and drive effective
      //       </p>
      //       <p>
      //         conversations with your customers visit the
      //         <span className="text-cyan-600">Industry Hub</span> today.
      //       </p>`,
      //         },
      //       ],
      //     },
      //     {
      //       id: crypto.randomUUID(),
      //       title: "Integrated Supply Chain",
      //       // l3 page link
      //       link: "",
      //       use_cases_content: [
      //         {
      //           subtitle: "Overview",
      //           link: "",
      //           desc: ` <p>
      //         Every industry is facing transformational change and we have a
      //         strategic opportunity in Business Applications to drive long
      //         lasting impact and change for our customers. Industry customers
      //         are facing more challenges than ever before and need a partner to
      //         help them use technology as their key to success. To engage
      //         effectively, we need to leverage the industry value propositions
      //         we have at Microsoft and pair them with a Business Applications
      //         point of view, The assets in this section will help you
      //         demonstrate to customers that you understand their challenges and
      //         how to address them with industry-specific solutions.
      //       </p>
      //       <p>
      //         To learn more about all public and commercial sector industries
      //         and drive effective
      //       </p>
      //       <p>
      //         conversations with your customers visit the
      //         <span className="text-cyan-600">Industry Hub</span> today.
      //       </p>`,
      //         },
      //       ],
      //     },
      //     {
      //       id: crypto.randomUUID(),
      //       title: " Connected Businesses",
      //       // l3 page link
      //       link: "",
      //       use_cases_content: [
      //         {
      //           subtitle: "Overview",
      //           link: "",
      //           desc: ` <p>
      //         Every industry is facing transformational change and we have a
      //         strategic opportunity in Business Applications to drive long
      //         lasting impact and change for our customers. Industry customers
      //         are facing more challenges than ever before and need a partner to
      //         help them use technology as their key to success. To engage
      //         effectively, we need to leverage the industry value propositions
      //         we have at Microsoft and pair them with a Business Applications
      //         point of view, The assets in this section will help you
      //         demonstrate to customers that you understand their challenges and
      //         how to address them with industry-specific solutions.
      //       </p>
      //       <p>
      //         To learn more about all public and commercial sector industries
      //         and drive effective
      //       </p>
      //       <p>
      //         conversations with your customers visit the
      //         <span className="text-cyan-600">Industry Hub</span> today.
      //       </p>`,
      //         },
      //       ],
      //     },
      //     {
      //       id: crypto.randomUUID(),
      //       title: "Sustainability",
      //       // l3 page link
      //       link: "",
      //       use_cases_content: [
      //         {
      //           subtitle: "Overview",
      //           link: "",
      //           desc: ` <p>
      //         Every industry is facing transformational change and we have a
      //         strategic opportunity in Business Applications to drive long
      //         lasting impact and change for our customers. Industry customers
      //         are facing more challenges than ever before and need a partner to
      //         help them use technology as their key to success. To engage
      //         effectively, we need to leverage the industry value propositions
      //         we have at Microsoft and pair them with a Business Applications
      //         point of view, The assets in this section will help you
      //         demonstrate to customers that you understand their challenges and
      //         how to address them with industry-specific solutions.
      //       </p>
      //       <p>
      //         To learn more about all public and commercial sector industries
      //         and drive effective
      //       </p>
      //       <p>
      //         conversations with your customers visit the
      //         <span className="text-cyan-600">Industry Hub</span> today.
      //       </p>`,
      //         },
      //       ],
      //     },
      //     {
      //       id: crypto.randomUUID(),
      //       title: " Automated Quality Inspection",
      //       // l3 page link
      //       link: "",
      //       use_cases_content: [
      //         {
      //           subtitle: "Overview",
      //           link: "",
      //           desc: `  <p>
      //           Automated quality control improves inspection measurement
      //           reliability. Accurate measurements on complex parts and high
      //           throughput production lines is assured with automated inspections.
      //           These systems can capture more data for large quantities of parts
      //           faster. <br />
      //           <br />
      //           Artificial Intelligence of Things (AlT) is the combination of
      //           artificial intelligence (AI) technologies with the Internet of
      //           Things (loT) infrastructure to achieve more efficient loT
      //           operations, improve human-machine interactions and enhance data
      //           management and analytics. Automated quality inspection typically
      //           leverages Al image analysis (vision) and data from loT sensors to
      //           identify product quality issues in real-time on the production
      //           line, triggering an alert for further inspection and/or action if
      //           problems are detected. <br />
      //         </p>
      //         <p>
      //           <p className="font-bold pr-4 ">
      //
      //             Key Services / Product Stack
      //           </p>
      //           <br />
      //           Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
      //           Key/ault, Azure Machine Learning, Cognitive Services: Vision,
      //           Azure SQL, Azure Storage, Docker, Power BI
      //         </p>
      //       </div>`,
      //         },
      //       ],
      //     },
      //   ],
      // },

      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Use Cases",
        link:  "all_use_cases",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },
    ],
  },

  //  Todo :: Financial Services
  {
    id: crypto.randomUUID(),
    title: "Financial Services",
    link: "financial",
    heading: "Financial Services Overview",
    overview:
      "The market for the movement of people and goods is one of the largest and most dynamic ecosystems globally which represents $6T in global revenues today and is projected to grow to $11T by 2030 (~6% CAGR). This shift is disrupting the ecosystem, creating the opportunity for new market entrants to become future market leaders and driving traditional players to partner with technology providers who can help them reinvent their business models and deliver next generation experiences across automotive, mobility, and transportation. While we represent these industry trends separately, the alignment of automotive, mobility, and transportation was purposeful as the lines between each continue to converge.",
    
    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Accelerated Innovations",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 2nd use cases
      {
        id: crypto.randomUUID(),
        title: "Deliver Differentiated CX",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      //  3rd use cases
      {
        id: crypto.randomUUID(),
        title: "Emerging Mobility Services",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 4th use case
      {
        id: crypto.randomUUID(),
        title: "Resilient Operations",
        content: ` <div className="flex flex-col gap-4">
              <p className="font-bold"> Overview </p>
              <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Roles </p>
              <ul className="list-disc ">
                <li className="mx-4">CIO/VP</li>
                <li className="mx-4">CDO/VP</li>
                <li className="mx-4">COO/VP</li>
                <li className="mx-4">CMO/VP (required by all)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Customer Challenges </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Vast amounts of data in many places makes it hard to make
                  sense of it or know what's important and what's not
                </li>
                <li className="mx-4">360-degree view of the customer</li>
                <li className="mx-4">
                  New shopping journeys creating fraud vulnerabilities across
                  digital and voice channels
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Desiried Business Outcomes </p>
             <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Gain insights across the complete view of a shopper's journey
                </li>
                <li className="mx-4">
                  Unlock omnichannel insights with advanced analytics
                </li>
                <li className="mx-4">
                  Protect your revenue from fraud using AI to id patterns and
                  multi-modal biometrics stop fraudsters
                </li>
                <li className="mx-4">
                  Unlock ad revenue using your 1st party shopper data
                </li>
                <li className="mx-4">
                  Reduce costs by optimizing shopper journeys and streamlining
                  automation
                </li>
              </ul>
              <p>
             
                <a
                  className="text-blue"
                  target={"_blank"}
                  href=
                    "https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview"
                  
                >
                  Learn more
                </a>
              
                about this Solution Play
              </p>
            </div>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },

      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Usecases",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },
    ],
  },

   //  Todo :: Healthcare
   {
    id: crypto.randomUUID(),
    title: "Healthcare",
    link: "healthcare",
    heading: "Healthcare Overview",
    overview:
      "The market for the movement of people and goods is one of the largest and most dynamic ecosystems globally which represents $6T in global revenues today and is projected to grow to $11T by 2030 (~6% CAGR). This shift is disrupting the ecosystem, creating the opportunity for new market entrants to become future market leaders and driving traditional players to partner with technology providers who can help them reinvent their business models and deliver next generation experiences across automotive, mobility, and transportation. While we represent these industry trends separately, the alignment of automotive, mobility, and transportation was purposeful as the lines between each continue to converge.",
    
    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Accelerated Innovations",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 2nd use cases
      {
        id: crypto.randomUUID(),
        title: "Deliver Differentiated CX",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      //  3rd use cases
      {
        id: crypto.randomUUID(),
        title: "Emerging Mobility Services",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 4th use case
      {
        id: crypto.randomUUID(),
        title: "Resilient Operations",
        content: ` <div className="flex flex-col gap-4">
              <p className="font-bold"> Overview </p>
              <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Roles </p>
              <ul className="list-disc ">
                <li className="mx-4">CIO/VP</li>
                <li className="mx-4">CDO/VP</li>
                <li className="mx-4">COO/VP</li>
                <li className="mx-4">CMO/VP (required by all)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Customer Challenges </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Vast amounts of data in many places makes it hard to make
                  sense of it or know what's important and what's not
                </li>
                <li className="mx-4">360-degree view of the customer</li>
                <li className="mx-4">
                  New shopping journeys creating fraud vulnerabilities across
                  digital and voice channels
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Desiried Business Outcomes </p>
             <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Gain insights across the complete view of a shopper's journey
                </li>
                <li className="mx-4">
                  Unlock omnichannel insights with advanced analytics
                </li>
                <li className="mx-4">
                  Protect your revenue from fraud using AI to id patterns and
                  multi-modal biometrics stop fraudsters
                </li>
                <li className="mx-4">
                  Unlock ad revenue using your 1st party shopper data
                </li>
                <li className="mx-4">
                  Reduce costs by optimizing shopper journeys and streamlining
                  automation
                </li>
              </ul>
              <p>
             
                <a
                  className="text-blue"
                  target={"_blank"}
                  href=
                    "https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview"
                  
                >
                  Learn more
                </a>
              
                about this Solution Play
              </p>
            </div>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },

      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Usecases",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },
    ],
  },
  
  //  Todo :: Retail & CG
  {
    id: crypto.randomUUID(),
    title: "Retail & CG",
    link: "retail_and_cg",
    heading: "Retail & CG Overview",
    overview:
      "The market for the movement of people and goods is one of the largest and most dynamic ecosystems globally which represents $6T in global revenues today and is projected to grow to $11T by 2030 (~6% CAGR). This shift is disrupting the ecosystem, creating the opportunity for new market entrants to become future market leaders and driving traditional players to partner with technology providers who can help them reinvent their business models and deliver next generation experiences across automotive, mobility, and transportation. While we represent these industry trends separately, the alignment of automotive, mobility, and transportation was purposeful as the lines between each continue to converge.",
    
    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Accelerated Innovations",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 2nd use cases
      {
        id: crypto.randomUUID(),
        title: "Deliver Differentiated CX",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      //  3rd use cases
      {
        id: crypto.randomUUID(),
        title: "Emerging Mobility Services",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 4th use case
      {
        id: crypto.randomUUID(),
        title: "Resilient Operations",
        content: ` <div className="flex flex-col gap-4">
              <p className="font-bold"> Overview </p>
              <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Roles </p>
              <ul className="list-disc ">
                <li className="mx-4">CIO/VP</li>
                <li className="mx-4">CDO/VP</li>
                <li className="mx-4">COO/VP</li>
                <li className="mx-4">CMO/VP (required by all)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Customer Challenges </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Vast amounts of data in many places makes it hard to make
                  sense of it or know what's important and what's not
                </li>
                <li className="mx-4">360-degree view of the customer</li>
                <li className="mx-4">
                  New shopping journeys creating fraud vulnerabilities across
                  digital and voice channels
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Desiried Business Outcomes </p>
             <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Gain insights across the complete view of a shopper's journey
                </li>
                <li className="mx-4">
                  Unlock omnichannel insights with advanced analytics
                </li>
                <li className="mx-4">
                  Protect your revenue from fraud using AI to id patterns and
                  multi-modal biometrics stop fraudsters
                </li>
                <li className="mx-4">
                  Unlock ad revenue using your 1st party shopper data
                </li>
                <li className="mx-4">
                  Reduce costs by optimizing shopper journeys and streamlining
                  automation
                </li>
              </ul>
              <p>
             
                <a
                  className="text-blue"
                  target={"_blank"}
                  href=
                    "https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview"
                  
                >
                  Learn more
                </a>
              
                about this Solution Play
              </p>
            </div>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },

      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Usecases",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },
    ],
  },

  //  Todo :: Government
  {
    id: crypto.randomUUID(),
    title: "Government",
    link: "government",
    heading: "Government Overview",
    overview:
      "The market for the movement of people and goods is one of the largest and most dynamic ecosystems globally which represents $6T in global revenues today and is projected to grow to $11T by 2030 (~6% CAGR). This shift is disrupting the ecosystem, creating the opportunity for new market entrants to become future market leaders and driving traditional players to partner with technology providers who can help them reinvent their business models and deliver next generation experiences across automotive, mobility, and transportation. While we represent these industry trends separately, the alignment of automotive, mobility, and transportation was purposeful as the lines between each continue to converge.",
    
    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Accelerated Innovations",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 2nd use cases
      {
        id: crypto.randomUUID(),
        title: "Deliver Differentiated CX",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      //  3rd use cases
      {
        id: crypto.randomUUID(),
        title: "Emerging Mobility Services",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 4th use case
      {
        id: crypto.randomUUID(),
        title: "Resilient Operations",
        content: ` <div className="flex flex-col gap-4">
              <p className="font-bold"> Overview </p>
              <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Roles </p>
              <ul className="list-disc ">
                <li className="mx-4">CIO/VP</li>
                <li className="mx-4">CDO/VP</li>
                <li className="mx-4">COO/VP</li>
                <li className="mx-4">CMO/VP (required by all)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Customer Challenges </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Vast amounts of data in many places makes it hard to make
                  sense of it or know what's important and what's not
                </li>
                <li className="mx-4">360-degree view of the customer</li>
                <li className="mx-4">
                  New shopping journeys creating fraud vulnerabilities across
                  digital and voice channels
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Desiried Business Outcomes </p>
             <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Gain insights across the complete view of a shopper's journey
                </li>
                <li className="mx-4">
                  Unlock omnichannel insights with advanced analytics
                </li>
                <li className="mx-4">
                  Protect your revenue from fraud using AI to id patterns and
                  multi-modal biometrics stop fraudsters
                </li>
                <li className="mx-4">
                  Unlock ad revenue using your 1st party shopper data
                </li>
                <li className="mx-4">
                  Reduce costs by optimizing shopper journeys and streamlining
                  automation
                </li>
              </ul>
              <p>
             
                <a
                  className="text-blue"
                  target={"_blank"}
                  href=
                    "https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview"
                  
                >
                  Learn more
                </a>
              
                about this Solution Play
              </p>
            </div>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },

      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Usecases",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },
    ],
  },


  // Todo :: Energy
  {
    id: crypto.randomUUID(),
    title: "Energy",
    link: "energy",
    heading: "Energy Overview",
    overview:
      "The market for the movement of people and goods is one of the largest and most dynamic ecosystems globally which represents $6T in global revenues today and is projected to grow to $11T by 2030 (~6% CAGR). This shift is disrupting the ecosystem, creating the opportunity for new market entrants to become future market leaders and driving traditional players to partner with technology providers who can help them reinvent their business models and deliver next generation experiences across automotive, mobility, and transportation. While we represent these industry trends separately, the alignment of automotive, mobility, and transportation was purposeful as the lines between each continue to converge.",
    
    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Accelerated Innovations",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>
          <p>
            Every industry is facing transformational change and we have a
            strategic opportunity in Business Applications to drive long
            lasting impact and change for our customers. Industry customers
            are facing more challenges than ever before and need a partner to
            help them use technology as their key to success. To engage
            effectively, we need to leverage the industry value propositions
            we have at Microsoft and pair them with a Business Applications
            point of view.
          </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 2nd use cases
      {
        id: crypto.randomUUID(),
        title: "Deliver Differentiated CX",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      //  3rd use cases
      {
        id: crypto.randomUUID(),
        title: "Emerging Mobility Services",
        content: `<p className="font-bold"> Business Application Industry Content</p>
            <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view.
            </p>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
        ],
      },

      // 4th use case
      {
        id: crypto.randomUUID(),
        title: "Resilient Operations",
        content: ` <div className="flex flex-col gap-4">
              <p className="font-bold"> Overview </p>
              <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Roles </p>
              <ul className="list-disc ">
                <li className="mx-4">CIO/VP</li>
                <li className="mx-4">CDO/VP</li>
                <li className="mx-4">COO/VP</li>
                <li className="mx-4">CMO/VP (required by all)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Customer Challenges </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Vast amounts of data in many places makes it hard to make
                  sense of it or know what's important and what's not
                </li>
                <li className="mx-4">360-degree view of the customer</li>
                <li className="mx-4">
                  New shopping journeys creating fraud vulnerabilities across
                  digital and voice channels
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Desiried Business Outcomes </p>
             <p>
                Realize the true value of your data by unifying disparate data
                sources across the shopper journey, discovering insights that
                enable better experiences
              </p>
              <ul className="list-disc ">
                <li className="mx-4">
                  Gain insights across the complete view of a shopper's journey
                </li>
                <li className="mx-4">
                  Unlock omnichannel insights with advanced analytics
                </li>
                <li className="mx-4">
                  Protect your revenue from fraud using AI to id patterns and
                  multi-modal biometrics stop fraudsters
                </li>
                <li className="mx-4">
                  Unlock ad revenue using your 1st party shopper data
                </li>
                <li className="mx-4">
                  Reduce costs by optimizing shopper journeys and streamlining
                  automation
                </li>
              </ul>
              <p>
             
                <a
                  className="text-blue"
                  target={"_blank"}
                  href=
                    "https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview"
                  
                >
                  Learn more
                </a>
              
                about this Solution Play
              </p>
            </div>`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },

      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Usecases",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Autonomous Dev Workflow",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                  "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Connected Vehicle",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Customer Data Platform",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Data Sharing & Monetization",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Every industry is facing transformational change and we have a
                strategic opportunity in Business Applications to drive long
                lasting impact and change for our customers. Industry customers
                are facing more challenges than ever before and need a partner to
                help them use technology as their key to success. To engage
                effectively, we need to leverage the industry value propositions
                we have at Microsoft and pair them with a Business Applications
                point of view, The assets in this section will help you
                demonstrate to customers that you understand their challenges and
                how to address them with industry-specific solutions.
              </p>
              <p>
                To learn more about all public and commercial sector industries
                and drive effective
              </p>
              <p>
                conversations with your customers visit the
                <span className="text-cyan-600">Industry Hub</span> today.
              </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Connected Factories/Digital Twins",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Integrated Supply Chain",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Connected Businesses",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sustainability",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Every industry is facing transformational change and we have a
              strategic opportunity in Business Applications to drive long
              lasting impact and change for our customers. Industry customers
              are facing more challenges than ever before and need a partner to
              help them use technology as their key to success. To engage
              effectively, we need to leverage the industry value propositions
              we have at Microsoft and pair them with a Business Applications
              point of view, The assets in this section will help you
              demonstrate to customers that you understand their challenges and
              how to address them with industry-specific solutions.
            </p>
            <p>
              To learn more about all public and commercial sector industries
              and drive effective
            </p>
            <p>
              conversations with your customers visit the
              <span className="text-cyan-600">Industry Hub</span> today.
            </p>`,
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: " Automated Quality Inspection",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `  <p>
                Automated quality control improves inspection measurement
                reliability. Accurate measurements on complex parts and high
                throughput production lines is assured with automated inspections.
                These systems can capture more data for large quantities of parts
                faster. <br />
                <br />
                Artificial Intelligence of Things (AlT) is the combination of
                artificial intelligence (AI) technologies with the Internet of
                Things (loT) infrastructure to achieve more efficient loT
                operations, improve human-machine interactions and enhance data
                management and analytics. Automated quality inspection typically
                leverages Al image analysis (vision) and data from loT sensors to
                identify product quality issues in real-time on the production
                line, triggering an alert for further inspection and/or action if
                problems are detected. <br />
              </p>
              <p>
                <p className="font-bold pr-4 ">
                  
                  Key Services / Product Stack
                </p>
                <br />
                Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
                Key/ault, Azure Machine Learning, Cognitive Services: Vision,
                Azure SQL, Azure Storage, Docker, Power BI
              </p>
            </div>`,
              },
            ],
          },
        ],
      },
    ],
  },

  //  Todo :: Horizontal
  // { id: crypto.randomUUID(), title: "Horizontal", link: "horizontal" },

  //  Todo :: Manufacturing
  // {
  //   id: crypto.randomUUID(),
  //   title: "Manufacturing",
  //   link: "manufacturing",
  //   solution_plays: [
  //     // 1st use cases
  //     {
  //       id: crypto.randomUUID(),
  //       title: "Accelerated Innovations",
  //       content: `
  //       <p className="font-bold"> Business Application Industry Content</p>
  //         <p>
  //           Every industry is facing transformational change and we have a
  //           strategic opportunity in Business Applications to drive long
  //           lasting impact and change for our customers. Industry customers
  //           are facing more challenges than ever before and need a partner to
  //           help them use technology as their key to success. To engage
  //           effectively, we need to leverage the industry value propositions
  //           we have at Microsoft and pair them with a Business Applications
  //           point of view.
  //         </p>
  //         <p>
  //           Every industry is facing transformational change and we have a
  //           strategic opportunity in Business Applications to drive long
  //           lasting impact and change for our customers. Industry customers
  //           are facing more challenges than ever before and need a partner to
  //           help them use technology as their key to success. To engage
  //           effectively, we need to leverage the industry value propositions
  //           we have at Microsoft and pair them with a Business Applications
  //           point of view.
  //         </p>
  //         <p>
  //           Every industry is facing transformational change and we have a
  //           strategic opportunity in Business Applications to drive long
  //           lasting impact and change for our customers. Industry customers
  //           are facing more challenges than ever before and need a partner to
  //           help them use technology as their key to success. To engage
  //           effectively, we need to leverage the industry value propositions
  //           we have at Microsoft and pair them with a Business Applications
  //           point of view.
  //         </p>
  //         <p>
  //           Every industry is facing transformational change and we have a
  //           strategic opportunity in Business Applications to drive long
  //           lasting impact and change for our customers. Industry customers
  //           are facing more challenges than ever before and need a partner to
  //           help them use technology as their key to success. To engage
  //           effectively, we need to leverage the industry value propositions
  //           we have at Microsoft and pair them with a Business Applications
  //           point of view.
  //         </p>`,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Autonomous Dev Workflow",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link:
  //                 "/industry/resilient_operations/Automated_quality_inspection",

  //               desc: `<p>Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Connected Vehicle",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },

  //     // 2nd use cases
  //     {
  //       id: crypto.randomUUID(),
  //       title: "Deliver Differentiated CX",
  //       content: `<p className="font-bold"> Business Application Industry Content</p>
  //           <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view.
  //           </p>`,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Customer Data Platform",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },

  //     //  3rd use cases
  //     {
  //       id: crypto.randomUUID(),
  //       title: "Emerging Mobility Services",
  //       content: `<p className="font-bold"> Business Application Industry Content</p>
  //           <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view.
  //           </p>`,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Data Sharing & Monetization",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },

  //     // 4th use case
  //     {
  //       id: crypto.randomUUID(),
  //       title: "Resilient Operations",
  //       content: ` <div className="flex flex-col gap-4">
  //             <p className="font-bold"> Overview </p>
  //             <p>
  //               Realize the true value of your data by unifying disparate data
  //               sources across the shopper journey, discovering insights that
  //               enable better experiences
  //             </p>
  //           </div>
  //           <div className="flex flex-col gap-4">
  //             <p className="font-bold">Roles </p>
  //             <ul className="list-disc ">
  //               <li className="mx-4">CIO/VP</li>
  //               <li className="mx-4">CDO/VP</li>
  //               <li className="mx-4">COO/VP</li>
  //               <li className="mx-4">CMO/VP (required by all)</li>
  //             </ul>
  //           </div>
  //           <div className="flex flex-col gap-4">
  //             <p className="font-bold">Customer Challenges </p>
  //             <ul className="list-disc ">
  //               <li className="mx-4">
  //                 Vast amounts of data in many places makes it hard to make
  //                 sense of it or know what's important and what's not
  //               </li>
  //               <li className="mx-4">360-degree view of the customer</li>
  //               <li className="mx-4">
  //                 New shopping journeys creating fraud vulnerabilities across
  //                 digital and voice channels
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="flex flex-col gap-4">
  //             <p className="font-bold">Desiried Business Outcomes </p>
  //            <p>
  //               Realize the true value of your data by unifying disparate data
  //               sources across the shopper journey, discovering insights that
  //               enable better experiences
  //             </p>
  //             <ul className="list-disc ">
  //               <li className="mx-4">
  //                 Gain insights across the complete view of a shopper's journey
  //               </li>
  //               <li className="mx-4">
  //                 Unlock omnichannel insights with advanced analytics
  //               </li>
  //               <li className="mx-4">
  //                 Protect your revenue from fraud using AI to id patterns and
  //                 multi-modal biometrics stop fraudsters
  //               </li>
  //               <li className="mx-4">
  //                 Unlock ad revenue using your 1st party shopper data
  //               </li>
  //               <li className="mx-4">
  //                 Reduce costs by optimizing shopper journeys and streamlining
  //                 automation
  //               </li>
  //             </ul>
  //             <p>
             
  //               <a
  //                 className="text-blue"
  //                 target={"_blank"}
  //                 href=
  //                   "https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview"
                  
  //               >
  //                 Learn more
  //               </a>
              
  //               about this Solution Play
  //             </p>
  //           </div>`,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Connected Factories/Digital Twins",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Integrated Supply Chain",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: " Connected Businesses",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Sustainability",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: " Automated Quality Inspection",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: `  <p>
  //               Automated quality control improves inspection measurement
  //               reliability. Accurate measurements on complex parts and high
  //               throughput production lines is assured with automated inspections.
  //               These systems can capture more data for large quantities of parts
  //               faster. <br />
  //               <br />
  //               Artificial Intelligence of Things (AlT) is the combination of
  //               artificial intelligence (AI) technologies with the Internet of
  //               Things (loT) infrastructure to achieve more efficient loT
  //               operations, improve human-machine interactions and enhance data
  //               management and analytics. Automated quality inspection typically
  //               leverages Al image analysis (vision) and data from loT sensors to
  //               identify product quality issues in real-time on the production
  //               line, triggering an alert for further inspection and/or action if
  //               problems are detected. <br />
  //             </p>
  //             <p>
  //               <p className="font-bold pr-4 ">
                  
  //                 Key Services / Product Stack
  //               </p>
  //               <br />
  //               Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
  //               Key/ault, Azure Machine Learning, Cognitive Services: Vision,
  //               Azure SQL, Azure Storage, Docker, Power BI
  //             </p>
  //           </div>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },

  //     // 5th all use cases
  //     {
  //       id: crypto.randomUUID(),
  //       title: "All Usecases",
  //       content: `
  //       <p className="font-bold"> Business Application Industry Content</p>
  //         `,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Autonomous Dev Workflow",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link:
  //                 "/industry/resilient_operations/Automated_quality_inspection",

  //               desc: `<p>Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },

  //         {
  //           id: crypto.randomUUID(),
  //           title: "Connected Vehicle",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Customer Data Platform",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Data Sharing & Monetization",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Connected Factories/Digital Twins",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Integrated Supply Chain",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: " Connected Businesses",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Sustainability",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: " Automated Quality Inspection",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: `  <p>
  //               Automated quality control improves inspection measurement
  //               reliability. Accurate measurements on complex parts and high
  //               throughput production lines is assured with automated inspections.
  //               These systems can capture more data for large quantities of parts
  //               faster. <br />
  //               <br />
  //               Artificial Intelligence of Things (AlT) is the combination of
  //               artificial intelligence (AI) technologies with the Internet of
  //               Things (loT) infrastructure to achieve more efficient loT
  //               operations, improve human-machine interactions and enhance data
  //               management and analytics. Automated quality inspection typically
  //               leverages Al image analysis (vision) and data from loT sensors to
  //               identify product quality issues in real-time on the production
  //               line, triggering an alert for further inspection and/or action if
  //               problems are detected. <br />
  //             </p>
  //             <p>
  //               <p className="font-bold pr-4 ">
                  
  //                 Key Services / Product Stack
  //               </p>
  //               <br />
  //               Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
  //               Key/ault, Azure Machine Learning, Cognitive Services: Vision,
  //               Azure SQL, Azure Storage, Docker, Power BI
  //             </p>
  //           </div>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  //  Todo :: Media & Entertainment
  // {
  //   id: crypto.randomUUID(),
  //   title: "Media & Entertainment",
  //   link: "media_&_entertainment",
  //   heading: "Media & Entertainment Overview",
  //   overview:
  //     "The market for the movement of people and goods is one of the largest and most dynamic ecosystems globally which represents $6T in global revenues today and is projected to grow to $11T by 2030 (~6% CAGR). This shift is disrupting the ecosystem, creating the opportunity for new market entrants to become future market leaders and driving traditional players to partner with technology providers who can help them reinvent their business models and deliver next generation experiences across automotive, mobility, and transportation. While we represent these industry trends separately, the alignment of automotive, mobility, and transportation was purposeful as the lines between each continue to converge.",
    
  //   solution_plays: [
  //     // 1st use cases
  //     {
  //       id: crypto.randomUUID(),
  //       title: "Accelerated Innovations",
  //       content: `
  //       <p className="font-bold"> Business Application Industry Content</p>
  //         <p>
  //           Every industry is facing transformational change and we have a
  //           strategic opportunity in Business Applications to drive long
  //           lasting impact and change for our customers. Industry customers
  //           are facing more challenges than ever before and need a partner to
  //           help them use technology as their key to success. To engage
  //           effectively, we need to leverage the industry value propositions
  //           we have at Microsoft and pair them with a Business Applications
  //           point of view.
  //         </p>
  //         <p>
  //           Every industry is facing transformational change and we have a
  //           strategic opportunity in Business Applications to drive long
  //           lasting impact and change for our customers. Industry customers
  //           are facing more challenges than ever before and need a partner to
  //           help them use technology as their key to success. To engage
  //           effectively, we need to leverage the industry value propositions
  //           we have at Microsoft and pair them with a Business Applications
  //           point of view.
  //         </p>
  //         <p>
  //           Every industry is facing transformational change and we have a
  //           strategic opportunity in Business Applications to drive long
  //           lasting impact and change for our customers. Industry customers
  //           are facing more challenges than ever before and need a partner to
  //           help them use technology as their key to success. To engage
  //           effectively, we need to leverage the industry value propositions
  //           we have at Microsoft and pair them with a Business Applications
  //           point of view.
  //         </p>
  //         <p>
  //           Every industry is facing transformational change and we have a
  //           strategic opportunity in Business Applications to drive long
  //           lasting impact and change for our customers. Industry customers
  //           are facing more challenges than ever before and need a partner to
  //           help them use technology as their key to success. To engage
  //           effectively, we need to leverage the industry value propositions
  //           we have at Microsoft and pair them with a Business Applications
  //           point of view.
  //         </p>`,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Autonomous Dev Workflow",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link:
  //                 "/industry/resilient_operations/Automated_quality_inspection",

  //               desc: `<p>Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Connected Vehicle",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },

  //     // 2nd use cases
  //     {
  //       id: crypto.randomUUID(),
  //       title: "Deliver Differentiated CX",
  //       content: `<p className="font-bold"> Business Application Industry Content</p>
  //           <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view.
  //           </p>`,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Customer Data Platform",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },

  //     //  3rd use cases
  //     {
  //       id: crypto.randomUUID(),
  //       title: "Emerging Mobility Services",
  //       content: `<p className="font-bold"> Business Application Industry Content</p>
  //           <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view.
  //           </p>`,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Data Sharing & Monetization",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },

  //     // 4th use case
  //     {
  //       id: crypto.randomUUID(),
  //       title: "Resilient Operations",
  //       content: ` <div className="flex flex-col gap-4">
  //             <p className="font-bold"> Overview </p>
  //             <p>
  //               Realize the true value of your data by unifying disparate data
  //               sources across the shopper journey, discovering insights that
  //               enable better experiences
  //             </p>
  //           </div>
  //           <div className="flex flex-col gap-4">
  //             <p className="font-bold">Roles </p>
  //             <ul className="list-disc ">
  //               <li className="mx-4">CIO/VP</li>
  //               <li className="mx-4">CDO/VP</li>
  //               <li className="mx-4">COO/VP</li>
  //               <li className="mx-4">CMO/VP (required by all)</li>
  //             </ul>
  //           </div>
  //           <div className="flex flex-col gap-4">
  //             <p className="font-bold">Customer Challenges </p>
  //             <ul className="list-disc ">
  //               <li className="mx-4">
  //                 Vast amounts of data in many places makes it hard to make
  //                 sense of it or know what's important and what's not
  //               </li>
  //               <li className="mx-4">360-degree view of the customer</li>
  //               <li className="mx-4">
  //                 New shopping journeys creating fraud vulnerabilities across
  //                 digital and voice channels
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="flex flex-col gap-4">
  //             <p className="font-bold">Desiried Business Outcomes </p>
  //            <p>
  //               Realize the true value of your data by unifying disparate data
  //               sources across the shopper journey, discovering insights that
  //               enable better experiences
  //             </p>
  //             <ul className="list-disc ">
  //               <li className="mx-4">
  //                 Gain insights across the complete view of a shopper's journey
  //               </li>
  //               <li className="mx-4">
  //                 Unlock omnichannel insights with advanced analytics
  //               </li>
  //               <li className="mx-4">
  //                 Protect your revenue from fraud using AI to id patterns and
  //                 multi-modal biometrics stop fraudsters
  //               </li>
  //               <li className="mx-4">
  //                 Unlock ad revenue using your 1st party shopper data
  //               </li>
  //               <li className="mx-4">
  //                 Reduce costs by optimizing shopper journeys and streamlining
  //                 automation
  //               </li>
  //             </ul>
  //             <p>
             
  //               <a
  //                 className="text-blue"
  //                 target={"_blank"}
  //                 href=
  //                   "https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview"
                  
  //               >
  //                 Learn more
  //               </a>
              
  //               about this Solution Play
  //             </p>
  //           </div>`,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Connected Factories/Digital Twins",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Integrated Supply Chain",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: " Connected Businesses",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Sustainability",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: " Automated Quality Inspection",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: `  <p>
  //               Automated quality control improves inspection measurement
  //               reliability. Accurate measurements on complex parts and high
  //               throughput production lines is assured with automated inspections.
  //               These systems can capture more data for large quantities of parts
  //               faster. <br />
  //               <br />
  //               Artificial Intelligence of Things (AlT) is the combination of
  //               artificial intelligence (AI) technologies with the Internet of
  //               Things (loT) infrastructure to achieve more efficient loT
  //               operations, improve human-machine interactions and enhance data
  //               management and analytics. Automated quality inspection typically
  //               leverages Al image analysis (vision) and data from loT sensors to
  //               identify product quality issues in real-time on the production
  //               line, triggering an alert for further inspection and/or action if
  //               problems are detected. <br />
  //             </p>
  //             <p>
  //               <p className="font-bold pr-4 ">
                  
  //                 Key Services / Product Stack
  //               </p>
  //               <br />
  //               Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
  //               Key/ault, Azure Machine Learning, Cognitive Services: Vision,
  //               Azure SQL, Azure Storage, Docker, Power BI
  //             </p>
  //           </div>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },

  //     // 5th all use cases
  //     {
  //       id: crypto.randomUUID(),
  //       title: "All Usecases",
  //       content: `
  //       <p className="font-bold"> Business Application Industry Content</p>
  //         `,
  //       use_cases: [
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Autonomous Dev Workflow",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link:
  //                 "/industry/resilient_operations/Automated_quality_inspection",

  //               desc: `<p>Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },

  //         {
  //           id: crypto.randomUUID(),
  //           title: "Connected Vehicle",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Customer Data Platform",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Data Sharing & Monetization",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //               Every industry is facing transformational change and we have a
  //               strategic opportunity in Business Applications to drive long
  //               lasting impact and change for our customers. Industry customers
  //               are facing more challenges than ever before and need a partner to
  //               help them use technology as their key to success. To engage
  //               effectively, we need to leverage the industry value propositions
  //               we have at Microsoft and pair them with a Business Applications
  //               point of view, The assets in this section will help you
  //               demonstrate to customers that you understand their challenges and
  //               how to address them with industry-specific solutions.
  //             </p>
  //             <p>
  //               To learn more about all public and commercial sector industries
  //               and drive effective
  //             </p>
  //             <p>
  //               conversations with your customers visit the
  //               <span className="text-cyan-600">Industry Hub</span> today.
  //             </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Connected Factories/Digital Twins",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Integrated Supply Chain",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: " Connected Businesses",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: "Sustainability",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: ` <p>
  //             Every industry is facing transformational change and we have a
  //             strategic opportunity in Business Applications to drive long
  //             lasting impact and change for our customers. Industry customers
  //             are facing more challenges than ever before and need a partner to
  //             help them use technology as their key to success. To engage
  //             effectively, we need to leverage the industry value propositions
  //             we have at Microsoft and pair them with a Business Applications
  //             point of view, The assets in this section will help you
  //             demonstrate to customers that you understand their challenges and
  //             how to address them with industry-specific solutions.
  //           </p>
  //           <p>
  //             To learn more about all public and commercial sector industries
  //             and drive effective
  //           </p>
  //           <p>
  //             conversations with your customers visit the
  //             <span className="text-cyan-600">Industry Hub</span> today.
  //           </p>`,
  //             },
  //           ],
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           title: " Automated Quality Inspection",
  //           // l3 page link
  //           link: "",
  //           use_cases_content: [
  //             {
  //               subtitle: "Overview",
  //               link: "",
  //               desc: `  <p>
  //               Automated quality control improves inspection measurement
  //               reliability. Accurate measurements on complex parts and high
  //               throughput production lines is assured with automated inspections.
  //               These systems can capture more data for large quantities of parts
  //               faster. <br />
  //               <br />
  //               Artificial Intelligence of Things (AlT) is the combination of
  //               artificial intelligence (AI) technologies with the Internet of
  //               Things (loT) infrastructure to achieve more efficient loT
  //               operations, improve human-machine interactions and enhance data
  //               management and analytics. Automated quality inspection typically
  //               leverages Al image analysis (vision) and data from loT sensors to
  //               identify product quality issues in real-time on the production
  //               line, triggering an alert for further inspection and/or action if
  //               problems are detected. <br />
  //             </p>
  //             <p>
  //               <p className="font-bold pr-4 ">
                  
  //                 Key Services / Product Stack
  //               </p>
  //               <br />
  //               Azure Container Registry, Azure DevOps, Azure loT Hub, Azure
  //               Key/ault, Azure Machine Learning, Cognitive Services: Vision,
  //               Azure SQL, Azure Storage, Docker, Power BI
  //             </p>
  //           </div>`,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];
