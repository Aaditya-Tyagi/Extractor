options = {
    success: function(files) {
      files.forEach(function(file) {
        add_img_to_list(file);
      });
    },
    cancel: function() {
      //optional
    },
    linkType: "preview", // "preview" or "direct"
    multiselect: false, // true or false
    extensions: ['.zip', '.rar'],
};
 
var button = Dropbox.createChooseButton(options);
// document.getElementById("dropbox-container").appendChild(button);
 $('#dropbox').click(function(){
     button.click();
 })
async function add_img_to_list(file) {
    // const localUrlToFile = URL.createObjectURL(file.link);
  let filed = await fetch(file.link,{mode: 'no-cors'}).then((res)=>{return res.blob()})
  console.log(filed)
  selectFile(filed)
}