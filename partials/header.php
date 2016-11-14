<!DOCTYPE html>
<html ng-app lang="en" id="body">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <meta name="viewport" content="width=500, initial-scale=1"> -->


    <meta name="keywords" content="Yosemite Desktop with HTML/CSS/jQueryUI by Omar Habash IOS OSX Mockup mac developer html css jquery javascript">
    <meta name="author" content="Omar Habash">
    <link rel="image_src" href="" / >
    <meta property="og:title" content="Yosemite Desktop with HTML/CSS/jQueryUI">
    <meta property="og:image" content="http://omarhabash.com/mac/assets/img/yosemite-desktop.png">
    <meta property="og:description" content="Awesome translation of the Apple's Yosimite desktop in to web languages">
    <meta name="description" content="Awesome translation of the Apple's Yosimite desktop in to web languages">

    <link rel="image_src" href="http://omarhabash.com/mac/assets/img/yosemite-desktop.png" / >
    <meta property='og:image' content='http://omarhabash.com/mac/assets/img/yosemite-desktop.png'/>
    <link rel="shortcut icon" href="http://www.apple.com/apple-touch-icon.png">

    <!-- fonts -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800,700,600,300' rel='stylesheet' type='text/css'>




    <title>Yosemite Desktop with HTML/CSS/jQueryUI</title>

    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/hover.css" rel="stylesheet">
    <link href="assets/css/buttons-osx.css" rel="stylesheet">
    <link href="assets/css/jquery-ui.min.css" rel="stylesheet">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link href="assets/css/styles.css" rel="stylesheet">





    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>







<!-- Tone1 -->
    <audio id="sound" volume="0.5" preload="auto" controls style="position: absolute; opacity: 0;">
      <source src="assets/sound/Startup1.wav" type="audio/wav">
    </audio>


  <body>

<!-- Head NAV -->
<header id="topMenu" class="vis">
  <nav id="menu">
      <ul>
        <li class="apple">
          <a href="#all">Apple</a>
            <ul class="sublist">
            <li><a href="#about-this-mac" data-rel="show">About This Mac</a></li>
            <li>Software Updates...</li>
            <li>App Store...</li>
            <li class="divider"></li>
            <li>System Preferences...</li>
            <li>Dock
              <span class="arrow"></span>
                <ul class="sublist-menu">
                <li>Turn Hiding Off</li>
                <li>Turn Magnification Off</li>
                <li class="divider"></li>
                <li>Position on Left</li>
                <li>Position on Bottom</li>
                <li>Position on Right</li>
                <li class="divider"></li>
                <li>Dock Preferences...</li>
                </ul>
            </li>
            <li class="divider"></li>
            <li>Recent Items
              <span class="arrow"></span>
                <ul class="sublist-menu">
                <li class="disable">Applications</li>
                <li class="divider"></li>
                <li class="disable">Documents</li>
                <li class="divider"></li>
                <li class="disable">Servers</li>
                <li class="divider"></li>
                <li>Clear Menu</li>
                </ul>
            </li>
            <li class="divider"></li>
            <li>Force Quit...</li>
            <li class="divider"></li>
            <li class="logOut">Sleep</li>
            <li class="logOut">Restart...</li>
            <li class="logOut">Shut Down...</li>
            <li class="divider"></li>
            <li class="logOut">Log Out...</li>
            </ul>
        </li>
        <li class="here">
          <a href="#all">Finder</a>
          <ul class="sublist">
            <li><a href="#finder" data-rel="show">About Finder</a></li>
            <li class="divider"></li>
            <li>Preferences...</li>
            <li class="divider"></li>
            <li>Secure Empty Trash...</li>
            <li class="divider"></li>
            <li>Services
              <span class="arrow"></span>
                <ul class="sublist-menu">
                <li class="disable">No Services Apply</li>
                <li>Services Preferences...</li>
                </ul>
            </li>
            <li class="divider"></li>
            <li>Hide Finder</li>
            <li>Hide Others</li>
            <li class="disable">Show All</li>
            </ul>
        </li>
        <li>
          <a href="#all">File</a>   
            <ul class="sublist">
            <li>New Finder Window</li>
            <li>New Folder</li>
            <li class="disable">New Folder with Selection</li>
            <li>New Smart Folder</li>
            <li>New Burn Folder</li>
            <li class="disable">Open</li>
            <li class="disable">Open With
              <span class="arrow"></span>
            </li>
            <li class="disable">Print</li>
            <li class="disable">Close Window</li>
            <li class="divider"></li>
            <li>Get Info</li>
            <li class="divider"></li>
            <li class="disable">Compress</li>
            <li class="divider"></li>
            <li class="disable">Duplicate</li>
            <li class="disable">Make Alias</li>
            <li class="disable">Quick Look</li>
            <li class="disable">Show Original</li>
            <li class="disable">Add to Sidebar</li>
            <li class="divider"></li>
            <li class="disable">Move to Trash</li>
            <li class="disable">Eject</li>
            <li>Burn "Desktop" to Disc...</li>
            <li class="divider"></li>
            <li>Find</li>
            <li class="divider"></li>
            <li class="disable">Label:</li>
            </ul> 
        </li>
        <li>
          <a href="#all">Edit</a>
          <ul class="sublist">
            <li class="disable">Undo</li>
            <li class="disable">Redo</li>
            <li class="divider"></li>
            <li class="disable">Cut</li>
            <li class="disable">Copy</li>
            <li class="disable">Paste</li>
            <li>Select All</li>
            <li class="divider"></li>
            <li>Show Clipboard</li>
            <li class="divider"></li>
            <li>Special Characters...</li>
            </ul>
        </li>
        <li>
          <a href="#all">View</a>
          <ul class="sublist">
            <li class="disable">as Icons</li>
            <li class="disable">as List</li>
            <li class="disable">as Columns</li>
            <li class="disable">as Cover Flow</li>
            <li class="divider"></li>
            <li>Clean Up</li>
            <li>Clean Up By
              <span class="arrow"></span>
                <ul class="sublist-menu">
                <li>Name</li>
                <li>Kind</li>
                <li>Date Modified</li>
                <li>Date Created</li>
                <li>Size</li>
                <li>Label</li>
                </ul>
            </li>
            <li>Sort By
              <span class="arrow"></span>
                <ul class="sublist-menu">
                <li>None</li>
                <li class="divider"></li>
                <li>Snap to Grid</li>
                <li class="divider"></li>
                <li>Name</li>
                <li>Kind</li>
                <li>Date Last Opened</li>
                <li>Date Added</li>
                <li>Date Modified</li>
                <li>Date Created</li>
                <li>Size</li>
                <li>Label</li>
                </ul>
            </li>
            <li class="divider"></li>
            <li class="disable">Hide Path Bar</li>
            <li class="disable">Hide Status Bar</li>
            <li class="disable">Hide Sidebar</li>
            <li class="divider"></li>
            <li class="disable">Toolbar</li>
            <li class="disable">Customize Toolbar...</li>
            <li class="divider"></li>
            <li>Show View Options...</li>
            </ul>    
        </li>
        <li>
          <a href="#all">Go</a>
          <ul class="sublist">
            <li class="disable">Back</li>
            <li class="disable">Forward</li>
            <li>Enclosing Folder</li>
            <li class="divider"></li>
            <li>All My Files</li>
            <li>Documents</li>
            <li>Desktop</li>
            <li>Downloads</li>
            <li>Home</li>
            <li>Computer</li>
            <li>AirDrop</li>
            <li>Network</li>
            <li>Applications</li>
            <li>Utilities</li>
            <li class="divider"></li>
            <li>Recent Folders
              <span class="arrow"></span>
                <ul class="sublist-menu">
                <li>2012-01-10</li>
                <li>Archieves</li>
                <li>buildFiles</li>
                <li>MyProjects</li>
                <li>XCode_iPhone</li>
                <li class="divider"></li>
                <li>Clear Menu</li>
                </ul>
            </li>
            <li class="divider"></li>
            <li>Go to Folder...</li>
            <li>Connect to Server...</li>
            </ul>    
        </li>
        <li>
          <a href="#all">Window</a>
          <ul class="sublist">
            <li class="disable">Minimize</li>
            <li class="disable">Zoom</li>
            <li class="disable">Cycle Through Windows</li>
            <li class="divider"></li>
            <li>Bring All to Front</li>
            </ul>   
        </li>
        <li><a href="#all">Help</a></li>
        </ul>
  </nav>
    <nav id="menu-dx">
      <ul>
        <li class="wireless">
          <a href="#all">Wireless</a>
        </li>
        <li>
          <p style="padding-top: 2px;" class="pull-left" id="demo"> </p>
        </li>
        <li class="time">
          <p style="padding-top: 2px;" class="pull-left clock"></p>
        </li>
        <li class="username">
          <a href="#all">{{username}}</a>
        </li>
    </ul>
    </nav>
