Design a complete desktop-first SaaS web application called **Trackify — Gamified Group Project Tracker**.

Trackify is a classroom project-management platform where teachers create and manage student teams, students work on assigned tasks, teachers monitor contribution and progress, and students earn achievements and rewards.

## Visual Direction

Create a premium **dark-mode cosmic SaaS interface**.

Color palette:

* Background: Deep Midnight Purple #0D0221
* Primary: Electric Violet #7B1FA2
* Secondary accent: Neon Cyan #00FFFF
* Text: #F2F2F2
* Muted text: #A8A0B8

Use:

* Glassmorphism cards
* Subtle glowing borders
* Purple-to-violet gradients
* Neon cyan accents for active states
* Soft background glow
* 16px border radius
* 8px spacing grid
* Inter typography
* Clean professional SaaS layout
* Subtle gamification elements without making the interface look childish

The design must feel like a real production-ready application, not a concept/mockup.

## SCREEN 1 — Authentication

Create a split-screen login/register experience.

Left side:

* Large Trackify logo
* Short tagline: "Track. Collaborate. Achieve."
* Abstract futuristic illustration of students collaborating on a project
* Purple/cyan glow effects

Right side:

* Login/Register card
* Student / Teacher role switcher
* Email field
* Password field
* Login button
* Register option
* Forgot password
* OTP verification modal with six individual digit inputs

## SCREEN 2 — Teacher Dashboard

Create the primary Teacher Command Center.

Sidebar:

* Trackify logo
* Dashboard
* Manage Classrooms
* Students
* Projects
* Progress
* Audit Logs
* Profile
* Settings

Main area:

* Greeting: "Good Morning, Teacher"
* Summary cards:

  * Total Teams
  * Total Students
  * Active Projects
  * Pending Approvals

Create a prominent section called:

**Manage Classrooms**

Add three clear action cards/buttons:

**+ New Team**
Create a new classroom/project team.

**# Join Team**
Claim an existing team using a Team Code.

**⧉ Duplicate**
Duplicate an existing team with the same student roster.

Below this, display a table:

Columns:

* Team Name
* Team Code
* Members
* Progress
* Status
* Created
* Actions

Actions:

* View
* Duplicate
* Manage

## SCREEN 3 — New Team Modal

Create a polished dark glass modal.

Title:
"Create New Team"

Fields:

* Group Name
* Project Name
* Description

After creation:

* Generate a unique Team Code
* Generate a Student Invite Link

Display:
"Share this link with your students"

Buttons:
Cancel
Create Team

## SCREEN 4 — Join Team Modal

Title:
"Join Existing Team"

Input:
"Enter Team Code"

Show team preview after valid code:

* Team Name
* Student count
* Current leader
* Project

Primary button:
"Claim Team"

Explain that claiming the team links the teacher to the classroom.

## SCREEN 5 — Duplicate Team Modal

Title:
"Duplicate Team"

Show:

* Original Team Name
* Number of Members
* Current Progress

Ask:
"Enter a new group name"

Display information:

"Students will be copied to the new team."

"Tasks and progress will be reset."

New team status:
"Quest Accepted"

Buttons:
Cancel
Duplicate Team

## SCREEN 6 — Team Management

Create a detailed teacher team page.

Header:

* Team Name
* Team Code
* Project
* Progress
* Status

Sections:

### Pending Approval

List students waiting to join.

Each row:

* Avatar
* Student Name
* Email
* Requested date
* Approve
* Reject

### Team Members

Table:

* Student
* Role
* Tasks Completed
* Contribution
* Progress
* Actions

Include a **Team Leader dropdown** allowing the teacher to designate one member as Team Leader.

### Member Contribution

Create:

* Contribution percentage chart
* Tasks completed
* Tasks pending
* Individual progress

## SCREEN 7 — Student Dashboard

Sidebar:

* Dashboard
* Assigned Tasks
* Project Details
* Chat
* Progress
* Achievements
* Rewards

Main area:
"Good Evening, Alex"

Display:

* Overall Progress
* Tasks Completed
* Tasks Remaining
* Upcoming Deadlines

Create a task table:

Columns:

* Task Name
* Status
* Progress
* Priority
* Difficulty
* Upload
* Deadline

Use gamified status badges such as:

* Quest Accepted
* Powering Through
* Near Victory
* Legendary Victory

Add a floating "+" button for adding a task.

## SCREEN 8 — Progress

Create a visual analytics dashboard.

Large circular progress indicator:
**77% Total Progress**

Create charts for:

* Member Contribution
* Daily Progress
* Tasks Completed
* Tasks Remaining

Add a deadline timeline with purple milestone markers.

## SCREEN 9 — Achievements & Rewards

Create an achievements section:

* 30 Days Streak
* Best Designer
* Task Master
* Team Player
* Deadline Crusher

Each achievement should have:

* Icon
* Progress bar
* Completion percentage

Create a Rewards Gallery containing seven futuristic shield badges:

Novice
Amateur
Explorer
Elite
Master
Legend
Demigod

Use glowing coin/reward elements.

## IMPORTANT UX REQUIREMENTS

Keep navigation consistent across all screens.

Use reusable components:

* Sidebar
* Header
* Cards
* Buttons
* Tables
* Modals
* Status badges
* Progress bars
* Avatars
* Charts

Maintain consistent spacing, typography, colors, shadows and border radius.

Design at **1440px desktop resolution** first.

The final result should look like a serious **full-stack EdTech SaaS product** suitable for a hackathon presentation and professional portfolio.

Do not make the interface overly futuristic or cluttered. Prioritize usability, hierarchy and readability over decorative effects.
