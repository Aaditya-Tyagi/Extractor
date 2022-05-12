console.log("connected!!");

var dragDOM=document.querySelector(".drag-drop");
dragDOM.addEventListener("dragover",function(e){
    e.preventDefault();
    dragDOM.classList.remove("drag-drop");
    dragDOM.classList.add("dropping"); 
    console.log("entering!");
});

dragDOM.addEventListener("dragleave",function(){
    dragDOM.classList.remove("dropping");
    dragDOM.classList.add("drag-drop");
     console.log("leaving!")
});
dragDOM.addEventListener("drop",(e)=>{
   e.preventDefault();
   const droppedfile=e.dataTransfer.files;
   const type=droppedfile.type;
   console.log(type);
   }
)
window.addEventListener("dragover",function(e){
    e = e || event;
   // console to clog event for debugging console.log();
    if (e.target.tagName != "INPUT") {
      e.preventDefault();
    }
},false);
window.addEventListener("drop",function(e){
    e = e || event;
    // console to log event for debugging console.log();
    if (e.target.tagName != "INPUT") {  
      e.preventDefault();
    }  
},false);

//butoon selecting files
var clickbutton=document.querySelector("#choose-btn");
clickbutton.addEventListener(onclick,(e)=>{
   var pickedfiles= document.getElementById("fileinput").click();
   const type = pickedfiles.type;
    console.log(type);
})

//gdrive methods
var gdrivefiles=document.querySelector("#gdrive");
gdrivefiles.addEventListener('click',(e)=>{
    e.preventDefault();
    
    var developerKey = 'AIzaSyB77CW0lfJg9V098yZTHtz31Ew0Av_KVWE';
    var clientId = '727290649472-974tvfa13r6vehdoso7tad1ac90dl179.apps.googleusercontent.com'
    var appId = '727290649472';
    var scope = ['https://www.googleapis.com/auth/drive.file'];
 
    var pickerApiLoaded = false;
    var oauthToken;
    loadPicker();
    console.log("checking API call");
    // The Google API Loader script to load the google.picker script.
    function loadPicker() {
     console.log("loadtest")
      gapi.load('auth', {'callback': onAuthApiLoad});
      gapi.load('picker', {'callback': onPickerApiLoad});
      console.log("loadtest2")
    }
 
    function onAuthApiLoad() {
      window.gapi.auth.authorize(
          {
            'client_id': clientId,
            'scope': scope,
            'immediate': false
          },
          handleAuthResult);
    }
 
    function onPickerApiLoad() {
      pickerApiLoaded = true;
      createPicker();
    }
    
    function handleAuthResult(authResult) {
      if (authResult && !authResult.error) {
        console.log(authResult)
        oauthToken = authResult.access_token;
        createPicker();
      }
    }
 
    // Picker object for searching images.
    function createPicker() {
      console.log(pickerApiLoaded)
      console.log(oauthToken)
      if (pickerApiLoaded && oauthToken) {
        console.log("here")
        var view = new google.picker.View(google.picker.ViewId.DOCS);
        view.setMimeTypes("file/exe,file/rar,file/compressed");
        var picker = new google.picker.PickerBuilder()
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .setAppId(appId)
            .setOAuthToken(oauthToken)
            .addView(view)
            .addView(new google.picker.DocsUploadView())
            .setDeveloperKey(developerKey)
            .setCallback(pickerCallback)
            .build();
         picker.setVisible(true);
      }
    }
 
    // A simple callback implementation.
    function pickerCallback(data) {
      if (data.action == google.picker.Action.PICKED) {
        var fileId = data.docs[0].id;
        alert('The user selected: ' + fileId);
      }
    }
    
}
);

//Dropbox File methods
var dropboxfiles=document.querySelector("#dropbox");
dropboxfiles.addEventListener("click",(e)=>{
   e.preventDefault();
   console.log(" picking dropbox files ");
   options={
    success:function(files){
      alert("here is the file link:"+ files[0].link)
    },
    multiselect:true,
    folderselect:true,

  }
   Dropbox.choose(options);
   
   file={

   }
   //	442x3rc3j1wodat
   //	lji16y339ytg5ud
   // access token sl.BHfoUdB21sc5R-O7Af6n-8FVra4a31lLMFMl2nhX37XOj0yiHjPxRedlONMlrGXolqals7wEyujz6EQJ8rcThytgygU1m28pgcqLYPKLyGwcHNCESVSCZZo-mpuIO-k_UrEZtOs
});



//files from link
var linkfiles=document.querySelector("#linkfiles");
linkfiles.addEventListener("click",(e)=>{
  var file=prompt("link to the file:")
})