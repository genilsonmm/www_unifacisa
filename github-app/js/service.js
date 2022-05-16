
const baseUrlAPI = "https://api.github.com/users"

$(document).ready(() => getData())

function getData(login){

    let url_github = baseUrlAPI

    if(login) {
        $("#user-detail").show()
        $("#users-content").hide()
        url_github += `/${login}`   //https://api.github.com/users/genilsonmm
    } else {
        $("#user-detail").hide()
        $("#users-content").show()
    }

    $.ajax({
        url: url_github,
        type: 'GET',
        beforeSend: function() {
            console.log("Carregando....")
        } 
    })
    .done(function(data) {
        if(login) {
            const user = getUser(data)
            showUser(user)
        } else {
            let users = formatUsers(data)
            showUsers(users)
        }

    })
    .fail(function(msg){
        const error = JSON.parse(msg.responseText)

        if(error.message === "Not Found") {
            $("#myModal").modal("show");
            $("#modal-message").html("Usuário não encontrado")
            $("#user-detail").hide()
            $("#users-content").show()
        }
    })
}

function showUsers(users) {
    for(let i=0; i< users.length; i++){
        const img = `<img src='${users[i].photo}' width=80 alt='${users[i].login}' />`
        const link = `<a href='${users[i].url }' target='_blank'>Acessar</a>` 

        $("#user-data").append("<tr>" + 
                                    "<td>" + users[i].id + "</td>" +
                                    "<td>" + img + "</td>" +
                                    "<td>" + users[i].login + "</td>" +
                                    "<td>" + link + "</td>" +
                                "</tr>")
    }
}

function showUser(user){

    const img = `<img src="${user.photo}" class='card-img-top' alt="${user.login}">`
    const link = `<a href='${user.url}' class='btn btn-primary' target=_blank>Acessar</a>`

    $("#user-detail").append(
        "<div class='card' style='width: 18rem;'>" +     
            img +
            "<div class='card-body'>" +
                "<h5 class='card-title'>"+ user.login +"</h5>" +
                link +
            "</div>" +
        "</div>"
    )
}

function formatUsers(data) {
    let users = []

    for(let i=0; i< data.length; i++)
    {
        users.push(getUser(data[i]))
    }

    return users
}

function getUser(old_user){
    const user = {
            id: old_user.id,
            photo: old_user.avatar_url,
            login: old_user.login,
            url: old_user.html_url
    }
    return user
}

$("button").click(function() {

    const login = $("input").val()
    if(login === ''){
        $("#myModal").modal("show");
        $("#modal-message").html("Digite um usuário válido!")
    } else {
        $("#users-content").hide()
        $("input").val("")
        $("#user-detail").html("")
        getData(login)
    }
})

$("#home").click(function(){
    $("#users-content").show()
    $("#user-detail").hide()
})