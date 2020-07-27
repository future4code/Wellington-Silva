test("Create Post", async () => {
    const post = {
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
    };

    await createPost(post);
    const postFromDb = await getPostById(post.id);

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
    });
});

afterAll(async () => {
    await deletePostById("id do post");
    await destroyConnection();
});

test("Create Post", async () => {
    try {
        const post = {
            id: "id do post",
            title: "Título",
            content: "Conteúdo",
        };

        await createPost(post);
        await createPost(post);
    } catch (err) {
        expect(err).not.toBe(undefined)
    }
});