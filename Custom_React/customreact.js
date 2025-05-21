function customRender(reactElement, properties){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTMLreactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_black'
    },
    Children:'click me to open google'
}

const mainContainer = document.querySelector("#root")