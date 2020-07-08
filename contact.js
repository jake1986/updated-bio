function postVisitorInfo() {

    let storedInfo = JSON.parse(localStorage.getItem("visitorList"));

    if (storedInfo !== null) {
        visitorList = storedInfo;
    };

    visitorList.map(visitor => {
        $(".visitor-info").append(`
        <div class="row">
        <div class="email-div col-md-4">${visitor.visitorEmail}</div>
        <div class="name-div col-md-4">${visitor.visitorName}</div>
        <div class="comment-div col-md-4">${visitor.visitorComment}</div>
    </div>
        `)
    })

}

let visitorList = [];

const submitBtn = $("#send-comment");

submitBtn.on("click", function (event) {
    event.preventDefault();

    let email = $("#email-input").val();
    let name = $("#name-input").val();
    let comment = $("#comment-input").val();

    if (!email) {
        return;
    } else if (!name) {
        return;
    } else if (!comment) {
        return;
    };

    let visitorInfo = {
        visitorEmail: email,
        visitorName: name,
        visitorComment: comment
    };

    visitorList.push(visitorInfo);
    localStorage.setItem("visitorList", JSON.stringify(visitorList));

    postVisitorInfo();

})

postVisitorInfo();
