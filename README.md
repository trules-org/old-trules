# trules
Lorum estum umun drafterumem...    
In many respects, the biggest challenge in creating a software solution is in understanding exactly what needs to be created. Business asks Development to build something, but there are often misunderstandings about what it is that Business wants. Business needs tools that help them to be very clear and precise about what they need. Development needs tools to help them understand and clarify what Business needs. Trules attempts to meet these tooling needs.  

Software requirements can be specified using **Event**, **Condition** and **Action** statements. In response to each Event, Conditions are evaluated and Actions are performed.

Something happens...  
In response, something is done...  
How did you know that something happened?  
What should you do in response?  

"Something happens" is an **Event**. Events happen. Events occur at points in time.  
  
"something is done" is an **Action**. Actions start at a point in time and end at a point in time. Actions change things.  

Events and Actions take place in a wider **Context**. The context is made up of the **data** and **objects** that influence decisions. The context is the **state** of "everything that matters".  

"How did you know that something happened?" is **Event Detection**. Detection comes in two flavors - You are either **notified** that an event occured or you **recognize** that an event occured. Notification puts the onus on someone else to send the notification. Recognition puts the onus on you to spot the event - to recognize that the state has changed and the characteristics of the state that indicate the event has occured. Rules that evaluate the state of the context are used to detect the occurence of events.  

"What should you do in response?" is **Event Handling**. Actions are performed when Events are detected. Rules that evaluate the state are used to determine what to do in response to an event. The response to an event is **conditional** - based on the state of the context at the time the event is handled (there may be a lag between the time an event occurs, the time that it is detected, and the time that it is handled".



