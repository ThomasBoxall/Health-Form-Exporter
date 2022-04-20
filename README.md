# Health Form Exporter
A program to export the contents of a Google Sheets file to individual Google Documents (for now, see future improvements section).

## Instructions For Use
Before you can use the program, there are a number of things which you need to have in place.
### Prerequisites
* A Google Sheet containing the data which you want to convert, it must be in the following format
  * Column A is the email address
  * Column B is the first name
  * Column C is the surname
  * Any other columns can have any data in them, the spreadsheet can be as wide as you wish.

### Steps for use
*A more detailed guide will be produced when the program is developed further*
1. Create a new Google Apps Script Project using the `new` menu in Google Drive.
2. Copy and paste the code from `code.gs` into the project, replacing anything which is currently in it.
3. Name the project (this is important in a minute)
4. Go back to your Google Sheet, copy the URL to the sheet. Then go back to the code and paste it inbetween the inverted commas, it should go red.
5. If the name of the sheet in the Google sheet (can be seen at the bottom in the left hand corner) is different to `sheet1` then edit that in the code too, this should also be between inverted commas and should be red.
6. Click `save` (this is a floppy disk icon underneath the name of the project).
7. Click `run`.
8. This will present a dialogue box called `Authorization Required`, click `Review Permissions`, then select the Google Account which the program is being run from. Here it will say that Google hasn't verified this app - all this means is that Google hasn't looked through the code to make sure it is up to their standards. There should be a small grey option which say `Advanced` underneath the text, click it. You should be then able to clidk `Go to project name (unsafe)`, click this. It will then give you an option which has `allow` and `cancel` at the bottom, click `allow`. This page is telling you what the application is doing, despite what it is saying, the app will only access the spreadsheet which you entered the URL for in the code and the documents which it creates - it will not access any other documents or spreadsheets. 
9. If you have entered everything correctly, the code should now begin to run - In the 'Execution Log' at the bottom of the screen, you will see a yellow item saying that the execution has started then the surnames, fornames of each of the people in the sheet then another yellow notice saying that the execution has completed. If at any point it encounters errors, you will get presented with a red box wich will tell you what line the error is on.
10. At this point, the program should have generated all the documents, these will be in your Google Drive at the very base folder (working on a fix for this)

## Contact the developer
If you have any questions, concerns or thoughts about the project - feel free to drop me an email to thomas.boxall@woodcraft.org.uk

## Project to-do list
* Fix the location of the generated files
* Add WCF logo to health forms produced
* Fix footer formatting
* Change deployment to be from spreadsheet directly
* Better documentation
* Add Mail Merge options

