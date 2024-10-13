#MENTOR AND STUDENT ASSIGNMENT SYSTEM - FRONTEND


 1. Project Overview :

       - The Mentor and Student Assignment System is designed to manage mentor-student relationships within educational or mentorship programs.
      
       - It provides administrators with the ability to assign students to mentors, change assignments, and track a student's mentor history.

 2. Features :
   
       - Create a Mentor: Allows the creation of mentor profiles, storing mentor details.

       - Create a Student: Enables the creation of student profiles, who can be assigned to a mentor later.

       - Assign Students to a Mentor: Assigns multiple students to a mentor at once.

       - Change a Student’s Mentor: Reassigns a mentor to a student while keeping the history of previous assignments.

       - View Students for a Mentor: Shows all students assigned to a mentor.

       - View Previous Mentors of a Student: Logs previous mentors for a particular student.

 3. Tech Stack :

       - React.js : For building interactive UI.

       - React Router : To navigate between different views.

       - Axios : For making HTTP requests to backend APIs.

4. Components :

    a) Create Mentor Form :

      - Function : Allows admin users to input mentor details and submit the form to /api/mentor/create.

      - State : Manages form input data like mentor name.

    b) Create Student Form :

      - Function : Allows admin users to input student details and submit the form to /api/student/create.

      - State : Manages form input data like student name.

    c) Assign Students to Mentor Page :

      - Function : Provides a dropdown of students and mentors, allowing admins to assign multiple students to one mentor.

      - Interaction : Submit to /api/assign.

    d) Change Mentor Assignment Page :

      - Function: Dropdown to select a student and change their mentor.

      - Interaction: Submit new mentor data to /api/change.

    e) View Students for a Mentor :

      - Function : Displays a list of students for a selected mentor.

      - Data Fetching : Calls /api/:mentorId/students.

    f) View Previous Mentors for a Student :

      - Function : Displays all past mentors assigned to a student.

      - Data Fetching : Calls /api/:studentId/previous-mentors.

5. Future Enhancements :

      - Authentication and Authorization : Implement roles like admin, mentor, and student to limit access to certain features.
    
      - Notification System: Notify users when assignments are changed.

      - Search and Filtering: Allow mentors and students to be searched based on specific criteria like skills.

      - Reports: Create reports on mentor-student relationships to provide insights for admins.

