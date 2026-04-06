const employees = [
    {
      "id": 101,
      "email": "ali@example.com",
      "password": "ali123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Reporting",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Meet Me In Conference Room",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        }
      ]
    },
    {
      "id": 102,
      "email": "ahmed@example.com",
      "password": "ahmed123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Bugs",
          "taskDescription": "Resolve dashboard issues",
          "taskDate": "2026-03-28",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Tasks",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare gghh",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        }
      ]
    },
    {
      "id": 103,
      "email": "sara@example.com",
      "password": "sara123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Write Report",
          "taskDescription": "Monthly performance report",
          "taskDate": "2026-03-25",
          "category": "Reporting"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        }
      ]
    },
    {
      "id": 104,
      "email": "zain@example.com",
      "password": "zain123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design UI",
          "taskDescription": "Create wireframes for app",
          "taskDate": "2026-04-05",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        }
      ]
    },
    {
      "id": 105,
      "email": "fatima@example.com",
      "password": "fatima123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client Meeting",
          "taskDescription": "Discuss project requirements",
          "taskDate": "2026-03-30",
          "category": "Meeting"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for client meeting",
          "taskDate": "2026-04-02",
          "category": "Presentation"
        }
      ]
    }
  ]
const admin = [
     {
    "id": 1,
    "email": "admin@example.com",
    "password": "admin123"
  }
]
export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return{employees,admin}

}