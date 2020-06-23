type post = {
    author: string,
    text: string
}

const listPosts: post[] = [
    {
        author: 'Batman',
        text: 'Tenho que Bat-palmas para entrar'
    },
    {
        author: 'Barry Allen',
        text: 'Eu sou o maior velocista da Terra'
    },
    {
        author: 'Curinga',
        text: 'Why so serious'
    }
]


function choiceAuthor(filtrados: post[], autorPost: string): post[]{
    let postsAutor = filtrados.filter((post) =>{
        return post.author === autorPost 
    })
    return postsAutor
}

console.log(choiceAuthor(listPosts, 'Batman'))