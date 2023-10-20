$("#galleryPage").hide();


$("#view-gallery-btn").click(function () {
    $("#frontPage").hide();
    $("#galleryPage").show();
    shiftToGalleryNavBar();
    window.location.href = "#video";
});

$("#pictureHomeBtn").click(function () {
    $("#galleryPage").hide();
    $("#frontPage").show();
    shiftToHomeNavBar();
    window.location.href = "#about";
});


// handle nav-bar

function shiftToGalleryNavBar() {
    var about = $("a[href='#about']");
    about.attr("href", "#video");
    about.text("Video");

    var experience = $("a[href='#experience']");
    experience.attr("href", "#music");
    experience.text("Music");

    var education = $("a[href='#education']");
    education.attr("href", "#animation");
    education.text("Animation");

    var interests = $("a[href='#interests']");
    interests.attr("href", "#service");
    interests.text("Service");

    var skills = $("a[href='#skills']");
    skills.attr("href", "#school");
    skills.text("School Activities");

}

function shiftToHomeNavBar() {
    var video = $("a[href='#video']");
    video.attr("href", "#about");
    video.text("About");

    var music = $("a[href='#music']");
    music.attr("href", "#experience");
    music.text("Experience");

    var animation = $("a[href='#animation']");
    animation.attr("href", "#education");
    animation.text("Education");

    var service = $("a[href='#service']");
    service.attr("href", "#interests");
    service.text("Interests");

    var school = $("a[href='#school']");
    school.attr("href", "#skills");
    school.text("Skills");

}