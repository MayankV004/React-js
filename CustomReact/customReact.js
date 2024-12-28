function customRender(ReactElement , mainContainer)
{
    // const domElement = document.createElement(ReactElement.type)

    // domElement.innerHTML = ReactElement.children;
    // domElement.setAttribute('href',ReactElement.props.href)
    // domElement.setAttribute('target',ReactElement.props.target)
    // mainContainer.appendChild(domElement)

    const domElement = document.createElement(ReactElement.type)
    for(const prop of ReactElement.props)
    {
        if(prop === 'children') continue;

        domElement.setAttribute(prop , ReactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const ReactElement = {
    type:"a",
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}


const mainContainer = document.getElementById("root")

customRender(ReactElement , mainContainer)
