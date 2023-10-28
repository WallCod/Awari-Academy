const posts = [
    {
        title: 'Bitcoin',
        content: 'O Bitcoin é a primeira criptomoeda do mundo, lançada em 2009 por uma pessoa ou grupo de pessoas desconhecido que usava o pseudônimo Satoshi Nakamoto. É uma moeda digital descentralizada, o que significa que não é controlada por nenhum governo ou entidade centralizada.'
    },
    {
        title: 'Ethereum',
        content: 'Ethereum é uma plataforma de blockchain de código aberto inventada por Vitalik Buterin em 2015. É muito mais do que uma criptomoeda, é uma plataforma para aplicações descentralizadas (DApps).'
    },
    {
        title: 'Solana',
        content: 'Solana é uma plataforma de blockchain de código aberto que foi lançada em 2020 pela Solana Foundation, com sede em Genebra, Suíça.'
    }

];

const postElement = document.getElementById('posts');

for (var i = 0; i < posts.length; i++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');

    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);

    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    postElement.appendChild(article);
}


