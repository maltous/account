function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63iaa4x9eTV":
        Script1();
        break;
      case "5mhJrCzgMOa":
        Script2();
        break;
      case "6pp7WTGLqA3":
        Script3();
        break;
      case "6XsDLIsV2zg":
        Script4();
        break;
      case "6I0l3jbd1yW":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script3()
{
  $("#tab-customlink").show();
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