</header>
<!-- Head NAV -->








<!-- yosimite like doc -->
<div class="osx-dock animated bounceInUp">
  <div class="row dock-styles">
      <ul class="dock-right">
          <li class="dock-icon" id="folder"><a href="#"><img src="assets/img/folder.png" height="49" width="64" alt=""></a></li>
          <li class="dock-icon"><a class="skillsStart" href="javascript:void(0)"><img src="assets/img/trash.png" height="256" width="256" alt=""></a></li>
      </ul>
      <ul class="dock-left">
          <li class="dock-icon"><a class="finderStart" title="I like this" href="javascript:void(0)"><img src="http://www.simon-li.com/projects/dock/images/Finder.png" alt=""></a></li>
          <li class="dock-icon"><a class="tabs1" title="Portfolio" href="javascript:void(0)"><img src="http://www.simon-li.com/projects/dock/images/Dashboard.png" alt=""></a></li>
          <li class="dock-icon"><a class="finderStart" href="javascript:void(0)"><img src="http://www.simon-li.com/projects/dock/images/Mail.png" alt=""></a></li>
          <li class="dock-icon"><a class="one1" href="javascript:void(0)"><img src="http://i.kinja-img.com/gawker-media/image/upload/t_original/p7w1mky9zifvsl1ww8py.png" alt=""></a></li>
          <li class="dock-icon"><a class="skillsStart" title="Skills & Tools" href="javascript:void(0)"><img src="http://fc07.deviantart.net/fs71/f/2014/327/4/7/alternative_app_store_yosemite_icon_by_djtech42-d87hc6l.png" alt=""></a></li>
          <li class="dock-icon"><a class="skillsStart" title="Comment" href="javascript:void(0)"><img src="http://westernlithographics.com/wp-content/uploads/2015/01/comment-icon.png" alt=""></a></li>
      </ul>
  </div>
</div>
<!-- // yosimite like doc -->


 





