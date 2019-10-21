var config = {
    apiKey: "AIzaSyDa_XjVIfpTyasZO_36marVPBuz2NX2WAo",
    storageBucket: "gs://tricker-server-test.appspot.com",
};
firebase.initializeApp(config);
// Get a reference to the storage service, which is used to create references in your storage bucket
function uploadimage() {
    console.log("Hello")
    var storage = firebase.storage();
    var file = document.getElementById("files").files[0];
    var storageRef = storage.ref();
    var thisref = storageRef.child(file.name).put(file);
    thisref.on('state_changed', function(snapshot) {
            console.log("file uplaoded succesfully");
        },
        function(error) {},
        function() {
            // Upload completed successfully, now we can get the download URL
            var downloadURL = thisref.snapshot.downloadURL;
            console.log("got url");
            document.getElementById("url").value = downloadURL;
            alert("file uploaded successfully");
        });
}
