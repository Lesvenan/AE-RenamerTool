
{
    function myScript(thisObj){
       function myScript_buildUI(thisObj){
          var dialog = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: true});
 
          dialog.text = "Renaming comp"; 
          dialog.orientation = "column"; 
          dialog.alignChildren = ["left","top"]; 
          dialog.spacing = 10; 
          dialog.margins = 16; 
          
          // PREFIXE GROUP
          // =============
          var grpPrefix = dialog.add("group", undefined, {name: "grpPrefix"}); 
              grpPrefix.orientation = "row"; 
              grpPrefix.alignChildren = ["left","center"]; 
              grpPrefix.spacing = 10; 
              grpPrefix.margins = 0; 
          
          var staticTextPrefix = grpPrefix.add("statictext", undefined, undefined, {name: "staticTextPrefix"}); 
              staticTextPrefix.text = "Prefix"; 
              staticTextPrefix.preferredSize.width = 80; 
          
          var edittextPrefix = grpPrefix.add('edittext {properties: {name: "edittextPrefix"}}'); 
              edittextPrefix.text = "Prefix"; 
              edittextPrefix.preferredSize.width = 200; 
          var ChosenPrefix;   
              edittextPrefix.onChanging = function () {ChosenPrefix = edittextPrefix.text}
          
          var divider2 = dialog.add("panel", undefined, undefined, {name: "divider2"}); 
          divider2.alignment = "fill"; 
          
          // VERSION GROUP
          // =============
          var GrpVersAll = dialog.add("group", undefined, {name: "GrpVersAll"}); 
              GrpVersAll.orientation = "column"; 
          
          var divider2 = dialog.add("panel", undefined, undefined, {name: "divider2"}); 
              divider2.alignment = "fill"; 
          
          // FORMAT GROUP
          // ============
          var grpFormat = dialog.add("group", undefined, {name: "grpFormat"}); 
              grpFormat.orientation = "row"; 
              grpFormat.alignChildren = ["left","center"]; 
              grpFormat.spacing = 10; 
              grpFormat.margins = 0; 
          
          var staticTextFormat = grpFormat.add("statictext", undefined, undefined, {name: "staticTextFormat"}); 
              staticTextFormat.text = "Width x Heigh"; 
              staticTextFormat.preferredSize.width = 80; 
          
          var checkboxFormat = grpFormat.add("checkbox", undefined, undefined, {name: "checkboxFormat"}); 
              checkboxFormat.value = false;
              
          
          
          // SUFFIX GROUP
          // ============
          var grpSufix = dialog.add("group", undefined, {name: "grpSufix"}); 
              grpSufix.orientation = "row"; 
              grpSufix.alignChildren = ["left","center"]; 
              grpSufix.spacing = 10; 
              grpSufix.margins = 0; 
          
          var staticTextSuffix = grpSufix.add("statictext", undefined, undefined, {name: "staticTextSuffix"}); 
              staticTextSuffix.text = "Suffix"; 
              staticTextSuffix.preferredSize.width = 80; 
          
          var edittextSuffix = grpSufix.add('edittext {properties: {name: "edittext2"}}'); 
              edittextSuffix.text = "Suffix"; 
              edittextSuffix.preferredSize.width = 200; 
          var ChosenSuffix;
              edittextSuffix.onChanging = function () {ChosenSuffix = edittextSuffix.text}
          
          
          
          // DIVIDER VERSIONNING
          // ===================
          // var divider1 = dialog.add("panel", undefined, undefined, {name: "divider1"}); 
          // divider1.alignment = "fill"; 
          
          
          
          
          // VERSION 01
          // ==========
          var GrpVers01 = GrpVersAll.add("group", undefined, {name: "GrpVers01"}); 
              GrpVers01.orientation = "row"; 
              GrpVers01.alignChildren = ["left","center"]; 
              GrpVers01.spacing = 10; 
              GrpVers01.margins = 5; 
          
          var Vers01statictext = GrpVers01.add("statictext", undefined, undefined, {name: "Vers01statictext"}); 
              Vers01statictext.text = "Version 01"; 
              Vers01statictext.preferredSize.width = 80; 
          
          var NameVers01 = GrpVers01.add('edittext {properties: {name: "NameVers01"}}'); 
              NameVers01.text = "name 01"; 
              NameVers01.helpTip = "This is the name of the version \nexemple : tacos"; 
              NameVers01.preferredSize.width = 90; 
              var ChosenName01 = "";
              NameVers01.onChanging = function () {ChosenName01 = NameVers01.text}
          
          var ItemVers01 = GrpVers01.add('edittext {properties: {name: "ItemVers01"}}'); 
              ItemVers01.text = "Item 01"; 
              ItemVers01.helpTip = "This is the item defining the version \nexemple : tacos.mov"; 
              ItemVers01.preferredSize.width = 90; 
              var ChosenItem01 = "";
              ItemVers01.onChanging = function () {ChosenItem01 = ItemVers01.text}
          
          
          // VERSION 02
          // ==========
          var GrpVers02 = GrpVersAll.add("group", undefined, {name: "GrpVers02"}); 
              GrpVers02.orientation = "row"; 
              GrpVers02.alignChildren = ["left","center"]; 
              GrpVers02.spacing = 10; 
              GrpVers02.margins = 5; 
          
          var Vers02statictext = GrpVers02.add("statictext", undefined, undefined, {name: "Vers02statictext"}); 
              Vers02statictext.text = "Version 02"; 
              Vers02statictext.preferredSize.width = 80; 
          
          var NameVers02 = GrpVers02.add('edittext {properties: {name: "NameVers02"}}'); 
              NameVers02.text = "name 02"; 
              NameVers02.helpTip = "This is the name of the version \nexemple : pizza"; 
              NameVers02.preferredSize.width = 90; 
              var ChosenName02 = "";;
              NameVers02.onChanging = function () {ChosenName02 = NameVers02.text}
          
          var ItemVers02 = GrpVers02.add('edittext {properties: {name: "ItemVers02"}}'); 
              ItemVers02.text = "Item 02"; 
              ItemVers02.helpTip = "This is the item defining the version \nexemple : pizza.png"; 
              ItemVers02.preferredSize.width = 90; 
              var ChosenItem02 = "";;
              ItemVers02.onChanging = function () {ChosenItem02 = ItemVers02.text}
          
          
          
          // VERSION 03
          // ==========
          var GrpVers03 = GrpVersAll.add("group", undefined, {name: "GrpVers03"}); 
              GrpVers03.orientation = "row"; 
              GrpVers03.alignChildren = ["left","center"]; 
              GrpVers03.spacing = 10; 
              GrpVers03.margins = 5; 
          
          var Vers03statictext = GrpVers03.add("statictext", undefined, undefined, {name: "Vers03statictext"}); 
              Vers03statictext.text = "Version 03"; 
              Vers03statictext.preferredSize.width = 80; 
          
          var NameVers03 = GrpVers03.add('edittext {properties: {name: "NameVers03"}}'); 
              NameVers03.text = "name 03"; 
              NameVers03.preferredSize.width = 90; 
              var ChosenName03 = "";;
              NameVers03.onChanging = function () {ChosenName03 = NameVers03.text}
          
          var ItemVers03 = GrpVers03.add('edittext {properties: {name: "ItemVers03"}}'); 
              ItemVers03.text = "Item 03"; 
              ItemVers03.preferredSize.width = 90; 
              var ChosenItem03 = "";;
              ItemVers03.onChanging = function () {ChosenItem03 = ItemVers03.text}
          
          
          
          // VERSION 04
          // ==========
          var GrpVers04 = GrpVersAll.add("group", undefined, {name: "GrpVers04"}); 
              GrpVers04.orientation = "row"; 
              GrpVers04.alignChildren = ["left","center"]; 
              GrpVers04.spacing = 10; 
              GrpVers04.margins = 5; 
          
          var Vers04statictext = GrpVers04.add("statictext", undefined, undefined, {name: "Vers04statictext"}); 
              Vers04statictext.text = "Version 04"; 
              Vers04statictext.preferredSize.width = 80; 
          
          var NameVers04 = GrpVers04.add('edittext {properties: {name: "NameVers04"}}'); 
              NameVers04.text = "name 04"; 
              NameVers04.preferredSize.width = 90; 
              var ChosenName04 = "";
              NameVers04.onChanging = function () {ChosenName04 = NameVers04.text}
          
          var ItemVers04 = GrpVers04.add('edittext {properties: {name: "ItemVers04"}}'); 
              ItemVers04.text = "Item 04"; 
              ItemVers04.preferredSize.width = 90; 
              var ChosenItem04 = "";
              ItemVers04.onChanging = function () {ChosenItem04 = ItemVers04.text}
          
          
          
          // VERSION 05
          // ==========
          var GrpVers05 = GrpVersAll.add("group", undefined, {name: "GrpVers05"}); 
              GrpVers05.orientation = "row"; 
              GrpVers05.alignChildren = ["left","center"]; 
              GrpVers05.spacing = 10; 
              GrpVers05.margins = 5; 
          
          var Vers05statictext = GrpVers05.add("statictext", undefined, undefined, {name: "Vers05statictext"}); 
              Vers05statictext.text = "Version 05"; 
              Vers05statictext.preferredSize.width = 80; 
          
          var NameVers05 = GrpVers05.add('edittext {properties: {name: "edittext4"}}'); 
              NameVers05.text = "name 05"; 
              NameVers05.preferredSize.width = 90; 
              var ChosenName05 = "";
              NameVers05.onChanging = function () {ChosenName05 = NameVers05.text}
          
          var ItemVers05 = GrpVers05.add('edittext {properties: {name: "ItemVers05"}}'); 
              ItemVers05.text = "Item 05"; 
              ItemVers05.preferredSize.width = 90; 
              var ChosenItem05 = "";
              ItemVers05.onChanging = function () {ChosenItem05 = ItemVers05.text}
          
          
          
              
          
          
          var GrpButton = dialog.add("group", undefined, {name: "GrpButton"}); 
              GrpButton.orientation = "row"; 
              GrpButton.alignement = ["fill","center"];
              GrpButton.alignChildren = ["center","center"]; 
              GrpButton.spacing = 10; 
              GrpButton.margins = 5; 
          
          var Reset = GrpButton.add("button", undefined, undefined, {name: "Reset"}); 
              Reset.text = "RESET"; 
          
          var ButtonGo = GrpButton.add("button", undefined, undefined, {name: "ButtonGo"}); 
              ButtonGo.text = "RENAME"; 
          
          
          
          // >>>>>>>>>>> FUNCTIONS <<<<<<<<<<<<<<< //
          
          Reset.onClick = function () {
              edittextPrefix.text = ""; 
              checkboxFormat.value = false;
              edittextSuffix.text = ""; 
              NameVers01.text = ""; 
              NameVers02.text = ""; 
              NameVers03.text = ""; 
              NameVers04.text = ""; 
              NameVers05.text = ""; 
              ItemVers01.text = ""; 
              ItemVers02.text = ""; 
              ItemVers03.text = ""; 
              ItemVers04.text = ""; 
              ItemVers05.text = ""; 
              ChosenPrefix = ""; 
              ChosenSuffix = ""; 
              ChosenItem01 = ""; 
              ChosenItem02 = ""; 
              ChosenItem03 = ""; 
              ChosenItem04 = ""; 
              ChosenItem05 = ""; 
              a = null;
              b = null;
              c = null;
              d = null;
              e = null;
          }
          
          ButtonGo.onClick = function () {
          
              var everyItem = app.project.items;
              var a, b, c, d, e;
          
              var ChooseName = dialog.grpFormat.checkboxFormat.value;
          
          
          
          
              selectedComps = new Array();
              for (var i = everyItem.length; i >= 1; i--) {
                  eyeTem = everyItem[i];
                  if ((eyeTem instanceof CompItem) && eyeTem.selected) {
                      selectedComps[selectedComps.length] = eyeTem;
                  }
              }
          
              // Trouver l'index de l'item demandé
              for (var i = everyItem.length; i >= 1; i--) {
                  eyeTem = everyItem[i];
                  if (eyeTem.name == ChosenItem01) {
                  var a = i }
                  }
          
              for (var i = everyItem.length; i >= 1; i--) {
                  eyeTem = everyItem[i];
                      if (eyeTem.name == ChosenItem02) {
                      var b = i }
                      }
          
              for (var i = everyItem.length; i >= 1; i--) {
                  eyeTem = everyItem[i];
                      if (eyeTem.name == ChosenItem03) {
                      var c = i }
                      }
              for (var i = everyItem.length; i >= 1; i--) {
                  eyeTem = everyItem[i];
                      if (eyeTem.name == ChosenItem04) {
                      var d = i }
                      }
          
              for (var i = everyItem.length; i >= 1; i--) {
                  eyeTem = everyItem[i];
                      if (eyeTem.name == ChosenItem05) {
                      var e = i }
                      }
          
          
              app.beginUndoGroup("Rename Selected Comps");
              
              // Renaming Classique
              for (var n = (selectedComps.length-1); n >= 0; n--) {
                  item = selectedComps[n];
                  
                  if (ChooseName) {
                      newName = ChosenPrefix + String (item.width) + "x"+ String (item.height) + ChosenSuffix
                  } else {
                      newName = ChosenPrefix + ChosenSuffix
                  }
                  item.name = newName;
              }
          
              // Renaming Version 01     
              Vers01 = new Array ();
              Vers01 = app.project.item(a).usedIn;
          
              for (var n = (Vers01.length-1); n >= 0; n--) {
                  item = Vers01[n];
                  
                  if (item.selected) {
                    if (ChooseName) {
                        newName = ChosenPrefix + ChosenName01 + String (item.width) + "x"+ String (item.height) + ChosenSuffix 
                    } else {
                        newName = ChosenPrefix + ChosenName01 + ChosenSuffix 
                    }
                    item.name = newName;
                }
              }
          
              // Renaming Version 02    
              Vers02 = new Array ();
              Vers02 = app.project.item(b).usedIn;
          
              for (var n = (Vers02.length-1); n >= 0; n--) {
                  item = Vers02[n];
                
                  if (item.selected) {
                    if (ChooseName) {
                        newName = ChosenPrefix + ChosenName02 + String (item.width) + "x"+ String (item.height) + ChosenSuffix
                    } else {
                        newName = ChosenPrefix + ChosenName02 + ChosenSuffix
                    }
                    item.name = newName;
                }
              }
          
              // Renaming Version 03  
              Vers03 = new Array ();
              Vers03 = app.project.item(c).usedIn;
          
              for (var n = (Vers03.length-1); n >= 0; n--) {
                  item = Vers03[n];
                
                  if (item.selected) {
                    if (ChooseName) {
                        newName = ChosenPrefix + ChosenName03 + String (item.width) + "x"+ String (item.height) + ChosenSuffix
                    } else {
                        newName = ChosenPrefix + ChosenName03 + ChosenSuffix
                    }
                    item.name = newName;
                }
              }
          
              // Renaming Version 04
              Vers04 = new Array ();
              Vers04 = app.project.item(d).usedIn;
          
              for (var n = (Vers04.length-1); n >= 0; n--) {
                  item = Vers04[n];
                  if (item.selected) {   
                  if (ChooseName) {
                      newName = ChosenPrefix + ChosenName04 + String (item.width) + "x"+ String (item.height) + ChosenSuffix
                  } else {
                      newName = ChosenPrefix + ChosenName04 + ChosenSuffix
                  }
                  item.name = newName;
                }
              }
          
          
              // Renaming Version 05
              Vers05 = new Array ();
              Vers05 = app.project.item(e).usedIn;
          
              for (var n = (Vers05.length-1); n >= 0; n--) {
                  item = Vers05[n];
                
                  if (item.selected) {
                  if (ChooseName) {
                      newName = ChosenPrefix + ChosenName05 + String (item.width) + "x"+ String (item.height) + ChosenSuffix
                  } else {
                      newName = ChosenPrefix + ChosenName05 + ChosenSuffix
                  }
                  item.name = newName;
                }
              }
              
              a = null;
              b = null;
              c = null;
              d = null;
              e = null;
          
          
          
              app.endUndoGroup();
          
          }
     
          
          dialog.layout.layout(true);
 
          return dialog;
       }
    
    
       var myScriptPal = myScript_buildUI(thisObj);
 
       if (myScriptPal != null && myScriptPal instanceof Window){
          myScriptPal.center();
          myScriptPal.show();
       }
 
    }
    myScript(this);
 }
 
