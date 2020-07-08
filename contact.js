let emailList = [];

const sendAddressBtn = $("#send-address")

sendAddressBtn.on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    let emailAddress = $("#email-input").val();

    if (emailAddress === "") {
        return;
    }

    emailList.push(emailAddress);
    localStorage.setItem("emailList", JSON.stringify(emailList));
})

let nameList = [];

const nameInputBtn = $("#send-name");

nameInputBtn.on("click", function (event) {
    event.preventDefault();

    let visitorName = $("#name-input").val();

    if (visitorName === "") {
        return;
    };

    nameList.push(visitorName);
    localStorage.setItem("nameList", JSON.stringify(nameList));

})

let commentList = [];

const sendCommentBtn = $("#send-comment");

sendCommentBtn.on("click", function (event) {
    event.preventDefault();

    let comment = $("#comment-input").val();

    if (comment === "") {
        return;
    };

    commentList.push(comment);
    localStorage.setItem("commentList", JSON.stringify(commentList));
})