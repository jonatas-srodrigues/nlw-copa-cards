function footer(text) {
    return `
        <p>${text}</p>       
    `
}

const Footer = (
    footer(
        'Desenvolvido por <strong>Jônatas Rodrigues</strong> na NLW #10 - Copa promovida pela <strong>Rocketseat</strong>.',
    )
)

document.querySelector('#feets').innerHTML = Footer;