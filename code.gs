// FILL IN BITS BELOW
sheetURL = 'urlHere';
sheetName = 'Sheet1';


// DO NOT TOUCH BELOW THIS LINE -------

function getSpreadsheetInfo(){
  var ss = SpreadsheetApp.openByUrl(sheetURL);

  var lastColumn = ss.getLastColumn();
  var lastRow = ss.getLastRow();

  var sheet = ss.getSheetByName(sheetName); // or whatever is the name of the sheet 
  var range = sheet.getRange(lastRow,lastColumn); 
  var data = range.getValue();

  //now try to loop throught eh rows the columns and log the info.
  for(var rowCount = 2; rowCount <= lastRow; rowCount++){
    var tableToPrint = [];

    for(var colCount = 1; colCount <= lastColumn; colCount ++){

      var range = sheet.getRange(rowCount,colCount); 
      var data = range.getValue();
      var rangeH = sheet.getRange(1, colCount);
      var dataH = rangeH.getValue();
      //Logger.log(dataH + " - " + data);
      tableToPrint[colCount-1] = [dataH, data];
    }

    //get col 2 and 3 (first and surname) to act as file name
    var rowTwo = sheet.getRange(rowCount,2).getValue();
    var rowThree = sheet.getRange(rowCount, 3).getValue();

    //now create the document
    //Logger.log(rowTwo);
    var sNameFName = rowThree + ", " + rowTwo;
    Logger.log(sNameFName);
    var docTitle = sNameFName + " - health form";
    var doc = DocumentApp.create(docTitle);
    var body = doc.getBody();
    body.insertParagraph(0, sNameFName).setHeading(DocumentApp.ParagraphHeading.TITLE);
    body.insertParagraph(1, "Health Form").setHeading(DocumentApp.ParagraphHeading.SUBTITLE);
    table = body.appendTable(tableToPrint);
    //now setup the footer
    var footer = (doc.getFooter()) ? doc.getFooter() : doc.addFooter(); // from https://gist.github.com/mhawksey/9659908
    footer.appendHorizontalRule();
    //footer.setFontSize(9);
    //footer.setForegroundColor('#999999');
    var style = {};
    style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;
    style[DocumentApp.Attribute.FONT_SIZE] = 9;
    style[DocumentApp.Attribute.FOREGROUND_COLOR] = '#999999';
    footer.setAttributes(style);
    //footer.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
    footer.setText("\n Generated with HealthFormExporter by Thomas Boxall. \n Open source on GitHub (https://github.com/ThomasBoxall/Health-Form-Exporter)");
    //footer.insertParagraph(0, "footer").setHeading(DocumentApp.ParagraphHeading.NORMAL);

  }

}
