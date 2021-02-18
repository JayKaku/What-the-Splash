// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import {
//     Diagram,
//     DiagramComponent,
//     Inject,
//     ConnectorModel,
//     Node,
//     Container,
//     TextElement,
//     StackPanel,
//     ImageElement,
//     DataBinding,
//     HierarchicalTree,
//     TreeInfo,
//     DiagramTools
// } from "@syncfusion/ej2-react-diagrams";
// import {
//     DataManager,
//     Query
// } from '@syncfusion/ej2-data';
// //Initializes data source
// let data: object[] = [{
//         Id: "parent",
//         Role: "Project Management"
//     },
//     {
//         Id: 1,
//         Role: "R&D Team",
//         Team: "parent"
//     },
//     {
//         Id: 3,
//         Role: "Philosophy",
//         Team: "1"
//     },
//     {
//         Id: 4,
//         Role: "Organization",
//         Team: "1"
//     },
//     {
//         Id: 5,
//         Role: "Technology",
//         Team: "1"
//     },
//     {
//         Id: 7,
//         Role: "Funding",
//         Team: "1"
//     },
//     {
//         Id: 8,
//         Role: "Resource Allocation",
//         Team: "1"
//     },
//     {
//         Id: 9,
//         Role: "Targeting",
//         Team: "1"
//     },
//     {
//         Id: 11,
//         Role: "Evaluation",
//         Team: "1"
//     },
//     {
//         Id: 156,
//         Role: "HR Team",
//         Team: "parent"
//     },
//     {
//         Id: 13,
//         Role: "Recruitment",
//         Team: "156"
//     },
//     {
//         Id: 113,
//         Role: "Training",
//         Team: "12"
//     },
//     {
//         Id: 112,
//         Role: "Employee Relation",
//         Team: "156"
//     },
//     {
//         Id: 14,
//         Role: "Record Keeping",
//         Team: "12"
//     },
//     {
//         Id: 15,
//         Role: "Compensations & Benefits",
//         Team: "12"
//     },
//     {
//         Id: 16,
//         Role: "Compliances",
//         Team: "12"
//     },
//     {
//         Id: 17,
//         Role: "Production & Sales Team",
//         Team: "parent"
//     },
//     {
//         Id: 119,
//         Role: "Design",
//         Team: "17"
//     },
//     {
//         Id: 19,
//         Role: "Operation",
//         Team: "17"
//     },
//     {
//         Id: 20,
//         Role: "Support",
//         Team: "17"
//     },
//     {
//         Id: 21,
//         Role: "Quality Assurance",
//         Team: "17"
//     },
//     {
//         Id: 23,
//         Role: "Customer Interaction",
//         Team: "17"
//     },
//     {
//         Id: 24,
//         Role: "Support and Maintenance",
//         Team: "17"
//     },
//     {
//         Id: 25,
//         Role: "Task Coordination",
//         Team: "17"
//     }
// ];

// let items: DataManager = new DataManager(data as JSON[], new Query().take(5));
// ReactDOM.render( <DiagramComponent id = "diagram"
//         width = {
//             '100%'
//         }
//         height = {
//             '550px'
//         }
//         //Uses layout to auto-arrange nodes on the diagram page
//         layout = {
//             {
//                 //set the type as Organizational Chart
//                 type: 'OrganizationalChart',
//                 enableAnimation: true,
//                 margin: { top: 20 },
//                 horizontalSpacing: 25,
//                 verticalSpacing: 30,
//                 horizontalAlignment: 'Left',
//                 verticalAlignment: 'Top'
//             }
//         }
//         //Configures data source for diagram
//         dataSourceSettings = {
//             {
//                 id: 'Id',
//                 parentId: 'Team',
//                 dataManager: items
//             }
//         }
//         //Sets the default properties for nodes and connectors
//         getNodeDefaults = {
//             (obj: NodeModel) => {
//                 obj.shape = {
//                     type: 'Text',
//                     content: (obj.data as {
//                         Role: 'string'
//                     }).Role
//                 };
//                 obj.style = {
//                     fill: 'None',
//                     strokeColor: 'none',
//                     strokeWidth: 2,
//                     bold: true,
//                     color: 'white'
//                 };
//                 obj.borderColor = 'white';
//                 obj.backgroundColor = '#6BA5D7';
//                 obj.borderWidth = 1;
//                 obj.width = 75;
//                 obj.height = 40;
//                 (obj.shape as TextModel).margin = {
//                     left: 5,
//                     right: 5,
//                     top: 5,
//                     bottom: 5
//                 };
//                 return obj;
//             }
//         }
//         getConnectorDefaults = {
//             (connector: ConnectorModel, diagram: Diagram) => {
//                 connector.style = {
//                     strokeColor: '#6BA5D7',
//                     strokeWidth: 2
//                 };
//                 connector.targetDecorator.style.fill  =  '#6BA5D7';
//                 connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
//                 connector.type = 'Orthogonal';
//                 return connector;
//             }
//         }