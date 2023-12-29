
 // Import necessary dependencies
import React from 'react';
import styles from './styles.module.css';

const treeData : any[] = [
  {
      "id": 11,
      "status": "ACTIVE",
      "handledEmployeeId": 8,
      "handledEmployeeFullName": "Gudala Yashwanth",
      "clientName": "Google Pay",
      "projects": [
          {
              "id": 22,
              "projectName": "gpay 2.0",
              "clientId": 11,
              "clientName": "Google Pay",
              "projectStatus": "IN_PROGRESS",
              "projectManagerId": 9,
              "projectManagerFullName": "Yadhaiah Oggu",
              "employeeProjectAssignmentNodes": [
                  {
                      "id": 13,
                      "projectAssignmentStatus": "ACTIVE",
                      "designation": "Manager",
                      "employeeId": 9,
                      "supervisorId": 8,
                      "employeeFullName": "Yadhaiah Oggu",
                      "supervisorFullName": "Gudala Yashwanth",
                      "supervisedAssignments": [
                          {
                              "id": 14,
                              "projectAssignmentStatus": "ACTIVE",
                              "designation": "Tech lead",
                              "employeeId": 11,
                              "supervisorId": 9,
                              "employeeFullName": "Pranay Chilumala",
                              "supervisorFullName": "Yadhaiah Oggu",
                              "supervisedAssignments": [
                                  {
                                      "id": 16,
                                      "projectAssignmentStatus": "ACTIVE",
                                      "designation": "TESTER 1",
                                      "employeeId": 12,
                                      "supervisorId": 11,
                                      "employeeFullName": "dummy1 dummy1",
                                      "supervisorFullName": "Pranay Chilumala",
                                      "supervisedAssignments": [],
                                      "projectId": 22,
                                      "projectName": "gpay 2.0"
                                  },
                                  {
                                      "id": 17,
                                      "projectAssignmentStatus": "ACTIVE",
                                      "designation": "TESTER 2",
                                      "employeeId": 13,
                                      "supervisorId": 11,
                                      "employeeFullName": "dummy2 dummy",
                                      "supervisorFullName": "Pranay Chilumala",
                                      "supervisedAssignments": [],
                                      "projectId": 22,
                                      "projectName": "gpay 2.0"
                                  }
                              ],
                              "projectId": 22,
                              "projectName": "gpay 2.0"
                          },
                          {
                              "id": 15,
                              "projectAssignmentStatus": "ACTIVE",
                              "designation": "UI",
                              "employeeId": 10,
                              "supervisorId": 9,
                              "employeeFullName": "Vijay Varala",
                              "supervisorFullName": "Yadhaiah Oggu",
                              "supervisedAssignments": [],
                              "projectId": 22,
                              "projectName": "gpay 2.0"
                          }
                      ],
                      "projectId": 22,
                      "projectName": "gpay 2.0"
                  }
              ]
          },
          {
              "id": 23,
              "projectName": "GPAY BILL",
              "clientId": 11,
              "clientName": "Google Pay",
              "projectStatus": "IN_PROGRESS",
              "projectManagerId": 10,
              "projectManagerFullName": "Vijay Varala",
              "employeeProjectAssignmentNodes": [
                  {
                      "id": 18,
                      "projectAssignmentStatus": "ACTIVE",
                      "designation": "MANAGER",
                      "employeeId": 10,
                      "supervisorId": 8,
                      "employeeFullName": "Vijay Varala",
                      "supervisorFullName": "Gudala Yashwanth",
                      "supervisedAssignments": [
                          {
                              "id": 19,
                              "projectAssignmentStatus": "ACTIVE",
                              "designation": "JAVA DEV",
                              "employeeId": 9,
                              "supervisorId": 10,
                              "employeeFullName": "Yadhaiah Oggu",
                              "supervisorFullName": "Vijay Varala",
                              "supervisedAssignments": [
                                  {
                                      "id": 20,
                                      "projectAssignmentStatus": "ACTIVE",
                                      "designation": "JAVA DEV",
                                      "employeeId": 12,
                                      "supervisorId": 9,
                                      "employeeFullName": "dummy1 dummy1",
                                      "supervisorFullName": "Yadhaiah Oggu",
                                      "supervisedAssignments": [
                                          {
                                              "id": 21,
                                              "projectAssignmentStatus": "ACTIVE",
                                              "designation": "JAVA DEV",
                                              "employeeId": 13,
                                              "supervisorId": 12,
                                              "employeeFullName": "dummy2 dummy",
                                              "supervisorFullName": "dummy1 dummy1",
                                              "supervisedAssignments": [
                                                  {
                                                      "id": 22,
                                                      "projectAssignmentStatus": "ACTIVE",
                                                      "designation": "QA JUNIOR",
                                                      "employeeId": 14,
                                                      "supervisorId": 13,
                                                      "employeeFullName": "dummy4 dummy",
                                                      "supervisorFullName": "dummy2 dummy",
                                                      "supervisedAssignments": [],
                                                      "projectId": 23,
                                                      "projectName": "GPAY BILL"
                                                  }
                                              ],
                                              "projectId": 23,
                                              "projectName": "GPAY BILL"
                                          }
                                      ],
                                      "projectId": 23,
                                      "projectName": "GPAY BILL"
                                  }
                              ],
                              "projectId": 23,
                              "projectName": "GPAY BILL"
                          }
                      ],
                      "projectId": 23,
                      "projectName": "GPAY BILL"
                  }
              ]
          }
      ]
  }
];

const App = () => {
  return (
    <div className={styles.tree}>
      {treeRendering(treeData)}
    </div>
  );
};

const treeRendering = (treeData) => {
  return (
    <ul>
      {treeData.map((client) => (
        <li key={client.id}>
          <div>{client.clientName} - Handled By: {client.handledEmployeeFullName}</div>
          {client.projects && client.projects.length > 0 && renderProjects(client.projects)}
        </li>
      ))}
    </ul>
  );
};

const renderProjects = (projects) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <div>{project.projectName} - Project Manager: {project.projectManagerFullName}</div>
          {project.employeeProjectAssignmentNodes && project.employeeProjectAssignmentNodes.length > 0 && (
            <ul>
              {renderAssignments(project.employeeProjectAssignmentNodes)}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const renderAssignments = (assignments) => {
  return assignments.map((assignment) => (
    <li key={assignment.id}>
      <div>{assignment.designation} - Assigned To: {assignment.employeeFullName}</div>
      {assignment.supervisedAssignments && assignment.supervisedAssignments.length > 0 && (
        <ul>
          {renderAssignments(assignment.supervisedAssignments)}
        </ul>
      )}
    </li>
  ));
};

export default App;
