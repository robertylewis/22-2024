# CS22 Course Website

This is the source code for Brown's CS22 Course Website.

## Setup Jekyll Dependencies

To make sure that you have the right requirements to run Jekyll, you can click [here](https://jekyllrb.com/docs/) for setup instructions. 
- If you want to set up your local environment then `cd web`, and then run the following command: 
```bundle exec jekyll serve```. Then, your local environment should be running on `http://127.0.0.1:4000/`. 

## Source Code Setup

-   `_data`: This folder contains all of the `yml` data files that contains information on lectures, recitations, assignments, calendars, etc. If you need to change specific information on the course website, see the below section on how to change information on the website.
-   `_includes`: This folder contains all of the html templates that are injected into the main default layout. For instance, this contains the code components for the landing page, the header/footer, the assignments section, the recitation section, etc. If there is a problem with a specific portion of the webpage, then look at the particular HTML component in this folder.
-   `_layouts`: This folder contains the default layout which includes all of the components found in the `_includes` folder. This file shouldn't be changed, as all respective HTMl changes should be made in the `_includes` folder.
-   `assets`: This folder contains the following sections:
    -   `css`: This folder the main CSS styling for the webpage.
    -   `files`: This folder contains the files that are used in the webpage, including PDF links for the homeworks and recitations.
    -   `images`: This folder contains all of the images that are used in the webpage including a subfolder containing all of the staff images.

## How to Change Information on Webpage

Important Note: In order to change information on the main webpage, you shouldn't need to alter code inside of the `_includes` folder. Rather, all of the data should be inputted/changed inside of the `_data` folder in its respective section.

#### Assignments

1. Navigate to `_data/assignments.yml`
2. Find the yml element labeled `homeworks`:
3. Find the specific homework assignment and portion that you want to update:

```
name: name of assignment
link: link to the assignment pdf
template: link to the overleaf template
released: released date
due: due date
solution: link to the solution
```

4. Change the data inside of the `yml` file and then push your changes.

#### Recitations

1. Navigate to `_data/recitations.yml`
2. Find the yml element labeled `recitations`:
3. Find the specific recitation assignment and portion that you want to update:

```
name: name of recitation
link: link to the recitation pdf
released: released date
solution: link to the solution pdf
```

4. Change the data inside of the `yml` file and then push your changes.

#### Lectures

1. Navigate to `_data/lectures.yml`
2. Find the yml element labeled `lectures`:
3. Find the specific lecture number and portion that you want to update:

```
number: lecture number
date: date of the lecture
name: name of lecture
slides: link to lecture slides
video: link to the lecture video
```

4. Change the data inside of the `yml` file and then push your changes.

#### Calendar

1. Navigate to `_data/calendar.yml`
2. Change the yml element `course_calendar_link` if you want to change the link to the google calendar.
3. Chang the yml element `course_calendar_block` if you wnat to change the link to the google calendar block.
4. Change the data inside of the `yml` file and then push your changes.

#### Staff

1. Navigate to `_data/staff.yml`
2. The staff is separated into the following categories:

```
- instructor
- htas
- uta-sta
- staff (rest of the UTA's)
```

3. For all of these roles, we have the following elements:

```
name: name of staff member
pronouns: pronouns of staff member
role: role of staff member
hometown: hometown of staff member
theme: fav theme for respective year
blurb: description of staff member
photo: photo of staff member
```

4. Change the data inside of the `yml` file and then push your changes.
