# fitCommit

A fitness tracking application to empower gym goers beyond their limits.
https://fitcommit.cyclic.app/

This project was jointly developed by:
Joey (frontend), Bobby (auth pages), Jonathan (backend)

## Features

Gym goers can utilise fitCommit to plan their workout with the Calendar feature, view their most recent exercises and use the progress chart track their maximum weight per exercise over time. Roulette feature provides inspiration for exercises which users can add to their favourites and future workout plan.

### Sign up for an account

- Users can sign up for an account. Password is hashed and authentication is done with JSON Web Token.
  ![Sign up page](public/01_signup.png)
  ![Login page](public/02_login.png)

### Dashboard

- Displays calendar of scheduled workout and workout history
- View or modify scheduled workout

![Dashboard with calendar and workout history](public/03_dashboard.png)
![Schedule a workout](public/04_calendarplan.png)

### Track your progress

- A line chart to monitor progress of strength training

![Track progress](public/05_progress.png)

### Add workout

- Add a workout to calendar or favorites

![Add a workout](public/06_newentry.png)

### Lack of inspiration?

Roulette for workout inspiration and option to add to calendar or favourites

![Roulette](public/07_roulette.png)
![Add to favourites](public/08_favourites.png)
