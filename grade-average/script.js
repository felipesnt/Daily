const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";
maxPoints = 120;
passingPoints = 70;
samPoints = 84;
alexPoints = 75; //* updated
jessiePoints = 99;
didAlexPass = !false;
samPointsDisplay = "Sam earned " + samPoints + " points out of " + maxPoints +
  ".";
console.log(samPointsDisplay);
alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
  maxPoints + ".";
console.log(alexPointsDisplay);
jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " +
  maxPoints + ".";
console.log(jessiePointsDisplay);
samPercentage = (samPoints / maxPoints) * 100;
samPercentDisplay = "Sam scored " + samPercentage + "%.";
console.log(samPercentDisplay);
alexPercentage = (alexPoints / maxPoints) * 100;
alexPercentDisplay = "Alex scored " + alexPercentage + "%.";
console.log(alexPercentDisplay);
jessiePercentage = (jessiePoints / maxPoints) * 100;
jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);
samMissedPoints = maxPoints - samPoints;
alexMissedPoints = maxPoints - alexPoints;
jessieMissedPoints = maxPoints - jessiePoints;
samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s).";
console.log(samMissedPointsDisplay);
alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " point(s).";
console.log(alexMissedPointsDisplay);
jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints +
" point(s).";
console.log(jessieMissedPointsDisplay);
classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
classAveragePercent = (classAveragePoints / maxPoints) * 100;
classAvgDisplay = "The class average was " + classAveragePoints +
  " points or " + classAveragePercent.toFixed(2) + "%.";
console.log(classAvgDisplay)
alexPointsUpdated =
  "Alex failed initialy but did extra credit. Their new score is " +
  alexPoints + " out of " + maxPoints + ".";
console.log(alexPointsUpdated);
listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;
listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;
listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;
listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;