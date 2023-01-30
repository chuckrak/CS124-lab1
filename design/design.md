# Design Document



###### Initial Design Sketches

We started the design process by sketching out what a potential mobile to do list application would look like. Our preliminary sketches are shown in the design folder.

We paid special attention to the alighnment of the items to make sure that our app is compliant with the design principles taught by Dr. Millburn.

in following with these principles we decided to left align all the items on the desired margin that we picked. In this way, all of our items are aligned on the left hand side, but with enough padding to not make the app feel cluttered.


While designing this app, we used 3 adjectives that we hoped would describe our app.
1. Vibrant
2. Natural
3. Encouraging

After choosing these adjectives, we settled on the sunset background as we thought it would appeal to users and increase productivity (a main goal of this app for users)

We also decided to add the time to the top so that users could easily tell how much time they have left to finish their tasks.

We are the most proud of the clear buttons that we added in order to keep the natural feel from the sunset.

Overall, we made design choices in order to help increase the productivity of our users and create a vibrant, natural, and encouraging feel.

###### Updates to the Design

We had multiple friends breifly test the app to see their preferences on the following: 

1. Whether they prefered editing each task inline or using the modal. 
2. How they felt about being able to click on a task to complete it

It became clear that clicking on a task to toggle its completion was a desired functionality, so we opted for that along with the modal to edit tasks.

When testing to make sure the features worked as desired, we tested the features as we added them. We came up with many edge cases to test for. We tested for when an already completed task was clicked. We wanted this to make the task incomplete, however it wasn't performing this action. So we wrote a new toggleComplete function to handle this functionality. 

We then tested to make sure that the completion still worked as desired when the tasks were initially marked as completed. It did not so we revised how the state was changed.


We also tested the edit functionality. We found that when the field was edited to have no name, the task still remained. This functionality is actually desired since they can now edit the name again. We only want the deletion of items to occur when the trash button is pressed. We also tested the modal to make sure that when the area outside of the popup was pressed, the buttons beneath the area did not still have functionality.

We decided to break the UI into different components in order to better keep track of and develop the app and make reusability easier. We decided to create components for the App, Header, Task, TaskList, TaskAdder, TaskEditor, and ToggleBar. Each of these components represent a vital portion on the application that performs a certain task.

We started with less components, but found that we needed more components in order to get the full funtionality. Our first iterations had only the Task and TaskList components. In this iteration we tried to use buttons and input fields only to create the desired functionality, but we quickly found that it was too hard to get the desired values without passing values through props of components. 

We had the most challenges when creating the edit feature and implementing the modal.
We are the most proud of the edit feature that implements a modal.


##### Lab 3 Design

For lab 3, we did not need to change much in terms of design. However, we still needed to make some design decisions and do user testing. 

For our current design, we needed to add a way to create a way for the user to set and change the priority of a given task. To do this, we decided to add a new button to the task bar that would trigger a pop up for changing the priority.

We started by adding the priority change feature to the same pop up as the task editor, but after talking to a few users while user testing they found that this was confusing. Instead, we decided to add a new separate button on each task to change the priority of the task.

We decided to signify that green meant the task was low priority and that red would signify high priority. We decided this after asking test users what colors they thought were most intuitive to go with high and low priority tasks. We also decided that completed tasks should have no priority since they are already done.


#### Lab 4 Design

Extensive thought went into whether or not we wanted to do a drop-down menu to navigate between tasks, or have a homepage with multiple task lists. We examined how the apps we use in our every day lives went about this process, and one of the things that stood out to us as a feature we really appreciated was the GitHub feature for switching between branches. We decided to model our design after this, as we felt that the relationship between branches and files/directories is very similar to that of task lists and tasks. We then tested the dropdown menu with potential users and asked for their opinions on the dropdown menu. Most users said they liked the design choice and that it was intuitive.


#### Accessibility

We also checked our contrast using the contrast checker. We found that our text to background contrast ratio was between 3-4. This did not meet all the guidelines for all the text sizes. So, we decided to change the background to a darker color while maintaining our design principles of making the app seem natural and encouraging. After changing the background to a new gradient, it met all the color contrast criteria. We also retooled other colors to make sure they met the contrast criteria.

We then checked for text size accessibility. We found that all of our text sizes were large enough to meet the criteria.

We then changed the focus and labels of our objects so that app was accessible without using the mouse. To start, the tasks themelves and the bar to toggle between showing all tasks and only uncompleted tasks. We had to change many of the divs to buttons so that they could easily be tabbed through and navigated without a mouse. We changed this to ensure that our app was accessible for all users.

#### Links to Youtube Videos

https://youtu.be/fSNWB8LQc9o

https://www.youtube.com/watch?v=6VaKvQIbCvA

#### Lab 5

Whenever a user creates a new task list, that user becomes the owner and is added to the list of users that the task is shared with.

For our sharing design rules we decided to use these rules:

We decided that when sharing a task list with another user, that often times it is for something like group projects, so many people may need to be able to complete and add new tasks. So, we decided that all people that the task list is shared with should be able to create, update, and read the tasks in the task list.

If user A shares a list with user B, then they are likely trsuted by the original user. So, we will allow them to share the list with others on the team, such as user C. We decided this after talking to some test users about whaether or not they wanted to be able to share the task lists with other people when they are shared. This is consist with other services such as google docs.

On the other hand, we did not want other shared users to be able to delete entire list since the original owner may want to save that list to look at later. So, only the owner should be able to delete task lists.

For this round, we did user testing with some of our classmates. from their feedback, we decided that once the list is shared that reading, creating, updating, and deleting of tasks should all be allowed. We also found that you shouldn't be able to unshare the list from people if you are not the owner. Otherwise you could unshare a task list with the owner of the task list which could lead to some issues. 

Users also found that the sharing feature was intuitive as it was similar to other applications they have used in the past.

Users also voiced it would be ideal for users to have the ability to mark tasks as completed if they were not the owners of the task list, along with having the ability to delete tasks that had been marked as completed.

To demonstrate how many tasks were in both the All Tasks and Outstanding Tasks lists, we added a subtle number that represented the number of tasks in each list. When asked, the users we tested found this was an intuitive indication of how many tasks were in each list.