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
import {
  AIPoweredCallCenterIntelligence,
  AIPoweredInsuranceClaimsAutomation,
  azure_intelligent_recommendations,
  buy_online_pick_up_in_store,
  clinical_analytics_and_decision_support_patient_risk,
  conversational_ai_with_azure_openai_for_retail,
  customer_revenue_growth_factor, CustomerComplaintManagement,
  document_process_automation_government,
  document_process_automation_healtcare, DocumentProcessAutomation,
  drug_discovery_and_research,
  factory_working_safety, fraud_detection_and_transaction_monitoring,
  information_discovery_and_management, InformationDiscoveryAndManagement,
  medical_device_and_equipment_tracking,
  personalization_and_recommendations,
  product_catalog_discovery,
  remote_asset_monitoring, RiskClassificationAndLoanModeling,
  sales_service_and_support_bot,
  service_and_support_bot_government,
  service_and_support_bot_healthcare, ServiceAndSupportBot, TransactionProcessingAtAnyScale,
} from "../../constants";

export const Industry = [
  {
    //  Todo :: Manufacturing and Mobility
    id: crypto.randomUUID(),
    title: "Manufacturing & Mobility",
    link: "manufacturing_&_mobility",
    heading: "Manufacturing & Mobility Overview",
    overview:
      "Microsoft's approach to manufacturing takes into account market insights and competitive landscape, and positions Microsoft's value proposition via the Industry Priority Scenarios. Our Industry Priority Scenarios (IPSs) are the fundamental areas we believe manufacturers should focus their efforts on their digital transformation journey. Microsoft Cloud for Manufacturing is the vehicle to enable manufacturers to execute that digital transformation through Microsoft and partner capabilities aligned to our IPSs. ",
    solution_plays: [
      // 1st solution plays
      {
        id: crypto.randomUUID(),
        title: "Enable Intelligent Factories",
        link: `enable_intelligent_factories`,
        content: `
<!--  <p className="font-bold"> Business Application Industry Content</p> -->
          <p>
           To customize products and services for end customers—and innovate at the speed that product-as-a-service requires—manufacturing customers need an agile, responsive production process. They need solutions that can help you enable a “Intelligent Factory”.  The journey to intelligent factories starts with connecting factory assets—adding sensors to machines and equipment to collect data, then monitoring and adjusting operations accordingly.​
          </p>
          <p>
           Ultimately, you’ll want to connect and monitor factory performance across the globe, using data from smart assets to apply operational insights and further optimize your production processes. This is where even the most advanced manufacturing service providers such as Jabil, or the Industrial Automation giants such as Rockwell Automation, Schneider Automation, Siemens etc, are finding new opportunities by augmenting operational technologies (long powered by Windows embedded technologies), with new IT capabilities such as IoT, AI, Mixed Reality and secure and compliant communication and collaboration cloud capabilities.
          </p>


          
          <p><a className="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/enterprise-commercial/manufacturing?tab=overview"> Learn More </a>  about this Industry Pillar</p>
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
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `
                
                <p>Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. </p>
                <p>
                Automated quality inspection typically leverages AI image analysis (vision) and data from IoT sensors to identify product quality issues in real-time on the production line, triggering an alert for further inspection and/or action if problems are detected.
                </p>
                `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Executive Officer, Chief Operations Officer",
                    "Secondary (Influencers): Head of Quality Control",
                  ],
                  decision_making_factors: [
                    "Ease of setup",
                    "Ability to leverage",
                    "current infrastructure Cost",
                  ],
                  desired_business_objectives: [
                    "Improve quality assurance pass rates and product yield by automating inspection with higher accuracy and redirecting human labor to value adding tasks.",
                    "Increase customer satisfaction and retention by reducing delivery of defective products.",
                    "Reduce Operational Costs by catching anomalies faster, reducing amount of inventory that needs to be scrapped.",
                  ],
                  customer_pain_points: [
                    "Quality control needs improvement.",
                    "Product yields are lower than expected.",
                    "Inventory scrap costs are high",
                    " Data is siloed and is not leveraged for strategic decision-making.",
                  ],
                  proposed_technical_solution: [
                    "Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. ",
                    "Automated quality inspection typically leverages AI image analysis (vision) and data from IoT sensors to identify product quality issues in real-time on the production line, triggering an alert for further inspection and/or action if problems are detected.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Container Registry, Azure DevOps, Azure IoT Hub, Azure KeyVault, Azure Machine Learning,",
                    "Cognitive Services: Vision, Azure SQL, Azure Storage, Docker, Power BI.",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle:
                    "Business  Architecture: Automated Quality Inspection",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: tcs,
                    link: "",
                  },
                  {
                    image: capgemini,
                    link: "",
                  },
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },
                  {
                    image: Ey,
                    link: "",
                  },
                  {
                    image: pwc,
                    link: "",
                  },
                ],
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
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Predict motor, equipment, and/or asset issues before they happen and trigger real-time alerts for action with field service teams.
              </p>
              `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Head of Supply Chain, Chief Operations Office",
                    "Secondary (Influencers): Head of Supply Chain",
                  ],
                  decision_making_factors: [
                    "Ease of execution (availability of expert and experienced partners)",
                    "Set-up costs; ability to integrate with legacy equipment",
                  ],
                  desired_business_objectives: [
                    "Increase machinery uptime by predicting problem areas and solving before they become breaks",
                    "Reduce maintenance costs and repair time by proactively addressing problem areas before it becomes a larger failure",
                    "Reduce inventory carrying costs by accurately understanding spare part inventory needs at any given time",
                  ],
                  customer_pain_points: [
                    "Downtime is high",
                    "Product yields are lower than expected",
                    "Inventory scrap costs are high",
                    "Data is siloed and is not leveraged for strategic decision-making",
                  ],
                  proposed_technical_solution: [
                    "Predict motor, equipment, and/or asset issues before they happen and trigger real-time alerts for action with field service teams.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Container Registry",
                    "Azure DevOps",
                    "Azure IoT Hub",
                    "Azure KeyVault",
                    "Azure Machine Learning",
                    "Cognitive Services: Vision",
                    "Azure SQL",
                    "Azure Storage",
                    "Docker",
                    "Power BI",
                    "Python",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: predictive_maintainance,
                  image_subtitle:
                    "Business  Architecture: Predictive Maintenance",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
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
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Monitor and optimize health and performance of individual assets on the shop floor with telemetry data collected in real-time. Connect machines, infrastructure, and production assets.
              </p>
              `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary : Chief Legal Officer,Chief Data Officer," +
                    "Chief Operations Officer," +
                    "Head of Factory Operations," +
                    "Chief Information Officer," +
                    "Plant Managers," +
                    "VP of Digital Transformation," +
                    "VP of Manufacturing,",

                  ],
                  decision_making_factors: [
                    "Ease of execution (availability of expert and experienced)",
                    "Set-up costs; ability to integrate with legacy equipment",
                  ],
                  desired_business_objectives: [
                    "Higher overall equipment utilization and asset productivity",
                    "Improved employee productivity with freeing up of time for performing more value-added tasks",
                    "High app performance and instant efficiency insights worldwide with low latency",
                  ],
                  customer_pain_points: [
                    "Need to improve equipment effectiveness and asset productivity by capturing and analyzing all connected shopfloor data",
                    "Need to avoid unplanned downtime due to unexpected machine failures",
                    "Deliver real-time platforms that enable factories to closely monitor daily operation and perform real-time diagnostics remotely",
                  ],
                  proposed_technical_solution: [
                    "Monitor and optimize health and performance of individual assets on the shop floor with telemetry data collected in real-time",
                    "Connect machines, infrastructure, and production assets",
                  ],
                  other_notable_attributes: [],
                  products: [],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: remote_asset_monitoring,
                  image_subtitle:
                    "Business  Architecture: Remote Asset Monitoring",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
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
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: "<p>Applied AI Services: Form Recognizer, Azure Logic Apps, Azure Cosmos DB, Power BI, Azure Data Explorer, Bot Framework, Luis</p>",

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary : Chief Legal Officer,Chief Data Officer," +
                    "Chief Operations Officer," +
                    "Head of Factory Operations," +
                    "Chief Information Officer,",

                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Increase speed to value/speed to insight by reducing document processing times",
                    "Reduce operating expenses through automation of manual processes",
                    "Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes",
                  ],
                  customer_pain_points: [
                    "Handles large volumes of documents and is not able to efficiently capture any rich insights from them",
                    "Investing in expensive manual labor to extract data",
                    "Manual data extraction is inefficient and/or error-prone, resulting in low confidence of accuracy",
                    "More time is spent on extracting data than on analysis, insights, and action",
                  ],
                  other_notable_attributes: [],
                  proposed_technical_solution: [
                    "Applied AI Services: Form Recognizer, Azure Logic Apps, Azure Cosmos DB, Power BI, Azure Data Explorer, Bot Framework, Luis",
                  ],
                  products: [
                    "Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: document_process_automation,
                  image_subtitle:
                    "Business  Architecture: Document Process Automation",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
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
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `
                <p>
                The Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. </p>
                <p>AI can be used to transform IoT data into useful information for improved decision making processes, thus creating a foundation for newer technology such as IoT Data as a Service (IoTDaaS). A growing industry trend is the use of AI and ML in Azure and at the edge to automate quality inspection. </p>
                <p>At a high level, the solutions typically leverage AI image analysis and data from IoT sensors to detect product quality issues in real-time on the production line. By implementing AI-based product quality inspection through AI image analysis, manufacturers not only reduce defects and increase factory yield but also have a direct positive impact on customer satisfaction.</p>
                `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Operations Officer, Chief Technology Officer, Chief Supply Chain Officer",
                    "Secondary: Safety Director, VP of Customer Service, VP of Experience, Process and Manufacturing Floor Engineers, Plant Managers, VP of Digital Transformation, VP of Engineering, VP of Manufacturing",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Faster workplace risk detection and response",
                    "Opportunities to redirect human labor to higher value tasks by automating surveillance",
                    "Decreased process disruptions, leading to greater productivity and product yields",
                    "Reduced costs associated with workplace accidents",
                  ],
                  customer_pain_points: [
                    "Latent visual image analysis delays responses to safety risks and incidents",
                    "Lower worker utility and greater errors in human visual monitoring",
                    "Growing complexity of compliance requirements, especially PPE",
                    "Siloed data and incomplete incident documentation",
                    "Velocity of developing at the edge is slowed by iterative coding and testing in a live environment, increasing costs and delaying time to value",
                  ],
                  proposed_technical_solution: [
                    "The Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics.",
                    "AI can be used to transform IoT data into useful information for improved decision making processes, thus creating a foundation for newer technology such as IoT Data as a Service (IoTDaaS). A growing industry trend is the use of AI and ML in Azure and at the edge to automate quality inspection. ",
                    "At a high level, the solutions typically leverage AI image analysis and data from IoT sensors to detect product quality issues in real-time on the production line. By implementing AI-based product quality inspection through AI image analysis, manufacturers not only reduce defects and increase factory yield but also have a direct positive impact on customer satisfaction.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Container Registry",
                    "Azure DevOps",
                    "Azure IoT Hub",
                    "Azure KeyVault",
                    "Azure Machine Learning",
                    "Azure SQL",
                    "Azure Storage",
                    "Cognitive Services",
                    "Docker",
                    "Power BI",
                    "Python",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: factory_working_safety,
                  image_subtitle:
                    "Business  Architecture: Factory Working Safety",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },

      // 2nd use cases
      {
        id: crypto.randomUUID(),
        title: "Modernize Manufacturing Customer Experience",
        link: `modernize_manufacturing_customer_experience`,
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
<p><a className="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/enterprise-commercial/manufacturing?tab=overview">Learn More  </a>about this Industry Pillar</p>
`,

        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: "",

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Executive Officer, Chief Operations Officer",
                    "Secondary (Influencers): Head of Quality Control",
                  ],
                  decision_making_factors: [
                    "Ease of setup",
                    "Ability to leverage",
                    "current infrastructure Cost",
                  ],
                  desired_business_objectives: [
                    "Improve quality assurance pass rates and product yield by automating inspection with higher accuracy and redirecting human labor to value adding tasks.",
                    "Increase customer satisfaction and retention by reducing delivery of defective products.",
                    "Reduce Operational Costs by catching anomalies faster, reducing amount of inventory that needs to be scrapped.",
                  ],
                  customer_pain_points: [
                    "Quality control needs improvement.",
                    "Product yields are lower than expected.",
                    "Inventory scrap costs are high",
                    " Data is siloed and is not leveraged for strategic decision-making.",
                  ],
                  proposed_technical_solution: [],
                  other_notable_attributes: [],
                  products: [
                    "Azure Container Registry, Azure DevOps, Azure IoT Hub, Azure KeyVault, Azure Machine Learning,",
                    "Cognitive Services: Vision, Azure SQL, Azure Storage, Docker, Power BI.",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: "",
                  image_subtitle: "Business  Architecture:  ",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },

      //  3rd use cases
      {
        id: crypto.randomUUID(),
        title: "Resilient Manufacturing Supply Chain",
        link: `resilient_manufacturing_supply_chain`,
        content: `
<!--<p className="font-bold"> Business Application Industry Content</p>-->
            <p>
              Transform your manufacturing and supply chain operations using predictive insights and intelligence from AI and Internet of Things (IoT) across planning, production, maintenance, inventory, warehouse, and transportation management to maximize operational efficiency, product quality, and profitability.
            </p>
<p>Microsoft understands that collaboration is required for manufacturers to achieve a truly intelligent supply chain. Our portfolio of supply chain solutions leverages the power, scalability and security of Azure, enabling manufacturers to transform business processes and operate as “mission control,” orchestrating with agility across the value network.</p>
<p><a className="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/enterprise-commercial/manufacturing?tab=overview">Learn More  </a>about this Industry Pillar</p>
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
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `
                <p>
                Determine future demand to optimize inventory, material and product orders.</p>
                `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Head of Supply Chain, Chief Operations Officer, Chief Marketing Officer",
                    "Secondary: Head of Supply Chain",
                  ],
                  decision_making_factors: [
                    "Expected accuracy and efficiency improvements; ability to quickly adapt solution building blocks",
                    "Ease of execution (availability of development partners); data availability/readiness",
                  ],
                  desired_business_objectives: [
                    "Improve time to value through increased forecast speed (reducing project time)",
                    "Reduce inventory carrying costs by predicting necessary stock levels at any given time",
                    "Grow revenue by increasing in-stock percentage through stronger forecast accuracy",
                  ],
                  customer_pain_points: [
                    "Inability to meet customer demand anywhere, on any channel, due to disconnected processes",
                    "Unplanned shortages or surplus",
                    "Organization has limited visibility of key data generated throughout the supply chain (lack of 360 view from materials > production > last mile) resulting in no feedback loop",
                    "Departments operating in silos and restricted data flow among them prevents rapid response to customer demand for fast fulfillment, flexible delivery, and easy returns",
                    "Lack of infrastructure to ensure better inventory management and cost savings",
                  ],
                  proposed_technical_solution: [
                    "Determine future demand to optimize inventory, material and product orders.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Cosmos DB",
                    "Power BI",
                    "Azure Machine Learning",
                    "Azure Synapse Analytics",
                    "Azure Storage",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: demand_forecasting,
                  image_subtitle: "Business  Architecture: Demand Forecasting",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },

      //  4th use cases
      {
        id: crypto.randomUUID(),
        title: "Unlock Innovation & Introduce New Products",
        link: `unlock_innovation_&_introduce_new_products`,
        content: `
<!--<p className="font-bold"> Business Application Industry Content</p>-->
            <p>
             You can use all this data coming in from IoT sensors, field service, sales, factories, and the supply chain to speed innovation.
            </p>
<p>With connected product innovation solutions, you can get real-time insight into which products and features customers are using without waiting for customer survey results. And with big computing capacity available on demand, you can iterate the next version of your product much more rapidly using digital twins, as well as simulation and analysis tools. The Automotive industry is doing this on a massive scale with the data coming in from their connected vehicles, and fleets of specially instrumented autonomous vehicles. EFS is doing using this data to teach the next generation of vehicles how to see the real world. But any IoT connected machine provides this opportunity for a digital feedback loop to improve the product innovation process. You can also get more accurate, timely data on which parts failed and what the best problem resolutions were so you can improve product and service performance. These are just a few ways you can analyze data to realize a faster speed-to-market and improve the quality of your products and services, or product-as-a-service!.</p>
<p><a className="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/enterprise-commercial/manufacturing?tab=overview">Learn More  </a>about this Industry Pillar</p>
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
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>
                Generate vast stores of data by connecting products in field, creating a repository for manufacturers to innovate in real-time.
                </p>
              `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Executive Officer, Chief Operations Officer, Chief Product Officer",
                    "Secondary: VP of Product, Head of Engineering",
                  ],
                  decision_making_factors: [
                    "Expected accuracy and efficiency improvements",
                    "Ability to quickly adapt solution building blocks",
                    "Ease of execution (availability of development partners)",
                    "Data availability/readiness",
                  ],
                  desired_business_objectives: [
                    "Shorten the time to market",
                    "Become nimbler in competitive responsiveness",
                    "Prevent bottlenecks and production challenges",
                    "Improve operational efficiencies",
                  ],
                  customer_pain_points: [
                    "Product lifecycles continue to grow in complexity, causing manufacturers to find new ways gain data-driven visibility into processes and make continual improvements",
                    "Ubiquitous connectivity, dynamic customer demands, and volatile procurement behavior are causing long-term changes in the way products are designed and managed throughout their life cycles",
                    "Need ways to keep pace with rapid product design changes to improve customer satisfaction and retention",
                  ],
                  proposed_technical_solution: [
                    "Generate vast stores of data by connecting products in field, creating a repository for manufacturers to innovate in real-time.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Cosmos DB",
                    "Power BI",
                    "Azure Machine Learning",
                    "Azure Synapse Analytics",
                    "Azure Storage",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: connected_smart_products,
                  image_subtitle:
                    "Business  Architecture: Connected Smart Products",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },

      

      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Use Cases ",
        link: "all_use_cases",
        content: `
        <p className="font-bold"> Manufacturing & Mobility Industry</p>
          `,
        use_cases: [
          // Todo :: Automated Quality Inspection
          {
            id: crypto.randomUUID(),
            title: "Automated Quality Inspection",
            solution_play: "Enable Intelligent Factories",

            // l3 page link
            link: `automated_quality_inspection`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `
        
        <p>Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. </p>
        <p>
        Automated quality inspection typically leverages AI image analysis (vision) and data from IoT sensors to identify product quality issues in real-time on the production line, triggering an alert for further inspection and/or action if problems are detected.
        </p>
        `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Executive Officer, Chief Operations Officer",
                    "Secondary (Influencers): Head of Quality Control",
                  ],
                  decision_making_factors: [
                    "Ease of setup",
                    "Ability to leverage",
                    "current infrastructure Cost",
                  ],
                  desired_business_objectives: [
                    "Improve quality assurance pass rates and product yield by automating inspection with higher accuracy and redirecting human labor to value adding tasks.",
                    "Increase customer satisfaction and retention by reducing delivery of defective products.",
                    "Reduce Operational Costs by catching anomalies faster, reducing amount of inventory that needs to be scrapped.",
                  ],
                  customer_pain_points: [
                    "Quality control needs improvement.",
                    "Product yields are lower than expected.",
                    "Inventory scrap costs are high",
                    " Data is siloed and is not leveraged for strategic decision-making.",
                  ],
                  proposed_technical_solution: [
                    "Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. ",
                    "Automated quality inspection typically leverages AI image analysis (vision) and data from IoT sensors to identify product quality issues in real-time on the production line, triggering an alert for further inspection and/or action if problems are detected.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Container Registry, Azure DevOps, Azure IoT Hub, Azure KeyVault, Azure Machine Learning,",
                    "Cognitive Services: Vision, Azure SQL, Azure Storage, Docker, Power BI.",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle:
                    "Business  Architecture: Automated Quality Inspection",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: tcs,
                    link: "",
                  },
                  {
                    image: capgemini,
                    link: "",
                  },
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },
                  {
                    image: Ey,
                    link: "",
                  },
                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },
          // Todo :: Predictive Maintenance
          {
            id: crypto.randomUUID(),
            title: "Predictive Maintenance",
            solution_play: "Enable Intelligent Factories",
            // l3 page link
            link: `predictive_maintenance`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Predict motor, equipment, and/or asset issues before they happen and trigger real-time alerts for action with field service teams.
      </p>
      `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Head of Supply Chain, Chief Operations Office",
                    "Secondary (Influencers): Head of Supply Chain",
                  ],
                  decision_making_factors: [
                    "Ease of execution (availability of expert and experienced partners)",
                    "Set-up costs; ability to integrate with legacy equipment",
                  ],
                  desired_business_objectives: [
                    "Increase machinery uptime by predicting problem areas and solving before they become breaks",
                    "Reduce maintenance costs and repair time by proactively addressing problem areas before it becomes a larger failure",
                    "Reduce inventory carrying costs by accurately understanding spare part inventory needs at any given time",
                  ],
                  customer_pain_points: [
                    "Downtime is high",
                    "Product yields are lower than expected",
                    "Inventory scrap costs are high",
                    "Data is siloed and is not leveraged for strategic decision-making",
                  ],
                  proposed_technical_solution: [
                    "Predict motor, equipment, and/or asset issues before they happen and trigger real-time alerts for action with field service teams.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Container Registry",
                    "Azure DevOps",
                    "Azure IoT Hub",
                    "Azure KeyVault",
                    "Azure Machine Learning",
                    "Cognitive Services: Vision",
                    "Azure SQL",
                    "Azure Storage",
                    "Docker",
                    "Power BI",
                    "Python",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: predictive_maintainance,
                  image_subtitle:
                    "Business  Architecture: Predictive Maintenance",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
          // Todo :: Remote Asset Monitoring
          {
            id: crypto.randomUUID(),
            title: "Remote Asset Monitoring",
            solution_play: "Enable Intelligent Factories",
            // l3 page link
            link: `remote_asset_monitoring`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>Monitor and optimize health and performance of individual assets on the shop floor with telemetry data collected in real-time. Connect machines, infrastructure, and production assets.
      </p>
      `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Chief Legal Officer",
                    "Chief Data Officer",
                    "Chief Operations Officer",
                    "Head of Factory Operations",
                    "Chief Information Officer",
                    "Plant Managers",
                    "VP of Digital Transformation",
                    "VP of Manufacturing",
                  ],
                  decision_making_factors: [
                    "Ease of execution (availability of expert and experienced)",
                    "Set-up costs; ability to integrate with legacy equipment",
                  ],
                  desired_business_objectives: [
                    "Higher overall equipment utilization and asset productivity",
                    "Improved employee productivity with freeing up of time for performing more value-added tasks",
                    "High app performance and instant efficiency insights worldwide with low latency",
                  ],
                  customer_pain_points: [
                    "Need to improve equipment effectiveness and asset productivity by capturing and analyzing all connected shopfloor data",
                    "Need to avoid unplanned downtime due to unexpected machine failures",
                    "Deliver real-time platforms that enable factories to closely monitor daily operation and perform real-time diagnostics remotely",
                  ],
                  proposed_technical_solution: [
                    "Monitor and optimize health and performance of individual assets on the shop floor with telemetry data collected in real-time",
                    "Connect machines, infrastructure, and production assets",
                  ],
                  other_notable_attributes: [],
                  products: [],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: remote_asset_monitoring,
                  image_subtitle:
                    "Business  Architecture: Remote Asset Monitoring",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
          // Todo :: Document process automation
          {
            id: crypto.randomUUID(),
            title: "Document Process Automation",
            solution_play: "Enable Intelligent Factories",
            // l3 page link
            link: `document_process_automation`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: "<p>Applied AI Services: Form Recognizer, Azure Logic Apps, Azure Cosmos DB, Power BI, Azure Data Explorer, Bot Framework, Luis</p>",

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Chief Legal Officer",
                    "Chief Data Officer",
                    "Chief Operations Officer",
                    "Head of Factory Operations",
                    "Chief Information Officer",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Increase speed to value/speed to insight by reducing document processing times",
                    "Reduce operating expenses through automation of manual processes",
                    "Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes",
                  ],
                  customer_pain_points: [
                    "Handles large volumes of documents and is not able to efficiently capture any rich insights from them",
                    "Investing in expensive manual labor to extract data",
                    "Manual data extraction is inefficient and/or error-prone, resulting in low confidence of accuracy",
                    "More time is spent on extracting data than on analysis, insights, and action",
                  ],
                  other_notable_attributes: [],
                  proposed_technical_solution: [
                    "Applied AI Services: Form Recognizer, Azure Logic Apps, Azure Cosmos DB, Power BI, Azure Data Explorer, Bot Framework, Luis",
                  ],
                  products: [
                    "Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: document_process_automation,
                  image_subtitle:
                    "Business  Architecture: Document Process Automation",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
          // Todo :: Factory & Worker Safety
          {
            id: crypto.randomUUID(),
            title: "Factory & Worker Safety",
            solution_play: "Enable Intelligent Factories",
            // l3 page link
            link: `factory_&_worker_safety`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `
        <p>
        The Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics. </p>
        <p>AI can be used to transform IoT data into useful information for improved decision making processes, thus creating a foundation for newer technology such as IoT Data as a Service (IoTDaaS). A growing industry trend is the use of AI and ML in Azure and at the edge to automate quality inspection. </p>
        <p>At a high level, the solutions typically leverage AI image analysis and data from IoT sensors to detect product quality issues in real-time on the production line. By implementing AI-based product quality inspection through AI image analysis, manufacturers not only reduce defects and increase factory yield but also have a direct positive impact on customer satisfaction.</p>
        `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Operations Officer, Chief Technology Officer, Chief Supply Chain Officer",
                    "Secondary: Safety Director, VP of Customer Service, VP of Experience, Process and Manufacturing Floor Engineers, Plant Managers, VP of Digital Transformation, VP of Engineering, VP of Manufacturing",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Faster workplace risk detection and response",
                    "Opportunities to redirect human labor to higher value tasks by automating surveillance",
                    "Decreased process disruptions, leading to greater productivity and product yields",
                    "Reduced costs associated with workplace accidents",
                  ],
                  customer_pain_points: [
                    "Latent visual image analysis delays responses to safety risks and incidents",
                    "Lower worker utility and greater errors in human visual monitoring",
                    "Growing complexity of compliance requirements, especially PPE",
                    "Siloed data and incomplete incident documentation",
                    "Velocity of developing at the edge is slowed by iterative coding and testing in a live environment, increasing costs and delaying time to value",
                  ],
                  proposed_technical_solution: [
                    "The Artificial Intelligence of Things (AIoT) is the combination of artificial intelligence (AI) technologies with the Internet of Things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics.",
                    "AI can be used to transform IoT data into useful information for improved decision making processes, thus creating a foundation for newer technology such as IoT Data as a Service (IoTDaaS). A growing industry trend is the use of AI and ML in Azure and at the edge to automate quality inspection. ",
                    "At a high level, the solutions typically leverage AI image analysis and data from IoT sensors to detect product quality issues in real-time on the production line. By implementing AI-based product quality inspection through AI image analysis, manufacturers not only reduce defects and increase factory yield but also have a direct positive impact on customer satisfaction.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Container Registry",
                    "Azure DevOps",
                    "Azure IoT Hub",
                    "Azure KeyVault",
                    "Azure Machine Learning",
                    "Azure SQL",
                    "Azure Storage",
                    "Cognitive Services",
                    "Docker",
                    "Power BI",
                    "Python",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: factory_working_safety,
                  image_subtitle:
                    "Business  Architecture: Factory Working Safety",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
          //  Todo :: Demand Forecasting
          {
            id: crypto.randomUUID(),
            title: "Demand Forecasting",
            solution_play: "Resilient Manufacturing Supply Chain",
            // l3 page link
            link: `demand_forecasting`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `
        <p>
        Determine future demand to optimize inventory, material and product orders.</p>
        `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Head of Supply Chain, Chief Operations Officer, Chief Marketing Officer",
                    "Secondary: Head of Supply Chain",
                  ],
                  decision_making_factors: [
                    "Expected accuracy and efficiency improvements; ability to quickly adapt solution building blocks",
                    "Ease of execution (availability of development partners); data availability/readiness",
                  ],
                  desired_business_objectives: [
                    "Improve time to value through increased forecast speed (reducing project time)",
                    "Reduce inventory carrying costs by predicting necessary stock levels at any given time",
                    "Grow revenue by increasing in-stock percentage through stronger forecast accuracy",
                  ],
                  customer_pain_points: [
                    "Inability to meet customer demand anywhere, on any channel, due to disconnected processes",
                    "Unplanned shortages or surplus",
                    "Organization has limited visibility of key data generated throughout the supply chain (lack of 360 view from materials > production > last mile) resulting in no feedback loop",
                    "Departments operating in silos and restricted data flow among them prevents rapid response to customer demand for fast fulfillment, flexible delivery, and easy returns",
                    "Lack of infrastructure to ensure better inventory management and cost savings",
                  ],
                  proposed_technical_solution: [
                    "Determine future demand to optimize inventory, material and product orders.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Cosmos DB",
                    "Power BI",
                    "Azure Machine Learning",
                    "Azure Synapse Analytics",
                    "Azure Storage",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: demand_forecasting,
                  image_subtitle: "Business  Architecture: Demand Forecasting",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
          //  Todo :: Connected Smart Product
          {
            id: crypto.randomUUID(),
            title: "Connected Smart Product",
            solution_play: "Unlock Innovation & Introduce New Products",
            // l3 page link
            link: `
    connected_smart_product`,
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: `<p>
        Generate vast stores of data by connecting products in field, creating a repository for manufacturers to innovate in real-time.
        </p>
      `,

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Executive Officer, Chief Operations Officer, Chief Product Officer",
                    "Secondary: VP of Product, Head of Engineering",
                  ],
                  decision_making_factors: [
                    "Expected accuracy and efficiency improvements",
                    "Ability to quickly adapt solution building blocks",
                    "Ease of execution (availability of development partners)",
                    "Data availability/readiness",
                  ],
                  desired_business_objectives: [
                    "Shorten the time to market",
                    "Become nimbler in competitive responsiveness",
                    "Prevent bottlenecks and production challenges",
                    "Improve operational efficiencies",
                  ],
                  customer_pain_points: [
                    "Product lifecycles continue to grow in complexity, causing manufacturers to find new ways gain data-driven visibility into processes and make continual improvements",
                    "Ubiquitous connectivity, dynamic customer demands, and volatile procurement behavior are causing long-term changes in the way products are designed and managed throughout their life cycles",
                    "Need ways to keep pace with rapid product design changes to improve customer satisfaction and retention",
                  ],
                  proposed_technical_solution: [
                    "Generate vast stores of data by connecting products in field, creating a repository for manufacturers to innovate in real-time.",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Cosmos DB",
                    "Power BI",
                    "Azure Machine Learning",
                    "Azure Synapse Analytics",
                    "Azure Storage",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Manufacturing & Mobility",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: connected_smart_products,
                  image_subtitle:
                    "Business  Architecture: Connected Smart Products",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWem9s1YQExIiK6NP6-p8EwBvNKrKi5ZgiNJGCslCUpAoA?e=evcnYB",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
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
    link: "financial_services",
    heading: "Financial Services Overview",
    overview:
        "Facing a range of challenges—from customer expectations and workforce transformation to competitive threats and innovation imperatives counterbalanced by risk, security, and regulatory compliance considerations—leaders in the banking industry are focused on helping their organizations weather storms and adapt to relentless change. Among the strategies they need to employ to address these challenges are the financial, cultural, and technological investments they need to make to stay competitive today and prepare for an uncertain future.In this context, Microsoft offers banks a highly secure and compliant, enterprise-grade cloud platform to run their business and the latest technology needed to unlock business value and deepen customer relationships. With the Microsoft Cloud, banks can optimize costs, reduce time to value, enhance collaboration, and use data and AI to deliver more impactful business outcomes—whether transforming the banking experience, empowering employees, managing risk, or modernizing payments and core banking. The security, compliance, and scale of the Microsoft Cloud, combined with our global partner ecosystem, empower banks to address evolving customer needs, hybrid workplace requirements, complex regulations, new competitors, solution integration, and increased cyber threats with both efficiency and resiliency.",

    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Modernize Payments & Core Banking",
        content: `
    <div >
  <p class="font-bold">Modernize payments and core banking</p>
  <p class="py-2">Increase agility to roll out new products and services while saving on infrastructure costs.</p>

  <p class="font-bold mt-6 mb-2">Customer challenges</p>
  <ul class="list-disc pl-6 mb-4">
    <li>Integrating open banking and API-based solutions</li>
    <li>Providing payments-as-a-service</li>
    <li>Real-time, 24/7 processing to serve customers</li>
    <li>Need for new payments products to compete</li>
    <li>Modernizing the data estate and implementing a data culture</li>
    <li>Integrating AI solutions to interpret business signals</li>
    <li>Core banking modernization</li>
    <li>Proliferation of fintech and challenger banks</li>
    <li>Lowering TCO and the need to reduce "run the bank" costs</li>
    <li>Regulatory compliance and market infrastructure requirements</li>
    <li>New technical standards like ISO 20022</li>
    <li>Cloud adoption for future-proofing systems and managing change</li>
  </ul>

  <p class="font-bold mt-6 mb-2">Key business outcomes</p>
  <ul class="list-disc pl-6 mb-4">
    <li>Ensure resiliency of core banking systems based on the latest cloud-based technology</li>
    <li>Move payments and core systems to cloud to provide the agility needed to meet changing customer expectations and challenge non-traditional competitors</li>
    <li>Expand distribution through embedded finance and open banking models</li>
    <li>Employ analytics and AI to unlock real-time insights and new revenue streams from the flow of data through payment systems</li>
    <li>Establish a trusted brand with comprehensive security, privacy, identity management, and compliance</li>
  </ul>

  <p class="font-bold mt-6 mb-2">Roles</p>
  <ul class="list-disc pl-6 mb-4">
    <li>Primary: CIO</li>
    <li>Secondary: CEO, head of payments, LOB banking function, VP customer support, call center operations, commercial banking executive, retail banking executive</li>
  </ul>

  <p class="font-bold mt-6 mb-2">Questions to Ask</p>
  <ul class="list-disc pl-6 mb-4">
    <li>How is your business able to expand into new markets quickly?</li>
    <li>How effective are your current solutions for reducing fraud and increasing operational efficiency?</li>
    <li>Are your current operations able to support building new products with agility and serve today’s real-time economy?</li>
    <li>How quickly and securely can you onboard new customers?</li>
    <li>How efficient is your payments system? Are you able to approximate real-time execution?</li>
    <li>How does your business put its data to work effectively to better serve customers/clients?</li>
    <li>What insights do you need to transform working capital products?</li>
    <li>What historical data and predictive insights do you use to drive your business?</li>
  </ul>

  <p><a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/enterprise-commercial/financial-services?tab=overview">Learn More</a> about this Industry Pillar</p>
</div>




        `

        ,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Document Process Automation",
          solution_play: "Modernize Payments & Core Banking",
            // l3 page link
            link: "document_process_automation",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                    "/industry/financial_services/document_process_automation",

                desc: `<p>Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points
              </p>`,

                keyHighlights : {

                  decision_makers : [
                   "Primary: Chief Legal Officer, Chief Operations Officer, Chief Data Officer, Chief Financial Officer, Chief Information Officer, Chief Risk Officer, Chief Compliance Officer"
                  ],
                  decision_making_factors : [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Increase speed to value/insight by reducing document processing times',
                    'Reduce operating expenses through automation of manual processes',
                    'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points :[
                    'Handle large volumes of documents and not able to efficiently capture any rich insights from them',
                    'Investing in expensive manual labor to extract data',
                    'Manual data extraction is inefficient and/or error-prone, resulting in low confidence in data accuracy',
                    'More time is spent on extracting data than on analysis, insights, and action'
                  ],
                  other_notable_attributes:[

                  ],
                  products :[
                    'Form Recognizer',
                    'Azure Logic Apps',
                    'Azure Cosmos DB',
                    'Power BI',
                    'Azure Data Explorer',
                    'Bot Framework',
                    'Luis'
                  ],
                  // proposed_technical_solution
                  proposed_technical_solution: ['Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points']
                },

                idealCostomerProfile : {
                  industries: 'Financial services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : DocumentProcessAutomation,
                  image_subtitle : 'Business  Architecture: Document Process Automation',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Information Discovery and Management",
            solution_play: "Modernize Payments & Core Banking",
            // l3 page link
            link: "information_discovery_and_management",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/financial_services/information_discovery_and_management",
                desc: ` <p>
               
              Search through structured and unstructured documents to quickly find the most relevant information and documents including areas with compliance risk.

              </p>`,

                keyHighlights : {

                  decision_makers : [

                    "Primary: Head of HR, Head of Customer Service, Chief Learning Officer, Chief Knowledge Officer, Chief Compliance Officer"
                  ],
                  decision_making_factors :  ['Scalability', 'Cost', 'Efficiency'],
                  desired_business_objectives : [
                    'Increase speed to value/speed to insight by reducing time spent on search',
                    'Improve user productivity by surfacing most relevant search results',
                    'Ensure compliance through completeness of search over all data and documents',
                    'Reduce search infrastructure costs'
                  ],
                  customer_pain_points :[
                    'Employees or users are not finding the information they need in internal sites, or information takes a long time to find',
                    'Failed searches commonly experienced, where no relevant search results are displayed',
                    'Organization not able to pull together a comprehensive view of all data related to a specific topic (i.e., docs with regulatory terms for compliance purposes)'
                  ],
                  other_notable_attributes:[

                  ],
                  products :[
                    'Azure Cognitive Search',
                    'Azure Web Apps',
                    'Power BI'
                  ],
                  proposed_technical_solution: ['Search through structured and unstructured documents to quickly find the most relevant information and documents including areas with compliance risk.']
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : InformationDiscoveryAndManagement,
                  image_subtitle : 'Business  Architecture: Information Discovery and Management',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Transaction Processing at Any Scale",
            solution_play: "Modernize Payments & Core Banking",
            // l3 page link
            link: "transaction_processing_at_any_scale",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/financial_services/transaction_processing_at_any_scale",
                desc: ` <p>
               
              Scale high volumes of transactional data at any time accurately and reliably.

              </p>`,
                keyHighlights : {

                  decision_makers :[
                    'Primary: Chief Information Officer, Chief Digital Officer, Business Innovation team, Enterprise or Cloud Architects'
                  ],
                  decision_making_factors :  ['Scalability', 'Cost', 'Efficiency'],
                  desired_business_objectives :  [
                    'Increase revenue by scaling high volumes of payment data at any time accurately and reliably',
                    'Act on sales data faster by centralizing payment pipelines with real-time processing and analytics',
                    'Expand sales footprint through fast, scalable, on-demand, globally distributed tech platform',
                    'Reduce search infrastructure costs'
                  ],
                  customer_pain_points :[
                    'Payment infrastructure needs to be agile and mature enough to capitalize on the benefits of the innovation',
                    'Need to leverage enterprise data to drive greater business value, develop new business models, and implement innovative pricing models',
                    'Need ways to improve customer satisfaction and retention by providing a bridge from cash and check forms to real-time digital transactions'
                  ],
                  other_notable_attributes:[],
                  products : [],
                  proposed_technical_solution: [
                    'Scale high volumes of transactional data at any time accurately and reliably',
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : TransactionProcessingAtAnyScale,
                  image_subtitle : 'Business  Architecture: Transaction Processing at Any Scale',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "AI-Powered Insurance Claims Automation",
            solution_play: "Modernize Payments & Core Banking",
            // l3 page link
            link: "AI-powered_insurance_claims_automation",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/financial_services/AI-powered_insurance_claims_automation",
                desc: ` <p>
               
              Handle claims processing through an intelligent agent with cognitive skills to handle image, ID, and documents with goal to reduce claims processing time and manual effort in end-to-end claims processing for better customer experience. Provide capability to recognize document type, extract required fields and push data to downstream applications, significantly reducing manual efforts and creating smoother customer experience.
              </p>`,
                keyHighlights : {

                  decision_makers : [
                   'Primary: Business Decision Makers, Claim Processing Engine Owners, Chief Claims Officers, Regional Chief Information Officers, Technical Decision Makers'
                  ],
                  decision_making_factors : [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Increase time to value/time to insight by reducing document processing times',
                    'Reduce operating expenses by automation of manual processes',
                    'Improve confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points :[
                    'Organization handles large volumes of documents (claims, applications, contracts, invoices, etc.) and is not able to efficiently capture any rich insights from them',
                    'Organization is investing in expensive manual labor to extract data',
                    'Manual data extraction is inefficient and/or error-prone, resulting in low confidence in data accuracy',
                    'More time is spent on extracting data than on analysis and insights'
                  ],
                  other_notable_attributes:[],
                  products : [
                    'Cognitive Services',
                    'Cosmos DB',
                    'Bot Framework',
                    'Azure Storage',
                    'Form Recognizer',
                    'Luis'
                  ],
                  proposed_technical_solution: [
                    'Handle claims processing through an intelligent agent with cognitive skills to handle image, ID, and documents with the goal to reduce claims processing time and manual effort in end-to-end claims processing for better customer experience',
                    'Provide capability to recognize document type, extract required fields, and push data to downstream applications, significantly reducing manual efforts and creating smoother customer experience'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : AIPoweredInsuranceClaimsAutomation,
                  image_subtitle : 'Business  Architecture: AI-Powered Insurance Claims Automation',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
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
        title: "Transform the Banking Experience",
        content: `
        <div>
  <p class="font-bold">
    Transform the banking experience
  </p>
  <p  class="py-2">Deliver differentiated customer experiences through deeper insights and relationships.</p>
  <p class="my-2">
    <span class="font-bold">Customer challenges</span>
    <ul class="list-disc pl-6 mb-4">
      <li>Explosive growth in customer data but limited insights</li>
      <li>Customers are more sophisticated and want more personalization</li>
      <li>Customers value their time and want intelligent solutions</li>
      <li>Lack of consistent experience across channels</li>
      <li>Legacy systems modernization</li>
    </ul>
  </p>
  <p class="my-2">
    <span class="font-bold">Key business outcomes</span>
    <ul class="list-disc pl-6 mb-4">
      <li>Use a 360-degree customer view to create more personalized and relevant experiences.</li>
      <li>Enrich customer understanding with insights from banking data, social, life events, and other sources.</li>
      <li>Use predictive analytics to anticipate and proactively provide more relevant banking products and offers.</li>
      <li>Enable faster and more cost-effective interactions with the help of AI and automation across key channels.</li>
      <li>Employ a banking-specific data model to roll out new services faster, including onboarding and referrals.</li>
    </ul>
  </p>
  <p class="my-2">
    <span class="font-bold">Roles</span> <br>
    Primary: Head of retail/commercial banking, head of customer experience<br>
    Secondary: Head of customer care, head of contact center, head of channels, head of strategy, head of transformation
  </p>
  <p class="my-2">
    <span class="font-bold">Key Questions to Ask</span>
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>How does your organization consolidate and unify its information about customers across departments and channels?</li>
    <li>How are you leveraging a 360-degree customer/household view including all related activities, communications, and interactions?</li>
    <li>How is your organization able to consistently offer proactive, relevant products and offers aligned to your customers’ needs and interests?</li>
    <li>How do you identify key trends and patterns across your customer base and employ predictive models to take advantage of latent opportunities?</li>
    <li>How do you use AI within our contact center to improve both the customer and agent experience?</li>
    <li>What kind of plans do you have for harnessing the power of generative AI in your customer journey?</li>
    <li>What insights can help your service team enhance customer experience?</li>
  </ul>
  <p class="my-2">
    <a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/enterprise-commercial/financial-services?tab=overview">Learn More</a> about this Industry Pillar
  </p>
</div>




`,



        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Service and Support Bot",
            solution_play: "Transform the Banking Experience",
            // l3 page link
            link: "service_and_support_bot",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Resolve user and customer queries without human intervention across multiple channels, including voice enabled support.
              </p>`,
                keyHighlights : {

                  decision_makers : ['Primary : Head of Customer Service, Head of Customer Experience, Head of IT, Head of Legal, Head of HR, Chief Marketing Officer, Product Owner, Director of eCommerce', 'Secondary (Influencers): Head of Customer Service Head of Customer Experience'],
                  decision_making_factors :  [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives :[
                    'Improve first-call resolution rates by answering specific questions with the best available knowledge',
                    'Increase customer satisfaction by reducing wait times with immediate 24/7 service through a conversational agent',
                    'Grow revenue with differentiated customer experience by leveraging conversational interfaces for personal shopping',
                    'Reduce support costs/cost of operations by offloading and automating certain support services'
                  ],
                  customer_pain_points : [
                    'Case volumes and wait times are increasing',
                    'Growing customer churn due to impersonal and inconsistent sales or support service',
                    'Customers are dissatisfied with response wait times and expect to be able to reach sales or support service at all hours, but the business is unable to provide or must spend exorbitant amounts to do so, adding pressure on tight margins',
                    'Sales or support agents are tied up answering simple queries that can be automated'
                  ],
                  other_notable_attributes:[

                  ],
                  products :['Resolve user and customer queries without human intervention across multiple channels, including voice enabled support.'],
                  proposed_technical_solution: ['Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support',]
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : ServiceAndSupportBot,
                  image_subtitle : 'Business  Architecture:Service and Support Bot' ,
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "AI-Powered Call Center Intelligence",
            solution_play: "Transform the Banking Experience",
            // l3 page link
            link: "AI-powered_call_center_intelligencee",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Automate call transcriptions for real-time and previously recorded calls by using custom speech models, text analytics, and industry-specific natural language processing. Data insight on customer sentiment, topic analysis, and other valuable call attributes are served up in a user-friendly visual dashboard in Power BI.
              </p>`,
                keyHighlights : {

                  decision_makers :[
                    'Primary: Chief Information Officer, Chief Digital Officer, Business Innovation team, Enterprise or Cloud Architects'
                  ],
                  decision_making_factors :   [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Customizable speech model incorporating industry and business language',
                    'Automated PII detection and redaction protects customer privacy and promotes compliance',
                    'Insights on real-time and previously recorded customer calls',
                    'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points :[
                    'Manual data entry during real-time conversation slows service delivery and creates errors',
                    'Labor shortages and high turnover add strain to call center operations',
                    'Privacy laws protecting customer data are varied and complex',
                    'Untapped data from historic call records is a wasted resource',
                    'Legacy AI transcription technologies are significantly less accurate than human transcription'
                  ],
                  other_notable_attributes:[],

                  products :[
                    'Cognitive Services',
                    'Azure Machine Learning',
                    'Power BI',
                    'Azure Speech Services',
                    'Azure SQL',
                    'Azure Storage'
                  ],
                  proposed_technical_solution: [
                    'Automate call transcriptions for real-time and previously recorded calls by using custom speech models, text analytics, and industry-specific natural language processing.',
                    'Data insight on customer sentiment, topic analysis, and other valuable call attributes are served up in a user-friendly visual dashboard in Power BI.'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : AIPoweredCallCenterIntelligence,
                  image_subtitle : 'Business  Architecture: AI-Powered Call Center Intelligence',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Customer Complaint Management",
            solution_play: "Transform the Banking Experience",
            // l3 page link
            link: "customer_complaint_management",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Ingest customer complaints from a variety of designated platforms (email, social media, review sites, etc.) and intelligently classify these complaints while surfacing them to the correct support agent for quick resolution. Finding similar previously resolved complaints as a reference for the support agents.
              </p>`,
                keyHighlights : {

                  decision_makers : [
                    'Primary: Business Decision Makers , Technical Decision Makers',

                  ],
                  decision_making_factors :  [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'All complaints in one data platform',
                    'Complaints tagged and routed to correct support agents',
                    'Review similar past complaints to ensure the correct support agent is designated for resolution'
                  ],
                  customer_pain_points : [
                    'Not enough time to respond to the multitude of complaints received',
                    'Difficult to keep track of and promptly address customer needs',
                    'Overlooking incoming complaints due to volume',
                    'Stress on employees and diminished productivity',
                    'Tedious and delayed sorting and resolution of complaints due to hampered agility'
                  ],
                  other_notable_attributes:[],
                  products :[
                    'Azure Kubernetes Services',
                    'Cognitive Search',
                    'Synapse',
                    'Azure Machine Learning',
                    'PowerApps'
                  ],
                  proposed_technical_solution: [
                    'Ingest customer complaints from a variety of designated platforms (email, social media, review sites, etc.) and intelligently classify these complaints while surfacing them to the correct support agent for quick resolution',
                    'Finding similar previously resolved complaints as a reference for the support agents'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : CustomerComplaintManagement,
                  image_subtitle : 'Business  Architecture: Customer Complaint Management',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
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
        title: "Manage Risk & Compliance",
        content: `
      <div >
  <p class="font-bold">
    Manage risk and compliance: 
  </p>
  <p class="py-2">Deepen risk insights, facilitate regulatory compliance, and combat financial crime.</p>
  <p class="my-2">
    <span class="font-bold">Customer challenges</span>
    <ul class="list-disc pl-6 mb-4">
      <li>Risk models take too long to run</li>
      <li>Improving risk model accuracy</li>
      <li>Regulatory changes severely impacting efficiency and timely compliance</li>
      <li>High infrastructure costs related to risk workloads</li>
      <li>Quickly identifying new criminal transaction patterns and anomalies</li>
      <li>Complex transaction monitoring and sanction-screening requirements</li>
      <li>Need for flexible tools to minimize false alerts</li>
      <li>Uncovering criminal activity in payment types from small and real-time to large-value transactions</li>
    </ul>
  </p>
  <p class="my-2">
    <span class="font-bold">Roles</span>
    <ul class="list-disc pl-6 mb-4">
      <li>Primary: Chief risk officer</li>
      <li>Secondary: Chief compliance officer, chief information security officer, head of fraud</li>
    </ul>
  </p>
  <p class="my-2">
    <span class="font-bold">Questions to Ask</span>
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>How are different teams using data from disparate systems to make decisions?</li>
    <li>How do you support increased spikes in risk modeling?</li>
    <li>What advanced analytics do you employ for risk?</li>
    <li>What tools do you depend on to react to market conditions?</li>
    <li>What tools do you use to monitor transaction anomalies?</li>
    <li>How are you looking at fraud to protect your bank while balancing controls that could impede growth?</li>
  </ul>
  <p>
    <a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/enterprise-commercial/financial-services?tab=overview">Learn More</a> about this Industry Pillar
  </p>
</div>


        `,

        use_cases: [
          {
            id: crypto.randomUUID(),
            solution_play: "Manage Risk & Compliance",
            title: "Fraud Detection and Transaction Monitoring",
            // l3 page link
            link: "fraud_detection_and_transaction_monitoring",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `<p>
              Identify risk of fraud or fraud associated activities including phone calls, credit card transactions, money laundering and online purchases with real-time analysis and streaming data.
              </p>`,

                keyHighlights : {

                  decision_makers : [
                    'Primary: Chief Financial Officer, Chief Risk Officer',
                    'Secondary: Chief Information Officer, Chief Data Officer'
                  ],
                  decision_making_factors : [
                    'Data availability',
                    'Ease of execution',
                    'Speed and accuracy of solution'
                  ],
                  desired_business_objectives : [
                    'Ensure client and company security by continuously reviewing transactions for fraudulent activities and high-risk areas',
                    'Improve customer satisfaction by proactively identifying and stopping fraudulent transactions with greater accuracy',
                    'Avoid costly claim scenarios by improving detection rates and delivering better insights to case workers',
                    'Save time and costs by reducing the amount of time to discover and stop fraud'
                  ],
                  customer_pain_points : [
                    'Fraud is resulting in significant costs to the business and is growing',
                    'Fraud claim rates from customers are high',
                    'Actions taken to combat fraud are reactive vs. preventative',
                    'Fraud detection accuracy rates are low'
                  ],
                  other_notable_attributes:[],
                  products :[
                    'Azure Machine Learning',
                    'Azure Synapse Analytics',
                    'Azure Cosmos DB',
                    'Power BI'
                  ],
                  proposed_technical_solution: ['Identify risk of fraud or fraud-associated activities including phone calls, credit card transactions, money laundering, and online purchases with real-time analysis and streaming data.',]
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : fraud_detection_and_transaction_monitoring,
                  image_subtitle : 'Business  Architecture: Fraud Detection and Transaction Monitoring',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Risk Classification and Loan Modeling",
            solution_play: "Manage Risk & Compliance",
            // l3 page link
            link: "risk_classification_and_loan_modeling",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Use predictive analytics and machine learning to estimate the optimal loan size that the SBA will approve for a given applicant which enables lending partners to process loan applications and make data-driven lending decisions quickly. Automate process for accelerating loan approval and rejection process and providing right-size loans to increase the likelihood of complete and timely payments to ensure compliance with SBA guidelines.
              </p>`,

                keyHighlights : {

                  decision_makers : [
                    'Primary: Business Analysts, Product Management team, Load origination and underwriting departments, Shared services team, Infrastructure team, Data team, Data Scientists'
                  ],
                  decision_making_factors : [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Model predicts the SBA loan amount the applicant will most likely be approved for',
                    'Holistic analytics reports for one or multiple borrowers',
                    'Automate processes to ensure compliance with SBA guidelines',
                    'Accelerate the loan approval and rejection process',
                    'Improve customer experience and increase customer retention'
                  ],
                  customer_pain_points : [
                    'Backlogs and errors in loan applications due to reliance on labor-intensive, manual, low-tech processing',
                    'High volumes of loan applications lead to bottlenecks and delays',
                    'Delays can cause applicants to lose critical business opportunities and impact their risk profiles',
                    'Inability to regularly run and re-run risk classification limits the accuracy of assessments',
                    'Lack of efficient, precise loan modeling makes it difficult to determine exactly what the SBA will approve'
                  ],
                  other_notable_attributes:[],
                  products :[
                    'Azure Data Lake Storage',
                    'Synapse Analytics'
                  ],
                  proposed_technical_solution: [
                    'Use predictive analytics and machine learning to estimate the optimal loan size that the SBA will approve for a given applicant',
                    'Automate process for accelerating loan approval and rejection process and providing right-size loans',
                    'Increase the likelihood of complete and timely payments to ensure compliance with SBA guidelines'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : RiskClassificationAndLoanModeling,
                  image_subtitle : 'Business  Architecture: Risk Classification and Loan Modeling',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },
        ],
      },

      // 4th use case
      {
        id: crypto.randomUUID(),
        title: "Empower Banking Employees",
        content: `
        <div >
  <p>
    <span class="font-bold">Empower banking employees</span> 
  </p>
  <p class="py-2">Improve productivity through better teamwork, insights, and communications.</p>
  <p class="my-2">
    <span class="font-bold">Customer challenges</span>
    <ul class="list-disc pl-6 mb-4">
      <li>Stagnant or declining staff productivity and organizational efficiency</li>
      <li>Lack of collaboration across departments and teams</li>
      <li>Difficulty in supporting remote and hybrid work scenarios</li>
      <li>Lack of unified communication tools and/or platform across the organization</li>
      <li>High employee dissatisfaction and attrition</li>
      <li>High cost to train and onboard employees</li>
      <li>Insufficient focus on accessibility, inclusion, and well-being</li>
    </ul>
  </p>
  <p class="my-2">
    <span class="font-bold">Key business outcomes</span>
    <ul class="list-disc pl-6 mb-4">
      <li>Break down silos to enable secure, cross-group collaboration across front, mid, and back offices.</li>
      <li>Enhance accessibility and usability of relevant information while meeting regulatory requirements.</li>
      <li>Foster inclusion and well-being by optimizing work-life integration through data-driven insights.</li>
      <li>Untether bankers to be productive and collaborative anywhere on secure mobile devices.</li>
      <li>Enable real-time employee engagement and live events with a suite of modern communication tools.</li>
      <li>Streamline key processes, improve productivity, and reduce operational costs with automation, self-service tools, and low-code apps.</li>
      <li>Improve operational agility with real-time business insights and key predictive trends and patterns.</li>
    </ul>
  </p>
  <p class="my-2">
    <span class="font-bold">Roles</span>
    <ul class="list-disc pl-6 mb-4">
      <li>Primary: Head of retail and/or corporate/commercial banking, COO, CTO, head of HR</li>
      <li>Secondary: Head of digital innovation, head of workplace, head of strategy/transformation, IT manager</li>
    </ul>
  </p>
  <p class="my-2">
    <span class="font-bold">Key Questions to Ask</span>
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>What is your plan for improving the employee experience as you implement a hybrid workplace?</li>
    <li>How does personnel burnout factor into your plans to improve the employee experience?</li>
    <li>Do you have manual or paper-based processes that could be automated?</li>
    <li>How easy is it for employees to access the resources and engage their colleagues to achieve their business goals?</li>
    <li>Is your workforce adequately trained and productive in using the latest tools and technologies available to them?</li>
    <li>What are your plans for employing or evaluating generative AI to improve banker productivity and empower your employees?</li>
    <li>How do you promote inclusion and employee well-being across your organization?</li>
  </ul>
  <p>
    <a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/enterprise-commercial/financial-services?tab=overview">Learn More</a> about this Industry Pillar
  </p>
</div>

      `,

        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "",
            solution_play: "",
            // l3 page link
            link: "document_process_automation",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                    "/industry/financial_services/document_process_automation",

                desc: `<p>Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points
              </p>`,

                keyHighlights : {

                  decision_makers : [
                    'Primary: Chief Legal Officer',
                    'Chief Operations Officer',
                    'Chief Data Officer',
                    'Chief Financial Officer',
                    'Chief Information Officer',
                    'Chief Risk Officer',
                    'Chief Compliance Officer'
                  ],
                  decision_making_factors : [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Increase speed to value/insight by reducing document processing times',
                    'Reduce operating expenses through automation of manual processes',
                    'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points :[
                    'Handle large volumes of documents and not able to efficiently capture any rich insights from them',
                    'Investing in expensive manual labor to extract data',
                    'Manual data extraction is inefficient and/or error-prone, resulting in low confidence in data accuracy',
                    'More time is spent on extracting data than on analysis, insights, and action'
                  ],
                  other_notable_attributes:[
                    'Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points'
                  ],
                  products :[
                    'Form Recognizer',
                    'Azure Logic Apps',
                    'Azure Cosmos DB',
                    'Power BI',
                    'Azure Data Explorer',
                    'Bot Framework',
                    'Luis'
                  ],
                  proposed_technical_solution: ['Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points',]
                },

                idealCostomerProfile : {
                  industries: 'Financial services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : DocumentProcessAutomation,
                  image_subtitle : 'Business  Architecture: Document Process Automation',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

        ],

      },


      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Use Cases",
        link: "all_use_cases",
        content: `
      <p className="font-bold"> Financial Services Industry</p>
        `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Document Process Automation",
            solution_play: "Modernize Payments & Core Banking",
            // l3 page link
            link: "document_process_automation",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                    "/industry/financial_services/document_process_automation",

                desc: `<p>Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points
              </p>`,

                keyHighlights : {

                  decision_makers : [
                    'Primary: Chief Legal Officer',
                    'Chief Operations Officer',
                    'Chief Data Officer',
                    'Chief Financial Officer',
                    'Chief Information Officer',
                    'Chief Risk Officer',
                    'Chief Compliance Officer'
                  ],
                  decision_making_factors : [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Increase speed to value/insight by reducing document processing times',
                    'Reduce operating expenses through automation of manual processes',
                    'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points :[
                    'Handle large volumes of documents and not able to efficiently capture any rich insights from them',
                    'Investing in expensive manual labor to extract data',
                    'Manual data extraction is inefficient and/or error-prone, resulting in low confidence in data accuracy',
                    'More time is spent on extracting data than on analysis, insights, and action'
                  ],
                  other_notable_attributes:[
                    'Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points'
                  ],
                  products :[
                    'Form Recognizer',
                    'Azure Logic Apps',
                    'Azure Cosmos DB',
                    'Power BI',
                    'Azure Data Explorer',
                    'Bot Framework',
                    'Luis'
                  ],
                  proposed_technical_solution: ['Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points',]
                },

                idealCostomerProfile : {
                  industries: 'Financial services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : DocumentProcessAutomation,
                  image_subtitle : 'Business  Architecture: Document Process Automation',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Information Discovery and Management",
            solution_play: "Modernize Payments & Core Banking",
            // l3 page link
            link: "information_discovery_and_management",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/financial_services/information_discovery_and_management",
                desc: ` <p>
               
              Search through structured and unstructured documents to quickly find the most relevant information and documents including areas with compliance risk.

              </p>`,

                keyHighlights : {

                  decision_makers : [
                    'Primary: Head of HR',
                    'Head of Customer Service',
                    'Chief Learning Officer',
                    'Chief Knowledge Officer',
                    'Chief Compliance Officer'
                  ],
                  decision_making_factors :  ['Scalability', 'Cost', 'Efficiency'],
                  desired_business_objectives : [
                    'Increase speed to value/speed to insight by reducing time spent on search',
                    'Improve user productivity by surfacing most relevant search results',
                    'Ensure compliance through completeness of search over all data and documents',
                    'Reduce search infrastructure costs'
                  ],
                  customer_pain_points :[
                    'Employees or users are not finding the information they need in internal sites, or information takes a long time to find',
                    'Failed searches commonly experienced, where no relevant search results are displayed',
                    'Organization not able to pull together a comprehensive view of all data related to a specific topic (i.e., docs with regulatory terms for compliance purposes)'
                  ],
                  other_notable_attributes:[
                    'Search through structured and unstructured documents to quickly find the most relevant information and documents including areas with compliance risk'
                  ],
                  products :[
                    'Azure Cognitive Search',
                    'Azure Web Apps',
                    'Power BI'
                  ],
                  proposed_technical_solution: ['Search through structured and unstructured documents to quickly find the most relevant information and documents including areas with compliance risk.']
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : InformationDiscoveryAndManagement,
                  image_subtitle : 'Business  Architecture: Information Discovery and Management',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Transaction Processing at Any Scale",
            solution_play: "Modernize Payments & Core Banking",
            // l3 page link
            link: "transaction_processing_at_any_scale",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/financial_services/transaction_processing_at_any_scale",
                desc: ` <p>
               
              Scale high volumes of transactional data at any time accurately and reliably.

              </p>`,
                keyHighlights : {

                  decision_makers :[
                    'Primary: Chief Information Officer',
                    'Chief Digital Officer',
                    'Business Innovation team',
                    'Enterprise or Cloud Architects'
                  ],
                  decision_making_factors :  ['Scalability', 'Cost', 'Efficiency'],
                  desired_business_objectives :  [
                    'Increase revenue by scaling high volumes of payment data at any time accurately and reliably',
                    'Act on sales data faster by centralizing payment pipelines with real-time processing and analytics',
                    'Expand sales footprint through fast, scalable, on-demand, globally distributed tech platform',
                    'Reduce search infrastructure costs'
                  ],
                  customer_pain_points :[
                    'Payment infrastructure needs to be agile and mature enough to capitalize on the benefits of the innovation',
                    'Need to leverage enterprise data to drive greater business value, develop new business models, and implement innovative pricing models',
                    'Need ways to improve customer satisfaction and retention by providing a bridge from cash and check forms to real-time digital transactions'
                  ],
                  other_notable_attributes:[],
                  products : [],
                  proposed_technical_solution: [
                    'Scale high volumes of transactional data at any time accurately and reliably',
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : automated_quality_inspection,
                  image_subtitle : 'Business  Architecture: Transaction Processing at Any Scale',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "AI-Powered Insurance Claims Automation",
            solution_play: "Modernize Payments & Core Banking",
            // l3 page link
            link: "AI-powered_insurance_claims_automation",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/financial_services/AI-powered_insurance_claims_automation",
                desc: ` <p>
               
              Handle claims processing through an intelligent agent with cognitive skills to handle image, ID, and documents with goal to reduce claims processing time and manual effort in end-to-end claims processing for better customer experience. Provide capability to recognize document type, extract required fields and push data to downstream applications, significantly reducing manual efforts and creating smoother customer experience.
              </p>`,
                keyHighlights : {

                  decision_makers : [
                    'Primary: Business Decision Makers',
                    'Claim Processing Engine Owners',
                    'Chief Claims Officers',
                    'Regional Chief Information Officers',
                    'Technical Decision Makers'
                  ],
                  decision_making_factors : [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Increase time to value/time to insight by reducing document processing times',
                    'Reduce operating expenses by automation of manual processes',
                    'Improve confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points :[
                    'Organization handles large volumes of documents (claims, applications, contracts, invoices, etc.) and is not able to efficiently capture any rich insights from them',
                    'Organization is investing in expensive manual labor to extract data',
                    'Manual data extraction is inefficient and/or error-prone, resulting in low confidence in data accuracy',
                    'More time is spent on extracting data than on analysis and insights'
                  ],
                  other_notable_attributes:[],
                  products : [
                    'Cognitive Services',
                    'Cosmos DB',
                    'Bot Framework',
                    'Azure Storage',
                    'Form Recognizer',
                    'Luis'
                  ],
                  proposed_technical_solution: [
                    'Handle claims processing through an intelligent agent with cognitive skills to handle image, ID, and documents with the goal to reduce claims processing time and manual effort in end-to-end claims processing for better customer experience',
                    'Provide capability to recognize document type, extract required fields, and push data to downstream applications, significantly reducing manual efforts and creating smoother customer experience'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : AIPoweredInsuranceClaimsAutomation,
                  image_subtitle : 'Business  Architecture: AI-Powered Insurance Claims Automation',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Service and Support Bot",
            solution_play: "Transform the Banking Experience",
            // l3 page link
            link: "service_and_support_bot",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Resolve user and customer queries without human intervention across multiple channels, including voice enabled support.
              </p>`,
                keyHighlights : {

                  decision_makers : ['Head of Customer Service',
                    'Head of Customer Experience',
                    'Head of IT',
                    'Head of Legal',
                    'Head of HR',
                    'Chief Marketing Officer',
                    'Product Owner',
                    'Director of eCommerce', 'Secondary (Influencers): Head of Customer Service', 'Head of Customer Experience'],
                  decision_making_factors :  [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives :[
                    'Improve first-call resolution rates by answering specific questions with the best available knowledge',
                    'Increase customer satisfaction by reducing wait times with immediate 24/7 service through a conversational agent',
                    'Grow revenue with differentiated customer experience by leveraging conversational interfaces for personal shopping',
                    'Reduce support costs/cost of operations by offloading and automating certain support services'
                  ],
                  customer_pain_points : [
                    'Case volumes and wait times are increasing',
                    'Growing customer churn due to impersonal and inconsistent sales or support service',
                    'Customers are dissatisfied with response wait times and expect to be able to reach sales or support service at all hours, but the business is unable to provide or must spend exorbitant amounts to do so, adding pressure on tight margins',
                    'Sales or support agents are tied up answering simple queries that can be automated'
                  ],
                  other_notable_attributes:[
                    'Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support'
                  ],
                  products :['Resolve user and customer queries without human intervention across multiple channels, including voice enabled support.'],
                  proposed_technical_solution: ['Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support',]
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : ServiceAndSupportBot,
                  image_subtitle : 'Business  Architecture:Service and Support Bot' ,
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "AI-Powered Call Center Intelligence",
            solution_play: "Transform the Banking Experience",
            // l3 page link
            link: "AI-powered_call_center_intelligencee",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Automate call transcriptions for real-time and previously recorded calls by using custom speech models, text analytics, and industry-specific natural language processing. Data insight on customer sentiment, topic analysis, and other valuable call attributes are served up in a user-friendly visual dashboard in Power BI.
              </p>`,
                keyHighlights : {

                  decision_makers :[
                    'Primary: Chief Information Officer, Chief Digital Officer, Business Innovation team, Enterprise or Cloud Architects'
                  ],
                  decision_making_factors :   [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Customizable speech model incorporating industry and business language',
                    'Automated PII detection and redaction protects customer privacy and promotes compliance',
                    'Insights on real-time and previously recorded customer calls',
                    'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points :[
                    'Manual data entry during real-time conversation slows service delivery and creates errors',
                    'Labor shortages and high turnover add strain to call center operations',
                    'Privacy laws protecting customer data are varied and complex',
                    'Untapped data from historic call records is a wasted resource',
                    'Legacy AI transcription technologies are significantly less accurate than human transcription'
                  ],
                  other_notable_attributes:[],

                  products :[
                    'Cognitive Services',
                    'Azure Machine Learning',
                    'Power BI',
                    'Azure Speech Services',
                    'Azure SQL',
                    'Azure Storage'
                  ],
                  proposed_technical_solution: [
                    'Automate call transcriptions for real-time and previously recorded calls by using custom speech models, text analytics, and industry-specific natural language processing.',
                    'Data insight on customer sentiment, topic analysis, and other valuable call attributes are served up in a user-friendly visual dashboard in Power BI.'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : AIPoweredCallCenterIntelligence,
                  image_subtitle : 'Business  Architecture: AI-Powered Call Center Intelligence',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Customer Complaint Management",
            solution_play: "Transform the Banking Experience",
            // l3 page link
            link: "customer_complaint_management",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Ingest customer complaints from a variety of designated platforms (email, social media, review sites, etc.) and intelligently classify these complaints while surfacing them to the correct support agent for quick resolution. Finding similar previously resolved complaints as a reference for the support agents.
              </p>`,
                keyHighlights : {

                  decision_makers : [
                    'Primary: Business Decision Makers',
                    'Technical Decision Makers'
                  ],
                  decision_making_factors :  [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'All complaints in one data platform',
                    'Complaints tagged and routed to correct support agents',
                    'Review similar past complaints to ensure the correct support agent is designated for resolution'
                  ],
                  customer_pain_points : [
                    'Not enough time to respond to the multitude of complaints received',
                    'Difficult to keep track of and promptly address customer needs',
                    'Overlooking incoming complaints due to volume',
                    'Stress on employees and diminished productivity',
                    'Tedious and delayed sorting and resolution of complaints due to hampered agility'
                  ],
                  other_notable_attributes:[],
                  products :[
                    'Azure Kubernetes Services',
                    'Cognitive Search',
                    'Synapse',
                    'Azure Machine Learning',
                    'PowerApps'
                  ],
                  proposed_technical_solution: [
                    'Ingest customer complaints from a variety of designated platforms (email, social media, review sites, etc.) and intelligently classify these complaints while surfacing them to the correct support agent for quick resolution',
                    'Finding similar previously resolved complaints as a reference for the support agents'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : CustomerComplaintManagement,
                  image_subtitle : 'Business  Architecture: Customer Complaint Management',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            solution_play: "Manage Risk & Compliance",
            title: "Fraud Detection and Transaction Monitoring",
            // l3 page link
            link: "fraud_detection_and_transaction_monitoring",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: `<p>
              Identify risk of fraud or fraud associated activities including phone calls, credit card transactions, money laundering and online purchases with real-time analysis and streaming data.
              </p>`,

                keyHighlights : {

                  decision_makers : [
                    'Primary: Chief Financial Officer, Chief Risk Officer',
                    'Secondary: Chief Information Officer, Chief Data Officer'
                  ],
                  decision_making_factors : [
                    'Data availability',
                    'Ease of execution',
                    'Speed and accuracy of solution'
                  ],
                  desired_business_objectives : [
                    'Ensure client and company security by continuously reviewing transactions for fraudulent activities and high-risk areas',
                    'Improve customer satisfaction by proactively identifying and stopping fraudulent transactions with greater accuracy',
                    'Avoid costly claim scenarios by improving detection rates and delivering better insights to case workers',
                    'Save time and costs by reducing the amount of time to discover and stop fraud'
                  ],
                  customer_pain_points : [
                    'Fraud is resulting in significant costs to the business and is growing',
                    'Fraud claim rates from customers are high',
                    'Actions taken to combat fraud are reactive vs. preventative',
                    'Fraud detection accuracy rates are low'
                  ],
                  other_notable_attributes:[],
                  products :[
                    'Azure Machine Learning',
                    'Azure Synapse Analytics',
                    'Azure Cosmos DB',
                    'Power BI'
                  ],
                  proposed_technical_solution: ['Identify risk of fraud or fraud-associated activities including phone calls, credit card transactions, money laundering, and online purchases with real-time analysis and streaming data.',]
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : fraud_detection_and_transaction_monitoring,
                  image_subtitle : 'Business  Architecture: Fraud Detection and Transaction Monitoring',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Risk Classification and Loan Modeling",
            solution_play: "Manage Risk & Compliance",
            // l3 page link
            link: "risk_classification_and_loan_modeling",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Use predictive analytics and machine learning to estimate the optimal loan size that the SBA will approve for a given applicant which enables lending partners to process loan applications and make data-driven lending decisions quickly. Automate process for accelerating loan approval and rejection process and providing right-size loans to increase the likelihood of complete and timely payments to ensure compliance with SBA guidelines.
              </p>`,

                keyHighlights : {

                  decision_makers : [
                    'Primary: Business Analysts, Product Management team, Load origination and underwriting departments, Shared services team, Infrastructure team, Data team, Data Scientists'
                  ],
                  decision_making_factors : [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Model predicts the SBA loan amount the applicant will most likely be approved for',
                    'Holistic analytics reports for one or multiple borrowers',
                    'Automate processes to ensure compliance with SBA guidelines',
                    'Accelerate the loan approval and rejection process',
                    'Improve customer experience and increase customer retention'
                  ],
                  customer_pain_points : [
                    'Backlogs and errors in loan applications due to reliance on labor-intensive, manual, low-tech processing',
                    'High volumes of loan applications lead to bottlenecks and delays',
                    'Delays can cause applicants to lose critical business opportunities and impact their risk profiles',
                    'Inability to regularly run and re-run risk classification limits the accuracy of assessments',
                    'Lack of efficient, precise loan modeling makes it difficult to determine exactly what the SBA will approve'
                  ],
                  other_notable_attributes:[],
                  products :[
                    'Azure Data Lake Storage',
                    'Synapse Analytics'
                  ],
                  proposed_technical_solution: [
                    'Use predictive analytics and machine learning to estimate the optimal loan size that the SBA will approve for a given applicant',
                    'Automate process for accelerating loan approval and rejection process and providing right-size loans',
                    'Increase the likelihood of complete and timely payments to ensure compliance with SBA guidelines'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Financial Services',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : RiskClassificationAndLoanModeling,
                  image_subtitle : 'Business  Architecture: Risk Classification and Loan Modeling',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EWNlQ1ANRcVDlXfdCxUFBTQBWEP9WTaU5zgtsDzJw_d7Nw?e=TmTgYA'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
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
      "The Healthcare industry is comprised of providers of diagnostic, preventative, remedial, and therapeutic services such as doctors, nurses, hospitals, and other private, public, and voluntary organizations.  It also includes medical technology/equipment manufacturers, pharmaceutical and life sciences manufacturers, and health payor and insurance companies.  This industry has been at the forefront of the COVID-19 response which will have long lasting impacts on all the verticals in the industry.",

    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Unlock Value from Your Clinical and Operational Data",
        content: `
      
        <div>
        <p className="font-bold mb-4">Unlock Value from Your Clinical and Operational Data</p>
        <p>Leverage insights to improve patient care by connecting data from multiple sources and using predictive analytics for data modeling and identifying clinical trends.</p>
        
        <p className="font-bold mt-6 mb-2">Customer Scenarios</p>
        <p>Clinical analytics: Access and securely share actionable data insights</p>
        <p>Operational analytics: Gain insights to help optimize operational effectiveness</p>
        
        <p className="font-bold mt-6 mb-2">Roles</p>
       <ul class="list-disc pl-6 mb-4">
          <li>COO, VP/Dir. Of Ops</li>
          <li>CTO/Head of IT/Development Leaders</li>
          <li>Chief digital officer</li>
          <li>Chief Medial/Nursing Informatics Officer</li>
        </ul>
        
        <p className="font-bold mt-6 mb-2">Challenges</p>
       <ul class="list-disc pl-6 mb-4">
          <li>Managing a fragmented ecosystem of data, applications, and devices</li>
          <li>Managing changing technology and legacy systems</li>
          <li>Lack of consolidated and real-time financial data to assess performance and opportunities</li>
          <li>Data management and security</li>
        </ul>
        
        <p className="font-bold mt-6 mb-2">Business Outcomes</p>
        <p>Leverage insights to improve patient care by connecting data from multiple sources and using predictive analytics for data modeling and identifying clinical trends.</p>
        
        <p className="font-bold mt-6 mb-2">Questions to Ask</p>
       <ul class="list-disc pl-6 mb-4">
          <li>How do you ensure that you have the right resources - inventory, people, equipment - at the right place at the right time?</li>
          <li>Are different teams using data from disparate systems to make decisions?</li>
          <li>How are you using IT as an entry point to qualify for strategic initiatives like population health?</li>
          <li>Does the technology you're using today preserve the integrity of patient records as physicians are measured on accuracy and compliance audits?</li>
        </ul>

        <p classname="mt-3"><a className="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/solution-plays"> Learn More </a>  about this Industry Pillar</p>
     
        `,
        use_cases: [

          // todo :: Clinical Analytics and Decision Support (Patient Risk)

          {
            id: crypto.randomUUID(),
            title: "Clinical Analytics and Decision Support (Patient Risk)",
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: "Clinical analytics involve predictive analytics, processing patient data to discover insights and identify correlations, thereby assisting providers in suggesting actions and treatments based on patient risk factors. Patients receive personalized care and optimized treatment plans (precision medicine) via web or mobile.",
                keyHighlights: {
                  decision_makers: [
                    'Primary: Chief Medical Officer, Chief Science Officer, Chief Data Officer'
                  ],
                  decision_making_factors: [
                    'Ability to integrate with current systems',
                    'Cost',
                    'Impact on patient outcomes',
                    'Scalability'
                  ],
                  desired_business_objectives: [
                    'Improve patient outcomes by optimizing treatments based on individual factors',
                    'Improve patient experience by transforming their health data into actionable guidance',
                    'Reduce unnecessary intake/re-admissions through proactive/reactive intervention',
                    'Reduce operating costs by enabling providers to make faster, more reliable decisions'
                  ],
                  customer_pain_points: [
                    'Struggling to accelerate transition to value-based, personalized care',
                    'Early intervention is a challenge',
                    'Data is disparate, or cannot be processed effectively, limiting ability to do predictive analytics for patient and treatment insights',
                    'Variation in care and quality of outcomes is high',
                    'Burnout among staff is high, demanding workloads and schedules'
                  ],
                  proposed_technical_solution: ['Clinical analytics involve predictive analytics, processing patient data to discover insights and identify correlations, thereby assisting providers in suggesting actions and treatments based on patient risk factors. Patients receive personalized care and optimized treatment plans (precision medicine) via web or mobile.'],
                  other_notable_attributes: [],
                  products: [
                    'Azure Machine Learning',
                    'Cognitive Services: Speech',
                    'Applied AI Services: Form Recognizer',
                    'Azure Synapse Analytics',
                    'Azure Cosmos DB',
                    'PowerApps',
                    'Azure Kubernetes Service',
                    'Azure Container Registry'
                  ]
                },
                idealCostomerProfile: {
                  industries: "Healthcare",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: clinical_analytics_and_decision_support_patient_risk,
                  image_subtitle: "Business  Architecture: Clinical Analytics and Decision Support (Patient Risk)",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                },
                partners: [
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },

          // Todo :: Document Process Automation

          {
            id: crypto.randomUUID(),
            title: "Document Process Automation",
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: "Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points",
                keyHighlights: {
                  decision_makers: [
                    'Primary: Chief Operations Officer, Chief Data Officer, Chief Information Officer'
                  ],
                  decision_making_factors: [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives: [
                    'Increase speed to value/insight by reducing document processing times',
                    'Reduce operating expenses through automation of manual processes',
                    'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points: [
                    'Investing in expensive manual labor to extract data',
                    'Manual data extraction is inefficient and/or error-prone, resulting in low confidence in data accuracy'
                  ],
                  proposed_technical_solution: [
                    'Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points'
                  ],
                  other_notable_attributes: [],
                  products: [
                    'Form Recognizer',
                    'Azure Logic Apps',
                    'Azure Cosmos DB',
                    'Power BI',
                    'Azure Data Explorer',
                    'Bot Framework',
                    'Luis'
                  ]

                  
                },
                idealCostomerProfile: {
                  industries: "Healthcare",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: document_process_automation_healtcare,
                  image_subtitle: "Business  Architecture: Document Process Automation ",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                },
                partners: [
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },

          // Todo :: Drug Discovery and Research

          {
            id: crypto.randomUUID(),
            title: "Drug Discovery and Research",
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: "Assist in drug research through drug property prediction and drug-target interaction prediction (in addition to searching literature)",
                keyHighlights: {
                  decision_makers: [
                    'Primary: Head of Research, Chief Operating Officer, Chief Executive Officer, Chief Data Officer, Director of Innovation'
                  ],
                  decision_making_factors: [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives: [
                    'Increase speed to market by reducing time needed to identify viable drugs',
                    'Improve patient outcomes by discovering drugs that combat diseases with little or no treatments',
                    'Reduce cost of experimentation and research by automating the process to go through data and past results to feed AI-enabled simulations'
                  ],
                  customer_pain_points: [
                    'Long discovery and trial and error lead times put the organization at a competitive disadvantage',
                    'Drug R&D costs are very high, putting pressure on margins',
                    'Low rates of viability (both in terms of drug efficacy and commercialization)'
                  ],
                  proposed_technical_solution: [
                    'Assist in drug research through drug property prediction and drug-target interaction prediction (in addition to searching literature)'
                  ],
                  other_notable_attributes: [],
                  products_tech_stack: []
                },
                idealCostomerProfile: {
                  industries: "Healtcare",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: drug_discovery_and_research,
                  image_subtitle: "Business  Architecture: Drug Discovery and Research ",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                },
                partners: [
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },

         ],
      },

       // 2nd use cases
       {
        id: crypto.randomUUID(),
        title: "Deliver Exceptional Patient Experiences",
        content: `
  <div>
  <p class="font-bold mb-2">Deliver Exceptional Patient Experiences</p>
  <p>Deliver personalized experiences to engage patients in secure, individualized encounters through every point of care</p>

  <p class="font-bold mt-6 mb-2">Customer Scenarios</p>
  <p>Personalized care: Build relationships through enhanced omnichannel experiences</p>
  <p>Patient insights: Transform data into prescriptive insights</p>
  <p>Virtual health: Provide new avenues for care</p>

  <p class="font-bold mt-6 mb-2">Roles</p>
  <ul class="list-disc pl-6 mb-4">
    <li>CEO, CXO or Clinical Leads</li>
    <li>Chief experience officer, VP/Head of Marketing, Customer support</li>
    <li>Chief Digital Officer</li>
    <li>COO</li>
  </ul>

  <p class="font-bold mt-6 mb-2">Business Outcomes</p>
  <p>Deliver personalized experiences to engage patients in secure, individualized encounters through every point of care.</p>

  <p class="font-bold mt-6 mb-2">Questions to Ask</p>
  <ul class="list-disc pl-6 mb-4">
    <li>Do you personalize and nurture patient interactions across the entire journey?</li>
    <li>Do you have a method of easily escalating a support conversation from digital messaging to a more personal method?</li>
    <li>Do you have every detail of your patients aggregated in a single view?</li>
    <li>How do you measure and quantify patient satisfaction within your health system today?</li>
  </ul>

  <p><a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/solution-plays">Learn More</a> about this Industry Pillar</p>
</div>


        
        `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Service and Support Bot",
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: "Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support",
                keyHighlights: {
                  decision_makers: [
                    'Primary: Head of Customer Service, Head of Customer Experience, Head of IT, Head of Legal, Head of HR, Chief Marketing Officer, Product Owner, Director of eCommerce',
                    'Secondary: Head of Customer Service, Head of Customer Experience'
                  ],
                  decision_making_factors: [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives: [
                    'Improve first-call resolution rates by answering specific questions with the best available knowledge',
                    'Increase patient satisfaction by reducing wait times with immediate 24/7 service through a conversational agent',
                    'Improve patient experience by leveraging conversational interfaces for personal health management and administration',
                    'Reduce support costs/cost of operations by offloading and automating certain support services'
                  ],
                  customer_pain_points: [
                    'Case volumes and wait times are increasing',
                    'Growing customer churn due to impersonal and inconsistent sales or support service',
                    'Customers are dissatisfied with response wait times and expect to be able to reach sales or support service at all hours, but the business is unable to provide or must spend exorbitant amounts to do so, adding pressure on tight margins',
                    'Sales or support agents are tied up answering simple queries that can be automated'
                  ],
                  proposed_technical_solution: [
                    'Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support'
                  ],
                  other_notable_attributes: [],
                  products_tech_stack: []
                },
                idealCostomerProfile: {
                  industries: "Healthcare",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: service_and_support_bot_healthcare,
                  image_subtitle: "Business Architecture: Service and Support Bot",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                },
                partners: [
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          }
        ]
      
      },

      // 3rd use cases
      {
        id: crypto.randomUUID(),
        title: "Empower Your Healthcare Workforce",
        content: `
       <div>
       <p classname="font-bold mb-2"> Empower Your Healthcare Workforce </p>
  <p >Reduce time spent documenting patient encounters and alleviate provider burnout through AI-powered solutions that drive more personal and accessible patient care</p>

  <p class="font-bold mt-6 mb-2">Customer Scenarios</p>
  <p>Ambient clinical intelligence: Automatically document patient encounters</p>
  <p>Clinical documentation: Reduce administrative tasks and burnout</p>
  <p>Diagnostic intelligence: Empower radiologists to drive action, quality, and efficiency</p>

  <p class="font-bold mt-6 mb-2">Roles</p>
 <ul class="list-disc pl-6 mb-4">
    <li>CEO, CXO or Clinical Leads</li>
    <li>Chief experience officer, VP/Head of Marketing, Customer support</li>
    <li>Chief Digital Officer</li>
    <li>COO</li>
  </ul>

  <p class="font-bold mt-6 mb-2">Business Outcomes</p>
  <p>Reduce time spent documenting patient encounters and alleviate provider burnout through AI-powered solutions that drive more personal and accessible patient care</p>

  <p class="font-bold mt-6 mb-2">Questions to Ask</p>
 <ul class="list-disc pl-6 mb-4">
    <li>How are you reducing complexity with clinician workflows?</li>
    <li>How are you training staff on new technologies?</li>
    <li>Are your teams able to stay productive and efficient with your existing tools?</li>
    <li>Do you have manual or paper-based processes that could be automated?</li>
    <li>Are your teams able to stay productive and efficient with your existing tools?</li>
  </ul>

  <p><a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/solution-plays">Learn More</a> about this Industry Pillar</p>
</div>

        
        `,
        use_cases: [
            {
            id: crypto.randomUUID(),
            title: "Medical Device and Equipment Tracking",
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: "Manage and monitor data from medical devices and equipment to optimize operations (resource allocation, maintenance)",
                keyHighlights: {
                  decision_makers: [
                    'Primary: Chief Medical Officer, Chief Science Officer, Chief Data Officer',
                    'Secondary: Chief Operating Officer, Head of Operations'
                  ],
                  decision_making_factors: [
                    'Ability to integrate with current systems',
                    'Cost',
                    'Scalability'
                  ],
                  desired_business_objectives: [
                    'Increase patient satisfaction by delivering consistent real-time, always-on user experience anywhere in the world',
                    'Make better care decisions with smart connected devices with access to better information',
                    'Save on equipment costs by increasing capacity utilization of the existing medical equipment and inventory',
                    'Avoid poor patient outcomes by easily identifying those in need of guided care based upon presenting symptoms and personal history'
                  ],
                  customer_pain_points: [
                    'Need to improve processes, gain efficiencies, and effectively manage resources; increase capacity utilization of the existing medical product stock. This enables hospitals to avoid unnecessary new acquisitions',
                    'Need to equip decision makers with real-time dashboards that visualize patient data such as treatment progress and hospital data such as inventory data, supply chain status, and cost management',
                    'Need ways to improve the quality of patient care and healthcare outcomes'
                  ],
                  proposed_technical_solution: [
                    'Manage and monitor data from medical devices and equipment to optimize operations (resource allocation, maintenance)'
                  ],
                  other_notable_attributes: [],
                  products_tech_stack: []
                },
                idealCostomerProfile: {
                  industries: "Healthcare",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: medical_device_and_equipment_tracking,
                  image_subtitle: "Business  Architecture: Medical Device and Equipment Tracking ",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                },
                partners: [
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          }, ],
      },

      //  4th use cases
      {
        id: crypto.randomUUID(),
        title: "Foster Health Team Collaboration",
        content: ` <div>
  <p class="font-bold mb-2">Foster Health Team Collaboration</p> 
  <p>Connect, engage, and efficiently manage your healthcare workforce with tools that help them provide the best possible care.</p>

  <p class="font-bold mt-6 mb-2">Customer Scenarios</p>
  <p>Care Coordination: Develop systems of care management with clinical intelligence and workflows</p>
  <p>Care Team Collaboration: Optimize resources and solve problems collectively</p>
  <p>Remote Patient Monitoring: Combine IoT and analytics to optimize treatments</p>

  <p class="font-bold mt-6 mb-2">Roles</p>
 <ul class="list-disc pl-6 mb-4">
    <li>CEO or Clinical Leads</li>
    <li>Chief Medical/Nurse Officer</li>
    <li>COO, VP/Dir. Of Ops</li>
    <li>CTO/Head of IT/Development Leaders</li>
  </ul>

  <p class="font-bold mt-6 mb-2">Challenges</p>
 <ul class="list-disc pl-6 mb-4">
    <li>Remote collaboration</li>
    <li>Distributed workforce</li>
    <li>Complex workflow management</li>
    <li>Fragmented data</li>
    <li>Siloed systems and applications that slow health team productivity</li>
  </ul>

  <p class="font-bold mt-6 mb-2">Business Outcomes</p>
  <p>Connect, engage, and efficiently manage your healthcare workforce with tools that help them provide the best possible care.</p>

  <p class="font-bold mt-6 mb-2">Questions to Ask</p>
 <ul class="list-disc pl-6 mb-4">
    <li>Are your teams able to collaborate and stay productive with your existing tools?</li>
    <li>Do your employees have access to the right training needed to perform their specific job function?</li>
    <li>How aligned are teams across your organization?</li>
    <li>Are you proactively giving care teams information to engage with their patients?</li>
    <li>Do you have manual or paper-based processes that could be automated?</li>
  </ul>

  <p><a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/solution-plays">Learn More</a> about this Industry Pillar</p>
</div>
`,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "",
            link: "",
            use_cases_content: [
              {
                subtitle: "",
                link: "",
                desc: "",
                keyHighlights: {
                  decision_makers: [],
                  decision_making_factors: [],
                  desired_business_objectives: [],
                  customer_pain_points: [],
                  proposed_technical_solution: [],
                  other_notable_attributes: [],
                  products: [],
                },
                idealCostomerProfile: {
                  industries: "Healthcare",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: "",
                  image_subtitle: "Business  Architecture:  ",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                },
                partners: [
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },


      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Use Cases",
        content: `
        <p className="font-bold">Healthcare Industry</p>
          `,
        use_cases: [
            // todo :: Clinical Analytics and Decision Support (Patient Risk)

            {
              id: crypto.randomUUID(),
              title: "Clinical Analytics and Decision Support (Patient Risk)",
              link: "",
              solution_play : "Unlock Value from Your Clinical and Operational Data",
              use_cases_content: [
                {
                  subtitle: "Overview",
                  link: "",
                  desc: "Clinical analytics involve predictive analytics, processing patient data to discover insights and identify correlations, thereby assisting providers in suggesting actions and treatments based on patient risk factors. Patients receive personalized care and optimized treatment plans (precision medicine) via web or mobile.",
                  keyHighlights: {
                    decision_makers: [
                      'Primary: Chief Medical Officer, Chief Science Officer, Chief Data Officer'
                    ],
                    decision_making_factors: [
                      'Ability to integrate with current systems',
                      'Cost',
                      'Impact on patient outcomes',
                      'Scalability'
                    ],
                    desired_business_objectives: [
                      'Improve patient outcomes by optimizing treatments based on individual factors',
                      'Improve patient experience by transforming their health data into actionable guidance',
                      'Reduce unnecessary intake/re-admissions through proactive/reactive intervention',
                      'Reduce operating costs by enabling providers to make faster, more reliable decisions'
                    ],
                    customer_pain_points: [
                      'Struggling to accelerate transition to value-based, personalized care',
                      'Early intervention is a challenge',
                      'Data is disparate, or cannot be processed effectively, limiting ability to do predictive analytics for patient and treatment insights',
                      'Variation in care and quality of outcomes is high',
                      'Burnout among staff is high, demanding workloads and schedules'
                    ],
                    proposed_technical_solution: [],
                    other_notable_attributes: [],
                    products: [
                      'Azure Machine Learning',
                      'Cognitive Services: Speech',
                      'Applied AI Services: Form Recognizer',
                      'Azure Synapse Analytics',
                      'Azure Cosmos DB',
                      'PowerApps',
                      'Azure Kubernetes Service',
                      'Azure Container Registry'
                    ]
                  },
                  idealCostomerProfile: {
                    industries: "Healthcare",
                    geography: "",
                    market_cap: "",
                    employees: "",
                    budget: "",
                    image: clinical_analytics_and_decision_support_patient_risk,
                    image_subtitle: "Business  Architecture: Clinical Analytics and Decision Support (Patient Risk)",
                    image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                  },
                  partners: [
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                  ],
                },
              ],
            },
  
            // Todo :: Document Process Automation
  
            {
              id: crypto.randomUUID(),
              title: "Document Process Automation",
               solution_play : "Unlock Value from Your Clinical and Operational Data",
              link: "",
              use_cases_content: [
                {
                  subtitle: "Overview",
                  link: "",
                  desc: "Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points",
                  keyHighlights: {
                    decision_makers: [
                      'Primary: Chief Operations Officer, Chief Data Officer, Chief Information Officer'
                    ],
                    decision_making_factors: [
                      'Scalability',
                      'Cost',
                      'Efficiency'
                    ],
                    desired_business_objectives: [
                      'Increase speed to value/insight by reducing document processing times',
                      'Reduce operating expenses through automation of manual processes',
                      'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                    ],
                    customer_pain_points: [
                      'Investing in expensive manual labor to extract data',
                      'Manual data extraction is inefficient and/or error-prone, resulting in low confidence in data accuracy'
                    ],
                    proposed_technical_solution: [
                      'Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points'
                    ],
                    other_notable_attributes: [],
                    products: [
                      'Form Recognizer',
                      'Azure Logic Apps',
                      'Azure Cosmos DB',
                      'Power BI',
                      'Azure Data Explorer',
                      'Bot Framework',
                      'Luis'
                    ]
  
                    
                  },
                  idealCostomerProfile: {
                    industries: "Healthcare",
                    geography: "",
                    market_cap: "",
                    employees: "",
                    budget: "",
                    image: document_process_automation_healtcare,
                    image_subtitle: "Business  Architecture: Document Process Automation ",
                    image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                  },
                  partners: [
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                  ],
                },
              ],
            },
  
            // Todo :: Drug Discovery and Research
  
            {
              id: crypto.randomUUID(),
              title: "Drug Discovery and Research",
              solution_play : "Unlock Value from Your Clinical and Operational Data",
              link: "",
              use_cases_content: [
                {
                  subtitle: "Overview",
                  link: "",
                  desc: "Assist in drug research through drug property prediction and drug-target interaction prediction (in addition to searching literature)",
                  keyHighlights: {
                    decision_makers: [
                      'Primary: Head of Research, Chief Operating Officer, Chief Executive Officer, Chief Data Officer, Director of Innovation'
                    ],
                    decision_making_factors: [
                      'Scalability',
                      'Cost',
                      'Efficiency'
                    ],
                    desired_business_objectives: [
                      'Increase speed to market by reducing time needed to identify viable drugs',
                      'Improve patient outcomes by discovering drugs that combat diseases with little or no treatments',
                      'Reduce cost of experimentation and research by automating the process to go through data and past results to feed AI-enabled simulations'
                    ],
                    customer_pain_points: [
                      'Long discovery and trial and error lead times put the organization at a competitive disadvantage',
                      'Drug R&D costs are very high, putting pressure on margins',
                      'Low rates of viability (both in terms of drug efficacy and commercialization)'
                    ],
                    proposed_technical_solution: [
                      'Assist in drug research through drug property prediction and drug-target interaction prediction (in addition to searching literature)'
                    ],
                    other_notable_attributes: [],
                    products_tech_stack: []
                  },
                  idealCostomerProfile: {
                    industries: "Healthcare",
                    geography: "",
                    market_cap: "",
                    employees: "",
                    budget: "",
                    image: drug_discovery_and_research,
                    image_subtitle: "Business  Architecture: Drug Discovery and Research ",
                    image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                  },
                  partners: [
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                  ],
                },
              ],
            },


            {
              id: crypto.randomUUID(),
              title: "Service and Support Bot",
              solution_play : "Deliver Exceptional Patient Experiences",
              link: "",
              use_cases_content: [
                {
                  subtitle: "Overview",
                  link: "",
                  desc: "Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support",
                  keyHighlights: {
                    decision_makers: [
                      'Primary: Head of Customer Service, Head of Customer Experience, Head of IT, Head of Legal, Head of HR, Chief Marketing Officer, Product Owner, Director of eCommerce',
                      'Secondary: Head of Customer Service, Head of Customer Experience'
                    ],
                    decision_making_factors: [
                      'Scalability',
                      'Cost',
                      'Efficiency'
                    ],
                    desired_business_objectives: [
                      'Improve first-call resolution rates by answering specific questions with the best available knowledge',
                      'Increase patient satisfaction by reducing wait times with immediate 24/7 service through a conversational agent',
                      'Improve patient experience by leveraging conversational interfaces for personal health management and administration',
                      'Reduce support costs/cost of operations by offloading and automating certain support services'
                    ],
                    customer_pain_points: [
                      'Case volumes and wait times are increasing',
                      'Growing customer churn due to impersonal and inconsistent sales or support service',
                      'Customers are dissatisfied with response wait times and expect to be able to reach sales or support service at all hours, but the business is unable to provide or must spend exorbitant amounts to do so, adding pressure on tight margins',
                      'Sales or support agents are tied up answering simple queries that can be automated'
                    ],
                    proposed_technical_solution: [
                      'Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support'
                    ],
                    other_notable_attributes: [],
                    products_tech_stack: []
                  },
                  idealCostomerProfile: {
                    industries: "Healthcare",
                    geography: "",
                    market_cap: "",
                    employees: "",
                    budget: "",
                    image: service_and_support_bot_healthcare,
                    image_subtitle: "Business Architecture: Service and Support Bot",
                    image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                  },
                  partners: [
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                  ],
                },
              ],
            },

            {
              id: crypto.randomUUID(),
              title: "Medical Device and Equipment Tracking",
              solution_play :"Empower Your Healthcare Workforce",
              link: "",
              use_cases_content: [
                {
                  subtitle: "Overview",
                  link: "",
                  desc: "Manage and monitor data from medical devices and equipment to optimize operations (resource allocation, maintenance)",
                  keyHighlights: {
                    decision_makers: [
                      'Primary: Chief Medical Officer, Chief Science Officer, Chief Data Officer',
                      'Secondary: Chief Operating Officer, Head of Operations'
                    ],
                    decision_making_factors: [
                      'Ability to integrate with current systems',
                      'Cost',
                      'Scalability'
                    ],
                    desired_business_objectives: [
                      'Increase patient satisfaction by delivering consistent real-time, always-on user experience anywhere in the world',
                      'Make better care decisions with smart connected devices with access to better information',
                      'Save on equipment costs by increasing capacity utilization of the existing medical equipment and inventory',
                      'Avoid poor patient outcomes by easily identifying those in need of guided care based upon presenting symptoms and personal history'
                    ],
                    customer_pain_points: [
                      'Need to improve processes, gain efficiencies, and effectively manage resources; increase capacity utilization of the existing medical product stock. This enables hospitals to avoid unnecessary new acquisitions',
                      'Need to equip decision makers with real-time dashboards that visualize patient data such as treatment progress and hospital data such as inventory data, supply chain status, and cost management',
                      'Need ways to improve the quality of patient care and healthcare outcomes'
                    ],
                    proposed_technical_solution: [
                      'Manage and monitor data from medical devices and equipment to optimize operations (resource allocation, maintenance)'
                    ],
                    other_notable_attributes: [],
                    products_tech_stack: []
                  },
                  idealCostomerProfile: {
                    industries: "Healthcare",
                    geography: "",
                    market_cap: "",
                    employees: "",
                    budget: "",
                    image: medical_device_and_equipment_tracking,
                    image_subtitle: "Business  Architecture: Medical Device and Equipment Tracking ",
                    image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EZD_Yfurw3tIlmrT116fCCIBW9Ij3u4nVincdAYcEqI44A?e=U6lC4f",
                  },
                  partners: [
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                    {
                      image: "",
                      link: "",
                    },
                  ],
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
    heading: "Retail & Consumer Goods Overview",
    overview:
      "Microsoft’s approach to retail takes into account market insights and the competitive landscape, and positions Microsoft’s value proposition via these industry Industry Pillar: Maximize the value of your data, Elevate the consumer shopping experience, Build a real-time sustainable supply chain and Empower your store associates.Our industry Industry Pillar are the fundamental areas we believe retailers should focus on in their digital transformation journey. Microsoft Cloud for Retail is the vehicle to enable retailers to execute their digital transformation.",

    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Maximize the Value of Your Data",
        content: `
          <div >
  <p class="mb-4">
    <span class="font-bold">Maximize the Value of Your Data</span> <br/> Realize the true value of your data by unifying disparate data sources across the shopper journey, discovering insights that enable better experiences.
  </p>
  <p class="my-2">
    <span class="font-bold">Customer Scenarios Unified customer profile</span> <br> Gain insights across the complete view of a shopper's journey Shopper and operations analytics: Unlock omnichannel insights with advanced analytics Intelligent fraud prevention: Help protect your revenue from fraud using AI to identify patterns Retail media: Unlock ad revenue using your 1st party shopper data.
  </p>
  <p class="my-2">
    <span class="font-bold">Roles </span> CIO/VP, CDO/VP, COO/VP, CMO/VP (required by all)
  </p>
  <p class="my-2">
    <span class="font-bold">Challenges</span> Vast amounts of data in many places makes it hard to make sense of it or know what's important and what's not 360-degree view of the customer New shopping journeys creating fraud vulnerabilities across digital and voice channels.
  </p>
  <p class="my-2">
    <span class="font-bold">Business Outcomes</span>
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Realize the true value of your data by unifying disparate data sources across the shopper journey, discovering insights that enable better experiences</li>
    <li>Gain insights across the complete view of a shopper's journey</li>
    <li>Unlock omnichannel insights with advanced analytics</li>
    <li>Protect your revenue from fraud using AI to identify patterns and multi-modal biometrics stop fraudsters</li>
    <li>Unlock ad revenue using your 1st party shopper data</li>
    <li>Reduce costs by optimizing shopper journeys and streamlining automation</li>
  </ul>
  <p class="my-2">
    <span class="font-bold">Questions to Ask</span>
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Do you have a data strategy in place? Are you leveraging your data across every part of your retail business to maximize sales? Your operating model? What kind of analytics tools do you use?</li>
    <li>Do you have a complete view of your customers across all stages of the shopper journey? How are you using data to continuously optimize that journey and increase automation?</li>
    <li>Do you have a retail media network? Where does it run? Are you leveraging your data to the best of your ability? What fraud prevention technologies and strategies are you using?</li>
    <li>How effective is that reflected in your metrics? Is it effective? What advance analytics do you employ for return risk fraud and shrinkage?</li>
  </ul>
  <p>
    <a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/solution-plays/maximize-the-value-of-your-data?tab=overview">Learn More</a> about Industry Pillar
  </p>
</div>

            `,

        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Personalization and Recommendations",
            // l3 page link
            link: "personalization_and_recommendations",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/maximize_the_value_of_your_data/personalization_and_recommendations",

                desc: `<p>Using omni-channel data, predict a customer's likely preferences to deliver a tailored browsing and/or shopping experience with personalized product recommendations. For a codeless experience off the shelf experience, use the Intelligent Recommendations solution to improve item discovery and driving upsell and cross sell.
                </p>`,

                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Executive Officer, Chief Operations Officer",
                    "Secondary (Influencers): Head of Quality Control",
                  ],
                  decision_making_factors: [
                    "Ease of setup",
                    "Ability to leverage",
                    "current infrastructure Cost",
                  ],
                  desired_business_objectives: [
                    "Decrease customer acquisition cost by capturing repeat buyers and driving loyalty by understanding personal needs",
                    "Grow revenue with differentiated customer experience by increasing basket size and customer spending per transaction",
                    "Improve marketing effectiveness and agility by increasing offer take rates and conversation",
                  ],
                  customer_pain_points: [
                    "Behavior and purchasing data (online and in person) reside in different systems and do not support personalizing the customer experience",
                    "There are too many disparate channels that​ disrupt and silo the customer journey",
                    "Organization is missing a 360-degree omni-channel customer view with a limited ability to run machine learning and AI across massive data sets to discover meaningful patterns and develop actionable monetization strategy",
                    "Lack of omni-channel data connection means ads and offers cannot be properly tailored to customer, resulting in ineffective targeting",
                    "Legacy systems make two-way feedback from customers difficult",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Synapse",
                    "Azure Data Lake Storage",
                    "Azure Machine Learning",
                    "Azure Kubernetes Services",
                    "Cosmos DB",
                    "Power BI",
                  ],
                  proposed_technical_solution: [
                    "Using omni-channel data, predict a customer's likely preferences to deliver a tailored browsing and/or shopping experience with personalized product recommendations. For a codeless experience off the shelf experience, use the Intelligent Recommendations solution to improve item discovery and driving upsell and cross sell.",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: personalization_and_recommendations,
                  image_subtitle:
                    "Business  Architecture: Personalization And Recommendations",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Customer Revenue Growth Factor",
            // l3 page link
            link: "customer_revenue_growth_factor",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                 
                Bring together data from different systems into a single platform to analyze which factors in your business are leading to customer revenue growth. 
                </p>`,

                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Revenue Officer, Chief Financial Officer",
                    "Secondary (Influencers): Chief Executive Officer",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Increase efficiency by bringing together business and technical strategies",
                    "Align data from multiple data streams directly to business ROI",
                    "Tie cost and customer inputs together for more meaningful supply chain planning",
                    "Dynamic picture of data across the enterprise to gain critical insights on growth and opportunity",
                  ],
                  customer_pain_points: [
                    "Organization handles large volumes of documents (claims, applications, contracts, invoices, etc.) and is not able to efficiently capture any rich insights from them",
                    "Organization is investing in expensive manual labor to extract data",
                    "Manual data extraction is inefficient and/or error-prone, leading to low confidence in data accuracy",
                    "More time is spent on extracting data than on analysis and insights",
                  ],
                  other_notable_attributes: [

                  ],
                  products: [
                    "Synapse",
                    "Azure Data Lake Storage",
                    "Azure Machine Learning",
                    "Azure Container Images",
                    "Power BI",
                  ],
                  proposed_technical_solution: ['Bring together data from different systems into a single platform to analyze which factors in your business are leading to customer revenue growth.' ],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: customer_revenue_growth_factor,
                  image_subtitle:
                    "Business  Architecture: Customer Revenue Growth Factor",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Azure Intelligent Recommendations",
            // l3 page link
            link: "azure_intelligent_recommendations",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                 
                Provide relevant discovery for customers through a codeless and powerful experience with innovative AI for personalization and recommendations. Use modern machine-learning algorithms, provide personalized product recommendations and telemetry insights.  
                </p>
                <p>
                 
                These recommendations and insights help you 
    
                </p>
  
                <p>
                 
                (1) significantly improve catalog navigation and item discovery,(2) create upsell and cross-sell opportunities, and (3) improve shoppers' experiences and product usability.
                </p>`,
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Marketing Officer, Marketing Officers, Chief Revenue Officer, e-Commerce Leaders, Head of Customer Experience, Chief Information Officer, Chief Technology Officer, Chief Digital Officer, Data and Engineering Teams, Data Scientists, Head of Security, Head of Compliance",
                    "Secondary (Influencers): Head of Customer Service, Head of Customer Experience, Head of Compliance",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Insightful, personalized, tailored, and more engaging customer experiences from existing user behavior data or item metadata",
                    "Any model customization - seamless integration into any ecosystem",
                    "Personalized journey every time a customer interacts with your business",
                    "Highly adaptable to customer business scenarios based on input data and algorithm choice",
                  ],
                  customer_pain_points: [
                    "Catalogue navigation and item discovery",
                    "Upsell and cross-sell opportunities",
                    "Customers' experiences",
                    "Product usability",
                    "Personalized results for new and returning users",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Data Lake Storage",
                    "Synapse",
                    "Power BI",
                    "Azure Intelligent Recommendations",
                  ],
                  proposed_technical_solution: [
                    "Provide relevant discovery for customers through a codeless and powerful experience with innovative AI for personalization and recommendations.",
                    "Use modern machine-learning algorithms to provide personalized product recommendations and telemetry insights.",
                    "Improve catalog navigation and item discovery.",
                    "Create upsell and cross-sell opportunities.",
                    "Improve shoppers' experiences and product usability.",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: azure_intelligent_recommendations,
                  image_subtitle:
                    "Business  Architecture: Azure Intelligent Recommendations",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Product Catalog Discovery",
            // l3 page link
            link: "product_catalog_discovery",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                 
                Store product information and session state and enable users to search the catalog on web or in-app effectively.
                </p>`,
                keyHighlights: {
                  decision_makers: [
                    'Primary: Chief Marketing Officer, Product Owner (App/Web), Director of eCommerce, Chief Digital Officer'
                  ],
                  decision_making_factors: [],
                  desired_business_objectives: [
                    'Grow sales and average basket size through better product discoverability (eliminate "0 results" search yields)',
                    "Increase customer loyalty by reducing friction in omni-channel shopping experiences (i.e., accurate inventory counts, reduced search times in web and mobile)",
                    "Increase customer satisfaction and trust by ensuring product information is quality and up to date",
                  ],
                  customer_pain_points: [
                    "Customers are not finding the products they want, basket size and conversion rates are low",
                    "Failed searches commonly experienced, where no relevant search results are displayed",
                    "Product lists are not updated in real-time, which causes friction with in-store shopping experience",
                    "Product data needs are not standardized across multiple suppliers",
                    "Legacy search has no semantic understanding and is not yielding the right results for what customers are expecting or looking for",
                  ],
                  other_notable_attributes: [],
                  products: [

                  ],
                  proposed_technical_solution: [ "Store product information and session state",
                    "Enable users to search the catalog on web or in-app effectively",],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: product_catalog_discovery,
                  image_subtitle:
                    "Business  Architecture: Product Catalog Discovery",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },

      // 2nd use cases
      {
        id: crypto.randomUUID(),
        title: "Elevate the Shopping Experience",
        content: `
   <div >
  <p class="mb-4">
    <span classname="font-bold">Elevate the Shopping Experience</span>
    <br>Transform the shopping experience through data analytics and new store technology to create more engaged shoppers with stronger lifetime value.
  </p>
  <p class="my-2 ">
  <span classname="font-bold">  Customer Scenarios Intelligent Stores </span>
  <br>
    Maximize sales by optimizing in-store customer and product signals. Unified commerce: Increase engagement and drive conversations across channels. Real-time personalization: Enable personalized recommendations and search results. Digital advertising solutions: Drive growth, acquire new customers, and increase LTV. Seamless customer service: Utilize intelligent and automated customer service tools.
  </p>
  <p class="my-2">
    <span class="font-bold">Roles : </span>  CMO/VP, Chief Merchant/VP, CDO/VP, COO/VP
  </p>
  <p class="my-2">
    <span class="font-bold">Challenges</span>
    <br>Personalizing the shopping experience is a strategic priority, but few consumers believe retailers are doing a good job.
    Product discovery and searchability in-store, mobile or online.
    Poor customer service experiences.
    Wasteful ad spend.
    Inability to meet increased customer expectations for connected, contextual experiences across channels, including social, messaging, agent and voice.
    Frictional, burdensome authentication experiences are reducing conversions and losing customers.
  </p>
  <p class="my-2">
    <span class="font-bold">Business Outcomes</span>
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Transform the shopping experience through data analytics and new store technology to create more engaged shoppers with stronger lifetime value.</li>
    <li>Maximize sales by optimizing in-store customer and product signals.</li>
    <li>Increase customer engagement and retention and drive conversions across channels.</li>
    <li>Improve acquisition with digital assistance through predictive targeting.</li>
    <li>Enable personalized search results and recommendations that boost up- and cross-sell revenue.</li>
    <li>Drive growth, acquire new customers, and increase LTV.</li>
    <li>Utilize intelligent and automated customer service tools.</li>
    <li>Improve conversion and CX through frictionless multi-modal biometric authentication.</li>
  </ul>
  <p class="my-2">
    <span class="font-bold">Questions to Ask</span>
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>How does your sales team help engage customers?</li>
    <li>What are your primary demand generation activities today?</li>
    <li>Are you satisfied with the ROI you are getting from your digital marketing investments?</li>
    <li>Are you maximizing profit across your retail media channels? Online or in-store?</li>
    <li>What tools do you depend on to react to market conditions?</li>
    <li>What data are you using to personalize customer interactions?</li>
    <li>Are you achieving the conversion and average sale size metrics you want to?</li>
    <li>Do you have digital transformation/migration targets?</li>
    <li>Which channels are you able to offer shoppers? What actions can they achieve in each?</li>
    <li>Is customer information and context carried with them from channel to channel?</li>
    <li>What percentage of shoppers are you losing at the authentication step?</li>
    <li>How are you authenticating shoppers digitally and/or in the voice channel?</li>
  </ul>
  <p>
    <a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/solution-plays">Learn More</a> about Industry Pillar
  </p>
</div>




           `,

        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Sales, Service and Support BotCustomer Data Platform",
            // l3 page link
            link: "sales_service-and-support-bot",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Resolve user and customer queries without human intervention across multiple channels, including voice enabled support.
                </p>`,
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Executive Officer, Chief Operations Officer",
                    "Secondary (Influencers): Head of Quality Control",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Improve first-call resolution rates by answering specific questions with the best available knowledge",
                    "Increase customer satisfaction by reducing wait times with immediate 24/7 service through a conversational agent",
                    "Grow revenue with differentiated customer experience by leveraging conversational interfaces for personal shopping",
                    "Reduce support costs/cost of operations by offloading and automating certain support services",
                  ],
                  customer_pain_points: [
                    "Failed searches commonly experienced, where no relevant search results are displayed",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Conversational Agent Platform",
                    "Voice-enabled Support",
                    "Knowledge Base Management System",
                    "Analytics and Reporting Tools",
                    "Natural Language Processing (NLP) Frameworks",
                  ],
                  proposed_technical_solution: [
                    "Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: sales_service_and_support_bot,
                  image_subtitle:
                    "Business  Architecture: Sales, Service and Support BotCustomer Data Platform",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Buy Online, Pick Up In-Store",
            // l3 page link
            link: "buy_online_pick_up_in_store",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                BOPIS (buy online, pick up in-store) is a business model that allows consumers to shop and place orders online and then pick up their purchases in the brick-and-mortar store, often within the same day.
                </p>`,
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Marketing Officer, Chief Digital Officer, Chief Data Officer, Head of Customer Experience, Head of e-Commerce",
                    "Secondary: Head of Customer Service, Head of Customer Experience",
                  ],
                  decision_making_factors: [
                    "Ability to integrate with existing eCommerce system",
                    "Cost efficient",
                    "Scalable",
                    "Ease of execution",
                  ],
                  desired_business_objectives: [
                    "Increase sales",
                    "Reduce costs",
                    "Reduce last-mile shipping costs",
                    "Increase customer satisfaction",
                  ],
                  customer_pain_points: [
                    "Product lists are not updated in real-time, causing friction with in-store shopping experience",
                  ],
                  other_notable_attributes: [

                  ],
                  products: [
                    "Synapse",
                    "Azure Data Lake Storage",
                    "Azure Machine Learning",
                    "Azure Container Images",
                    "Power BI",
                  ],
                  proposed_technical_solution: ["BOPIS (buy online, pick up in-store) is a business model that allows consumers to shop and place orders online and then pick up their purchases in the brick-and-mortar store, often within the same day.",],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: buy_online_pick_up_in_store,
                  image_subtitle:
                    "Business  Architecture: Buy Online, Pick Up In-Store",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Conversational AI with Azure OpenAI for Retail",
            // l3 page link
            link: "conversational_ai_with_azure_open_ai_for_retail",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Drive customer interactions with human-like responses, collecting data from every interaction in a feedback loop for optimization. Reduce customer contact center costs and improve user experience in retail by enabling you to create content once and deploy simultaneously to multiple channels in a single click.
                </p>`,
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Customer Officer,VP Service and Support,Customer Service Manager,Contact Center Manager",
                    "Secondary (Influencers): Head of Customer Service, Head of Customer Experience",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "AI interactions with customers through human-like dialogues",
                    "Data collected provides a continuous feedback loop, enhancing content over time",
                    "Existing telephony or IVR system can be published to voice assistants and chatbots",
                    "Rich analytics and a dashboard provide actionable insights into customer interactions",
                  ],
                  customer_pain_points: [
                    "Product data needs are not standardized across multiple suppliers",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Machine Learning",
                    "Bot Services",
                    "Cognitive Search",
                    "Cognitive Services",
                  ],
                  proposed_technical_solution: [
                    [
                      "Drive customer interactions with human-like responses, collecting data from every interaction in a feedback loop for optimization",
                      "Reduce customer contact center costs and improve user experience in retail by enabling you to create content once and deploy simultaneously to multiple channels in a single click",
                    ],
                  ],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: conversational_ai_with_azure_openai_for_retail,
                  image_subtitle:
                    "Business  Architecture: Conversational AI with Azure OpenAI for Retail",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },

      //  3rd use cases
      {
        id: crypto.randomUUID(),
        title: "Build a Real Time and Sustainable Supply Chain",
        content: `
       <div>
  <p class="mb-4 ">
    <b>Build a Real Time and Sustainable Supply Chain</b> <br> Create an agile, resilient, and sustainable supply chain by connecting data across your ecosystem to enhance time to value.
  </p>
  <p class="my-2">
    <b>Customer Scenarios</b>  <br> Demand planning and optimization: Predict demand using AI to optimize inventory Supply chain visibility: Leverage demand and supply signals for future opportunities Flexible fulfillment: Optimize order management, giving customers choice across channels.
  </p>
  <p class="my-2">
    <b>Roles:</b> COO/VP, CSO
  </p>
  <p class="my-2">
    <b>Challenges</b>  <br> Real-time supply chain visibility and actionable insights Ensuring the right inventory in the right place at the right time Need for agility to pivot due to disrupted supply chains Sustainability concerns Meeting expectations for order and delivery status in consumers' preferred channels, while enabling automated, interactive changes.
  </p>
  <p class="my-2">
    <b>Business Outcomes</b>  <br> Create an agile, resilient, and sustainable supply chain by connecting data across your ecosystem to enhance time to value.
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Predict demand using AI to optimize inventory</li>
    <li>Leverage demand and supply signals for future opportunities</li>
    <li>Optimize order management, giving customers choice across channels</li>
    <li>Reduce costs and increase CSAT by meeting expectations for order and delivery status in consumers' preferred channels, while enabling automated, interactive changes</li>
  </ul>
  <p class="my-2">
    <b>Questions to Ask</b>
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>How long does it take on average to develop new digital products and services for fulfillment?</li>
    <li>Are there legacy systems that are key to the enhanced ability to deliver products to customers?</li>
    <li>Do your time-tested operational systems seamlessly extend to support multi-channel fulfillment?</li>
    <li>Do you have the ability to move or promote products in real time to optimize inventory levels?</li>
    <li>What kinds of order, return, and delivery status notifications do you provide customers? Through which channels? Can they engage and/or interact with your brand through those notifications?</li>
    <li>Are you able to run predictive and prescriptive analytics on your supply chain and inventory data?</li>
  </ul>
  <p>
    <a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/solution-plays">Learn More</a> about Industry Pillar
  </p>
</div>


          `,

        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Demand Forecasting",
            // l3 page link
            link: "demand_forecasting",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
                Determine how much demand there will be for a product at the store level to optimize inventory, material and product orders.
                </p>`,

                keyHighlights: {
                  decision_makers: [
                    "Primary: Head of Supply Chain, Chief Operations Officer, Chief Marketing Officer",
                    "Secondary: Head of Supply Chain, VP of Operations, CIO, CEO",
                  ],
                  decision_making_factors: [
                    "Expected accuracy and efficiency improvements",
                    "Ability to quickly adapt solution building blocks",
                    "Ease of execution (availability of development partners)",
                    "Data availability/readiness",
                  ],
                  desired_business_objectives: [
                    "Improve time to value through increased forecast speed (reducing project time)",
                    "Reduce inventory carrying costs by predicting necessary stock levels at any given time",
                    "Grow revenue by increasing in-stock percentage through stronger forecast accuracy",
                  ],
                  customer_pain_points: [
                    "Legacy search has no semantic understanding and is not yielding the right results for what customers are expecting or looking for",
                  ],
                  other_notable_attributes: [

                  ],
                  products: [
                    "Azure Cosmos DB",
                    "Power BI",
                    "Azure Machine Learning",
                    "Azure Synapse Analytics",
                    "Azure Storage",
                  ],
                  proposed_technical_solution: ["Determine how much demand there will be for a product at the store level to optimize inventory, material, and product orders",],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: demand_forecasting,
                  image_subtitle: "Business  Architecture: Demand Forecasting",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },

      // 4th use case
      {
        id: crypto.randomUUID(),
        title: "Empower Your Store Associate",
        content: `
              <div>
  <p>
    <b>Empower Your Store Associate</b><br> Equip your store associate with solutions to enable real-time store communications, workforce management, and store automation.
  </p>
  <p class="my-2">
    <b>Customer Scenarios</b><br> Real-time store communications and collaboration: Leverage modern tools for connecting your team<br> Retail workforce management: Digitize managerial tasks like store scheduling<br> Process automation and career development: Expand what your stores and people can do through automation.
  </p>
  <p class="my-2">
    <b>Roles:</b> COO/VP, CPO/VP
  </p>
  <p class="my-2">
    <b>Challenges</b><br> Retail frontline workers feel they do not have the right digital tools or technology to do their job effectively Increasing employee productivity Putting employees on a level playing field with deeply informed consumers Flexible work and labor scheduling Retaining associates and agents amid a labor shortage Empowering agents to provide relevant recommendations that realize up- and cross-sell revenue potential.
  </p>
  <p class="my-2">
    <b>Business Outcomes</b><br> Equip your store associate with solutions to enable real-time store communications, workforce management, and store automation.
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Leverage modern tools for connecting your team</li>
    <li>Digitize managerial tasks like store scheduling</li>
    <li>Expand what your stores and people can do through automation</li>
    <li>Reduce agent churn, increase efficiency, and increase up- and cross-sell revenue by empowering them with relevant recommendations, dialog, and actions</li>
  </ul>
  <p class="my-2">
    <b>Questions to Ask</b>
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li>Are different teams using data from disparate systems to make decisions?</li>
    <li>How do your employees in stores communicate with each other and HQ?</li>
    <li>How do you plan on supporting employee workplace as we come out of the pandemic?</li>
    <li>Are your teams able to collaborate and stay productive with your existing tools?</li>
    <li>How do store associates make scheduling requests or switch shifts with other employees?</li>
    <li>Do you provide chat and phone agents with action, dialog, and product recommendations?</li>
    <li>What's your agent retention/churn rate and why?</li>
  </ul>
  <p>
    <a class="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/solution-plays">Learn More</a> about Industry Pillar
  </p>
</div>


          `,
        use_cases : [
          {
            id: crypto.randomUUID(),
            title: "",
            // l3 page link
            link: "",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/resilient_operations/Automated_quality_inspection",

                desc: "",

                // Todo L3 Content
                keyHighlights: {
                  decision_makers: [

                  ],
                  decision_making_factors: [

                  ],
                  desired_business_objectives: [

                  ],
                  customer_pain_points: [

                  ],
                  proposed_technical_solution: [],
                  other_notable_attributes: [],
                  products: [

                  ],
                },

                idealCostomerProfile: {
                  industries: "",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: "",
                   image_subtitle: "Business  Architecture:  ",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },

      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Use Cases",
        content: `
          <p className="font-bold"> Retail & CG Industry </p>
            `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Personalization and Recommendations",
            solution_play: "Maximize the Value of Your Data",
            // l3 page link
            link: "personalization_and_recommendations",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/maximize_the_value_of_your_data/personalization_and_recommendations",

                desc: `<p>Using omni-channel data, predict a customer's likely preferences to deliver a tailored browsing and/or shopping experience with personalized product recommendations. For a codeless experience off the shelf experience, use the Intelligent Recommendations solution to improve item discovery and driving upsell and cross sell.
              </p>`,

                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Executive Officer, Chief Operations Officer",
                    "Secondary (Influencers): Head of Quality Control",
                  ],
                  decision_making_factors: [
                    "Ease of setup",
                    "Ability to leverage",
                    "current infrastructure Cost",
                  ],
                  desired_business_objectives: [
                    "Decrease customer acquisition cost by capturing repeat buyers and driving loyalty by understanding personal needs",
                    "Grow revenue with differentiated customer experience by increasing basket size and customer spending per transaction",
                    "Improve marketing effectiveness and agility by increasing offer take rates and conversation",
                  ],
                  customer_pain_points: [
                    "Behavior and purchasing data (online and in person) reside in different systems and do not support personalizing the customer experience",
                    "There are too many disparate channels that​ disrupt and silo the customer journey",
                    "Organization is missing a 360-degree omni-channel customer view with a limited ability to run machine learning and AI across massive data sets to discover meaningful patterns and develop actionable monetization strategy",
                    "Lack of omni-channel data connection means ads and offers cannot be properly tailored to customer, resulting in ineffective targeting",
                    "Legacy systems make two-way feedback from customers difficult",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Synapse",
                    "Azure Data Lake Storage",
                    "Azure Machine Learning",
                    "Azure Kubernetes Services",
                    "Cosmos DB",
                    "Power BI",
                  ],
                  proposed_technical_solution: [
                    "Using omni-channel data, predict a customer's likely preferences to deliver a tailored browsing and/or shopping experience with personalized product recommendations. For a codeless experience off the shelf experience, use the Intelligent Recommendations solution to improve item discovery and driving upsell and cross sell.",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle:
                    "Business  Architecture: Personalization And Recommendations",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Customer Revenue Growth Factor",
            solution_play: "Maximize the Value of Your Data",
            // l3 page link
            link: "customer_revenue_growth_factor",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
               
              Bring together data from different systems into a single platform to analyze which factors in your business are leading to customer revenue growth. 
              </p>`,

                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Revenue Officer, Chief Financial Officer",
                    "Secondary (Influencers): Chief Executive Officer",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Increase efficiency by bringing together business and technical strategies",
                    "Align data from multiple data streams directly to business ROI",
                    "Tie cost and customer inputs together for more meaningful supply chain planning",
                    "Dynamic picture of data across the enterprise to gain critical insights on growth and opportunity",
                  ],
                  customer_pain_points: [
                    "Organization handles large volumes of documents (claims, applications, contracts, invoices, etc.) and is not able to efficiently capture any rich insights from them",
                    "Organization is investing in expensive manual labor to extract data",
                    "Manual data extraction is inefficient and/or error-prone, leading to low confidence in data accuracy",
                    "More time is spent on extracting data than on analysis and insights",
                  ],
                  other_notable_attributes: [
                    "Bring together data from different systems into a single platform to analyze which factors in your business are leading to customer revenue growth",
                  ],
                  products: [
                    "Synapse",
                    "Azure Data Lake Storage",
                    "Azure Machine Learning",
                    "Azure Container Images",
                    "Power BI",
                  ],
                  proposed_technical_solution: [],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle:
                    "Business  Architecture: Customer Revenue Growth Factor",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Azure Intelligent Recommendations",
            solution_play: "Maximize the Value of Your Data",
            // l3 page link
            link: "azure_intelligent_recommendations",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
               
              Provide relevant discovery for customers through a codeless and powerful experience with innovative AI for personalization and recommendations. Use modern machine-learning algorithms, provide personalized product recommendations and telemetry insights.  
              </p>
              <p>
               
              These recommendations and insights help you 
  
              </p>

              <p>
               
              (1) significantly improve catalog navigation and item discovery,(2) create upsell and cross-sell opportunities, and (3) improve shoppers' experiences and product usability.
              </p>`,
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Marketing Officer, Marketing Officers, Chief Revenue Officer, e-Commerce Leaders, Head of Customer Experience, Chief Information Officer, Chief Technology Officer, Chief Digital Officer, Data and Engineering Teams, Data Scientists, Head of Security, Head of Compliance",
                    "Secondary (Influencers): Head of Customer Service, Head of Customer Experience, Head of Compliance",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Insightful, personalized, tailored, and more engaging customer experiences from existing user behavior data or item metadata",
                    "Any model customization - seamless integration into any ecosystem",
                    "Personalized journey every time a customer interacts with your business",
                    "Highly adaptable to customer business scenarios based on input data and algorithm choice",
                  ],
                  customer_pain_points: [
                    "Catalogue navigation and item discovery",
                    "Upsell and cross-sell opportunities",
                    "Customers' experiences",
                    "Product usability",
                    "Personalized results for new and returning users",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Data Lake Storage",
                    "Synapse",
                    "Power BI",
                    "Azure Intelligent Recommendations",
                  ],
                  proposed_technical_solution: [
                    "Provide relevant discovery for customers through a codeless and powerful experience with innovative AI for personalization and recommendations.",
                    "Use modern machine-learning algorithms to provide personalized product recommendations and telemetry insights.",
                    "Improve catalog navigation and item discovery.",
                    "Create upsell and cross-sell opportunities.",
                    "Improve shoppers' experiences and product usability.",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle:
                    "Business  Architecture: Azure Intelligent Recommendations",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Product Catalog Discovery",
            solution_play: "Maximize the Value of Your Data",
            // l3 page link
            link: "product_catalog_discovery",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
               
              Store product information and session state and enable users to search the catalog on web or in-app effectively.
              </p>`,
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Marketing Officer",
                    "Product Owner (App/Web)",
                    "Director of eCommerce",
                    "Chief Digital Officer",
                  ],
                  decision_making_factors: [],
                  desired_business_objectives: [
                    'Grow sales and average basket size through better product discoverability (eliminate "0 results" search yields)',
                    "Increase customer loyalty by reducing friction in omni-channel shopping experiences (i.e., accurate inventory counts, reduced search times in web and mobile)",
                    "Increase customer satisfaction and trust by ensuring product information is quality and up to date",
                  ],
                  customer_pain_points: [
                    "Customers are not finding the products they want, basket size and conversion rates are low",
                    "Failed searches commonly experienced, where no relevant search results are displayed",
                    "Product lists are not updated in real-time, which causes friction with in-store shopping experience",
                    "Product data needs are not standardized across multiple suppliers",
                    "Legacy search has no semantic understanding and is not yielding the right results for what customers are expecting or looking for",
                  ],
                  other_notable_attributes: [],
                  products: [

                  ],
                  proposed_technical_solution: ["Store product information and session state",
                    "Enable users to search the catalog on web or in-app effectively",],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle:
                    "Business  Architecture: Product Catalog Discovery",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Sales, Service and Support BotCustomer Data Platform",
            solution_play: "Elevate the Shopping Experience",
            // l3 page link
            link: "sales_service-and-support-bot",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Resolve user and customer queries without human intervention across multiple channels, including voice enabled support.
              </p>`,
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Executive Officer, Chief Operations Officer",
                    "Secondary (Influencers): Head of Quality Control",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "Improve first-call resolution rates by answering specific questions with the best available knowledge",
                    "Increase customer satisfaction by reducing wait times with immediate 24/7 service through a conversational agent",
                    "Grow revenue with differentiated customer experience by leveraging conversational interfaces for personal shopping",
                    "Reduce support costs/cost of operations by offloading and automating certain support services",
                  ],
                  customer_pain_points: [
                    "Failed searches commonly experienced, where no relevant search results are displayed",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Conversational Agent Platform",
                    "Voice-enabled Support",
                    "Knowledge Base Management System",
                    "Analytics and Reporting Tools",
                    "Natural Language Processing (NLP) Frameworks",
                  ],
                  proposed_technical_solution: [
                    "Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support",
                  ],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle:
                    "Business  Architecture: Sales, Service and Support BotCustomer Data Platform",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Buy Online, Pick Up In-Store",
            solution_play: "Elevate the Shopping Experience",
            // l3 page link
            link: "buy_online_pick_up_in_store",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              BOPIS (buy online, pick up in-store) is a business model that allows consumers to shop and place orders online and then pick up their purchases in the brick-and-mortar store, often within the same day..
              </p>`,
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Marketing Officer, Chief Digital Officer, Chief Data Officer, Head of Customer Experience, Head of e-Commerce",
                    "Secondary: Head of Customer Service, Head of Customer Experience",
                  ],
                  decision_making_factors: [
                    "Ability to integrate with existing eCommerce system",
                    "Cost efficient",
                    "Scalable",
                    "Ease of execution",
                  ],
                  desired_business_objectives: [
                    "Increase sales",
                    "Reduce costs",
                    "Reduce last-mile shipping costs",
                    "Increase customer satisfaction",
                  ],
                  customer_pain_points: [
                    "Product lists are not updated in real-time, causing friction with in-store shopping experience",
                  ],
                  other_notable_attributes: [

                  ],
                  products: [
                    "Synapse",
                    "Azure Data Lake Storage",
                    "Azure Machine Learning",
                    "Azure Container Images",
                    "Power BI",
                  ],
                  proposed_technical_solution: ["BOPIS (buy online, pick up in-store) is a business model that allows consumers to shop and place orders online and then pick up their purchases in the brick-and-mortar store, often within the same day.",],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle:
                    "Business  Architecture: Buy Online, Pick Up In-Store",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Conversational AI with Azure OpenAI for Retail",
            solution_play: "Elevate the Shopping Experience",
            // l3 page link
            link: "conversational_ai_with_azure_open_ai_for_retail",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Drive customer interactions with human-like responses, collecting data from every interaction in a feedback loop for optimization. Reduce customer contact center costs and improve user experience in retail by enabling you to create content once and deploy simultaneously to multiple channels in a single click.
              </p>`,
                keyHighlights: {
                  decision_makers: [
                    "Primary: Chief Customer Officer,VP Service and Support,Customer Service Manager,Contact Center Manager",
                    "Secondary (Influencers): Head of Customer Service, Head of Customer Experience",
                  ],
                  decision_making_factors: [
                    "Scalability",
                    "Cost",
                    "Efficiency",
                  ],
                  desired_business_objectives: [
                    "AI interactions with customers through human-like dialogues",
                    "Data collected provides a continuous feedback loop, enhancing content over time",
                    "Existing telephony or IVR system can be published to voice assistants and chatbots",
                    "Rich analytics and a dashboard provide actionable insights into customer interactions",
                  ],
                  customer_pain_points: [
                    "Product data needs are not standardized across multiple suppliers",
                  ],
                  other_notable_attributes: [],
                  products: [
                    "Azure Machine Learning",
                    "Bot Services",
                    "Cognitive Search",
                    "Cognitive Services",
                  ],
                  proposed_technical_solution: [
                    [
                      "Drive customer interactions with human-like responses, collecting data from every interaction in a feedback loop for optimization",
                      "Reduce customer contact center costs and improve user experience in retail by enabling you to create content once and deploy simultaneously to multiple channels in a single click",
                    ],
                  ],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle:
                    "Business  Architecture: Conversational AI with Azure OpenAI for Retail",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Demand Forecasting",
            solution_play: "Build a Real Time and Sustainable Supply Chain",
            // l3 page link
            link: "demand_forecasting",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: ` <p>
              Determine how much demand there will be for a product at the store level to optimize inventory, material and product orders.
              </p>`,

                keyHighlights: {
                  decision_makers: [
                    "Primary: Head of Supply Chain, Chief Operations Officer, Chief Marketing Officer",
                    "Secondary: Head of Supply Chain, VP of Operations, CIO, CEO",
                  ],
                  decision_making_factors: [
                    "Expected accuracy and efficiency improvements",
                    "Ability to quickly adapt solution building blocks",
                    "Ease of execution (availability of development partners)",
                    "Data availability/readiness",
                  ],
                  desired_business_objectives: [
                    "Improve time to value through increased forecast speed (reducing project time)",
                    "Reduce inventory carrying costs by predicting necessary stock levels at any given time",
                    "Grow revenue by increasing in-stock percentage through stronger forecast accuracy",
                  ],
                  customer_pain_points: [
                    "Legacy search has no semantic understanding and is not yielding the right results for what customers are expecting or looking for",
                  ],
                  other_notable_attributes: [

                  ],
                  products: [
                    "Azure Cosmos DB",
                    "Power BI",
                    "Azure Machine Learning",
                    "Azure Synapse Analytics",
                    "Azure Storage",
                  ],
                  proposed_technical_solution: ["Determine how much demand there will be for a product at the store level to optimize inventory, material, and product orders",],
                },

                idealCostomerProfile: {
                  industries: "Retail & CG",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: automated_quality_inspection,
                  image_subtitle: "Business  Architecture: Demand Forecasting",
                  image_link: "https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EaYdLSdJeWBImla_MhPR_OkByLZViTvpUL8DtOXEJsp16Q?e=hLaouJ",
                },

                partners: [
                  {
                    image: wipro,
                    link: "",
                  },
                  {
                    image: adobe,
                    link: "",
                  },
                  {
                    image: ibm,
                    link: "",
                  },
                  {
                    image: accenture,
                    link: "",
                  },

                  {
                    image: pwc,
                    link: "",
                  },
                ],
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
        "At Microsoft, we aspire towards economic, social, and environmental prosperity for governments and the societies we serve together. Our mission is to empower every government agency and person on the planet to achieve more: Deliver enhanced digital services to the public with inclusive, responsive, and accessible experiences Enable trusted, secure, compliant government platforms to address cyber security and protect citizen data Empower a future ready workforce through skilling, capacity building and economic development tools Help governments efficiently deliver on the promise of sustainable growth with new and emerging technologies",

    solution_plays: [
      // 1st use cases
      {
        id: crypto.randomUUID(),
        title: "Transform Government Operations and Services",
        content: `
      


<p><a className="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/public-sector/government?tab=overview"> Learn More </a>  about this Industry Pillar</p>
`

        ,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Information Discovery and Management",
            solution_play:  "Transform Government Operations and Services",
            // l3 page link
            link: "information_discovery_and_management",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                    "/industry/transform_government_operations_and_services/information_discovery_and_management",

                desc: `<p>Search through structured and unstructured documents to quickly find the most relevant information and documents with compliance risk and standards.
              </p>`,

                keyHighlights : {

                  decision_makers : ['Primary: Head of HR, Head of Customer Service, Chief Learning Officer, Chief Knowledge Officer, Chief Compliance Officer','Secondary (Influencers): Head of Customer Service'],

                  decision_making_factors :['Scalability','Cost','Efficiency' ],
                  desired_business_objectives : [
                    'Increase speed to value/speed to insight by reducing time spent on search',
                    'Improve user productivity by surfacing most relevant search results',
                    'Ensure compliance through completeness of search over all data and documents',
                    'Reduce search infrastructure costs'
                  ],
                  customer_pain_points : [
                    'Employees or users are not finding the information they need in internal sites, or information takes a long time to find',
                    'Failed searches commonly experienced, where no relevant search results are displayed',
                    'Organization not able to pull together a comprehensive view of all data related to a specific topic (i.e., docs with regulatory terms for compliance purposes)'
                  ],
                  other_notable_attributes:[],
                  products : [
                    'Azure Cognitive Search',
                    'Azure Web Apps',
                    'Power BI'
                  ],
                  proposed_technical_solution: ['Search through structured and unstructured documents to quickly find the most relevant information and documents with compliance risk and standards.',]
                },

                idealCostomerProfile : {
                  industries: 'Government',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : information_discovery_and_management,
                  image_subtitle : 'Business  Architecture: Information Discovery and Management',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EfwjPdfReOJItyySbilrXO8BZP9p_AapYhGx0NIVBCCRxg?e=BlhXTV'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Document Process Automation",
            solution_play:  "Transform Government Operations and Services",
            // l3 page link
            link: "document_process_automation",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/transform_government_operations_and_services/document_process_automation",
                desc: ` <p>
               
              Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points.

              </p>`,

                keyHighlights : {

                  decision_makers : [
                    'Primary: Chief Legal Officer, Chief Operations Officer, Chief Data Officer, Chief Financial Officer, Chief Information Officers, Chief Risk Officer, Chief Compliance Officer'
                  ],
                  decision_making_factors :  [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives :[
                    'Increase speed to value/speed to insight by reducing document processing times',
                    'Reduce operating expenses through automation of manual processes',
                    'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points :[
                    'Handles large volumes of documents and is not able to efficiently capture any rich insights from them',
                    'Investing in expensive manual labor to extract data',
                    'Manual data extraction is inefficient and/or error-prone, resulting in low confidence or data accuracy',
                    'More time is spent on extracting data than on analysis, insights, and action'
                  ],
                  other_notable_attributes:[],
                  products : [
                    'Applied AI Services',
                    'Form Recognizer',
                    'Azure Logic Apps',
                    'Azure Cosmos DB',
                    'Power BI',
                    'Azure Data Explorer',
                    'Bot Framework',
                    'Luis'
                  ],
                  proposed_technical_solution: [
                    'Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Government',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : document_process_automation_government,
                  image_subtitle : 'Business  Architecture: Document Process Automation',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EfwjPdfReOJItyySbilrXO8BZP9p_AapYhGx0NIVBCCRxg?e=BlhXTV'
                },

                partners : [

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
                    image:  pwc,
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
        title: "Deliver Innovation in Programs and Experience",
        content: `
            
<!--          <p>-->
<!--          <b>Coming Soon </b> -->
<!--        </p>-->

<p><a className="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/public-sector/government?tab=overview"> Learn More </a>  about this Industry Pillar</p>

`,



        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Service and Support Bot",
            solution_play: "Deliver Innovation in Programs and Experience",
            // l3 page link
            link: "service_and_support_bot",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/deliver_innovation_in_Programs_and_experience/service_and_support_bot",
                desc: ` <p>
              Resolve user and customer queries without human intervention across multiple channels, including voice enabled support.
              </p>`,
                keyHighlights : {

                  decision_makers : ['Primary: Head of Customer Service, Head of Customer Experience, Head of IT, Head of Legal, Head of HR, Chief Marketing Officer, Product Owner, Director of eCommerce', 'Secondary (Influencers): Head of Customer Service, Head of Customer Experience'
                    ],
                  decision_making_factors :  [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Improve first-call resolution rates by answering specific questions with the best available knowledge',
                    'Increase customer satisfaction by reducing wait times with immediate 24/7 service through a conversational agent',
                    'Grow revenue with differentiated customer experience by leveraging conversational interfaces for personal shopping',
                    'Reduce support costs/cost of operations by offloading and automating certain support services'
                  ],
                  customer_pain_points : [
                    'Case volumes and wait times are increasing',
                    'Growing customer churn due to impersonal and inconsistent sales or support service',
                    'Customers are dissatisfied with response wait times and expect to be able to reach sales or support service at all hours, but business is unable to provide or must spend exorbitant amounts to do so, adding pressure on tight margins',
                    'Sales or support agents are tied up answering simple queries that can be automated'
                  ],
                  other_notable_attributes:[],
                  products :[],
                  proposed_technical_solution: [ 'Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support.']
                },

                idealCostomerProfile : {
                  industries: 'Government',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : service_and_support_bot_government,
                  image_subtitle : 'Business  Architecture: Service and Support Bot',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EfwjPdfReOJItyySbilrXO8BZP9p_AapYhGx0NIVBCCRxg?e=BlhXTV'
                },

                partners : [

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
                    image:  pwc,
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
        title: "Secure Government Data and Protect Resources",
        content: `
            
<!--          <p>-->
<!--          <b>Coming Soon </b> -->
<!--        </p>-->

<p><a className="text-blue font-semibold" target="_blank" href="https://industryhub.transform.microsoft.com/public-sector/government?tab=overview"> Learn More </a>  about this Industry Pillar</p>


`,



        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Fraud Detection and Transaction Monitoring",
            solution_play: "Secure Government Data and Protect Resources",
            // l3 page link
            link: "fraud_detection_and_transaction_monitoring",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/secure_gGovernment_data_and_protect_resources/fraud_detection_and_transaction_monitoring",
                desc: ` <p>
              Every industry is facing transformational change and we Identify risk of fraud or fraud associated activities including phone calls, credit card transactions, money laundering and online purchases with real-time analysis and streaming data
              </p>`,
                keyHighlights : {

                  decision_makers : ['Primary: Chief Financial Officer, Chief Risk Officer',
                    'Secondary: Chief Data Officer, Chief Information Officer'],
                  decision_making_factors :  [
                    'Scalability', 'Cost', 'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Ensure client and company security by continuously reviewing transactions for fraudulent activities and high-risk areas',
                    'Improve customer satisfaction by proactively identifying and stopping fraudulent transactions with greater accuracy',
                    'Avoid costly claim scenarios by improving detection rates and delivering better insights to case workers',
                    'Save time and costs by reducing the amount of time to discover and stop fraud'
                  ],
                  customer_pain_points : [
                    'Fraud is resulting in significant costs to the business and is growing',
                    'Fraud claim rates from customers are high',
                    'Actions taken to combat fraud are reactive vs. preventative',
                    'Fraud detection accuracy rates are low'
                  ],
                  other_notable_attributes:[],
                  products :[ 'Azure Machine Learning',
                    'Azure Synapse Analytics',
                    'Azure Cosmos DB',
                    'Power BI'],
                  proposed_technical_solution: [ 'Identify risk of fraud or fraud associated activities including phone calls, credit card transactions, money laundering, and online purchases with real-time analysis and streaming data',]
                },

                idealCostomerProfile : {
                  industries: 'Government',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : fraud_detection_and_transaction_monitoring,
                  image_subtitle : 'Business  Architecture: Fraud Detection and Transaction Monitoring',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EfwjPdfReOJItyySbilrXO8BZP9p_AapYhGx0NIVBCCRxg?e=BlhXTV'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },


        ],


      },

      // 4th use case


      // 5th all use cases
      {
        id: crypto.randomUUID(),
        title: "All Use Cases",
        content: `
        <p className="font-bold">Government Industry</p>
          `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "Information Discovery and Management",
            solution_play:  "Transform Government Operations and Services",
            // l3 page link
            link: "information_discovery_and_management",
            use_cases_content: [
              {
                subtitle: "Overview",
                link:
                    "/industry/transform_government_operations_and_services/information_discovery_and_management",

                desc: `<p>Search through structured and unstructured documents to quickly find the most relevant information and documents with compliance risk and standards.
              </p>`,

                keyHighlights : {

                  decision_makers : ['Head of HR',
                    'Head of Customer Service',
                    'Chief Learning Officer',
                    'Chief Knowledge Officer',
                    'Chief Compliance Officer', 'Secondary (Influencers): Head of Customer Service'],

                  decision_making_factors :['Scalability','Cost','Efficiency' ],
                  desired_business_objectives : [
                    'Increase speed to value/speed to insight by reducing time spent on search',
                    'Improve user productivity by surfacing most relevant search results',
                    'Ensure compliance through completeness of search over all data and documents',
                    'Reduce search infrastructure costs'
                  ],
                  customer_pain_points : [
                    'Employees or users are not finding the information they need in internal sites, or information takes a long time to find',
                    'Failed searches commonly experienced, where no relevant search results are displayed',
                    'Organization not able to pull together a comprehensive view of all data related to a specific topic (i.e., docs with regulatory terms for compliance purposes)'
                  ],
                  other_notable_attributes:[],
                  products : [
                    'Azure Cognitive Search',
                    'Azure Web Apps',
                    'Power BI'
                  ],
                  proposed_technical_solution: ['Search through structured and unstructured documents to quickly find the most relevant information and documents with compliance risk and standards.',]
                },

                idealCostomerProfile : {
                  industries: 'Government',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : information_discovery_and_management,
                  image_subtitle : 'Business  Architecture: Information Discovery and Management',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EfwjPdfReOJItyySbilrXO8BZP9p_AapYhGx0NIVBCCRxg?e=BlhXTV'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Document Process Automation",
            solution_play:  "Transform Government Operations and Services",
            // l3 page link
            link: "document_process_automation",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/transform_government_operations_and_services/document_process_automation",
                desc: ` <p>
               
              Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points.

              </p>`,

                keyHighlights : {

                  decision_makers : [
                    'Primary: Chief Legal Officer','Chief Operations Officer','Chief Data Officer','Chief Financial Officer','Chief Information Officers','Chief Risk Officer','Chief Compliance Officer'
                  ],
                  decision_making_factors :  [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives :[
                    'Increase speed to value/speed to insight by reducing document processing times',
                    'Reduce operating expenses through automation of manual processes',
                    'Improve data confidence and accuracy in extracted data by relying less on error-prone manual processes'
                  ],
                  customer_pain_points :[
                    'Handles large volumes of documents and is not able to efficiently capture any rich insights from them',
                    'Investing in expensive manual labor to extract data',
                    'Manual data extraction is inefficient and/or error-prone, resulting in low confidence or data accuracy',
                    'More time is spent on extracting data than on analysis, insights, and action'
                  ],
                  other_notable_attributes:[],
                  products : [
                    'Applied AI Services',
                    'Form Recognizer',
                    'Azure Logic Apps',
                    'Azure Cosmos DB',
                    'Power BI',
                    'Azure Data Explorer',
                    'Bot Framework',
                    'Luis'
                  ],
                  proposed_technical_solution: [
                    'Reduce human intervention and automate extraction of data from large and complex structured and unstructured documents to unlock insights and enable users to find key data points'
                  ],
                },

                idealCostomerProfile : {
                  industries: 'Government',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : document_process_automation_government,
                  image_subtitle : 'Business  Architecture: Document Process Automation',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EfwjPdfReOJItyySbilrXO8BZP9p_AapYhGx0NIVBCCRxg?e=BlhXTV'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            title: "Service and Support Bot",
            solution_play: "Deliver Innovation in Programs and Experience",
            // l3 page link
            link: "service_and_support_bot",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/deliver_innovation_in_Programs_and_experience/service_and_support_bot",
                desc: ` <p>
              Resolve user and customer queries without human intervention across multiple channels, including voice enabled support.
              </p>`,
                keyHighlights : {

                  decision_makers : ['Head of Customer Service',
                    'Head of Customer Experience',
                    'Head of IT',
                    'Head of Legal',
                    'Head of HR',
                    'Chief Marketing Officer',
                    'Product Owner',
                    'Director of eCommerce', 'Secondary (Influencers): Head of Customer Service',
                    'Head of Customer Experience'],
                  decision_making_factors :  [
                    'Scalability',
                    'Cost',
                    'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Improve first-call resolution rates by answering specific questions with the best available knowledge',
                    'Increase customer satisfaction by reducing wait times with immediate 24/7 service through a conversational agent',
                    'Grow revenue with differentiated customer experience by leveraging conversational interfaces for personal shopping',
                    'Reduce support costs/cost of operations by offloading and automating certain support services'
                  ],
                  customer_pain_points : [
                    'Case volumes and wait times are increasing',
                    'Growing customer churn due to impersonal and inconsistent sales or support service',
                    'Customers are dissatisfied with response wait times and expect to be able to reach sales or support service at all hours, but business is unable to provide or must spend exorbitant amounts to do so, adding pressure on tight margins',
                    'Sales or support agents are tied up answering simple queries that can be automated'
                  ],
                  other_notable_attributes:[],
                  products :[],
                  proposed_technical_solution: [ 'Resolve user and customer queries without human intervention across multiple channels, including voice-enabled support.']
                },

                idealCostomerProfile : {
                  industries: 'Government',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : service_and_support_bot_government,
                  image_subtitle : 'Business  Architecture: Service and Support Bot',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EfwjPdfReOJItyySbilrXO8BZP9p_AapYhGx0NIVBCCRxg?e=BlhXTV'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
              },
            ],
          },

          {
            id: crypto.randomUUID(),
            title: "Fraud Detection and Transaction Monitoring",
            solution_play: "Secure Government Data and Protect Resources",
            // l3 page link
            link: "fraud_detection_and_transaction_monitoring",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "/industry/secure_gGovernment_data_and_protect_resources/fraud_detection_and_transaction_monitoring",
                desc: ` <p>
              Every industry is facing transformational change and we Identify risk of fraud or fraud associated activities including phone calls, credit card transactions, money laundering and online purchases with real-time analysis and streaming data
              </p>`,
                keyHighlights : {

                  decision_makers : ['Primary: Chief Financial Officer, Chief Risk Officer',
                    'Secondary: Chief Data Officer, Chief Information Officer'],
                  decision_making_factors :  [
                    'Scalability', 'Cost', 'Efficiency'
                  ],
                  desired_business_objectives : [
                    'Ensure client and company security by continuously reviewing transactions for fraudulent activities and high-risk areas',
                    'Improve customer satisfaction by proactively identifying and stopping fraudulent transactions with greater accuracy',
                    'Avoid costly claim scenarios by improving detection rates and delivering better insights to case workers',
                    'Save time and costs by reducing the amount of time to discover and stop fraud'
                  ],
                  customer_pain_points : [
                    'Fraud is resulting in significant costs to the business and is growing',
                    'Fraud claim rates from customers are high',
                    'Actions taken to combat fraud are reactive vs. preventative',
                    'Fraud detection accuracy rates are low'
                  ],
                  other_notable_attributes:[],
                  products :[ 'Azure Machine Learning',
                    'Azure Synapse Analytics',
                    'Azure Cosmos DB',
                    'Power BI'],
                  proposed_technical_solution: [ 'Identify risk of fraud or fraud associated activities including phone calls, credit card transactions, money laundering, and online purchases with real-time analysis and streaming data',]
                },

                idealCostomerProfile : {
                  industries: 'Government',
                  geography: '',
                  market_cap: '',
                  employees: '',
                  budget: '',
                  image : fraud_detection_and_transaction_monitoring,
                  image_subtitle : 'Business  Architecture: Fraud Detection and Transaction Monitoring',
                  image_link : 'https://microsofteur.sharepoint.com/:p:/t/HQDataAIIndustryTeam/EfwjPdfReOJItyySbilrXO8BZP9p_AapYhGx0NIVBCCRxg?e=BlhXTV'
                },

                partners : [

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
                    image:  pwc,
                    link :'',
                  },
                ]
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
                link: "/industry/resilient_operations/Automated_quality_inspection",

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
              
                about this Industry Pillar
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
        title: "All Use Cases",
        content: `
        <p className="font-bold"> Business Application Industry Content</p>
          `,
        use_cases: [
          {
            id: crypto.randomUUID(),
            title: "After-Market Sales Operations (Auto)",
            link: "after-market_sales_operations_(auto)",
            use_cases_content: [
              {
                subtitle: "Overview",
                link: "",
                desc: "",
                keyHighlights: {
                  decision_makers: [],
                  decision_making_factors: [],
                  desired_business_objectives: [],
                  customer_pain_points: [],
                  proposed_technical_solution: [],
                  other_notable_attributes: [],
                  products: [],
                },
                idealCostomerProfile: {
                  industries: "",
                  geography: "",
                  market_cap: "",
                  employees: "",
                  budget: "",
                  image: "",
                    image_subtitle: "Business  Architecture:  ",
                  image_link: "",
                },
                partners: [
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                  {
                    image: "",
                    link: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
